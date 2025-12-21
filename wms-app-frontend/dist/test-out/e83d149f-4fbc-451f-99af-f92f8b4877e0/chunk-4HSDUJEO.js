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

// angular:jit:template:src/app/features/auth/components/login-presenter/login-presenter.component.html
var login_presenter_component_default;
var init_login_presenter_component = __esm({
  "angular:jit:template:src/app/features/auth/components/login-presenter/login-presenter.component.html"() {
    login_presenter_component_default = '<div\n  class="form-container max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mb-2"\n>\n  <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">\n    <div class="form-field mb-1">\n      <label for="email">Email:</label>\n      <input\n        type="email"\n        id="email"\n        formControlName="email"\n        class="mt-2 w-full text-center px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"\n      />\n    </div>\n\n    <div class="form-field mb-1">\n      <label for="password">Password:</label>\n      <input\n        type="password"\n        id="password"\n        formControlName="password"\n        class="mt-2 w-full text-center px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"\n      />\n    </div>\n\n    <button\n      type="submit"\n      class="w-full mt-2 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-150"\n    >\n      Login\n    </button>\n  </form>\n</div>\n';
  }
});

// src/app/features/auth/components/login-presenter/login-presenter.component.ts
var LoginPresenterComponent;
var init_login_presenter_component2 = __esm({
  "src/app/features/auth/components/login-presenter/login-presenter.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_login_presenter_component();
    init_core();
    init_forms();
    init_core();
    LoginPresenterComponent = class LoginPresenterComponent2 {
      submitFunction = input(() => {
      });
      loginForm = new FormGroup({
        email: new FormControl("", {
          validators: Validators.required,
          nonNullable: true
        }),
        password: new FormControl("", {
          validators: Validators.required,
          nonNullable: true
        })
      });
      // could add ui for showing a wrong password error here - using an input signal from authContainer
      onSubmit() {
        if (this.loginForm.invalid)
          return;
        const credentials = this.loginForm.value;
        this.submitFunction()(credentials);
      }
      static propDecorators = {
        submitFunction: [{ type: Input, args: [{ isSignal: true, alias: "submitFunction", required: false, transform: void 0 }] }]
      };
    };
    LoginPresenterComponent = __decorate([
      Component({
        selector: "app-login-presenter",
        imports: [ReactiveFormsModule],
        template: login_presenter_component_default
      })
    ], LoginPresenterComponent);
  }
});

export {
  LoginPresenterComponent,
  init_login_presenter_component2 as init_login_presenter_component
};
//# sourceMappingURL=chunk-4HSDUJEO.js.map
