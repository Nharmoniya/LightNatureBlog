<template>
  <div id="edit">
    <h1>编辑文章</h1>
    <h3>文章标题</h3>
    <el-input></el-input>
    <p class="msg">限30个字</p>
    <h3>内容简介</h3>
    <el-input type="textarea" rows=3></el-input>
    <p class="msg">限30个字</p>
    <h3>文章内容</h3>
    <el-input type="textarea" rows=20></el-input>
    <p class="msg">限30个字</p>
    <div class="article-function">
      <p>
        <el-button class="article-confirm">确定</el-button>
        <label>是否展示到首页</label>
        <el-switch></el-switch>
      </p>
    </div>
  </div>
</template>

<script src="./edit.js"></script>
<style scoped src="../Create/create.scss" lang="scss"></style>
