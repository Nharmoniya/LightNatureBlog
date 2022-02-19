import request from '@/helpers/request.js';
import auth from '@/api/auth.js';
import blog from '@/api/blog.js';



window.request = request
window.auth = auth
window.blog = blog



export default {
  data(){
    return{
    }
  },
}
