<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{'active': isActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabbarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: '#1296db'
      }
    },
    data() {
      return {
        // isActive: false
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1;
      },
    },
    methods: {
      itemClick() {
        if(this.$route.path === this.path) return;
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tabbar-item{
    color: #666;
    font-size: 15px;
  }
  .tabbar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
  }
  .active{
    color: #1296db;
  }
</style>
