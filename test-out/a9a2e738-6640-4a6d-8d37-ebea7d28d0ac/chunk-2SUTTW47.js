import {
  Component,
  __decorate,
  __esm,
  __name,
  init_core,
  init_tslib_es6
} from "./chunk-NGH5GMJN.js";

// angular:jit:template:src\app\components\header\header.html
var header_default;
var init_header = __esm({
  "angular:jit:template:src\\app\\components\\header\\header.html"() {
    header_default = '<!-- Navigation -->\r\n<nav class="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">\r\n    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\r\n      <div class="flex justify-between items-center h-16">\r\n        <div class="flex-shrink-0">\r\n            <a href="./">\r\n                <h1 class="text-2xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent mt-5">Daniel Fabbri</h1>\r\n            </a>\r\n        </div>\r\n        <div class="hidden md:block">\r\n          <div class="ml-10 flex items-baseline space-x-8">\r\n            <a href="./about" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">About</a>\r\n            <a href="./skills" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Skills</a>\r\n            <a href="./projects" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Projects</a>\r\n            <a href="#contact" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </nav>';
  }
});

// angular:jit:style:src\app\components\header\header.scss
var header_default2;
var init_header2 = __esm({
  "angular:jit:style:src\\app\\components\\header\\header.scss"() {
    header_default2 = "/* src/app/components/header/header.scss */\n/*# sourceMappingURL=header.css.map */\n";
  }
});

// src/app/components/header/header.ts
var _a, Header;
var init_header3 = __esm({
  "src/app/components/header/header.ts"() {
    "use strict";
    init_tslib_es6();
    init_header();
    init_header2();
    init_core();
    Header = (_a = class {
    }, __name(_a, "Header"), _a);
    Header = __decorate([
      Component({
        selector: "app-header",
        imports: [],
        template: header_default,
        styles: [header_default2]
      })
    ], Header);
  }
});

export {
  Header,
  init_header3 as init_header
};
//# sourceMappingURL=chunk-2SUTTW47.js.map
