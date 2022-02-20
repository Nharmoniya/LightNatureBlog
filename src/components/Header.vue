<template>
  <header :class="{login:isLogin,'no-login':!isLogin}">
    <template v-if="!isLogin">
      <h1 title="首页"><router-link to="index">Make our dreams come true together</router-link></h1>
      <p>精品博客汇聚</p>
      <div class="btns">
        <router-link to="/login">
          <el-button class="el-login">
            立即登录
          </el-button>
        </router-link>
        <router-link to="/register">
          <el-button>
            注册账号
          </el-button>
        </router-link>
      </div>
    </template>

    <template v-if="isLogin">
      <router-link to="/index" class="router-index">
        <h1 title="首页">
          Let's share
        </h1>
      </router-link>

      <div class="user">
        <i class="el-icon-right"></i>
        <img class="avatar" :src="user.avatar" :alt="user.username" :title="user.username"/>
        <ul>
          <li>

            <router-link to="/my"><i class="el-icon-user-solid">我的</i></router-link>
          </li>
          <li><a href="#" @click="onLogout"><i class="el-icon-d-arrow-right">注销</i></a></li>
          <li><router-link to="/create"><i class="el-icon-plus" title="创建博客">创建</i></router-link></li>
        </ul>
      </div>
    </template>
  </header>
</template>

<script>

import {mapGetters, mapActions} from 'vuex';
import auth from '@/api/auth.js';

window.auth = auth;
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'isLogin',
      'user'
    ])
  },
  created() {
    this.checkLogin();
  },
  methods: {
    ...mapActions([
      'checkLogin',
      'logout'
    ]),
    onLogout() {
      this.logout();
    }
  }
};

</script>

<style scoped lang="scss">
.router-index {
  text-decoration: none;
}

header.no-login {

  background-color: rgb(5, 139, 140);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
a{
  text-decoration: none;
  color: #fff;
}
  p {
    margin-top: 12px;
  }

  h1 {
    margin-top: 42px;
  }

  .btns {
    margin-top: 68px;
    margin-bottom: 34px;

    .el-login {
      margin-right: 20px;
    }
  }
}

header.login {
  background-color: rgb(5, 139, 140);
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin-bottom: 5px;
    margin-top: 5px;
    padding: 0;
    color: #fff;
    font-size: 40px;
    text-transform: uppercase;
    flex: 1;
  }

  .el-icon-right {
    color: white;
    font-size: 45px;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin-left: 15px;

  }

  .user {
    position: relative;
    ul {
      display: none;
      position: absolute;
      right: 0;
      list-style: none;
      border: 1px solid #eaeaea;
      margin:0;
      padding: 0;
      background-color: #fff;
      transform: translateX(14px);
      width: 70px;
      text-align: center;
      a {
        text-decoration: none;
        color: #333;
        font-size: 14px;
        display: block;
        padding: 5px 10px;

        &:hover {
          background-color: #eaeaea;
        }
      }
    }

    &:hover ul {
      display: block;
    }
  }
}
</style>

