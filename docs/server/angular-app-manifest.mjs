
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
    'index.csr.html': {size: 5367, hash: 'fbe5bb1e847647f3d7a1914439757be0e3d6e276310cb3a3fb62c9da0de7d061', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1009, hash: '15c99681fdf3721f20d24aab2616802c61c2c1b827eb2976f3f360f99571e8b9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 9964, hash: '8b1a445dcc8509e01d6f31b8720faba50dac70acb288fd3527588ac92c5c4600', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'education/index.html': {size: 8550, hash: '6aa65c473847ab8df0da5cae7d319c46e865ad64720e413cb6d7b55517600e57', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'index.html': {size: 43982, hash: 'c06dfd0962a7423d134ba2144f71f156e380aa90ccc63c24d63b615d6b52de48', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 8639, hash: 'a8d7b756c70ec533e091f6b469cddec34cafe6e39446af23243a935300e69a9d', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'skill/index.html': {size: 12328, hash: 'd0d13dc83fe42f94c0cbe3f429ab2e24c31a7a33d6fae3fe17decafe39f4e344', text: () => import('./assets-chunks/skill_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 16455, hash: 'fe41ff1f202c3cf243052fad90b810cbcbd0c1c9f6d59b69840cfb14d8c9a450', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 16306, hash: 'ec2e5b85cbe71d0122d2495560fd99e846df4981ad7afa5180115bfddd9a2586', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'styles-LHPBRJ6E.css': {size: 305079, hash: '2m+ozFPhZgE', text: () => import('./assets-chunks/styles-LHPBRJ6E_css.mjs').then(m => m.default)}
  },
};
