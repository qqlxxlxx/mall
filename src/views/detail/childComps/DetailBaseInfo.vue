<template>
  <div v-if="Object.keys(baseInfo).length !=0" class="base-info">
    <div class="price">
      <div class="price-now-unit">￥</div>
      <div class="price-now">{{baseInfo.priceNow[0]}}</div>
      <div class="price-now" v-if="baseInfo.priceNow.length > 1">~</div>
      <div class="price-now">{{baseInfo.priceNow[1]}}</div>
      <div class="price-old">{{baseInfo.priceOld}}</div>
    </div>
    <div class="title">{{baseInfo.title}}</div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBaseInfo',
    props: {
      baseInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .base-info{
    width: 100%;
    color: #333;
  }
  .price{
    display: flex;
    padding: 10px 16px 0;
    height: 30px;
    line-height: 30px;
    flex-flow: row nowrap;
  }
  .price-now{
    font-size: 30px;
  }
  .price-now-unit{
    font-size: 12px;
    line-height: 16px;
  }
  .price-old{
    margin-left: 5px;
    font-size: 12px;
    color: #999;
    text-decoration:line-through;
  }
  .title{
    padding: 10px 16px 0;
    font-size: 15px;
    line-height: 1.5;
  }
</style>
