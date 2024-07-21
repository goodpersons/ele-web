<template>
  <div class="home-wrapper">
    <div class="home-top-wrapper">
      <img src="@/assets/imgs/index_page/location.png" alt="" class="home-top-local-icon">
      <div class="home-top-adress">幸福小区（北一区东南门）</div>
      <img src="@/assets/imgs/index_page/shopcart.png" alt="" class="home-top-cart-icon">
      <img src="@/assets/imgs/index_page/comments.png" alt="" class="top-message-icon">
    </div>
    <van-search
      v-model="searchValue"
      shape="round"
      background="linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 243))"
      placeholder="世界茶饮 35减2" >
      <template #right-icon>
        <div class="search-name">搜索</div>
      </template>
    </van-search>
    <SearchInput

      background="#fff"
      placeholder="世界茶饮 35减2"
      shape="round"
      v-model="searchValue"
      @search = 'search'
      @clear ='clear'
      >
      <!-- <template #right-icon>
        <div>搜索</div>
      </template> -->
    </SearchInput>
    <!-- <Text searchValue="assdad" @search="Texthande"></Text>
    <Text show="2" v-model="searchValue" @search= 'search'></Text> -->
    <div class="recommend">
      <div v-for="item in props.recommend"
            class="recommend-item"
            :key="item.value"
            >{{ item.label }}</div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import SearchInput from '@/components/SearchInput.vue';
import Text from '@/components/Text.vue';
import type { HSearchRecommend } from '@/types'
const searchValue = ref('text')
interface Props {
  recommend: HSearchRecommend[]
}
const props = defineProps<Props>()
const search = (value: string | number) => {
  console.log(value)
}
const clear = () => {
  console.log("清除输入内容");

}
const Texthande = (value: string)=> {
  console.log(value);
}
</script>

<style lang="scss" scoped>
.home-wrapper {
   background: linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 243));
  .home-top-wrapper {
    padding: 8px 10px 0 10px;
    @include flex-between;
    .home-top-local-icon {
      width: 20px;
      height: 20px;
      margin-right: 4px;
    }
    .home-top-adress {
      flex: 1;
      line-height: 20px;
      font-size: 14px;
      color: #fff;
    }
    .home-top-cart-icon {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
    .top-message-icon {
      width: 20px;
      height: 20px;
    }
  }
  .recommend {
    padding: 0 10px 10px 10px;
    @include flex-between;
    display: flex;
    .recommend-item {
      color: #fff;
      font-size: 12px;
      padding: 2px 8px;
      border-radius: 10px;
      background-color: rgba(233, 244, 244, 0.4);
      margin-right: 10px;
    }
  }
}

</style>
<style class="scss">
.search-name {
  margin-right: 10px;
  font-size: 14px;
}
</style>
