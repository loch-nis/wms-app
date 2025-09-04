import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TokenService {
	setToken(token: string)
	{
		localStorage.setItem('token', token);
	}

	getToken(): string | null
	{
		return localStorage.getItem('token');
	}

	removeToken()
	{
		localStorage.removeItem('token');
	}

	setTokenExpiry(expiry: number)
	{
		localStorage.setItem('token_expiry', expiry.toString());
	}

	getTokenExpiry(): number | null
	{
		const expiry = localStorage.getItem('token_expiry');
		if (expiry)
			return +expiry;
		else
			return null;
	}

	removeTokenExpiry()
	{
		localStorage.removeItem('token_expiry');
	}

	removeTokenAndTokenExpiry()
	{
		this.removeToken();
		this.removeTokenExpiry();
	}

	hasToken(): boolean
	{
		return this.getToken() !== null;
	}

}
