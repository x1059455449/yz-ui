<!--  -->
<template>
  <button class="y-button" :class="{[position]: true}" @click="onClick">
    <span v-if="isActive" class="circle" 
      :style="{left: deltaX + 'px', top: deltaY + 'px'}" 
      @animationend="isActive = !isActive" >
    </span>
    <y-icon v-if="icon && !isLoading" :name="icon" class="icon"></y-icon>
    <y-icon v-show="loading && isLoading" name="loading" class="loading icon"></y-icon>
    <div class="content">
      <slot></slot>
    </div>
  
  </button>
</template>

<script>
import Icon from '../icon/icon'

export default {  
  data () {
    return {
      isLoading: false,
      deltaX: 0,
      deltaY: 0,
      isActive: false
    }
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false,

    },
    position: {
      type: String,
      default: 'left',
      validator(value){
        return value === 'left' || value === 'right'
      }
    }
  },
  components: {
    'y-icon': Icon
  },
  methods: {
    onClick(event){
      if(this.loading){
        this.isLoading = !this.isLoading
      }

      let {x,y} = this.$el.getBoundingClientRect()
      let {clientX,clientY} = event
      this.deltaX = clientX - x
      this.deltaY = clientY - y 

      this.isActive = !this.isAction
      this.$emit('click')
    }
  }
}

</script>


<style lang='scss' scoped>
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes ripple {
    0% {
      transform: scale(2);
    }
    100% {
      transform: scale(12);
    }
  }

  .y-button {
    cursor: pointer;
    padding: 0 1em;
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 2px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    position: relative;
    overflow: hidden;
    > .icon {
      position: relative;
      z-index: 2;     
      order: 1;
      margin-right: .1em;
    } 
    > .content {
      position: relative;
      z-index: 2;
      order: 2;
    }

    &.right {
      > .icon {
        order: 2;
        margin-right: 0;
        margin-left: .1em;
      }
      > .content {
        order: 1;
      }
    }
    &:hover{
      border-color: var(--border-color-hover);
    }
    &:focus{
      outline: none;
      border-color: var(--border-color-focus);
    }
    .loading {
      animation: 1s spin infinite linear;
    }
    .circle {
      display: inline-block;
      position: absolute;
      width: 1em;
      height: 1em;
      border-radius: 50%;
      opacity: .2;
      background: rgb(202, 201, 201);
      animation: ripple .5s forwards;
      z-index: 1;
    }
  }


</style>