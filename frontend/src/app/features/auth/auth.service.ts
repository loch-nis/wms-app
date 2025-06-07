import { Injectable, signal, computed, inject } from '@angular/core';
import { AuthUser } from './models/auth-user.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _authUser = signal<AuthUser | undefined>(undefined);
  private readonly _loading = signal<boolean>(false);
  private readonly _loginError = signal<boolean>(false);

  readonly authUser = this._authUser.asReadonly();
  readonly isLoggedIn = computed(() => this._authUser() !== undefined);
  readonly isLoading = this._loading.asReadonly();
  readonly hasLoginError = this._loginError.asReadonly();

  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  // todo perhaps: "Return Observable instead of subscribing in service" - this fn is not SRP
  login(email: string, password: string) 
  {
    this._loading.set(true);
    this._loginError.set(false);

    this.http.post<{token: string; user: AuthUser}>
    (`${environment.apiUrl}/login`, { email, password }).subscribe({
      next: response => {
        localStorage.setItem('token', response.token);
        this._authUser.set(response.user); 
        this.router.navigateByUrl('ware-management');     
      },
      error: () => {
        this._loginError.set(true);
      },
      complete: () => {
        this._loading.set(false);
      },
    })
  }

  // todo:
  register(email: string, password: string, firstName: string, lastName: string)
  {
    this._loading.set(true);
    this._loginError.set(false);

    this.http.post<{}>
    (`${environment.apiUrl}/register`, { email, password, firstName, lastName })
      .subscribe({
      next: () => {
        this.router.navigateByUrl('login');     
      },
      error: () => {
        this._loginError.set(true);
      },
      complete: () => {
        this._loading.set(false);
      },
    })
  }

  logout() 
  {
    localStorage.removeItem('token');
    this._authUser.set(undefined);
    this.router.navigateByUrl('auth/login');
  }

  loadUser()
  {
    // what even is this?? find out
  }

}
