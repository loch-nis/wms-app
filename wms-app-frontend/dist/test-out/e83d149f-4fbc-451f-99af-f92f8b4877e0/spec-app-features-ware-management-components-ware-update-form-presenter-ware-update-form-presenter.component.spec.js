import {
  WareUpdateFormPresenterComponent,
  init_ware_update_form_presenter_component
} from "./chunk-YJWSAFBJ.js";
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

// src/app/features/ware-management/components/ware-update-form-presenter/ware-update-form-presenter.component.spec.ts
var require_ware_update_form_presenter_component_spec = __commonJS({
  "src/app/features/ware-management/components/ware-update-form-presenter/ware-update-form-presenter.component.spec.ts"(exports) {
    init_testing();
    init_ware_update_form_presenter_component();
    describe("UpdateWareFormComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [WareUpdateFormPresenterComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(WareUpdateFormPresenterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_ware_update_form_presenter_component_spec();
//# sourceMappingURL=spec-app-features-ware-management-components-ware-update-form-presenter-ware-update-form-presenter.component.spec.js.map
