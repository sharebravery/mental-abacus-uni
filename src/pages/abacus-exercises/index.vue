<route lang="yaml">
name: AbacusExercises
style:
  navigationBarTitleText: 珠心算练习
</route>

<script setup lang="ts">

</script>

<template>
  <view class="container">
    <view class="list">
      <button @click="router.push({ name: 'StraightPlusStraightMinus' })">
        直加直减
      </button>
      <button>
        满五加
      </button>
      <button>
        破五减
      </button>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.list {
  margin: 0 auto;
  writing-mode: vertical-lr;
  text-align: center;
  button {
    margin: 36px 24px;
    padding: 10px 0;
    background-color: #4c9706;
    border-radius: 0.25rem;
  }
}
</style>
