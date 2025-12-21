import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-4NPHOBJN.js";
import {
  Component,
  Input,
  __decorate,
  init_core,
  init_tslib_es6,
  input
} from "./chunk-PPYATBK3.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/features/auth/components/register-presenter/register-presenter.component.html
var register_presenter_component_default;
var init_register_presenter_component = __esm({
  "angular:jit:template:src/app/features/auth/components/register-presenter/register-presenter.component.html"() {
    register_presenter_component_default = `<div class="form-container max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mb-2">
    <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
  
        <div class="form-field mb-1">
            <label for="first_name">First name:</label>
            <input
            type="text"
            id="first_name"
            formControlName="first_name"
            class="mt-2 w-full text-center px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>

        <div class="form-field mb-1">
            <label for="last_name">Last name:</label>
            <input
            type="text"
            id="last_name"
            formControlName="last_name"
            class="mt-2 w-full text-center px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>

        <div class="form-field mb-1">
            <label for="email">Email:</label>
            <input
            type="email"
            id="email"
            formControlName="email"
            class="mt-2 w-full text-center px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            [class.border-red-500]="registerForm.get('email')?.touched && registerForm.get('email')?.invalid"
            />
        </div>
    
        <div class="form-field mb-1">
            <label for="password">Password:</label>
            <input
            type="password"
            id="password"
            formControlName="password"
            class="mt-2 w-full text-center px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
      
  
      <button type="submit"
      class="w-full mt-2 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-150"
      >
        Register
      </button>
    </form>
  </div>
  `;
  }
});

// src/app/features/auth/components/register-presenter/register-presenter.component.ts
var RegisterPresenterComponent;
var init_register_presenter_component2 = __esm({
  "src/app/features/auth/components/register-presenter/register-presenter.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_register_presenter_component();
    init_core();
    init_forms();
    init_core();
    RegisterPresenterComponent = class RegisterPresenterComponent2 {
      submitFunction = input(() => {
      });
      registerForm = new FormGroup({
        email: new FormControl("", {
          validators: [Validators.required, Validators.email],
          nonNullable: true
        }),
        password: new FormControl("", {
          validators: Validators.required,
          nonNullable: true
        }),
        first_name: new FormControl("", {
          validators: Validators.required,
          nonNullable: true
        }),
        last_name: new FormControl("", {
          validators: Validators.required,
          nonNullable: true
        })
      });
      onSubmit() {
        if (this.registerForm.invalid)
          return;
        const newUser = this.registerForm.value;
        this.submitFunction()(newUser);
      }
      static propDecorators = {
        submitFunction: [{ type: Input, args: [{ isSignal: true, alias: "submitFunction", required: false, transform: void 0 }] }]
      };
    };
    RegisterPresenterComponent = __decorate([
      Component({
        selector: "app-register-presenter",
        imports: [ReactiveFormsModule],
        template: register_presenter_component_default
      })
    ], RegisterPresenterComponent);
  }
});

export {
  RegisterPresenterComponent,
  init_register_presenter_component2 as init_register_presenter_component
};
//# sourceMappingURL=chunk-6SJFWT5J.js.map
