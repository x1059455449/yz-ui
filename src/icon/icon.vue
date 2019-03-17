<template>
  <svg class="y-icon" >  
    <use :xlink:href="`#icon-${name}`"/>
  </svg>
</template>

<script>
export default {
  props: ['name']
}

</script>
<style lang='scss' scoped>
  .y-icon {
    height: 1em;
    width: 1em;
  }
</style>