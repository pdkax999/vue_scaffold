import Vue from "vue";
import App from "@/App.vue";

  new Vue({

   beforeCreate(){

     Vue.prototype.$globalEventBus = this 

   }, 
    components:{
      App
    },
     template: '<App/>'
  }).$mount('#root')