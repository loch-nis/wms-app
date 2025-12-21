import {
  FormsModule,
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

// angular:jit:template:src/app/features/ware-management/components/ware-update-form-presenter/ware-update-form-presenter.component.html
var ware_update_form_presenter_component_default;
var init_ware_update_form_presenter_component = __esm({
  "angular:jit:template:src/app/features/ware-management/components/ware-update-form-presenter/ware-update-form-presenter.component.html"() {
    ware_update_form_presenter_component_default = '<form (ngSubmit)="onSubmit()" class="space-y-2 p-2">\n\n  <div class="flex flex-col">\n\n    <input\n    type="number"\n    min="1"\n    max="1000"\n    id="quantityDelta"\n    name="quantityDelta"\n    required\n    [(ngModel)]="quantityDelta"\n    class="text-center w-full py-2 px-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"\n    />\n  </div>\n\n@if (action() === "increaseQuantity") \n{\n  <button type="submit"\n  class="w-full py-2 bg-green-600 text-white shadow-sm font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-150"\n  >Store ware(s)</button>\n}\n@else if (action() === "decreaseQuantity") \n{\n  <button type="submit"\n  class="w-full py-2 bg-blue-400 text-white shadow-sm font-semibold rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition ease-in-out duration-150"\n  >Pack ware(s)</button>\n}\n\n</form>';
  }
});

// angular:jit:style:src/app/features/ware-management/components/ware-update-form-presenter/ware-update-form-presenter.component.scss
var ware_update_form_presenter_component_default2;
var init_ware_update_form_presenter_component2 = __esm({
  "angular:jit:style:src/app/features/ware-management/components/ware-update-form-presenter/ware-update-form-presenter.component.scss"() {
    ware_update_form_presenter_component_default2 = "/* src/app/features/ware-management/components/ware-update-form-presenter/ware-update-form-presenter.component.scss */\n/*# sourceMappingURL=ware-update-form-presenter.component.css.map */\n";
  }
});

// src/app/features/ware-management/components/ware-update-form-presenter/ware-update-form-presenter.component.ts
var WareUpdateFormPresenterComponent;
var init_ware_update_form_presenter_component3 = __esm({
  "src/app/features/ware-management/components/ware-update-form-presenter/ware-update-form-presenter.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_ware_update_form_presenter_component();
    init_ware_update_form_presenter_component2();
    init_core();
    init_forms();
    init_core();
    WareUpdateFormPresenterComponent = class WareUpdateFormPresenterComponent2 {
      barcode = input("");
      action = input("increaseQuantity");
      submitFunction = input(() => {
      });
      quantityDelta = 1;
      onSubmit() {
        this.submitFunction()(this.action(), this.barcode(), this.quantityDelta);
      }
      static propDecorators = {
        barcode: [{ type: Input, args: [{ isSignal: true, alias: "barcode", required: false, transform: void 0 }] }],
        action: [{ type: Input, args: [{ isSignal: true, alias: "action", required: false, transform: void 0 }] }],
        submitFunction: [{ type: Input, args: [{ isSignal: true, alias: "submitFunction", required: false, transform: void 0 }] }]
      };
    };
    WareUpdateFormPresenterComponent = __decorate([
      Component({
        selector: "app-update-ware-form",
        imports: [FormsModule],
        template: ware_update_form_presenter_component_default,
        styles: [ware_update_form_presenter_component_default2]
      })
    ], WareUpdateFormPresenterComponent);
  }
});

export {
  WareUpdateFormPresenterComponent,
  init_ware_update_form_presenter_component3 as init_ware_update_form_presenter_component
};
//# sourceMappingURL=chunk-YJWSAFBJ.js.map
