import {
  IconModule,
  init_icon
} from "./chunk-74M2HE4R.js";
import "./chunk-E6TO2F7F.js";
import "./chunk-K7Q3UDTJ.js";
import {
  WareItemPresenterComponent,
  init_ware_item_presenter_component
} from "./chunk-5ST2TZGV.js";
import {
  WareUpdateFormPresenterComponent,
  init_ware_update_form_presenter_component
} from "./chunk-YJWSAFBJ.js";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-4NPHOBJN.js";
import "./chunk-RXRLVWQJ.js";
import {
  Component,
  Input,
  Output,
  TestBed,
  __decorate,
  effect,
  init_core,
  init_testing,
  init_tslib_es6,
  input,
  model
} from "./chunk-PPYATBK3.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/features/ware-management/ware-lookup-presenter/ware-lookup-presenter.component.html
var ware_lookup_presenter_component_default;
var init_ware_lookup_presenter_component = __esm({
  "angular:jit:template:src/app/features/ware-management/ware-lookup-presenter/ware-lookup-presenter.component.html"() {
    ware_lookup_presenter_component_default = `<div>
  <h3 class="text-xl font-semibold text-gray-800 mb-4 mt-4">
    <fa-icon icon="barcode"></fa-icon>
    Look up barcode
    <fa-icon icon="barcode"></fa-icon>
  </h3>

  <app-barcode-form [(barcode)]="barcode"></app-barcode-form>
</div>

<div>
  @if (wareLookupStatus() === "notSearched") {
  <div class="mb-4 mt-4">Scan or type in a barcode above to look up it up.</div>
  } @else if (wareLookupStatus() === "found") {
  <h3 class="text-xl font-semibold text-gray-800 mb-4 mt-4">Ware found:</h3>

  <app-ware-item
    [lookedUpWare]="lookedUpWare()"
    [wareLookupStatus]="wareLookupStatus()"
  ></app-ware-item>

  <h4 class="text-xl font-semibold mb-4 mt-2">Number of wares to store:</h4>

  <app-update-ware-form
    [action]="'increaseQuantity'"
    [barcode]="barcode()"
    [submitFunction]="submitWareUpdateFunction()"
  ></app-update-ware-form>
  } @else if (wareLookupStatus() === "notFound") {
  <h3 class="text-xl font-semibold text-gray-800 mb-4 mt-4">
    Ware not found. Create it?
  </h3>

  <app-create-ware-form
    [barcode]="barcode()"
    [submitFunction]="submitWareCreateFunction()"
  ></app-create-ware-form>
  }
</div>
`;
  }
});

// angular:jit:style:src/app/features/ware-management/ware-lookup-presenter/ware-lookup-presenter.component.scss
var ware_lookup_presenter_component_default2;
var init_ware_lookup_presenter_component2 = __esm({
  "angular:jit:style:src/app/features/ware-management/ware-lookup-presenter/ware-lookup-presenter.component.scss"() {
    ware_lookup_presenter_component_default2 = "/* src/app/features/ware-management/ware-lookup-presenter/ware-lookup-presenter.component.scss */\n/*# sourceMappingURL=ware-lookup-presenter.component.css.map */\n";
  }
});

// angular:jit:template:src/app/features/ware-management/barcode-form-presenter/barcode-form-presenter.component.html
var barcode_form_presenter_component_default;
var init_barcode_form_presenter_component = __esm({
  "angular:jit:template:src/app/features/ware-management/barcode-form-presenter/barcode-form-presenter.component.html"() {
    barcode_form_presenter_component_default = '<!-- using a template driven form here instead,\n  as its just a simple input field - no need for a reactive form -->\n<input\n  type="text"\n  id="barcode"\n  autofocus\n  autocomplete="off"\n  placeholder="Enter barcode"\n  [(ngModel)]="barcode"\n  class="flex text-center w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"\n/>\n';
  }
});

// src/app/features/ware-management/barcode-form-presenter/barcode-form-presenter.component.ts
var BarcodeFormPresenterComponent;
var init_barcode_form_presenter_component2 = __esm({
  "src/app/features/ware-management/barcode-form-presenter/barcode-form-presenter.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_barcode_form_presenter_component();
    init_core();
    init_forms();
    init_core();
    BarcodeFormPresenterComponent = class BarcodeFormPresenterComponent2 {
      barcode = model("");
      static propDecorators = {
        barcode: [{ type: Input, args: [{ isSignal: true, alias: "barcode", required: false }] }, { type: Output, args: ["barcodeChange"] }]
      };
    };
    BarcodeFormPresenterComponent = __decorate([
      Component({
        selector: "app-barcode-form",
        imports: [FormsModule],
        template: barcode_form_presenter_component_default
      })
    ], BarcodeFormPresenterComponent);
  }
});

// angular:jit:template:src/app/features/ware-management/ware-create-form-presenter/ware-create-form-presenter.component.html
var ware_create_form_presenter_component_default;
var init_ware_create_form_presenter_component = __esm({
  "angular:jit:template:src/app/features/ware-management/ware-create-form-presenter/ware-create-form-presenter.component.html"() {
    ware_create_form_presenter_component_default = '<div\n  class="form-container max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mb-2"\n>\n  <form [formGroup]="form" (ngSubmit)="onSubmit()">\n    <div class="form-field mb-1">\n      <label for="barcode">Barcode:</label>\n      <input\n        type="text"\n        id="barcode"\n        formControlName="barcode"\n        class="mt-2 w-full text-center px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"\n      />\n    </div>\n\n    <div class="form-field mb-1">\n      <label for="name">Name:</label>\n      <input\n        type="text"\n        id="name"\n        formControlName="name"\n        class="mt-2 w-full text-center px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"\n      />\n    </div>\n\n    <div class="form-field mb-1">\n      <label for="price">Price:</label>\n      <input\n        type="number"\n        id="price"\n        formControlName="price"\n        step="0.1"\n        class="mt-2 w-full text-center px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"\n      />\n    </div>\n\n    <div class="form-field mb-1">\n      <label for="placement_id">Placement:</label>\n      <select\n        id="placement_id"\n        formControlName="placement_id"\n        class="mt-2 w-full text-center px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"\n      >\n        <option value="" disabled>Select placement</option>\n        @for (p of placementOptions; track p) {\n        <option [value]="p">{{ p }}</option>\n        }\n      </select>\n    </div>\n\n    <div class="form-field mb-1">\n      <label for="quantity">Quantity:</label>\n      <input\n        type="number"\n        id="quantity"\n        formControlName="quantity"\n        min="0"\n        class="mt-2 w-full text-center px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"\n      />\n    </div>\n\n    <button\n      type="submit"\n      class="w-full mt-2 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-150"\n    >\n      Create ware\n    </button>\n  </form>\n</div>\n';
  }
});

// src/app/features/ware-management/ware-create-form-presenter/ware-create-form-presenter.component.ts
var WareCreateFormPresenterComponent;
var init_ware_create_form_presenter_component2 = __esm({
  "src/app/features/ware-management/ware-create-form-presenter/ware-create-form-presenter.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_ware_create_form_presenter_component();
    init_core();
    init_forms();
    init_forms();
    init_core();
    WareCreateFormPresenterComponent = class WareCreateFormPresenterComponent2 {
      barcode = input("");
      submitFunction = input(() => {
      });
      syncBarcodeField = effect(() => {
        this.form.patchValue({
          barcode: this.barcode()
        });
      });
      placementOptions = [1, 2, 3, 4, 5];
      form = new FormGroup({
        barcode: new FormControl("", Validators.required),
        name: new FormControl("", Validators.required),
        price: new FormControl(null, [Validators.required, Validators.min(0)]),
        placement_id: new FormControl(1, Validators.required),
        quantity: new FormControl(0, [Validators.required, Validators.min(0)])
      });
      onSubmit() {
        if (this.form.invalid)
          return;
        this.submitFunction()(this.form.value);
      }
      static propDecorators = {
        barcode: [{ type: Input, args: [{ isSignal: true, alias: "barcode", required: false, transform: void 0 }] }],
        submitFunction: [{ type: Input, args: [{ isSignal: true, alias: "submitFunction", required: false, transform: void 0 }] }]
      };
    };
    WareCreateFormPresenterComponent = __decorate([
      Component({
        selector: "app-create-ware-form",
        imports: [ReactiveFormsModule],
        template: ware_create_form_presenter_component_default
      })
    ], WareCreateFormPresenterComponent);
  }
});

// src/app/features/ware-management/ware-lookup-presenter/ware-lookup-presenter.component.ts
var WareLookupPresenterComponent;
var init_ware_lookup_presenter_component3 = __esm({
  "src/app/features/ware-management/ware-lookup-presenter/ware-lookup-presenter.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_ware_lookup_presenter_component();
    init_ware_lookup_presenter_component2();
    init_core();
    init_barcode_form_presenter_component2();
    init_ware_create_form_presenter_component2();
    init_ware_item_presenter_component();
    init_ware_update_form_presenter_component();
    init_icon();
    init_core();
    WareLookupPresenterComponent = class WareLookupPresenterComponent2 {
      barcode = model("");
      lookedUpWare = input(null);
      wareLookupStatus = input("notSearched");
      submitWareCreateFunction = input(() => {
      });
      submitWareUpdateFunction = input(() => {
      });
      static propDecorators = {
        barcode: [{ type: Input, args: [{ isSignal: true, alias: "barcode", required: false }] }, { type: Output, args: ["barcodeChange"] }],
        lookedUpWare: [{ type: Input, args: [{ isSignal: true, alias: "lookedUpWare", required: false, transform: void 0 }] }],
        wareLookupStatus: [{ type: Input, args: [{ isSignal: true, alias: "wareLookupStatus", required: false, transform: void 0 }] }],
        submitWareCreateFunction: [{ type: Input, args: [{ isSignal: true, alias: "submitWareCreateFunction", required: false, transform: void 0 }] }],
        submitWareUpdateFunction: [{ type: Input, args: [{ isSignal: true, alias: "submitWareUpdateFunction", required: false, transform: void 0 }] }]
      };
    };
    WareLookupPresenterComponent = __decorate([
      Component({
        selector: "app-ware-lookup",
        imports: [
          BarcodeFormPresenterComponent,
          WareCreateFormPresenterComponent,
          WareItemPresenterComponent,
          WareUpdateFormPresenterComponent,
          IconModule
        ],
        template: ware_lookup_presenter_component_default,
        styles: [ware_lookup_presenter_component_default2]
      })
    ], WareLookupPresenterComponent);
  }
});

// src/app/features/ware-management/ware-lookup-presenter/ware-lookup-presenter.component.spec.ts
var require_ware_lookup_presenter_component_spec = __commonJS({
  "src/app/features/ware-management/ware-lookup-presenter/ware-lookup-presenter.component.spec.ts"(exports) {
    init_testing();
    init_ware_lookup_presenter_component3();
    describe("WareLookupComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [WareLookupPresenterComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(WareLookupPresenterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_ware_lookup_presenter_component_spec();
//# sourceMappingURL=spec-app-features-ware-management-ware-lookup-presenter-ware-lookup-presenter.component.spec.js.map
