export interface AuthUser {
    id: number,
    email: string,
    firstName: string,
    lastName: string,
}

export interface LoginRequest {
    email: string, 
    password: string,
}

export interface RegisterRequest {
    email: string, 
    password: string,
    firstName: string,
    lastName: string,
}


export interface AuthTokenResponse {
    access_token: string,
    expires_in: number, 
}

export type LoginResponse = AuthTokenResponse;
export type RefreshTokenResponse = AuthTokenResponse;


export type AuthMode = 'login' | 'register' | 'logout';