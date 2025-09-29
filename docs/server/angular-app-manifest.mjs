
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/home"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/skill"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/experience"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/education"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5367, hash: 'e0524d7e59ebe1d8890782875d6b6f077f0c757f23fe35e8de3020c808798f14', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1009, hash: 'fa282b76baa9ad981376af44e215b0bccffa5f7f8bad763afdb62fd7ca3b7031', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 10057, hash: 'cada0d4bb318bbf06e235eb101af76547594c3faffd6c8e653230ae65c3f5d93', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'education/index.html': {size: 8103, hash: 'c5dc48566cd606c446b3865e4934509ac314099d67d55e3bac0113a7fa50a503', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'index.html': {size: 32149, hash: '541c7c6b99ced0d91c3b295c90454da6cf81a19ce83dde9ad53f324f5da6f49b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 11283, hash: 'eba38a943ec81a71ec9790a50823d69e5c2b22a167711a456e97203ac395c067', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 9005, hash: '1c410750fa457c05f9d3c0f0aa6828b0a0d5ca31bdce036ee2b7eb409d9be758', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 16542, hash: 'ec8f1a5bfff9254452d9cc7939b2bec9e4e4f04b2573edc366db37fb5fdea3a9', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'skill/index.html': {size: 12110, hash: '447439fb8b89d46c17e40a04045978c0469ac5277448478bfc934ddff35b934c', text: () => import('./assets-chunks/skill_index_html.mjs').then(m => m.default)},
    'styles-LHPBRJ6E.css': {size: 305079, hash: '2m+ozFPhZgE', text: () => import('./assets-chunks/styles-LHPBRJ6E_css.mjs').then(m => m.default)}
  },
};
