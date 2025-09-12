import {
  RouterModule,
  init_router
} from "./chunk-6D3ZH6W3.js";
import {
  Header,
  init_header
} from "./chunk-2SUTTW47.js";
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
  init_tslib_es6
} from "./chunk-NGH5GMJN.js";

// angular:jit:template:src\app\pages\projects\projects.html
var projects_default;
var init_projects = __esm({
  "angular:jit:template:src\\app\\pages\\projects\\projects.html"() {
    projects_default = `<app-header />\r
\r
<!-- Hero Section\r
<section class="pt-20 pb-16 bg-gradient-to-br from-gray-600 to-gray-900 text-white">\r
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">\r
    <div class="text-center">\r
      <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">\r
        My Projects\r
      </h1>\r
      <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">\r
        A showcase of my work and the technologies I love to work with\r
      </p>\r
    </div>\r
  </div>\r
</section> -->\r
\r
<!-- Featured Projects -->\r
<section class="py-20 bg-white">\r
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\r
    <div class="text-center mb-16">\r
      <h2 class="text-4xl font-bold text-gray-900 mb-4 mt-8">Featured Projects</h2>\r
      <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>\r
      <p class="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">\r
        Here are some of my most recent and impactful projects that demonstrate my skills and passion for development.\r
      </p>\r
    </div>\r
\r
    <!-- Project 1 -->\r
    <div class="mb-20">\r
      <div class="grid lg:grid-cols-2 gap-12 items-center">\r
        <div>\r
          <div class="h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center" style="background:url('assets/images/impactbank.JPG') center center; background-size:cover;">\r
            <!-- <div class="text-white text-center">\r
              <svg class="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>\r
              </svg>\r
              <p class="text-2xl font-semibold">E-Commerce Platform</p>\r
            </div> -->\r
          </div>\r
        </div>\r
        <div>\r
          <h3 class="text-3xl font-bold text-gray-900 mb-4">Fintech digital account</h3>\r
          <p class="text-gray-600 mb-6 leading-relaxed">\r
            As CTO at Impact Bank, I led three squads in building fintech solutions for the nonprofit sector. I oversaw the development of a mobile app and a web platform, working closely with an outsourced team while implementing API-first architecture, secure authentication flows, and robust integration with a Banking-as-a-Service (BaaS) provider. I also introduced CI/CD pipelines, cloud infrastructure automation, and monitoring practices to ensure scalability, compliance, and high availability.\r
          </p>\r
          <div class="flex flex-wrap gap-3 mb-6">\r
            <span class="flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
              <i class="devicon-ruby-plain colored text-lg mr-2"></i> Ruby on Rails\r
            </span>\r
            <span class="flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
              <i class="devicon-mongodb-plain colored text-lg mr-2"></i> Mongo DB\r
            </span>\r
            <span class="flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
              <i class="devicon-kotlin-plain colored text-lg mr-2"></i> Kotlin\r
            </span>\r
            <span class="flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
              <i class="devicon-swift-plain colored text-lg mr-2"></i> Swift\r
            </span>\r
            <span class="flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
              <i class="devicon-postman-plain colored text-lg mr-2"></i> Postman\r
            </span>\r
          </div>\r
          <div class="flex flex-col sm:flex-row gap-4">\r
            <a href="https://www.impact-br.com/conta" target="_blank" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">\r
              View Live Demo\r
            </a>\r
            <!-- <a href="#" class="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors text-center">\r
              View Code\r
            </a> -->\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Project 2 -->\r
    <div class="mb-20">\r
      <div class="grid lg:grid-cols-2 gap-12 items-center">\r
        <div class="lg:order-2">\r
          <div class="h-96 bg-gradient-to-br from-blue-500 to-teal-600 rounded-2xl flex items-center justify-center" style="background:url('assets/images/impactmap.JPG') center center; background-size:cover;">\r
            <div class="text-white text-center">\r
            </div>\r
          </div>\r
        </div>\r
        <div class="lg:order-1">\r
          <h3 class="text-3xl font-bold text-gray-900 mb-4">Fund Management SaaS</h3>\r
          <p class="text-gray-600 mb-6 leading-relaxed">\r
            As a Software Engineer at Impact Map, I was involved end-to-end in the development of the platform, a SaaS for managing philanthropic funds. I designed the system architecture and contributed across backend and frontend development, implemented CI/CD pipelines, and set up cloud infrastructure on AWS with MongoDB. I also introduced agile software management practices using Jira, mentored junior developers, and drove performance improvements that reduced page load times by 40%.\r
          </p>\r
          <div class="flex flex-wrap gap-3 mb-6">\r
            <span class="flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
              <i class="devicon-angularjs-plain colored text-lg mr-2"></i> Angular\r
            </span>\r
            <span class="flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
              <i class="devicon-nodejs-plain colored text-lg mr-2"></i> Node.js\r
            </span>\r
            <span class="flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
              <i class="devicon-mongodb-plain colored text-lg mr-2"></i> Mongo DB\r
            </span>\r
            <span class="flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
              <i class="devicon-jira-plain colored text-lg mr-2"></i> Jira\r
            </span>\r
            <span class="flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
              <img src="https://cdn.iconscout.com/icon/free/png-256/free-amazon-aws-icon-svg-png-download-2944772.png?f=webp" alt="Amazon" class="w-5 h-5 mr-2">\r
              AWS\r
            </span>\r
          </div>\r
          <div class="flex flex-col sm:flex-row gap-4">\r
            <a href="https://www.impact-br.com/map" target="_blank" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">\r
              View Live Demo\r
            </a>\r
            <!-- <a href="#" class="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors text-center">\r
              View Code\r
            </a> -->\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    \r
    <!-- Project 1 -->\r
    <div class="mb-20">\r
      <div class="grid lg:grid-cols-2 gap-12 items-center">\r
        <div>\r
          <div class="h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center" style="background:url('assets/images/logzone.JPG') top center no-repeat #e5e5e5; background-size:contain;box-shadow:0 2px 10px #777;">\r
            <!-- <div class="text-white text-center">\r
              <svg class="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>\r
              </svg>\r
              <p class="text-2xl font-semibold">E-Commerce Platform</p>\r
            </div> -->\r
          </div>\r
        </div>\r
        <div>\r
          <h3 class="text-3xl font-bold text-gray-900 mb-4">Log Management Platform</h3>\r
          <p class="text-gray-600 mb-6 leading-relaxed">\r
            As a Software Engineer at Logzone, I contributed end-to-end to the development of a cloud-based log centralization system, enabling users to query logs through AI-powered interactions on WhatsApp. I designed the system architecture, implemented backend and frontend features, integrated AI-based search functionality, and optimized performance to ensure fast and reliable responses.\r
          </p>\r
          <div class="flex flex-wrap gap-3 mb-6">\r
            <span class="flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
              <i class="devicon-react-plain colored text-lg mr-2"></i> React\r
            </span>\r
            <span class="flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
              <i class="devicon-nodejs-plain colored text-lg mr-2"></i> Node.js\r
            </span>\r
            <span class="flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
              <i class="devicon-nextjs-plain colored text-lg mr-2"></i> Next.js\r
            </span>\r
            <span class="flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
              <i class="devicon-mongodb-plain colored text-lg mr-2"></i> Mongo DB\r
            </span>\r
            <span class="flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
              <i class="devicon-npm-plain colored text-lg mr-2"></i> NPM\r
            </span>\r
          </div>\r
          <div class="flex flex-col sm:flex-row gap-4">\r
            <a href="https://github.com/danielfabbri/logzone-sdk" target="_blank" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">\r
              View Live Demo\r
            </a>\r
            <!-- <a href="#" class="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors text-center">\r
              View Code\r
            </a> -->\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Project 2 -->\r
    <div class="mb-20">\r
      <div class="grid lg:grid-cols-2 gap-12 items-center">\r
        <div class="lg:order-2">\r
          <div class="h-96 bg-gradient-to-br from-blue-500 to-teal-600 rounded-2xl flex items-center justify-center" style="background:url('assets/images/leadzone.JPG') top center no-repeat #0d1b2a; background-size:contain;">\r
            <div class="text-white text-center">\r
            </div>\r
          </div>\r
        </div>\r
        <div class="lg:order-1">\r
          <h3 class="text-3xl font-bold text-gray-900 mb-4">AI-powered WhatsApp agent</h3>\r
          <p class="text-gray-600 mb-6 leading-relaxed">\r
            As a Software Engineer at Leadzone AI, I developed an AI agent that manages lead interactions via WhatsApp. I built the system architecture, implemented both backend and frontend components, and integrated AI-powered natural language processing to handle inquiries efficiently and accurately. I also focused on optimizing performance and ensuring the platform could scale to handle large volumes of messages.\r
          </p>\r
          <div class="flex flex-wrap gap-3 mb-6">\r
            <span class="flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg" class="w-5 h-5 mr-2" alt="Openai"/> Openai\r
            </span>\r
            <span class="flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
              <i class="devicon-php-plain colored text-lg mr-2"></i> PHP\r
            </span>\r
            <span class="flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
              <i class="devicon-bootstrap-plain colored text-lg mr-2"></i> Bootstrap\r
            </span>\r
            <span class="flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
              <i class="devicon-mysql-plain colored text-lg mr-2"></i> MySQL\r
            </span>\r
            <span class="flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg" class="w-4 h-4 mr-2" alt="WhatsApp"/> WhatsApp\r
            </span>\r
          </div>\r
          <div class="flex flex-col sm:flex-row gap-4">\r
            <a href="https://chat.leadzone.com.br/" target="_blank" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">\r
              View Live Demo\r
            </a>\r
            <!-- <a href="#" class="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors text-center">\r
              View Code\r
            </a> -->\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Project 3 -->\r
    <div class="mb-20">\r
      <div class="grid lg:grid-cols-2 gap-12 items-center">\r
        <div>\r
          <div class="h-96 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center" style="background:url('assets/images/welight.JPG') top center no-repeat #e5e5e5; background-size:cover;box-shadow:0 2px 10px #777;">\r
            <div class="text-white text-center">\r
            </div>\r
          </div>\r
        </div>\r
        <div>\r
          <h3 class="text-3xl font-bold text-gray-900 mb-4">Crowdfunding platform</h3>\r
          <p class="text-gray-600 mb-6 leading-relaxed">\r
            As a Software Engineer at Welight, I contributed end-to-end to the development of the crowdfunding platform, working on both backend and frontend. I designed the system architecture, implemented core features, and integrated payment solutions such as Iugu and PayPal. I also mentored junior developers and ensured the platform was scalable and reliable.\r
          </p>\r
          <div class="flex flex-wrap gap-3 mb-6">\r
            <span class="flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
              <i class="devicon-javascript-plain colored text-lg mr-2"></i> Javascript\r
            </span>\r
            <span class="flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
              <i class="devicon-php-plain colored text-lg mr-2"></i> PHP\r
            </span>\r
            <span class="flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
              <i class="devicon-materializecss-plain colored text-lg mr-2"></i> Materialize\r
            </span>\r
            <span class="flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
              <i class="devicon-mysql-plain colored text-lg mr-2"></i> MySQL\r
            </span>\r
            <span class="flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
              <i class="devicon-cpanel-plain colored text-lg mr-2"></i> CPanel\r
            </span>\r
          </div>\r
          <div class="flex flex-col sm:flex-row gap-4">\r
            <a href="https://welight.live/jcre/" target="_blank" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">\r
              View Live Demo\r
            </a>\r
            <!-- <a href="#" class="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors text-center">\r
              View Code\r
            </a> -->\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
\r
  </div>\r
</section>\r
\r
<!-- CTA Section -->\r
<section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600">\r
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">\r
    <h2 class="text-4xl font-bold text-white mb-6">Interested in Working Together?</h2>\r
    <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">\r
      I'm always excited to take on new challenges and collaborate on interesting projects.\r
    </p>\r
    <div class="flex flex-col sm:flex-row gap-4 justify-center">\r
      <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5521980474532" target="_blank" class="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">\r
        Get In Touch\r
      </a>\r
      <a href="/about" class="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">\r
        Learn More About Me\r
      </a>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- Footer -->\r
<footer class="bg-gray-900 text-white py-12">\r
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\r
    <div class="text-center">\r
      <h3 class="text-2xl font-bold mb-4">Daniel Fabbri</h3>\r
      <p class="text-gray-400 mb-6">Full-Stack Developer & Digital Innovator</p>\r
      <div class="flex justify-center space-x-6 mb-8">\r
        <a href="#" class="text-gray-400 hover:text-white transition-colors">LinkedIn</a>\r
        <a href="#" class="text-gray-400 hover:text-white transition-colors">GitHub</a>\r
        <a href="#" class="text-gray-400 hover:text-white transition-colors">Twitter</a>\r
        <a href="#" class="text-gray-400 hover:text-white transition-colors">Email</a>\r
      </div>\r
      <div class="border-t border-gray-800 pt-8">\r
        <p class="text-gray-400">&copy; 2024 Daniel Fabbri. All rights reserved.</p>\r
      </div>\r
    </div>\r
  </div>\r
</footer>\r
`;
  }
});

// angular:jit:style:src\app\pages\projects\projects.scss
var projects_default2;
var init_projects2 = __esm({
  "angular:jit:style:src\\app\\pages\\projects\\projects.scss"() {
    projects_default2 = "/* src/app/pages/projects/projects.scss */\n/*# sourceMappingURL=projects.css.map */\n";
  }
});

// src/app/pages/projects/projects.ts
var _a, Projects;
var init_projects3 = __esm({
  "src/app/pages/projects/projects.ts"() {
    "use strict";
    init_tslib_es6();
    init_projects();
    init_projects2();
    init_core();
    init_header();
    init_router();
    Projects = (_a = class {
    }, __name(_a, "Projects"), _a);
    Projects = __decorate([
      Component({
        selector: "app-projects",
        imports: [RouterModule, Header],
        template: projects_default,
        styles: [projects_default2]
      })
    ], Projects);
  }
});

// src/app/pages/projects/projects.spec.ts
var require_projects_spec = __commonJS({
  "src/app/pages/projects/projects.spec.ts"(exports) {
    init_testing();
    init_projects3();
    describe("Projects", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Projects]
        }).compileComponents();
        fixture = TestBed.createComponent(Projects);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_projects_spec();
//# sourceMappingURL=spec-projects.spec.js.map
