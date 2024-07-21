<template>
  <div class="indexwrapper">
    <router-view></router-view>
    <TabView></TabView>
  </div>
</template>

<script setup lang='ts'>
// import { ref, reactive } from 'vue'
import TabView from '../components/tab/TabView.vue'
</script>

<style scoped>

</style>
