import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import 'vant/lib/index.css';


createApp(App)
  .use(router)
  .mount('#app')

  // 设计稿 宽度
const rootValue = 16;
const rootWidth = 375;
//  客户端 宽度
const deviceWidth = document.documentElement.clientWidth;
//  计算 1rem 的值
const rem = deviceWidth / rootWidth * rootValue;
document.documentElement.style.fontSize = rem + 'px';



