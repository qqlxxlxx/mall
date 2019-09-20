<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Tabbar"
  }
</script>

<style scoped>
  #tabbar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    background: #f6f6f6;
    box-shadow: 0 -1px 1px rgba(0,0,0,.1);
  }
  #tabbar .tabbar-item{
    flex: 1;
    height: 49px;
    text-align: center;
  }
</style>
