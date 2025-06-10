import { Injectable, signal, computed, inject, effect } from '@angular/core';
import { AuthUser } from './models/auth-user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { tap, throwError } from 'rxjs';
import { TokenService } from '../../core/services/token.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private readonly _authUser = signal<AuthUser | undefined>(undefined);
	private readonly _tokenExpiry = signal<number | undefined>(undefined);

	readonly authUser = this._authUser.asReadonly();
	readonly isLoggedIn = computed(() => this._authUser() !== undefined);
	readonly tokenExpiry = this._tokenExpiry.asReadonly();

	private readonly http = inject(HttpClient);
	private readonly tokenService = inject(TokenService);

	login(email: string, password: string) {
		return this.http.post<{access_token: string; expires_in: number, user: AuthUser}>(
			`${environment.apiUrl}/auth/login`, { email, password }
		).pipe(
			tap(response => {
				this.tokenService.setToken(response.access_token);
				const tokenExpiry = this.calculateTokenExpiry(response.expires_in);
				this.tokenService.setTokenExpiry(tokenExpiry);
				this._tokenExpiry.set(tokenExpiry);
				this.loadUserFromToken();
			})
		);
	}

	register(email: string, password: string, firstName: string, lastName: string) {
		return this.http.post<{}>(
			`${environment.apiUrl}/auth/register`, { email, password, firstName, lastName }
		);
	}

	logout() {
		this._authUser.set(undefined);
		return this.http.post(`${environment.apiUrl}/auth/logout`, {}).pipe(
			tap(() => {
				this.tokenService.removeToken();
				this.tokenService.removeTokenExpiry();
			})
		);
	}

	loadUserFromToken() {
		if (this.isLoggedIn())
			return;

		const token = this.tokenService.getToken();
		if (!token) 
			return;

		this.http.get<AuthUser>(`${environment.apiUrl}/auth/me`).subscribe({
			next: user => this._authUser.set(user),
			error: () => console.warn("Error in the loadUser function"),
		});
	}



	constructor() {
		const storedTokenExpiry = this.tokenService.getTokenExpiry();
		if (storedTokenExpiry)
			this._tokenExpiry.set(storedTokenExpiry);
	}



	tokenRefreshEffect = effect(() => {
		const expiryTimestamp = this._tokenExpiry();
		if (expiryTimestamp === undefined) 
			return;

		const isExpired = Date.now() >= expiryTimestamp;
		if (isExpired) 
		{
			this.logout();
			return;
		}

		const oneMinuteBuffer = 60_000;
		const timeout = expiryTimestamp - Date.now() - oneMinuteBuffer;

		const id = setTimeout(() => {
			this.refreshToken().subscribe({
				next: response => {
					this.tokenService.setToken(response.access_token);
					const tokenExpiry = this.calculateTokenExpiry(response.expires_in);
					this.tokenService.setTokenExpiry(tokenExpiry);
					this._tokenExpiry.set(tokenExpiry);
				},
				error: () => {
					console.warn("Token refresh failed unexpectedly");
					this.logout();
				},
			}
			);
		}, timeout);

		return () => clearTimeout(id);
	});


	refreshToken() {	
		const token = this.tokenService.getToken();

		if (!token)
			return throwError(() => new Error("Cannot refresh token: No token present"));

		return this.http.post<{access_token: string; expires_in: number}>
			(`${environment.apiUrl}/auth/refresh`, {});
	}



	private calculateTokenExpiry(
		expiresIn: number, 
		currentTimeInSeconds: number = Date.now()
	): number {
		return currentTimeInSeconds + expiresIn * 1000;
	}
}
