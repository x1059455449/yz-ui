import Vue from 'vue';
import Button from './button/button'
import Icon from './icon/icon'

Vue.component('y-button',Button)
Vue.component('y-icon',Icon)

new Vue({
  el: '#app'
})
