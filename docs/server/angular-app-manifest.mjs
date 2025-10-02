
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
    'index.csr.html': {size: 5367, hash: 'd7e9860e85a2514b89722860438195b8652c4ab239bc20f93b207f49379104f9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1009, hash: '14ff66fd80b4c82fa63528d4b0a2e6205d86e0e6d61e5df282ed1fb5534667e2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 10072, hash: '40eaaef2354c65d13ad244655ed6055769c42960f79f956186c1ecbb4d446d56', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 17038, hash: '0d4f805e72d4399cccbcfbe87afb6c2f45d847596c8930fb8b005c8be2ac121d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'education/index.html': {size: 8103, hash: '0d641fbdac87653aeef316eb3d4cc6215edc57590f43805ebd48b003c9a51e53', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'index.html': {size: 39620, hash: '7785b2b889eed97b6b7b6f4e66a0f7877db4c57a077053f97a0960dc712a04db', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 9005, hash: '3634dd77e0f8c8147665ef1a98af1eb2ca47065dee6032eedb8cd5c81ba53aa2', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 11283, hash: 'a057baa9e39127aa89dad980adba7ce8cd0fcde5e6e845458fa1e0219a78a4cc', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'skill/index.html': {size: 12110, hash: '7dbb6dd2c58c50ede002c0a622cb3dc1d8c7bf01337253ad84208fec2f9ed015', text: () => import('./assets-chunks/skill_index_html.mjs').then(m => m.default)},
    'styles-LHPBRJ6E.css': {size: 305079, hash: '2m+ozFPhZgE', text: () => import('./assets-chunks/styles-LHPBRJ6E_css.mjs').then(m => m.default)}
  },
};
