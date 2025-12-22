import { Component, inject, input, signal } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
  FormGroupDirective,
  FormControl,
  NgForm,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { map, Observable, timer } from 'rxjs';
import { RegisterRequest } from '../../models/auth.model';
import { ErrorStateMatcher } from '@angular/material/core';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-register-presenter',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    AsyncPipe,
  ],
  templateUrl: './register-presenter.component.html',
})
export class RegisterPresenterComponent {
  readonly submitFunction = input<(newUser: RegisterRequest) => void>(() => {});
  private formBuilder = inject(FormBuilder);

  registerForm = this.formBuilder.nonNullable.group({
    first_name: [
      '',
      [Validators.required, Validators.minLength(3)],
      this.doNotStealMyFirstNameAsyncValidator,
    ],
    last_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    passwords: this.formBuilder.nonNullable.group(
      {
        password: ['', [Validators.required, Validators.minLength(3)]],
        password_confirmation: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator },
    ),
  });

  // todo a small dynamic form?! interests?!

  passwordMatchValidator(formGroup: AbstractControl): ValidationErrors | null {
    const password = formGroup.get('password')?.value;
    const password_confirmation = formGroup.get('password_confirmation')?.value;

    const doBothPasswordAndPasswordConfirmationHaveValues =
      password && password_confirmation;

    if (!doBothPasswordAndPasswordConfirmationHaveValues) return null;

    return password === password_confirmation
      ? null
      : { passwordMismatch: true };
  }

  // todo showcase async operator? On the value or status event stream? DONE:
  isValidating$ = this.registerForm.statusChanges.pipe(
    map((status) => status === 'PENDING'), // todo self-quiz: how does this work?
  );

  doNotStealMyFirstNameAsyncValidator(
    control: AbstractControl,
  ): Observable<ValidationErrors | null> {
    return timer(1000).pipe(
      map(() => {
        return control.value === 'Nis' ? { doNotStealMyFirstName: true } : null;
      }),
    );
    // todo self-quiz: when does this fire in relation to the sync validators?
  }

  onSubmit() {
    if (this.registerForm.invalid) return;
    if (this.registerForm.pending) return;

    const { passwords, ...rest } = this.registerForm.getRawValue();

    const testRequest: RegisterRequest = {
      ...rest,
      password: passwords.password,
      password_confirmation: passwords.password_confirmation,
    };

    this.submitFunction()(testRequest);
  }

  // below is just to circumvent Angular Materials default error handling
  crossFieldErrorMatcher = new CrossFieldErrorMatcher();
}

export class CrossFieldErrorMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null,
  ): boolean {
    return !!(control?.parent?.invalid && control?.touched);
  }
}
