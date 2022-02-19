import auth from '@/api/auth.js'
import {mapActions} from 'vuex'
window.auth=auth

export default {
  data(){
    return{
      username:'',
      password:''
    }
  },
  methods:{
    ...mapActions(['login']),
    onlogin(){
      this.login({username:this.username,password:this.password}).then(()=>{
        this.$router.push({path:this.$route.query.redirect || '/'})
      })
    }
  }



}