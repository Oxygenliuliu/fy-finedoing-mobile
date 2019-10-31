import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
/* Vue.http.options.withCredentials = true */

App.mpType = 'app'

const app = new Vue({
    ...App
})
const res = uni.getSystemInfoSync();
Vue.prototype.winHeight = res.windowHeight * 0.93;				
app.$mount()
