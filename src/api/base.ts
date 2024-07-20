import axios from 'axios';
import { showDialog  } from "vant";

const instance = axios.create({
  baseURL: '/api',
})

// 响应拦截器
instance.interceptors.response.use((response) => {
    const { data: _data } = response
    const { code, msg, data } = _data
    if(code !== 0){
      showDialog({
        message: msg
      }).then(()=> {
        // 关闭弹窗逻辑
      })
    }
    return data
  }
)

export default instance
