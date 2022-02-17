import request from '../helpers/request';
//使用方式👇
// request('/auth/login', 'POST', {username: 'hunger', password: '123456'})
//   .then(data=>{
//     console.log(data)
//   })


const URL = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  GET_INFO: '/auth'
};

export default {
  register({username, password}) {
    return request(URL.REGISTER, 'POST', {username, password});
  },
  login({username, password}) {
    return request(URL.LOGIN, 'POST', {username, password});
  },
  logout() {
    return request(URL.LOGOUT);
  },
  getInfo() {
    return request(URL.GET_INFO);
  },
};
