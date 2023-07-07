import request from '@/utils/request'

export function login(data) {
  data.grant_type = 'password'
  data.client_id = '2'
  data.client_secret = 'IExDPe3FVeD3sXk60GZ08JFssTyiI0OZjmnmh52j'
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/admins/me',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
