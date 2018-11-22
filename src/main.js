/**
 * Created by LQ on 2018/11/19.
 */
import Vue from 'vue'
import App from './App.vue'
//自定义的模块一定要 . 开头
import router from './router'
import TopHeader from './components/TopHeader/TopHeader.vue'

//注册全局组件
Vue.component('TopHeader', TopHeader)
/*
eslint-disable no-new
 */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})

