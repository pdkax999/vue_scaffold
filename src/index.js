import Vue from 'vue'
import App from './App.vue'
import router from "./router/index";

import {Input,Button} from 'element-ui';

import 'element-ui/lib/theme-chalk/Input.css';
import 'element-ui/lib/theme-chalk/Button.css';

Vue.use(Input);
Vue.use(Button);

Vue.config.productionTip=false

new Vue({
  
    beforeCreate(){
        Vue.prototype.$bus=this
    },
    router, 
    el:'#root',
    render: h => h(App)
})