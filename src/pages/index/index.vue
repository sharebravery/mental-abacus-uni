<route lang="yaml">
name: Home
style:
  navigationBarTitleText: 主页
</route>

<script setup lang="ts">
</script>

<template>
  <view class="container">
    <view class="list">
      <button>加减算</button>
      <button>乘算</button>
      <button>除算</button>
      <button @click="router.push({ name: 'AbacusExercises' })">
        珠心算练习
      </button>
    </view>

    <!-- <uni-grid :column="3" :square="false" class="py-10 c-emerald">
      <uni-grid-item v-for="item in enum2Array(AbacusType)" :key="item.text" class="bg-#4c9804 border-rd text-center c-white" @click="router.push({ name: 'StraightPlusStraightMinus' })">
        {{ item.text }}
      </uni-grid-item>
    </uni-grid> -->
  </view>
</template>

<style lang="scss" scoped>
.list {
  margin: 0 auto;
  writing-mode: vertical-lr;
  text-align: center;
  button {
    margin: 36px 24px;
    padding: 4px;
    background-color: #4c9706;
    border-radius: 0.25rem;
  }
}
</style>
