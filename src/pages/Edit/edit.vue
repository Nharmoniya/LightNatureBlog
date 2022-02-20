<template>
  <div id="create">
    <h1>编辑文章</h1>
    <div class="article-title">
      <h3>文章标题</h3>
      <el-input v-model="title" maxlength="30" show-word-limit></el-input>
      <p class="msg">限30字</p>
    </div>

    <div class="article-description">
      <h3>内容简介</h3>
      <el-input v-model="description" maxlength="30" show-word-limit></el-input>
      <p class="msg">限30字</p>
    </div>

    <div class="article">
      <h3>文章内容</h3>
      <el-input type="textarea" rows=20 v-model="content" maxlength="400" show-word-limit></el-input>
      <p class="msg">限400字</p>
    </div>

    <div class="article-function">
      <p>
        <el-button class="article-confirm" @click="onEdit">确定</el-button>
        <label>是否展示到首页</label>
        <el-switch
            v-model="atIndex"
            active-color="#13ce66"
            inactive-color="#ff4949">
        </el-switch>
      </p>
    </div>
  </div>
</template>

<script src="./edit.js"></script>
<style scoped src="../Create/create.scss" lang="scss"></style>
