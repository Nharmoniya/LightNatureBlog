import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';


Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component:()=>import('@/pages/Index/index.vue'),
    },
    {
      path: '/index',
      component:()=>import('@/pages/Index/index.vue'),
    },
    {
      path: '/create',
      component:()=>import('@/pages/Create/create.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/detail/:blogId',
      component:()=>import('@/pages/Detail/detail.vue'),
    },
    {
      path: '/edit/:blogId',
      component:()=>import('@/pages/Edit/edit.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/login',
      component:()=>import('@/pages/Login/login.vue'),
    },
    {
      path: '/my',
      component:()=>import('@/pages/My/My.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/register',
      component:()=>import('@/pages/Register/register.vue'),
    },
    {
      path: '/user/:userId',
      component:()=>import('@/pages/User/User.vue'),
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(isLogin => {
      if (!isLogin) {
        next({
          path: '/login',
          query: {redirect: to.fullPath}
        });
      } else {
        next();
      }
    });
  } else {
    next();//确保一定要调用next
  }
});

export default router;