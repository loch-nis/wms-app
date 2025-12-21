import {
  RegisterPresenterComponent,
  init_register_presenter_component
} from "./chunk-6SJFWT5J.js";
import {
  LoginPresenterComponent,
  init_login_presenter_component
} from "./chunk-4HSDUJEO.js";
import {
  AuthService,
  Router,
  init_auth_service,
  init_router
} from "./chunk-Z2KJ4WFC.js";
import {
  NotificationService,
  init_notification_service
} from "./chunk-JHZ6DDBS.js";
import "./chunk-TJLW6MN2.js";
import "./chunk-E6TO2F7F.js";
import "./chunk-K7Q3UDTJ.js";
import "./chunk-4NPHOBJN.js";
import "./chunk-RXRLVWQJ.js";
import {
  Component,
  TestBed,
  __decorate,
  computed,
  effect,
  init_core,
  init_testing,
  init_tslib_es6,
  inject
} from "./chunk-PPYATBK3.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/features/auth/containers/auth-container/auth-container.component.html
var auth_container_component_default;
var init_auth_container_component = __esm({
  "angular:jit:template:src/app/features/auth/containers/auth-container/auth-container.component.html"() {
    auth_container_component_default = `@if (mode() === 'login')
{
    <h2 class="text-2xl font-semibold text-gray-800 mb-4 mt-4 text-center">Login as existing user</h2>
    <app-login-presenter [submitFunction]="handleLogin"></app-login-presenter>
}
@else if (mode() === 'register') 
{
    <h2 class="text-2xl font-semibold text-gray-800 mb-4 mt-4 text-center">Register new user</h2>
    <app-register-presenter [submitFunction]="handleRegister"></app-register-presenter>
}
@else if (mode() === 'logout')
{
    <p class="text-center mt-8 text-gray-500">Logging out...</p>
}`;
  }
});

// src/app/features/auth/containers/auth-container/auth-container.component.ts
var AuthContainerComponent;
var init_auth_container_component2 = __esm({
  "src/app/features/auth/containers/auth-container/auth-container.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_auth_container_component();
    init_core();
    init_auth_service();
    init_login_presenter_component();
    init_register_presenter_component();
    init_router();
    init_notification_service();
    AuthContainerComponent = class AuthContainerComponent2 {
      authService = inject(AuthService);
      router = inject(Router);
      notification = inject(NotificationService);
      mode = computed(() => {
        switch (this.router.url) {
          case "/auth/register":
            return "register";
          case "/auth/logout":
            return "logout";
          default:
            return "login";
        }
      });
      logoutEffect = effect(() => {
        if (this.mode() !== "logout")
          return;
        this.authService.logout().subscribe({
          next: () => {
            this.notification.showSuccess("Logout successful");
            this.router.navigateByUrl("auth/login");
          },
          error: () => {
            console.warn("Error posting to logout endpoint");
            this.router.navigateByUrl("auth/login");
          }
        });
      });
      handleLogin = (credentials) => {
        this.authService.login(credentials).subscribe({
          next: () => {
            this.notification.showSuccess("Login successful");
            this.router.navigateByUrl("home");
          },
          error: () => {
            this.notification.showError("Login failed");
          }
        });
      };
      handleRegister = (newUser) => {
        this.authService.register(newUser).subscribe({
          next: () => {
            this.router.navigateByUrl("auth/login");
            this.notification.showSuccess("Registration successful");
          },
          error: () => {
            this.notification.showError("Registration failed");
          }
        });
      };
    };
    AuthContainerComponent = __decorate([
      Component({
        selector: "app-auth-container",
        imports: [LoginPresenterComponent, RegisterPresenterComponent],
        template: auth_container_component_default
      })
    ], AuthContainerComponent);
  }
});

// src/app/features/auth/containers/auth-container/auth-container.component.spec.ts
var require_auth_container_component_spec = __commonJS({
  "src/app/features/auth/containers/auth-container/auth-container.component.spec.ts"(exports) {
    init_testing();
    init_auth_container_component2();
    describe("AuthContainerComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [AuthContainerComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(AuthContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_auth_container_component_spec();
//# sourceMappingURL=spec-app-features-auth-containers-auth-container-auth-container.component.spec.js.map
