import {
  RouterOutlet,
  init_router
} from "./chunk-6D3ZH6W3.js";
import "./chunk-5V4IAUGI.js";
import "./chunk-WLWNCOPE.js";
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
  init_tslib_es6,
  provideZonelessChangeDetection,
  signal
} from "./chunk-NGH5GMJN.js";

// angular:jit:template:src\app\app.html
var app_default;
var init_app = __esm({
  "angular:jit:template:src\\app\\app.html"() {
    app_default = "<router-outlet />\r\n";
  }
});

// angular:jit:style:src\app\app.scss
var app_default2;
var init_app2 = __esm({
  "angular:jit:style:src\\app\\app.scss"() {
    app_default2 = "/* src/app/app.scss */\n/*# sourceMappingURL=app.css.map */\n";
  }
});

// src/app/app.ts
var _a, App;
var init_app3 = __esm({
  "src/app/app.ts"() {
    "use strict";
    init_tslib_es6();
    init_app();
    init_app2();
    init_core();
    init_router();
    App = (_a = class {
      title = signal("danielfabbri");
    }, __name(_a, "App"), _a);
    App = __decorate([
      Component({
        selector: "app-root",
        imports: [RouterOutlet],
        template: app_default,
        styles: [app_default2]
      })
    ], App);
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_core();
    init_testing();
    init_app3();
    describe("App", () => {
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [App],
          providers: [provideZonelessChangeDetection()]
        }).compileComponents();
      }));
      it("should create the app", () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
      it("should render title", () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("h1")?.textContent).toContain("Hello, danielfabbri");
      });
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app.spec.js.map
