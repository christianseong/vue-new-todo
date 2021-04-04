import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../components/Main.vue'),
    children:[
        {
            path:'/main/zett',
            name:'zett',
            component:()=> import('../components/Zett.vue')
        },
        {
            path:'/main/sova',
            name:'sova',
            component:()=> import('../components/Sova.vue')
        },
        {
            path:'/main/reyna',
            name:'reyna',
            component:()=> import('../components/Reyna.vue')
        },
        {
            path:'/main/phoenix',
            name:'phoenix',
            component:()=> import('../components/Phoenix.vue')
        }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
