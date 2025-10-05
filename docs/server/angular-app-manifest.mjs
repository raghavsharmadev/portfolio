
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
    'index.csr.html': {size: 5679, hash: '8d3370e67eef8d8779b9c4e013af6be747dc6a62ac34bd2073ef72a6b0d4b4c6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1321, hash: 'f8a0a5e80b00d8b347cd1ea8a7794d8ff3ae25f673bdd994c7d6052c179d6fc8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 17346, hash: '9c4176bf252d6087ab8f32e823db1ccb48e92d8a665f936b836e4ed3b9860105', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'education/index.html': {size: 8411, hash: 'e2ddf8660dcca51dc138da4eecb92a50d86d14a7b5f66e32b145519b01c7e2e5', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 10380, hash: 'd2dd1a5cb670509947dfc72a4b52e2d63077322f0b7af4de2ae4fc5689578d0c', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'index.html': {size: 39928, hash: 'e2f95a5720afe9bc2a04a5375f9f3779c597e6bd049de31b1504e248e633dde9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 9313, hash: 'e46093793e83123f34c38a5d368bf68c44278541dfa5377b1c8f89aa901f015e', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 11591, hash: '97b98dafd2433929b1bd6c529379ce2feaa0a49672d49fea1ec1d92842a7c583', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'skill/index.html': {size: 12418, hash: '74c05f44d51eb5485975fbadcdd424ffedd11705929e506c4a4ae99b69a89fe9', text: () => import('./assets-chunks/skill_index_html.mjs').then(m => m.default)},
    'styles-LHPBRJ6E.css': {size: 305079, hash: '2m+ozFPhZgE', text: () => import('./assets-chunks/styles-LHPBRJ6E_css.mjs').then(m => m.default)}
  },
};
