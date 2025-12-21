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

// angular:jit:template:src/app/features/ware-management/ware-item-presenter/ware-item-presenter.component.html
var ware_item_presenter_component_default;
var init_ware_item_presenter_component = __esm({
  "angular:jit:template:src/app/features/ware-management/ware-item-presenter/ware-item-presenter.component.html"() {
    ware_item_presenter_component_default = '@if (wareLookupStatus() === "found")\n{\n    <div> <!-- Using optional chaining here as I can guarantee \n        that the ware is defined when the status is found - not sure if bad practice? -->\n        Name: {{ lookedUpWare()?.name }} <br>\n        Barcode: {{ lookedUpWare()?.barcode }} <br>\n        Price: ${{ lookedUpWare()?.price }} <br>\n        Quantity: {{ lookedUpWare()?.quantity }} <br>\n    </div>\n}';
  }
});

// angular:jit:style:src/app/features/ware-management/ware-item-presenter/ware-item-presenter.component.scss
var ware_item_presenter_component_default2;
var init_ware_item_presenter_component2 = __esm({
  "angular:jit:style:src/app/features/ware-management/ware-item-presenter/ware-item-presenter.component.scss"() {
    ware_item_presenter_component_default2 = "/* src/app/features/ware-management/ware-item-presenter/ware-item-presenter.component.scss */\nth,\ntd {\n  padding: 10px;\n  border: 1px solid #333;\n}\n/*# sourceMappingURL=ware-item-presenter.component.css.map */\n";
  }
});

// src/app/features/ware-management/ware-item-presenter/ware-item-presenter.component.ts
var WareItemPresenterComponent;
var init_ware_item_presenter_component3 = __esm({
  "src/app/features/ware-management/ware-item-presenter/ware-item-presenter.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_ware_item_presenter_component();
    init_ware_item_presenter_component2();
    init_core();
    init_core();
    WareItemPresenterComponent = class WareItemPresenterComponent2 {
      lookedUpWare = input(null);
      wareLookupStatus = input("notSearched");
      static propDecorators = {
        lookedUpWare: [{ type: Input, args: [{ isSignal: true, alias: "lookedUpWare", required: false, transform: void 0 }] }],
        wareLookupStatus: [{ type: Input, args: [{ isSignal: true, alias: "wareLookupStatus", required: false, transform: void 0 }] }]
      };
    };
    WareItemPresenterComponent = __decorate([
      Component({
        selector: "app-ware-item",
        imports: [],
        template: ware_item_presenter_component_default,
        styles: [ware_item_presenter_component_default2]
      })
    ], WareItemPresenterComponent);
  }
});

export {
  WareItemPresenterComponent,
  init_ware_item_presenter_component3 as init_ware_item_presenter_component
};
//# sourceMappingURL=chunk-5ST2TZGV.js.map
