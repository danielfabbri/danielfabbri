
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/skills"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2137, hash: '86fe7391f3ecc3b9f5b3932917b191f413da591d6d3b111d48578e436aa33481', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 950, hash: '74c6dfffd1ede44c038eed6c58624072a9cc10048b30250cec8f57609b7f1e72', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 22547, hash: '137e452cb876ee617e858960bbfcf0366838c74687e3852f3f41a6fd42d2425f', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 37128, hash: 'a388b6dd82868dafb4123faab642c56cf63cb18a930283aabe048ff79c5fdc80', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 40921, hash: '93d66a2cea37972bf26e5705d63e08b8c9b37158b36d945ffef21007e8c862bb', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 27097, hash: '9dc4849c12a8b2efbe3f1475f61a6f87cc842ec3469a58ab098f02af7b95ff30', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-HRLCCK7S.css': {size: 151190, hash: 'eGT08qhLeq0', text: () => import('./assets-chunks/styles-HRLCCK7S_css.mjs').then(m => m.default)}
  },
};
