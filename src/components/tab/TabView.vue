<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" name="home">首页</van-tabbar-item>
    <van-tabbar-item icon="search" name="order">订单</van-tabbar-item>
    <van-tabbar-item icon="friends-o" name="mine">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
const active = ref<string>(route.name)

watch(active, (newVal) => {
  // router.push({ path: `/tab/${newVal}`})
  router.push({name: newVal})
})



</script>

<style scoped>

</style>
