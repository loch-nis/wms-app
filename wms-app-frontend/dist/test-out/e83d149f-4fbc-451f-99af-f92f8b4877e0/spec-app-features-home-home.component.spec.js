import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-PPYATBK3.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/features/home/home.component.html
var home_component_default;
var init_home_component = __esm({
  "angular:jit:template:src/app/features/home/home.component.html"() {
    home_component_default = '<h2 class="text-4xl font-semibold text-gray-800 mb-4 mt-4 text-center">\n  Home Page\n</h2>\n\n<img\n  src="iceland.jpg"\n  alt="Iceland"\n  class="max-w-md mx-auto shadow-md border-2"\n/>\n';
  }
});

// src/app/features/home/home.component.ts
var HomeComponent;
var init_home_component2 = __esm({
  "src/app/features/home/home.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_home_component();
    init_core();
    HomeComponent = class HomeComponent2 {
    };
    HomeComponent = __decorate([
      Component({
        selector: "app-home",
        imports: [],
        template: home_component_default
      })
    ], HomeComponent);
  }
});

// src/app/features/home/home.component.spec.ts
var require_home_component_spec = __commonJS({
  "src/app/features/home/home.component.spec.ts"(exports) {
    init_testing();
    init_home_component2();
    describe("HomeComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [HomeComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_home_component_spec();
//# sourceMappingURL=spec-app-features-home-home.component.spec.js.map
