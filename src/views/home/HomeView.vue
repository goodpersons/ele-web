<template>
  <HomeTop :recommend="recommend"></HomeTop>
  <div class="test">我我我我我我我我我我</div>
</template>

<script setup lang='ts'>
import { reactive } from 'vue'
import HomeTop from './components/HomeTop.vue';
type recommendType = {
  value: number;
  label: string;
}
const recommend = reactive<recommendType[]>([
  {
    value: 1,
    label: '牛腩'
  },
  {
    value: 2,
    label: '色拉'
  },
  {
    value: 3,
    label: '奶茶'
  },
  {
    value: 4,
    label: '西瓜汁'
  }
])

</script>

<style scoped>
.test {
  font-size: 37px;
}
</style>
