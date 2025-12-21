import {
  FormsModule,
  init_forms
} from "./chunk-PBORDCAU.js";
import "./chunk-LP44XE3L.js";
import {
  Component,
  Input,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6,
  input
} from "./chunk-CRAKN5JK.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/features/ware-management/ware-delete-button-presenter/ware-delete-button-presenter.component.html
var ware_delete_button_presenter_component_default;
var init_ware_delete_button_presenter_component = __esm({
  "angular:jit:template:src/app/features/ware-management/ware-delete-button-presenter/ware-delete-button-presenter.component.html"() {
    ware_delete_button_presenter_component_default = '<form (ngSubmit)="onSubmit()">\n    <button type="submit"\n    class="w-full py-2 bg-orange-400 shadow-sm text-white font-semibold rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition ease-in-out duration-150"\n    >Delete ware</button>\n</form>';
  }
});

// angular:jit:style:src/app/features/ware-management/ware-delete-button-presenter/ware-delete-button-presenter.component.scss
var ware_delete_button_presenter_component_default2;
var init_ware_delete_button_presenter_component2 = __esm({
  "angular:jit:style:src/app/features/ware-management/ware-delete-button-presenter/ware-delete-button-presenter.component.scss"() {
    ware_delete_button_presenter_component_default2 = "/* src/app/features/ware-management/ware-delete-button-presenter/ware-delete-button-presenter.component.scss */\n/*# sourceMappingURL=ware-delete-button-presenter.component.css.map */\n";
  }
});

// src/app/features/ware-management/ware-delete-button-presenter/ware-delete-button-presenter.component.ts
var WareDeleteButtonPresenterComponent;
var init_ware_delete_button_presenter_component3 = __esm({
  "src/app/features/ware-management/ware-delete-button-presenter/ware-delete-button-presenter.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_ware_delete_button_presenter_component();
    init_ware_delete_button_presenter_component2();
    init_core();
    init_forms();
    init_core();
    WareDeleteButtonPresenterComponent = class WareDeleteButtonPresenterComponent2 {
      barcode = input("");
      submitFunction = input(() => {
      });
      onSubmit() {
        this.submitFunction()(this.barcode());
      }
      static propDecorators = {
        barcode: [{ type: Input, args: [{ isSignal: true, alias: "barcode", required: false, transform: void 0 }] }],
        submitFunction: [{ type: Input, args: [{ isSignal: true, alias: "submitFunction", required: false, transform: void 0 }] }]
      };
    };
    WareDeleteButtonPresenterComponent = __decorate([
      Component({
        selector: "app-ware-delete-button",
        imports: [FormsModule],
        template: ware_delete_button_presenter_component_default,
        styles: [ware_delete_button_presenter_component_default2]
      })
    ], WareDeleteButtonPresenterComponent);
  }
});

// src/app/features/ware-management/ware-delete-button-presenter/ware-delete-button-presenter.component.spec.ts
var require_ware_delete_button_presenter_component_spec = __commonJS({
  "src/app/features/ware-management/ware-delete-button-presenter/ware-delete-button-presenter.component.spec.ts"(exports) {
    init_testing();
    init_ware_delete_button_presenter_component3();
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
