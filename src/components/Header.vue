<template>
  <header :class="{login:isLogin,'no-login':!isLogin}">
    <template v-if="!isLogin">
      <h1 title="首页">Make our dreams come true together</h1>
      <p>精品博客汇聚</p>
      <div class="btns">
        <el-button>立即登录</el-button>
        <el-button>注册账号</el-button>
      </div>
    </template>

    <template v-if="isLogin">
      <router-link to="/index" class="router-index">
      <h1 title="首页">
        Let's share
      </h1>
      </router-link>
      <router-link to="/edit" >
        <i class="el-icon-edit" title="创建博客"><span>创建</span></i>
        <img class="avatar" src="@/img/mylogo.jpg">
      </router-link>
    </template>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true
    };
  }
};

</script>

<style scoped lang="scss">
.router-index{
  text-decoration: none;
}
header.no-login {

  background-color: rgb(5, 139, 140);
  color: white;
  display: flex;
  flex-direction: column;

  align-items: center;

  p {
    margin-top: 12px;
  }

  h1 {
    margin-top: 42px;
  }

  .btns {
    margin-top: 68px;
    margin-bottom: 34px;
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
  .el-icon-edit {
    color: #fff;
    font-size: 20px;
    span{
      font-size: 16px;
    }
  }
  .avatar {
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin-left: 15px;

  }
}
</style>

