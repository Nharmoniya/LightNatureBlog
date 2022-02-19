<template>
  <div id="login">
    <h4>用户名</h4>
    <el-input class="el-input-username" v-model="username" placeholder="用户名"></el-input>
    <h4>密码</h4>
    <el-input class="el-input-password" v-model="password" type="password" placeholder="密码" ></el-input>
    <el-button size="medium" @click="onlogin">立即登录</el-button>
    <p class="notice">没有账号？<router-link to="/register">注册新用户</router-link></p>
  </div>
</template>

<script src="./login.js"></script>
<style scoped src="./login.scss" lang="scss"></style>
