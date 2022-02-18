<template>
  <div id="create">
    <h1>创建文章</h1>
    <div class="article-title">
      <h3>文章标题</h3>
      <el-input></el-input>
      <p class="msg">限30字</p>
    </div>

    <div class="article-description">
      <h3>内容简介</h3>
      <el-input></el-input>
      <p class="msg">限30字</p>
    </div>

    <div class="article">
      <h3>文章内容</h3>
      <el-input type="textarea" rows=20></el-input>
      <p class="msg">限30字</p>
    </div>

    <div class="article-function">
    <p>
      <el-button class="article-confirm">确定</el-button>
      <label>是否展示到首页</label>
      <el-switch></el-switch>
    </p>
    </div>
  </div>
</template>

<script src="./create.js"></script>
<style scoped src="./create.scss" lang="scss"></style>
