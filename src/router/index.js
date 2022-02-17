import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/index.vue'
import Create from '@/pages/Create/create.vue'
import Detail from '@/pages/Detail/detail.vue'
import Edit from '@/pages/Edit/edit.vue'
import Login from '@/pages/Login/login.vue'
import My from '@/pages/My/My.vue'
import Register from '@/pages/Register/register.vue'
import User from '@/pages/User/User.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path:'/create',
      component:Create
    },
    {
      path:'/detail',
      component:Detail
    },
    {
      path:'/edit',
      component:Edit
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/my',
      component:My
    },
    {
      path:'/register',
      component:Register
    },
    {
      path:'/user',
      component:User
    }
  ]
})
