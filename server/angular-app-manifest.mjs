
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/danielfabbri/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/danielfabbri"
  },
  {
    "renderMode": 2,
    "route": "/danielfabbri/about"
  },
  {
    "renderMode": 2,
    "route": "/danielfabbri/skills"
  },
  {
    "renderMode": 2,
    "route": "/danielfabbri/projects"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2150, hash: 'd8a576a1ef3f3bd3ed103d88da43997fcea08b1e7f47c3a832355a19dc87b806', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 963, hash: 'b9e575bec2fdafc2e6741f2d21b0d281903072de6a2f0e11a72b707a595f952e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 20409, hash: '91283acd9876e2e3527df0c63c13dbdeb301c3901b5489a7e60e002e9a9a010f', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 20457, hash: '6177ccfe0528ac0486146edfc7360d6be476e07a563924f96702822f321ed564', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 21677, hash: '8493b7a0af7a5b7db2b131a56282cbf4adbe0d1a29e45b186f09043a351b4550', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 37615, hash: '782304d6eb37010a07fd06f5a0115d79f37973ad472f22e20825eab7acf1d63d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-M5G5LQOG.css': {size: 19909, hash: 'B1B6Wx7ETUM', text: () => import('./assets-chunks/styles-M5G5LQOG_css.mjs').then(m => m.default)}
  },
};
