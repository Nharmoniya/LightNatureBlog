<template>
  <div id="user">
    <section class="user-info">
      <img :src="user.avatar" :alt="user.username" class="avatar">
      <h3>{{ user.username }}</h3>
    </section>
    <section>
      <router-link class="item" v-for="blog in blogs" :key="blog.id" :to="`/detail/${blog.id}`">

        <div class="date">
          <span class="day">{{spliteDate(blog.createdAt).date}}</span>
          <span class="month">{{spliteDate(blog.createdAt).month}}月</span>
          <span class="year">{{spliteDate(blog.createdAt).year}}</span>
        </div>
        <h3>{{blog.title}}</h3>
        <p>{{blog.content}}</p>
        <div class="actions">
          <router-link :to="`/edit/${blog.id}`">编辑</router-link>
          <a href="#" @click.prevent="onDelete(blog.id)">删除</a>
        </div>
      </router-link>
    </section>
    <section>
      <el-pagination
          class="nav"
          layout="prev, pager, next"
          :total="total"
          :current-page="page"
          @current-change="handleCurrentChange">
      </el-pagination>
    </section>
  </div>
</template>


<script src="./My.js"></script>
<style scoped src="./My.scss" lang="scss"></style>
