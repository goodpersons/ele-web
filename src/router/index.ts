import { createWebHistory, createRouter } from 'vue-router'

import routes from './router'

const router = createRouter({
  //Vue Router 配置中使用了 createMemoryHistory，这意味着路由历史记录将仅存储在内存中，并且不会反映在浏览器的地址栏中。因此，URL 不会发生变化。
  history: createWebHistory(),
  routes
})

export default router;
