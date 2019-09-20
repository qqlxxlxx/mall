import axios from 'axios'

export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
  })

  // 添加请求拦截器
  instance.interceptors.request.use(config => {
    // console.log(config);
    // 一些处理：一些信息不符合服务器的要求；请求图标展示；携带特殊信息如登录（令牌token），跳转相应页面
    return config;
  }, err => {
    return Promise.reject(err);
  })
  // 添加响应拦截器
  instance.interceptors.response.use((res) => {
    // console.log(res);
    return res.data;
  }, (err) => {
    return Promise.reject(err);
  })

  return instance(config);
}
