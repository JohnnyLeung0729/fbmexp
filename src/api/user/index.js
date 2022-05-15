import request from '@/utils/axios'

export function getUserInfo(params) {
  return request({
    url: '/user/info/get',
    method: 'get',
    data:params
  })
}

export function login(params) {
  return request({
    url: '/user/login',
    method: 'get',
    data:params
  })
}
