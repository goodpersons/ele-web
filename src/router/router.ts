import IndexView from '../views/Index.vue'

const routes = [
  {
    path: '/',
    redirect: '/tab',
  },
  {
    path: '/tab',
    name: 'tab',
    redirect: '/tab/home',
    component: IndexView,
    children: [
      { path: 'home',
        name: 'home',
        component: () => import('../views/home/HomeView.vue')
      },
      { path: 'order',
        name: 'order',
        component: () => import('../views/order/OrderView.vue')
      },
      { path: 'mine',
        name: 'mine',
        component: () => import('../views/mine/MyView.vue')
      },
    ]
  }
]

export default routes;
