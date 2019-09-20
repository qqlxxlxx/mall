<template>
  <div>
    <navbar>
      <div slot="left" class="left" @click="backClick">&lt;</div>
      <div slot="center" class="title" >
        <div v-for="(item, index) in titles"
             class="title-item"
             :class="{active: currentIndex === index}"
             @click="titleClick(index)">
             {{item}}
        </div>
      </div>
    </navbar>
  </div>
</template>

<script>
  import Navbar from 'components/common/navbar/Navbar'

  export default {
    name: 'DetailNavBar',
    components: {
      Navbar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index
      },
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .title{
    display: flex;
    font-size: 15px;
    color: #666;
  }
  .left{
    color: #666;
    font-size: 20px;
  }
  .title-item{
    flex: 1;
  }
  .active{
    color: #1296db;
  }
</style>
