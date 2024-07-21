<!--
组件功能 分析：      属性                 事件                     slot
完成 1. 自定义背景颜色：  background
完成 2. 自定义 placeholder  placeholder
完成 3. 自定义形状    shape
完成 4. 自定义搜索框是否展示 action  showAction
5. 设置搜素框的值 value   v-model       update:modelValue
6. 回车进行搜素                         search
7. 取消事件                             cancel
8. 设置 right-icon                      clear                   right-icon
9. 输入 删去输入内容 right-icon           clear
-->
<template>
  <div class="search-wrapper">
    <div class="search-input-wrapper"
         :class="shape ? `search-input-${shape}` : '' "
         :style="{background: background}">
      <van-icon class="search-icon" name="search" color="#9C9F9F" />
      <!-- 自定义组件上使用 v-model，Vue 会自动将组件的 modelValue prop 绑定到外部的响应式数据属性上 -->
       <!-- 通过触发一个 update:modelValue 事件来通知外部更新这个值 -->
      <input class="search-input"
             :value="modelValue"
             @input="(e)=> emits('update:modelValue', (e.target as HTMLInputElement).value)"
             :placeholder="placeholder"
             :style="{'background': background}"
             @keypress="onKeyPress"
             type="search">
      <!--  如果 组件 没有传递 slots 出错 ？Failed to resolve component: solt -->
      <div v-if="$slots['right-icon']"
           class="search-right-slots"
           @click="emits('search', props.modelValue)">
        <slot name="right-icon"></slot>
      </div>
      <div v-else-if="modelValue">
        <div @click="clearModelValue" class="search-righr-icon">X</div>
      </div>
    </div>
    <div v-if="showAction" class="search-commit">
      <solt name="action">
        <span class="search-commit-title" @click="clearModelValue()">取消</span>
      </solt>
    </div>
  </div>
</template>

<script setup lang='ts'>
interface IProps {
  showAction?: boolean,
  background?: string,
  placeholder?: string,
  shape?: string,
  modelValue?: string | number,
}
const props = defineProps<IProps>()
interface IEmits {
  (e: 'search', v?: string | number): void,
  (e: 'cancel'): void,
  (e: 'clear'): void,
  // v-model 更新
  (e: 'update:modelValue', v?: string | number): void
}
const emits = defineEmits<IEmits>()


//  点击回车键 触发
const onKeyPress = (e: KeyboardEvent) => {
  const EnterCode = 13
  if (e.keyCode === EnterCode) {
    e.preventDefault()
    emits('search', props.modelValue)
  }
}
// 清除
const clearModelValue = ()=> {
  emits('update:modelValue', '')
  emits('clear')
}

</script>

<style scoped>
.search-wrapper {
  display: flex;
  justify-content: between;
  align-items: center;
  margin: 0 10px;
  margin-bottom: 10px;
  &.search-show-action {
    display: none;
  }
  .search-input-wrapper {
    /* background: #fff; */
    flex:1;
    display: flex;
    align-items: center;
    padding: 6px 10px;
    /* border-radius: 50px; */
    &.search-input-round {
      border-radius: 50px;
    }
    &.search-input-square {
      border-radius: 0;
    }
    .search-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: 20px;
      text-align: center;
    }
    .search-input {
      flex: 1;
      font-size: 14px;
      border: none;
      outline: none;
    }
    .search-right-slots {
      font-size: 14px;
      color: #a09898;
    }
    .search-righr-icon {
      text-align: center;
      line-height: 20px;
      font-size: 14px;
      padding: 0 5px;
      color: #b7a8aa;
    }
  }
  .search-commit{
      padding: 4px 6px;
      margin-left: 8px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 20px;
    .search-commit-title {
      font-size: 14px;
      color: #fff;
      text-align: center;

    }
  }
}
input {
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
}
input::placeholder,
textarea::placeholder {
  color: #ccc;
}
</style>
