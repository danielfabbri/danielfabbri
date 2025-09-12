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

// angular:jit:template:src\app\pages\skills\skills.html
var skills_default;
var init_skills = __esm({
  "angular:jit:template:src\\app\\pages\\skills\\skills.html"() {
    skills_default = `<app-header />\r
\r
<!-- Hero Section \r
<section class="pt-20 pb-16 bg-gradient-to-br from-gray-600 to-gray-900 text-white">\r
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">\r
    <div class="text-center">\r
      <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">\r
        Skills & Technologies\r
      </h1>\r
      <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">\r
        A comprehensive overview of my technical expertise and tools\r
      </p>\r
    </div>\r
  </div>\r
</section>-->\r
\r
<!-- Skills Overview -->\r
<section class="py-20 bg-white">\r
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\r
    <div class="text-center mb-16">\r
      <h2 class="text-4xl font-bold text-gray-900 mb-4 mt-8">My Skills & Expertise</h2>\r
      <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>\r
      <p class="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">\r
        A showcase of the technologies, tools, and practices I master. From development and design to leadership and innovation.\r
      </p>\r
    </div>\r
\r
    \r
\r
\r
\r
\r
\r
\r
    <h2 class="text-2xl font-bold mb-1 mt-10">Frontend</h2>\r
    <p class="mb-5 text-gray-500">I create responsive and interactive web interfaces using modern frontend frameworks and libraries, ensuring a frictionless user experience across devices.</p>\r
    <div class="flex flex-wrap  gap-2">\r
      <!-- Frontend -->\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-react-original colored text-lg mr-2"></i> React\r
      </span>\r
    \r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-angularjs-plain colored text-lg mr-2"></i> Angular\r
      </span>\r
    \r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-vuejs-plain colored text-lg mr-2"></i> Vue.js\r
      </span>\r
    \r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-javascript-plain colored text-lg mr-2"></i> JavaScript\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-jquery-plain colored text-lg mr-2"></i> Jquery\r
      </span>\r
    \r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-typescript-plain colored text-lg mr-2"></i> TypeScript\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-nextjs-plain colored text-lg mr-2"></i> Next\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-redux-plain colored text-lg mr-2"></i> Redux\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-tailwindcss-plain colored text-lg mr-2"></i> Tailwind\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-materialui-plain colored text-lg mr-2"></i> Material\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-bootstrap-plain colored text-lg mr-2"></i> Bootstrap\r
      </span>\r
      <span class="flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-materializecss-plain colored text-lg mr-2"></i> Materialize\r
      </span>\r
    \r
      <!-- Others -->\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-html5-plain colored text-lg mr-2"></i> HTML5\r
      </span>\r
    \r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-css3-plain colored text-lg mr-2"></i> CSS3\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-sass-plain colored text-lg mr-2"></i> SCSS\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-d3js-plain colored text-lg mr-2"></i> D3.js\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-devicon-plain colored text-lg mr-2"></i> Devicon\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-google-plain colored text-lg mr-2"></i> Google Fonts\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-fontawesome-plain colored text-lg mr-2"></i> Font Awesome\r
      </span>\r
      <span class="flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-brain-plain colored text-lg mr-2">#</i> Brain.js\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-materialcss-plain colored text-lg mr-2">#</i> Material Icons\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-highcharts-plain colored text-lg mr-2">#</i> Highcharts\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-responsive-plain colored text-lg mr-2">#</i> Responsive\r
      </span>\r
    \r
    \r
    </div>\r
\r
\r
\r
\r
    \r
    <h2 class="text-2xl font-bold mb-1 mt-10">Backend</h2>\r
    <p class="mb-5 text-gray-500">I develop scalable server-side applications, RESTful APIs, and real-time services, focusing on performance, security, and maintainability.</p>\r
    <div class="flex flex-wrap  gap-2">\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-nodejs-plain colored text-lg mr-2"></i> Node.js\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-expressjs-plain colored text-lg mr-2"></i> Express.js\r
      </span>\r
    \r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-python-plain colored text-lg mr-2"></i> Python\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-jest-plain colored text-lg mr-2"></i> Jest\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-cplusplus-plain colored text-lg mr-2"></i> C++\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-csharp-plain colored text-lg mr-2"></i> C#\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-php-plain colored text-lg mr-2"></i> PHP\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-laravel-plain colored text-lg mr-2"></i> Laravel\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-hadoop-plain colored text-lg mr-2"></i> Hadoop\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-apachespark-plain colored text-lg mr-2"></i> Spark\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-selenium-plain colored text-lg mr-2"></i> Selenium\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-wampp-plain colored text-lg mr-2">#</i> Wampp / Xampp\r
      </span>\r
    \r
    \r
    </div>\r
\r
    \r
\r
\r
    \r
    \r
    <h2 class="text-2xl font-bold mb-1 mt-10">Databases</h2>\r
    <p class="mb-5 text-gray-500">I design and manage relational and non-relational databases, ensuring efficient data storage and integrity for all applications.</p>\r
    <div class="flex flex-wrap  gap-2">\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-mysql-plain colored text-lg mr-2"></i> MySQL\r
      </span>\r
    \r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-mongodb-plain colored text-lg mr-2"></i> MongoDB\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-postgresql-plain colored text-lg mr-2"></i> PostgreSQL\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-firebase-plain colored text-lg mr-2"></i> Firebase\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-sql-plain colored text-lg mr-2">#</i> SQL\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-nosql-plain colored text-lg mr-2">#</i> NoSQL\r
      </span>\r
    </div>\r
\r
    \r
    \r
    <h2 class="text-2xl font-bold mb-1 mt-10">Infrastructure</h2>\r
    <p class="mb-5 text-gray-500">I deploy and maintain cloud infrastructure, containerized environments, and CI/CD pipelines to ensure high availability and reliability of applications.</p>\r
    <div class="flex flex-wrap  gap-2">\r
      \r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-mongodb-plain colored text-lg mr-2"></i> MongoDB\r
      </span>\r
    \r
      <!-- DevOps / Infra -->\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-docker-plain colored text-lg mr-2"></i> Docker\r
      </span>\r
    \r
      \r
      <span class="flex items-center px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-amazon-aws-icon-svg-png-download-2944772.png?f=webp" alt="Amazon" class="w-5 h-5 mr-2">\r
        AWS\r
      </span>\r
    \r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-google-plain colored text-lg mr-2"></i> Google Cloud\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-kubernetes-plain colored text-lg mr-2"></i> Kubernetes\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-git-plain colored text-lg mr-2"></i> Git\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-heroku-plain colored text-lg mr-2"></i> Heroku\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-cpanel-plain colored text-lg mr-2"></i> CPanel\r
      </span>\r
    \r
    </div>\r
\r
\r
    \r
    <h2 class="text-2xl font-bold mb-1 mt-10">LLMs</h2>\r
    <p class="mb-5 text-gray-500">I work with large language models to integrate AI capabilities into applications, including natural language processing, chatbots, and intelligent automation.</p>\r
    <div class="flex flex-wrap  gap-2">\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg" class="w-5 h-5 mr-2" alt="Openai"/> Openai\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-gemini-plain colored text-lg mr-2"></i> Gemini\r
      </span>\r
\r
      \r
\r
\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/deepseek.svg" class="w-5 h-5 mr-2" alt="Gemini"/> Deepseek\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-pollinations-plain colored text-lg mr-2"></i> Pollinations\r
      </span>\r
    </div>\r
\r
\r
\r
    \r
    \r
    <h2 class="text-2xl font-bold mb-1 mt-10">Integrations</h2>\r
    <p class="mb-5 text-gray-500">I work with large language models to integrate AI capabilities into applications, including natural language processing, chatbots, and intelligent automation.</p>\r
    <div class="flex flex-wrap  gap-2">\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg" class="w-4 h-4 mr-2" alt="WhatsApp"/> WhatsApp\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-instagram-plain colored text-lg mr-2"></i> Instagram\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-facebook-plain colored text-lg mr-2"></i> Facebook Pixel\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-google-plain colored text-lg mr-2"></i> Social Login\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-recaptcha-plain colored text-lg mr-2">#</i> reCaptcha\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-iugu-plain colored text-lg mr-2">#</i> Iugu payments\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-paypal-plain colored text-lg mr-2">#</i> Paypal\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-google-plain colored text-lg mr-2"></i> Google Maps\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-ifood-plain colored text-lg mr-2">#</i> iFood\r
      </span>\r
    </div>\r
\r
\r
\r
    \r
    <h2 class="text-2xl font-bold mb-1 mt-10">Tools</h2>\r
    <p class="mb-5 text-gray-500">I leverage development, collaboration, and productivity tools to streamline workflows, enhance team efficiency, and maintain project quality.</p>\r
    <div class="flex flex-wrap  gap-2">\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-npm-plain colored text-lg mr-2"></i> NPM\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-visualstudio-plain colored text-lg mr-2"></i> Visual studio\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-github-plain colored text-lg mr-2"></i> Github / Copilot / Pages / Actions\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-sourcetree-plain colored text-lg mr-2"></i> Sourcetree\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-atom-plain colored text-lg mr-2"></i> Atom\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-postman-plain colored text-lg mr-2"></i> Postman\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-jira-plain colored text-lg mr-2"></i> Jira\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-confluence-plain colored text-lg mr-2"></i> Confluence\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-slack-plain colored text-lg mr-2"></i> Slack\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-trello-plain colored text-lg mr-2"></i> Trello\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-google-plain colored text-lg mr-2"></i> Google Workspace\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-pycharm-plain colored text-lg mr-2"></i> Pycharm\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-swagger-plain colored text-lg mr-2"></i> Swagger\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-figma-plain colored text-lg mr-2"></i> Figma\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-levable-plain colored text-lg mr-2">#</i> Lovable\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-miro-plain colored text-lg mr-2">#</i> Miro\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-cursor-plain colored text-lg mr-2">#</i> Cursor\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-openai-plain colored text-lg mr-2">#</i> Trae\r
      </span>\r
      <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
        <i class="devicon-websocket-plain colored text-lg mr-2">#</i> Websocket\r
      </span>\r
    </div>\r
    \r
\r
    \r
\r
    <h2 class="text-2xl font-bold mb-3  mt-10">Architecture</h2>\r
    <p class="mb-5 text-gray-500">I create responsive and interactive web interfaces using modern frontend frameworks and libraries, ensuring a seamless user experience across devices.</p>\r
<div class="flex flex-wrap gap-2">\r
  <!-- Design Patterns -->\r
  <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
    <i class="devicon-graphql-plain colored text-lg mr-2"></i> GraphQL\r
  </span>\r
  <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
    <i class="devicon-bpmn-plain colored text-lg mr-2">#</i> BPMN\r
  </span>\r
  <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
    <i class="devicon-uml-plain colored text-lg mr-2">#</i> UML\r
  </span>\r
  \r
  <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
    <i class="devicon-architecture-plain text-lg mr-2">#</i> Microservices\r
  </span>\r
\r
  <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
    <i class="devicon-architecture-plain text-lg mr-2">#</i> Monolith\r
  </span>\r
\r
  <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
    <i class="devicon-rest-plain colored text-lg mr-2">#</i> REST API\r
  </span>\r
\r
\r
  <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
    <i class="devicon-event-plain text-lg mr-2">#</i> Event-driven\r
  </span>\r
\r
  <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
    <i class="devicon-cqrs-plain text-lg mr-2">#</i> CQRS\r
  </span>\r
\r
  <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
    <i class="devicon-soa-plain text-lg mr-2">#</i> SOA\r
  </span>\r
  <span class="flex items-center px-5 py-2 border border-gray-300 text-gray-700 rounded-full text-sm hover:border-gray-500 hover:text-gray-900 transition-colors">\r
    <i class="devicon-soa-plain text-lg mr-2">#</i> SPA\r
  </span>\r
</div>\r
\r
\r
\r
\r
  </div>\r
</section>\r
\r
<!-- CTA Section -->\r
<section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600">\r
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">\r
    <h2 class="text-4xl font-bold text-white mb-6">Ready to Collaborate?</h2>\r
    <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">\r
      Let's discuss how my skills can help bring your project to life.\r
    </p>\r
    <div class="flex flex-col sm:flex-row gap-4 justify-center">\r
      <a href="/projects" class="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">\r
        View My Projects\r
      </a>\r
      <a href="/contact" class="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">\r
        Get In Touch\r
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

// angular:jit:style:src\app\pages\skills\skills.scss
var skills_default2;
var init_skills2 = __esm({
  "angular:jit:style:src\\app\\pages\\skills\\skills.scss"() {
    skills_default2 = "/* src/app/pages/skills/skills.scss */\n/*# sourceMappingURL=skills.css.map */\n";
  }
});

// src/app/pages/skills/skills.ts
var _a, Skills;
var init_skills3 = __esm({
  "src/app/pages/skills/skills.ts"() {
    "use strict";
    init_tslib_es6();
    init_skills();
    init_skills2();
    init_core();
    init_header();
    init_router();
    Skills = (_a = class {
    }, __name(_a, "Skills"), _a);
    Skills = __decorate([
      Component({
        selector: "app-skills",
        imports: [RouterModule, Header],
        template: skills_default,
        styles: [skills_default2]
      })
      // RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollOffset: [0, 80] })
    ], Skills);
  }
});

// src/app/pages/skills/skills.spec.ts
var require_skills_spec = __commonJS({
  "src/app/pages/skills/skills.spec.ts"(exports) {
    init_testing();
    init_skills3();
    describe("Skills", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Skills]
        }).compileComponents();
        fixture = TestBed.createComponent(Skills);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_skills_spec();
//# sourceMappingURL=spec-skills.spec.js.map
