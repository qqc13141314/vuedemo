import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/views/layout'
import login from '@/views/login'
import selfmessage from '@/views/selfmessage'
import home from '@/views/home'
import play from '@/views/play'





Vue.use(VueRouter)

const routes = [

  {
    path:'/',
 
    component: layout,
    redirect:'/home',
  
    children: [
      {
        path:'home',
        name:'home',
        component:home
      },

        
  {
    path:'selfmessage',
    name:'selfmessage',
    component:selfmessage
  },{
    path:'play',
    name:'play',
    component:play
  },

      
    ]
   
  

  }
,
{
  path:'/login',
  name:'login',
  component:login
  },
  
  {
    path:'/selfmessage',
    name:'selfmessage',
    component:selfmessage
  }
  


]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
