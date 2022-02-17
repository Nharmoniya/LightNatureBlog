<template>
  <header :class="{login:isLogin,'no-login':isLogin}">
    <template v-if="!isLogin">
    <h1>Make our dreams come true together</h1>
    <p>精品博客汇聚</p>
    <div class="btns">
      <el-button>立即登录</el-button>
      <el-button>注册账号</el-button>
    </div>
    </template>

    <template v-if="isLogin">
      <h1>Let's share</h1>
      <i class="el-icon-edit"></i>
      <img class="avatar" src="@/img/mylogo.jpg">

    </template>
  </header>
</template>

<script>
export default {
  data(){
    return{
      isLogin:true
    }
  }
}

</script>

<style scoped>

header.no-login{
  background-color: rgb(5,139,140);
  color: white;
  display: flex;
  flex-direction: column;

  align-items: center;
}
p{
  margin-top: 12px;
}
h1{
  margin-top: 42px;
}
.btns{
  margin-top: 68px;
  margin-bottom: 34px;
}
header.login{
  background-color: rgb(5,139,140);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;


}
</style>

