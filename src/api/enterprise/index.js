import request from '@/utils/axios'

export function getListenter(params) {
  return request({
    url: '/enterprise',
    method: 'get',
    data:params
  })
}
