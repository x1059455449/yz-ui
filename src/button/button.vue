<!--  -->
<template>
  <button class="y-button" :class="{[position]: true}">
    <svg class="icon" v-if="icon">  
      <use :xlink:href="`#icon-${icon}`">
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  
  </button>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    icon: {},
    position: {
      type: String,
      default: 'left',
      validator(value){
        return value === 'left' || value === 'right'
      }
    }
  }
}

</script>


<style lang='scss' scoped>
  .y-button {
    padding: 0 1em;
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    > .icon {     
      height: 1em;
      width: 1em;
      order: 1;
      margin-right: .1em;
    } 
    > .content {
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
      background-color: var(--bg-color-hover);
    }
    &:active{
      background-color: var(--border-active-bg);
    }
    &:focus{
      outline: none;
    }
    
  }


</style>