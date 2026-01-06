import { Component, inject, input, output, signal } from '@angular/core';
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
  save = output<RegisterRequest>();
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
    interests: this.formBuilder.array<string>([]),
  });

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

  isValidating$ = this.registerForm.statusChanges.pipe(
    map((status) => status === 'PENDING'),
  );

  doNotStealMyFirstNameAsyncValidator(
    formControl: AbstractControl,
  ): Observable<ValidationErrors | null> {
    return timer(1000).pipe(
      map(() => {
        return formControl.value === 'Nis'
          ? { doNotStealMyFirstName: true }
          : null;
      }),
    );
  }

  get interests() {
    return this.registerForm.controls.interests;
  }

  addInterest() {
    this.interests.push(
      this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    );
  }

  removeInterest(index: number) {
    this.interests.removeAt(index);
  }

  onSubmit() {
    if (this.registerForm.invalid) return;
    if (this.registerForm.pending) return;

    const { passwords, interests, ...rest } = this.registerForm.getRawValue();

    const newUser: RegisterRequest = {
      ...rest,
      password: passwords.password,
      password_confirmation: passwords.password_confirmation,
    };

    this.save.emit(newUser);
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
