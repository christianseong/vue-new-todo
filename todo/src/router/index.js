import Vue from 'vue'
import VueRouter from 'vue-router'
import Boo from '../components/Boo'
import Foo from '../components/Foo'


Vue.use(VueRouter)





const routes = [
    { path: '/foo', component: Foo },
    { path: '/boo', component: Boo }
  ]
  
  // 3. `routes` 옵션과 함께 router 인스턴스를 만드세요.
  // 추가 옵션을 여기서 전달해야합니다.
  // 지금은 간단하게 유지하겠습니다.
  const router = new VueRouter({
    routes ,
    mode : 'history'
  })
  
export default router
