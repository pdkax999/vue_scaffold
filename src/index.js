import Vue from 'vue'
import App from '@/App'
import PubSub from 'pubsub-js'

Vue.config.productionTip=false

Vue.prototype.PubSub = PubSub


new Vue({
    el:'#root',
    render: h => h(App)
})