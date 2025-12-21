import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-TUPOUJDP.js";
import "./chunk-LKJ2ZUYH.js";
import {
  Component,
  Input,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6,
  input
} from "./chunk-YQR25WIE.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/features/auth/components/register-presenter/register-presenter.component.html
var register_presenter_component_default;
var init_register_presenter_component = __esm({
  "angular:jit:template:src/app/features/auth/components/register-presenter/register-presenter.component.html"() {
    register_presenter_component_default = `<form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
  <div class="form-field mb-1">
    <label for="first_name">First name:</label>
    <input
      type="text"
      id="first_name"
      formControlName="first_name"
      class="mt-2 w-full rounded-md border border-gray-300 px-2 py-1 text-center focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>

  <div class="form-field mb-1">
    <label for="last_name">Last name:</label>
    <input
      type="text"
      id="last_name"
      formControlName="last_name"
      class="mt-2 w-full rounded-md border border-gray-300 px-2 py-1 text-center focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>

  <div class="form-field mb-1">
    <label for="email">Email:</label>
    <input
      type="email"
      id="email"
      formControlName="email"
      class="mt-2 w-full rounded-md border border-gray-300 px-2 py-1 text-center focus:ring-2 focus:ring-blue-500 focus:outline-none"
      [class.border-red-500]="
        registerForm.get('email')?.touched && registerForm.get('email')?.invalid
      "
    />
  </div>

  <div class="form-field mb-1">
    <label for="password">Password:</label>
    <input
      type="password"
      id="password"
      formControlName="password"
      class="mt-2 w-full rounded-md border border-gray-300 px-2 py-1 text-center focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>

  <button
    type="submit"
    class="mt-2 w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition duration-150 ease-in-out hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
  >
    Register
  </button>
</form>
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

// src/app/features/auth/components/register-presenter/register-presenter.component.spec.ts
var require_register_presenter_component_spec = __commonJS({
  "src/app/features/auth/components/register-presenter/register-presenter.component.spec.ts"(exports) {
    init_testing();
    init_register_presenter_component2();
    describe("RegisterPresenterComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [RegisterPresenterComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(RegisterPresenterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_register_presenter_component_spec();
//# sourceMappingURL=spec-app-features-auth-components-register-presenter-register-presenter.component.spec.js.map
