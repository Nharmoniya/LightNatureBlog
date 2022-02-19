<template>
  <body>
  <section>
    <router-link class="item" v-for="blog in blogs" :to="`/detail/${blog.id}`" :key="blog">
    <div class="section1">
     <div class="head">
       <img :src="blog.user.avatar" :alt="blog.user.username"/>
       <figcaption>{{ blog.user.username }}</figcaption>
     </div>
     <div class="fontbody">
       <h3>{{blog.title}} <span>{{friendlyDate(blog.createdAt)}}</span></h3>
       <p>{{ blog.description }}</p>
     </div>
    </div>
    </router-link>
  </section>
  <section>
    <el-pagination
        class="nav"
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="handleCurrentChange">
    </el-pagination>
  </section>

  </body>
</template>

<script src="./index.js"></script>
<style scoped src="./index.scss" lang="scss"></style>
