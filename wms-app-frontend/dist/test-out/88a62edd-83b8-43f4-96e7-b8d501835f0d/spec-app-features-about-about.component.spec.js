import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-YQR25WIE.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/features/about/about.component.html
var about_component_default;
var init_about_component = __esm({
  "angular:jit:template:src/app/features/about/about.component.html"() {
    about_component_default = '<h2 class="text-4xl font-semibold text-gray-800 mb-4 mt-4 text-center">About Page</h2>\n\n<div class="text-center">\n    <p>This is just a demo.</p>\n</div>';
  }
});

// angular:jit:style:src/app/features/about/about.component.scss
var about_component_default2;
var init_about_component2 = __esm({
  "angular:jit:style:src/app/features/about/about.component.scss"() {
    about_component_default2 = "/* src/app/features/about/about.component.scss */\n/*# sourceMappingURL=about.component.css.map */\n";
  }
});

// src/app/features/about/about.component.ts
var AboutComponent;
var init_about_component3 = __esm({
  "src/app/features/about/about.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_about_component();
    init_about_component2();
    init_core();
    AboutComponent = class AboutComponent2 {
    };
    AboutComponent = __decorate([
      Component({
        selector: "app-about",
        imports: [],
        template: about_component_default,
        styles: [about_component_default2]
      })
    ], AboutComponent);
  }
});

// src/app/features/about/about.component.spec.ts
var require_about_component_spec = __commonJS({
  "src/app/features/about/about.component.spec.ts"(exports) {
    init_testing();
    init_about_component3();
    describe("AboutComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [AboutComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(AboutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_about_component_spec();
//# sourceMappingURL=spec-app-features-about-about.component.spec.js.map
