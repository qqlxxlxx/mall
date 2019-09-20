<template>
  <div class="back-top">
    <div class="bg"></div>
  </div>
</template>

<script>
  export default {
    name: 'BackTop'
  }
</script>

<style scoped>
  .back-top{
    position: fixed;
    bottom: 60px;
    right: 10px;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
    overflow: hidden;
  }
  .back-top .bg{
    width: 100%;
    height: 100%;
    background: url("~assets/img/common/back_top.png") no-repeat 0 0/100% auto;
  }
</style>
