const routes = [{
  path: '/',
  component: () => import('layouts/layout'),
  children: [{
    path: '',
    component: () => import('pages/page1/page1')
  }]
},

{
  path: '/about/',
  component: () => import('layouts/layout'),
  children: [{
    path: '',
    component: () => import('pages/page2/page2')
  }]
},

{
  path: '/work/',
  component: () => import('layouts/layout'),
  children: [{
    path: '',
    component: () => import('pages/page3/page3')
  }]
},

{
  path: '/contact/',
  component: () => import('layouts/layout'),
  children: [{
    path: '',
    component: () => import('pages/page3/page3')
  }]
}
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/X_error/404.vue')
  })
}

export default routes
