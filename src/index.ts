import './class-component-hooks'
import App from './App.vue'
import Vue from 'vue'
import router from './router/index'
import global from './global'

// sync(store, router)
global.init()

const app = new Vue({
  router,
  // store,
  ...App
})

app.$mount('#app')
