import blog from '@/api/blog.js'


export default {
  data(){
    return{
      blogs:[],
      user:{},
      page:1,
      total:0
    }
  },
  created() {
    this.userid=this.$route.params.userId
    this.page=this.$route.query.page || 1
    blog.getBlogByUserId(this.userid,{page:this.page})
      .then(res=>{
        this.page=res.page
        this.total=res.total
        this.blogs=res.data
        if (res.data.length>0){
          this.user=res.data[0].user
        }
      })
  },
  methods:{
    spliteDate(dataStr){
      let dateObj=typeof dataStr === 'object' ? dataStr:new Date(dataStr)
      return{
        date:dateObj.getDate(),
        month:dateObj.getMonth(),
        year:dateObj.getFullYear()
      }
    },
    handleCurrentChange(newpage){
      blog.getBlogByUserId(this.userid,{page:newpage}).then(res=>{
        this.blogs=res.data
        this.total=res.total
        this.page=res.page
        this.$router.push({path:'/',query:{page:newpage}})
      })
    }
  }
}