import {
  Injectable,
  signal,
  computed,
  inject,
  effect,
  PLATFORM_ID,
} from '@angular/core';
import { TokenResponse, AuthUser } from './models/auth.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { EMPTY, filter, switchMap, tap, throwError, timer } from 'rxjs';
import { TokenService } from '../../core/services/token.service';
import { LoginRequest, RegisterRequest } from './models/auth.model';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _authUser = signal<AuthUser | null | undefined>(undefined);
  private readonly _tokenExpiry = signal<number | undefined>(undefined);

  readonly authUser = this._authUser.asReadonly();
  readonly isLoggedIn = computed(() => !!this._authUser());
  readonly tokenExpiry = this._tokenExpiry.asReadonly();

  private readonly http = inject(HttpClient);
  private readonly tokenService = inject(TokenService);

  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      this._authUser.set(null);
      return;
    }

    const storedTokenExpiry = this.tokenService.getTokenExpiry();
    if (storedTokenExpiry) this._tokenExpiry.set(storedTokenExpiry);
  }

  login(request: LoginRequest) {
    return this.http
      .post<TokenResponse>(`${environment.apiUrl}/auth/login`, request)
      .pipe(
        tap((response) => {
          this.setTokenAndTokenExpiry(response);
          this.loadUserFromToken();
        }),
      );
  }

  private setTokenAndTokenExpiry(response: TokenResponse) {
    this.tokenService.setToken(response.access_token);
    const tokenExpiry = this.calculateTokenExpiry(response.expires_in);
    this.tokenService.setTokenExpiry(tokenExpiry);
    this._tokenExpiry.set(tokenExpiry);
  }

  private calculateTokenExpiry(
    expiresIn: number,
    currentTimeInMs: number = Date.now(),
  ): number {
    return currentTimeInMs + expiresIn * 1000;
  }

  loadUserFromToken() {
    if (this.isLoggedIn()) return;

    if (!this.tokenService.hasToken()) {
      this._authUser.set(null);
      return;
    }

    const tokenExpiry = this.tokenService.getTokenExpiry();
    if (!tokenExpiry) {
      this._authUser.set(null);
      return;
    }

    if (this.isTokenExpired(tokenExpiry)) {
      this._authUser.set(null);
      return;
    }

    this.http.get<AuthUser>(`${environment.apiUrl}/auth/me`).subscribe({
      next: (user) => this._authUser.set(user),
      error: () => this._authUser.set(null),
    });
  }

  register(request: RegisterRequest) {
    return this.http.post<{}>(`${environment.apiUrl}/auth/register`, request);
  }

  logout() {
    this._authUser.set(null);
    return this.http
      .post(`${environment.apiUrl}/auth/logout`, {})
      .pipe(tap(() => this.tokenService.removeTokenAndTokenExpiry()));
  }

  private readonly _tokenRefreshSubscription = toObservable(this._tokenExpiry)
    .pipe(
      filter((expiryTimestamp): expiryTimestamp is number => !!expiryTimestamp),
      switchMap((expiryTimestamp) => {
        if (this.isTokenExpired(expiryTimestamp)) {
          this.handleExpiredToken();
          return EMPTY;
        }
        const refreshDelay = this.calculateRefreshDelay(expiryTimestamp);
        return timer(refreshDelay);
      }),
      switchMap(() => this.refreshToken()),
      takeUntilDestroyed(),
    )
    .subscribe({
      next: (tokenResponse) => this.setTokenAndTokenExpiry(tokenResponse),
      error: () => this.handleExpiredToken(),
    });

  private isTokenExpired(expiryTimestamp: number): boolean {
    return Date.now() >= expiryTimestamp;
  }

  private handleExpiredToken() {
    console.warn('Token expired, logging out.');
    this.logout();
  }

  private calculateRefreshDelay(expiryTimestamp: number): number {
    const oneMinuteBuffer = 60_000;
    return expiryTimestamp - Date.now() - oneMinuteBuffer;
  }

  refreshToken() {
    if (!this.tokenService.hasToken())
      return throwError(
        () => new Error('Cannot refresh token: No token present'),
      );

    return this.http.post<TokenResponse>(
      `${environment.apiUrl}/auth/refresh`,
      {},
    );
  }
}
