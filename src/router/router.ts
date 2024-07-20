import IndexView from '../views/Index.vue'

const routes = [
  {
    path: '/',
    redirect: '/tab/home',
  },
  {
    path: '/tab',
    name: 'tab',
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
