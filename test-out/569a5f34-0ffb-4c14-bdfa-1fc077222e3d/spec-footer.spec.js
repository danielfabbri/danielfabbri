import {
  Component,
  TestBed,
  __async,
  __commonJS,
  __decorate,
  __esm,
  __name,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-NGH5GMJN.js";

// angular:jit:template:src\app\components\footer\footer.html
var footer_default;
var init_footer = __esm({
  "angular:jit:template:src\\app\\components\\footer\\footer.html"() {
    footer_default = "<p>footer works!</p>\r\n";
  }
});

// angular:jit:style:src\app\components\footer\footer.scss
var footer_default2;
var init_footer2 = __esm({
  "angular:jit:style:src\\app\\components\\footer\\footer.scss"() {
    footer_default2 = "/* src/app/components/footer/footer.scss */\n/*# sourceMappingURL=footer.css.map */\n";
  }
});

// src/app/components/footer/footer.ts
var _a, Footer;
var init_footer3 = __esm({
  "src/app/components/footer/footer.ts"() {
    "use strict";
    init_tslib_es6();
    init_footer();
    init_footer2();
    init_core();
    Footer = (_a = class {
    }, __name(_a, "Footer"), _a);
    Footer = __decorate([
      Component({
        selector: "app-footer",
        imports: [],
        template: footer_default,
        styles: [footer_default2]
      })
    ], Footer);
  }
});

// src/app/components/footer/footer.spec.ts
var require_footer_spec = __commonJS({
  "src/app/components/footer/footer.spec.ts"(exports) {
    init_testing();
    init_footer3();
    describe("Footer", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Footer]
        }).compileComponents();
        fixture = TestBed.createComponent(Footer);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_footer_spec();
//# sourceMappingURL=spec-footer.spec.js.map
