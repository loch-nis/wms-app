export interface AuthUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

export interface TokenResponse {
  access_token: string;
  expires_in: number;
}

export type AuthMode = 'login' | 'register' | 'logout';
