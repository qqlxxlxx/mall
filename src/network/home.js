import {request} from 'network/request.js'

export function getHomeMultialdata() {
  return request({
    url: '/multidata'
  })
}

export function getHomeGoods(url, page=1, limit=20) {
  return request({
    url: `/${url}?_page=${page}&_limit=${limit}`
  })
}
