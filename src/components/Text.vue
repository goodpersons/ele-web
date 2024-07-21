<!-- update:modelValue 事件和 modelValue prop 的组合
<!-- 是 Vue.js 3 中实现组件间双向数据绑定的核心机制。通过这种方式，Vue 保持了 API 的一致性，同时也允许开发者在自定义组件中实现丰富的交互逻辑，同时保持数据流的清晰和可预测。 --> -->
<template>
  <div v-if="show == 1">
    <input
      v-model="searchValue"
      placeholder="搜索1"
      type="text">
  </div>
  <div v-else>
    <input
      :value="searchValue"
       placeholder="搜索2"
      @keyup.enter="search1"
      @input="(e)=>
        emits('update:modelValue',(e.target as HTMLInputElement).value)
      "
      type="search">
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive,watch, onBeforeMount, onMounted} from 'vue'
const emits = defineEmits({
  search: (value: string) => value,
  'update:modelValue' : (value: string)=> value
});
const props = defineProps({
  //  modelValue 就是 v-modle 绑定的值
  modelValue: {
    type: String,
    default: ''
  },
  show: {
    type: Number,
    default: 1
  }
});

const searchValue = ref<string>('')
onMounted(() => {
  searchValue.value = props.searchValue
})
watch(
  searchValue, (value) => {
    emits('search', value)
})
const search1 = ()=> {
  console.log(props.modelValue);

  // emits('search', props.searchValue)
}
</script>

<style scoped>

</style>
