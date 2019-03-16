<!--  -->
<template>
  <div class="y-button-group">
    <slot></slot>  
  </div>
</template>

<script>
export default {
  mounted(){
    for(let node of this.$el.children){
      let name = node.nodeName.toLowerCase()
      if(name !== 'button'){
        console.warn(`y-button-group的子元素应该全是y-button，但你的是${name}，这将会对元素的样式产生影响`)
      }
    }
  }
}

</script>

<style lang='scss' scoped>
.y-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .y-button {
    border-radius: 0;
    &:not(:first-child){
      margin-left: -1px;  
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
    &:focus {
      position: relative;
      z-index: 1;
    }
  }

}
</style>