import Vue from 'vue';
import Button from './button/button'
import Icon from './icon/icon'
import ButtonGroup from './button-group/button-group'

Vue.component('y-button',Button)
Vue.component('y-icon',Icon)
Vue.component('y-button-group',ButtonGroup)

new Vue({
  el: '#app'
})
