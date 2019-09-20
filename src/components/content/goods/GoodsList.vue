<template>
  <div class="goods">
    <goods-list-item v-for="(item, index) in goods" :key="index"
    :goodsItem="item"
    class="goods-item"
    />
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'

  export default {
    name: 'GoodsList',
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px 1.5%;
    background: #f1f1f1;
  }
  .goods-item{
    width: 47%;
  }
</style>
