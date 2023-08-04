<!--
 * @Description:
 * @Author: 景 彡
 * @Date: 2023-08-03 15:21:26
 * @LastEditors: luckymiaow
-->
<route lang="yaml">
name: AbacusExercises
style:
  navigationBarTitleText: 珠心算练习
</route>

<script setup lang="ts">

</script>

<template>
  <view class="container">
    <view class="back-btn">
      返回
    </view>
    <view class="list">
      <view class="type-btn" @click="router.push({ name: 'StraightPlusStraightMinus' })">
        直加直减
      </view>
      <view class="type-btn">
        满五加
      </view>
      <view class="type-btn">
        破五减
      </view>
      <view class="type-btn">
        进位加
      </view>
      <view class="type-btn">
        退位减
      </view>
      <view class="type-btn">
        破五进位加
      </view>
      <view class="type-btn">
        破五退位减
      </view>

      <!-- <button @click="router.push({ name: 'StraightPlusStraightMinus' })">
        直加直减
      </button>
      <button>
        满五加
      </button>
      <button>
        破五减
      </button> -->
    </view>
  </view>
</template>

<style lang="scss" scoped>
.list {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80vh;
  overflow: hidden;
  // margin: 0 auto;
  // writing-mode: vertical-lr;
  // text-align: center;
  // button {
  //   margin: 36px 24px;
  //   padding: 10px 0;
  //   background-color: #4c9706;
  //   border-radius: 0.25rem;
  // }
}

.container {
  padding: 6px;
}
.back-btn {

  width: 20px;
  color: #ecf0f1;
  text-align: center;
  font-size: 6px;
  background-color: #e67e22;
  border: 1px solid #f39c12;
  border-radius: 5px;
  padding: 2px;
  box-shadow: 0px 2px 0px #d35400;
  transition: all .1s;
}
.back-btn:active {
 box-shadow: 0px 2px 0px #d35400;
 position: relative;
 top: 1px;
}

.type-btn {
  // flex: 1;
  margin-top: 6px;
  background-color: #fff;
  height: 16px;
  width: 50px;
  font-size: 8px;
  text-align: center;
  line-height: 16px;
  border-radius: 10px;
  border: 1px solid #add8e6;
  box-shadow: 1px 1px #fff, 2px 2px #add8e6;
  color: #add8e6;
  font-weight: 700;
  transition: box-shadow 300ms linear;
}
.type-btn:hover {
  box-shadow: none;
  color: #fff;
  background-color: #add8e6;
  box-shadow: 1px 1px #add8e6, 2px 2px #ffffffc5;
  cursor: pointer;
}
</style>
