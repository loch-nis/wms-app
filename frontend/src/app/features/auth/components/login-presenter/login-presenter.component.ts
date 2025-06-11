import { Component, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginRequest } from '../../models/auth.model';

@Component({
  selector: 'app-login-presenter',
  imports: [ReactiveFormsModule],
  templateUrl: './login-presenter.component.html',
})
export class LoginPresenterComponent {
	readonly submitFunction = input<(credentials: LoginRequest) => void>(() => {});

	loginForm: FormGroup = new FormGroup({
		email: new FormControl('', {
			validators: Validators.required,
			nonNullable: true,
		}),
		password: new FormControl('', {
			validators: Validators.required,
			nonNullable: true,
		}),
	});

	// could add ui for showing a wrong password error here - using an input signal from authContainer

	onSubmit()
	{
		if (this.loginForm.invalid) return;

		const credentials: LoginRequest = this.loginForm.value;

		this.submitFunction()(credentials);
	}
}
