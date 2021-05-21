import Vue from "vue";
import VueRouter from "vue-router";
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import Message from "../pages/Message.vue";
import MessageDetail from "../pages/MessageDetail.vue";
import News from "../pages/News.vue";


Vue.use(VueRouter);

export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      name:'home',
      path:'/home',
      component:Home,
      children:[
        {
          name:'vue',
          path: 'news',
          component:News
        },
        {
          path: '/home/message',         
          component:Message,
          children:[
            {
              name:'detail',
              path: 'detail/:id',
             /*  props:true, */
              props:(route)=>({id:route.params.id,name:route.query.name}), 
              component:MessageDetail,
            
            },
            {
              path:'',
              redirect:'detail/1'
            }
           

          ]
        },
        {
          path:'',
          redirect:'/home/news'
        }

      ]
    },
    {
      path:'/',
      redirect:'/home'
    }

  ]



})