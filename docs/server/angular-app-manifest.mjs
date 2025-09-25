
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
    'index.csr.html': {size: 5367, hash: 'a96b204a15c357e71968fba1ccab22d00c21f1f4ca32a804517d28429fde62db', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1009, hash: '7813c6311ee526be6d8ae67356816a5593a90f473cbc8c50a01fdb0ffcfa8d30', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'education/index.html': {size: 8103, hash: 'a98f78b88c68abf1abfbaed5dbe384f86e2e6b1a52b2dd44ea760ae2ebf76be1', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'index.html': {size: 32087, hash: '737c5ccfb33d1d27816dc4dda0c710be55adc76a56c8113f62b15f109c47d9e4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 9005, hash: '15af5d1770fe563ff68ca5f74eb370b9ddab2c0f1a53dc4257353f85205900c1', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 9993, hash: '66833d6ee2b3a7bf47959e3dc3ebdc62e6fffcfa07cc549504346c7f9a57fc6a', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 16542, hash: 'e4c1f370d2a267f8088f7d25d90f942638742b9d601929641c6d732b1017c879', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 11283, hash: '3c8a0e27f1614d32264b0b6741db5a212411e4be94eeec6e5a7d06f8e8a5e6c0', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'skill/index.html': {size: 12110, hash: '657c113b9b239791096bf76648901c2e41eab92afcd6699a9099a1fc7a988eac', text: () => import('./assets-chunks/skill_index_html.mjs').then(m => m.default)},
    'styles-LHPBRJ6E.css': {size: 305079, hash: '2m+ozFPhZgE', text: () => import('./assets-chunks/styles-LHPBRJ6E_css.mjs').then(m => m.default)}
  },
};
