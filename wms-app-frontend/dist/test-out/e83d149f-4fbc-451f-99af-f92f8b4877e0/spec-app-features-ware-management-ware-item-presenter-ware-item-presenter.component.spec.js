import {
  WareItemPresenterComponent,
  init_ware_item_presenter_component
} from "./chunk-5ST2TZGV.js";
import {
  TestBed,
  init_testing
} from "./chunk-PPYATBK3.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/features/ware-management/ware-item-presenter/ware-item-presenter.component.spec.ts
var require_ware_item_presenter_component_spec = __commonJS({
  "src/app/features/ware-management/ware-item-presenter/ware-item-presenter.component.spec.ts"(exports) {
    init_testing();
    init_ware_item_presenter_component();
    describe("WareComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [WareItemPresenterComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(WareItemPresenterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_ware_item_presenter_component_spec();
//# sourceMappingURL=spec-app-features-ware-management-ware-item-presenter-ware-item-presenter.component.spec.js.map
