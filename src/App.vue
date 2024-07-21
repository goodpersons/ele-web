<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <router-view></router-view>
</template>

<style>
/*  normalize.css  rest css lib */
@import 'normalize.css';

#app {
  /* 字体抗抗锯齿 让字体可以更清晰 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
