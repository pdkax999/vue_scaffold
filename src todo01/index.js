import Vue from "vue";
import App from "@/App.vue";




  new Vue({
  
    components:{
      App
    },
    beforeCreate(){

      Vue.prototype.$bus = this

    },
     template: '<App/>'
  }).$mount('#root')