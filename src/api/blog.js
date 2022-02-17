import request  from '@/helpers/request';

const URL={
  GET_LIST:'/blog',
  GET_DETAIL:'/blog/:blogId',
  CREATE:'/blog',
  UPDATE:'/blog/:blogId',
  DELETE:'/blog/:blogId'
}



export default {
  //获取所有博客
  //={page:1}的意思是当我什么都不传递的时候page默认是1
  getBlogs({page=1,userId,atIndex}={page:1}){
    return request(URL.GET_LIST,'GET',{page,userId,atIndex})
  },
  //可加可不加
  //获取首页博客
  getIndexBlogs({page=1}={page:1}){
    return this.getBlogs({page,atIndex:true})
  },
  //可加可不加
  //通过Userid获取博客
  getBlogByUserId(userId,{page=1,atIndex}={page:1}){
    return this.getBlogs({userId,page,atIndex})
  },
  //获取博客详情
  getDetail({blogId}){
    return request(URL.GET_DETAIL.replace(':blogId',blogId))
  },
  //更新博客
  updateBlog({blogId},{title,content,description,atIndex}){
    return request(URL.UPDATE.replace(':blogId',blogId),'PATCH',{title,content,description,atIndex})
  },
  //删除博客
  deleteBlog({blogId}){
    return request(URL.DELETE.replace(':blogID',blogId),'DELETE')
  },
  //创建博客
  createBlog({title='',content='',description='',atIndex='false'}={title:'',content:'',description:'',atIndex:'false'}){
    return request(URL.CREATE,'POST',{title,content,description})
}
}
