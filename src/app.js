import Vue from 'vue'
import Button from './button/button'
import Icon from './icon/icon'
import ButtonGroup from './button-group/button-group'

Vue.component('y-button',Button)
Vue.component('y-icon',Icon)
Vue.component('y-button-group',ButtonGroup)

new Vue({
  el: '#app'
})


//单元测试
import chai from 'chai'
const expect = chai.expect

{
  const constructor = Vue.extend(Button)
  const vm = new constructor({
    propsData: {
      icon: 'like'
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.equal('#icon-like') 
  vm.$el.remove()
  vm.$destroy()
}

{
  const constructor = Vue.extend(Button)
  const vm = new constructor({
    propsData: {
      icon: 'like',
      loading: true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelectorAll('use')[1]
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.equal('#icon-loading') 
  vm.$el.remove()
  vm.$destroy()
}

{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const constructor = Vue.extend(Button)
  const vm = new constructor({
    propsData: {
      icon: 'like',
      position: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.equal("2") 
  vm.$el.remove()
  vm.$destroy()
}

{
  const constructor = Vue.extend(Button)
  const vm = new constructor({
    propsData: {
      icon: 'like'
    }
  })
  vm.$mount()
  vm.$on('click',()=>{
    console.log(1)
  })
  vm.$el.click()
}