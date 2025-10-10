
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
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SIMHJEPD.js"
    ],
    "route": "/portfolio/dashboard"
  },
  {
    "renderMode": 2,
    "redirectTo": "/portfolio",
    "route": "/portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5730, hash: '08b341a3a2f88c441bb331ae78c815482ded892b6f4862ddbf5544b947c2bb93', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1372, hash: 'b61be3065e0559ee815a813404462eee9bac286e07e169e6978c721a01c7ffc2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'education/index.html': {size: 8462, hash: 'ebb22ab88da0276a1a173fff064b0635930dac11472be71b3bebd40f0ab10a6e', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 10431, hash: '1bf8f083031cb07f1a76af2608ade8ed1834523acbcb42056f895ed8e9997e9a', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 17397, hash: 'a50cf4e1f1bf96ddb99bcd430ced384d8251bf9029fb9d2e046b715c0fa1650d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 9364, hash: '0d31c85ae03d6c4689f5b75fd321e3977a3c7304da9dfb959069b5c3f4f5dfdb', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 11642, hash: '18574e1123d6f731f2b090e762ba9675f43d752d65951e7000697f8367a23201', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'index.html': {size: 39979, hash: 'a8d045f201179f66a7c69cd3dd713fee0dad6c331bbdae6fb14b6e4339c05edc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'skill/index.html': {size: 12469, hash: 'ed145cb601edb2fe8e5bc837637cdfccf595ba581250fc7823202a20194a31c1', text: () => import('./assets-chunks/skill_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 8216, hash: 'df4624d8e3d40e3951fb6111778f52a4f02800eba773019eebd09fd5a1d6d295', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-LHPBRJ6E.css': {size: 305079, hash: '2m+ozFPhZgE', text: () => import('./assets-chunks/styles-LHPBRJ6E_css.mjs').then(m => m.default)}
  },
};
