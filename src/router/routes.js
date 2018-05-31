
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index'), name: 'utama', children: [
        { path: ':id', component: () => import('pages/halamanRinci'), name: 'halaman_rinci' }
      ] },
      { path: 'berita', component: () => import('pages/berita'), name: 'berita'}
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
