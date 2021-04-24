import Vue from "vue";
import App from "@/App.vue";
import VueResource from "vue-resource";

Vue.use(VueResource);

  new Vue({

   beforeCreate(){

     Vue.prototype.$eventBus = this 

   }, 
    components:{
      App
    },
     template: '<App/>'
  }).$mount('#root')