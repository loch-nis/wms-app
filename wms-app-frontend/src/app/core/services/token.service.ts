import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private platformId = inject(PLATFORM_ID);

  setToken(token: string) {
    /*    if (!isPlatformBrowser(this.platformId)) {
      return;
    } */

    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }

    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  setTokenExpiry(expiry: number) {
    localStorage.setItem('token_expiry', expiry.toString());
  }

  getTokenExpiry(): number | null {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }

    const expiry = localStorage.getItem('token_expiry');
    if (expiry) return +expiry;
    else return null;
  }

  removeTokenExpiry() {
    localStorage.removeItem('token_expiry');
  }

  removeTokenAndTokenExpiry() {
    this.removeToken();
    this.removeTokenExpiry();
  }

  hasToken(): boolean {
    return this.getToken() !== null;
  }
}
