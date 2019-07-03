import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router, /* 原本是router: router，但是基于ES6语法，键值相同时可以直接显示一个就可以了 */
  components: { App }, /* 原本是App: App，但是基于ES6语法，键值相同时可以直接显示一个就可以了 */
  template: '<App/>',
  render: h => h(App),
}).$mount('#app')
