import { Component, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterRequest } from '../../models/auth.model';

@Component({
	selector: 'app-register-presenter',
	imports: [ReactiveFormsModule],
	templateUrl: './register-presenter.component.html',
})
export class RegisterPresenterComponent {
	readonly submitFunction = input<(
		newUser: RegisterRequest
	) => void>(() => {});

	registerForm: FormGroup = new FormGroup({
			email: new FormControl('', {
			validators: [Validators.required, Validators.email],
			nonNullable: true,
		}),
		password: new FormControl('', {
			validators: Validators.required,
			nonNullable: true,
		}),
		firstName: new FormControl('', {
			validators: Validators.required,
			nonNullable: true,
		}),
		lastName: new FormControl('', {
			validators: Validators.required,
			nonNullable: true,
		}),
	})



	onSubmit()
	{
		if (this.registerForm.invalid) return;
		
		const newUser: RegisterRequest = this.registerForm.value;

		this.submitFunction()(newUser);
	}

}
