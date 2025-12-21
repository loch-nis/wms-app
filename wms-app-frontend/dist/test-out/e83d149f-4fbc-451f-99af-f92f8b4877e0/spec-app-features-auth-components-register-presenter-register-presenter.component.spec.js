import {
  RegisterPresenterComponent,
  init_register_presenter_component
} from "./chunk-6SJFWT5J.js";
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

// src/app/features/auth/components/register-presenter/register-presenter.component.spec.ts
var require_register_presenter_component_spec = __commonJS({
  "src/app/features/auth/components/register-presenter/register-presenter.component.spec.ts"(exports) {
    init_testing();
    init_register_presenter_component();
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
