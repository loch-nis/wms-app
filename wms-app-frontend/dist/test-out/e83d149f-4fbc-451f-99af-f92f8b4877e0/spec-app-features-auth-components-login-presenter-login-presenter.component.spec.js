import {
  LoginPresenterComponent,
  init_login_presenter_component
} from "./chunk-4HSDUJEO.js";
import "./chunk-4NPHOBJN.js";
import "./chunk-RXRLVWQJ.js";
import {
  TestBed,
  init_testing
} from "./chunk-PPYATBK3.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/features/auth/components/login-presenter/login-presenter.component.spec.ts
var require_login_presenter_component_spec = __commonJS({
  "src/app/features/auth/components/login-presenter/login-presenter.component.spec.ts"(exports) {
    init_testing();
    init_login_presenter_component();
    describe("LoginComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [LoginPresenterComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(LoginPresenterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_login_presenter_component_spec();
//# sourceMappingURL=spec-app-features-auth-components-login-presenter-login-presenter.component.spec.js.map
