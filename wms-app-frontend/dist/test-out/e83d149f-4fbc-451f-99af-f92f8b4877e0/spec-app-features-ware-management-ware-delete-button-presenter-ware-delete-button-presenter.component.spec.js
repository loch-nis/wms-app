import {
  WareDeleteButtonPresenterComponent,
  init_ware_delete_button_presenter_component
} from "./chunk-ID5VV2LC.js";
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

// src/app/features/ware-management/ware-delete-button-presenter/ware-delete-button-presenter.component.spec.ts
var require_ware_delete_button_presenter_component_spec = __commonJS({
  "src/app/features/ware-management/ware-delete-button-presenter/ware-delete-button-presenter.component.spec.ts"(exports) {
    init_testing();
    init_ware_delete_button_presenter_component();
    describe("WareDeleteButtonComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [WareDeleteButtonPresenterComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(WareDeleteButtonPresenterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_ware_delete_button_presenter_component_spec();
//# sourceMappingURL=spec-app-features-ware-management-ware-delete-button-presenter-ware-delete-button-presenter.component.spec.js.map
