<template>
  <div class="recommend">
    <div v-for="(item,index) in recommend" :key="index">
      <a href="item.link">
        <img :src="item.img" alt="">
        <div class="recommend-title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RecommendView',
    props: {
      recommend: {
        type: Array,
        default() {
          return[]
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    justify-content: space-around;
    padding: 20px 0 25px;
    border-bottom: 8px solid #eee;
    font-size: 12px;
    text-align: center;
  }
  a{
    color: #666;
  }
  img{
    width: 60px;
    border-radius: 20%;
    vertical-align: middle;
  }
  .recommend-title{
    margin-top: 10px;
  }
</style>
