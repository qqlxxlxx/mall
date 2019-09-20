<template>
  <div class="goods-item">
    <img :src="goodsItem.img" alt="" @click="itemClick">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <div>
        <span class="price">￥{{goodsItem.price}}</span>
        <span class="fav">{{goodsItem.fav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsListItem',
    props: {
      goodsItem: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods: {
      itemClick() {
        this.$router.push('/detail/' + this.goodsItem.iid)
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    display: flex;
    flex-direction: column;
    background: #fff;
    margin-bottom: 10px;
    font-size: 12px;
  }
  .goods-item img {
    flex: 8;
    width: 100%;
    border-radius: 3px;
    vertical-align: middle;
  }
  .goods-info {
    flex: 1;
    padding: 5px;
  }
  .goods-item p {
    width: 100%;
    margin: 0 0 5px;
    color: #333;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .goods-info>div{
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
  }
  .goods-info .price{
    font-size: 15px;
    color: #333;
    font-weight: bold;
  }
  .goods-info .fav::before{
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 5px;
    background: url("~assets/img/common/fav.svg") 0 0/20px 20px;
  }
</style>
