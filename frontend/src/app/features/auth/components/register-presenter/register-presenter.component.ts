import { Component, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
	selector: 'app-register-presenter',
	imports: [ReactiveFormsModule],
	templateUrl: './register-presenter.component.html',
})
export class RegisterPresenterComponent {
	readonly submitFunction = input<(
		email: string, 
		password: string, 
		firstName: string, 
		lastName: string
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
		
		const { email, password, firstName, lastName } = this.registerForm.value;

		this.submitFunction()(
			email as string, 
			password as string, 
			firstName as string, 
			lastName as string
		);
	}

}
