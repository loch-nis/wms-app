import { Component, input, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-presenter',
  imports: [ReactiveFormsModule],
  templateUrl: './login-presenter.component.html',
})
export class LoginPresenterComponent {
  readonly submitFunction = input<(email: string, password: string) => void>(() => {});


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

  // todo add the viewmodel stuff? Or do that in the container instead perhaps??!! - use computed()

  onSubmit()
  {
    if (this.loginForm.invalid) return;
    
    const { email, password } = this.loginForm.value;

    this.submitFunction()(email as string, password as string);
    
  }
}
