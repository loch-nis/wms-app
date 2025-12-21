import {
  WareDeleteButtonPresenterComponent,
  init_ware_delete_button_presenter_component
} from "./chunk-ID5VV2LC.js";
import {
  WareUpdateFormPresenterComponent,
  init_ware_update_form_presenter_component
} from "./chunk-YJWSAFBJ.js";
import "./chunk-4NPHOBJN.js";
import "./chunk-RXRLVWQJ.js";
import {
  Component,
  Input,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6,
  input
} from "./chunk-PPYATBK3.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/features/ware-management/ware-list-presenter/ware-list-presenter.component.html
var ware_list_presenter_component_default;
var init_ware_list_presenter_component = __esm({
  "angular:jit:template:src/app/features/ware-management/ware-list-presenter/ware-list-presenter.component.html"() {
    ware_list_presenter_component_default = `<h3 class="text-xl font-semibold text-gray-800 mb-4 mt-4">
    List of wares in warehouse:
</h3>
<table class="min-w-full w-3xl table-auto border-collapse bg-white shadow-md">
    <thead class="bg-gray-200">
        <tr>
            <th>Name</th>
            <th>Barcode</th>
            <th>Price</th>
            <th>Quantity</th>
            <th class="w-1/5">Number of wares to pack</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tbody class="text-m">
         @for (ware of wareList(); track ware.barcode)
         {
             <tr>
                 <td>{{ ware.name }}</td>
                 <td>{{ ware.barcode }}</td>
                 <td> \${{ ware.price }}</td>
                 <td>{{ ware.quantity }}</td>
                 <td> <app-update-ware-form
                    [action]='"decreaseQuantity"'
                    [barcode]="ware.barcode"
                    [submitFunction]="submitWareUpdateFunction()"
                     ></app-update-ware-form> </td>

                <td> <app-ware-delete-button
                    [barcode]="ware.barcode"
                    [submitFunction]="submitWareDeleteFunction()"
                    ></app-ware-delete-button> </td>
             </tr>
        } @empty {
            <div>
                No wares found in database. Possible error.
            </div>
        }
    </tbody>
</table>`;
  }
});

// angular:jit:style:src/app/features/ware-management/ware-list-presenter/ware-list-presenter.component.scss
var ware_list_presenter_component_default2;
var init_ware_list_presenter_component2 = __esm({
  "angular:jit:style:src/app/features/ware-management/ware-list-presenter/ware-list-presenter.component.scss"() {
    ware_list_presenter_component_default2 = "/* src/app/features/ware-management/ware-list-presenter/ware-list-presenter.component.scss */\nth,\ntd {\n  padding: 10px;\n  border: 1px solid #333;\n}\n/*# sourceMappingURL=ware-list-presenter.component.css.map */\n";
  }
});

// src/app/features/ware-management/ware-list-presenter/ware-list-presenter.component.ts
var WareListPresenterComponent;
var init_ware_list_presenter_component3 = __esm({
  "src/app/features/ware-management/ware-list-presenter/ware-list-presenter.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_ware_list_presenter_component();
    init_ware_list_presenter_component2();
    init_core();
    init_ware_update_form_presenter_component();
    init_ware_delete_button_presenter_component();
    init_core();
    WareListPresenterComponent = class WareListPresenterComponent2 {
      wareList = input([]);
      submitWareUpdateFunction = input(() => {
      });
      submitWareDeleteFunction = input(() => {
      });
      static propDecorators = {
        wareList: [{ type: Input, args: [{ isSignal: true, alias: "wareList", required: false, transform: void 0 }] }],
        submitWareUpdateFunction: [{ type: Input, args: [{ isSignal: true, alias: "submitWareUpdateFunction", required: false, transform: void 0 }] }],
        submitWareDeleteFunction: [{ type: Input, args: [{ isSignal: true, alias: "submitWareDeleteFunction", required: false, transform: void 0 }] }]
      };
    };
    WareListPresenterComponent = __decorate([
      Component({
        selector: "app-ware-list",
        imports: [WareUpdateFormPresenterComponent, WareDeleteButtonPresenterComponent],
        template: ware_list_presenter_component_default,
        styles: [ware_list_presenter_component_default2]
      })
    ], WareListPresenterComponent);
  }
});

// src/app/features/ware-management/ware-list-presenter/ware-list-presenter.component.spec.ts
var require_ware_list_presenter_component_spec = __commonJS({
  "src/app/features/ware-management/ware-list-presenter/ware-list-presenter.component.spec.ts"(exports) {
    init_testing();
    init_ware_list_presenter_component3();
    describe("WareListComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [WareListPresenterComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(WareListPresenterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_ware_list_presenter_component_spec();
//# sourceMappingURL=spec-app-features-ware-management-ware-list-presenter-ware-list-presenter.component.spec.js.map
