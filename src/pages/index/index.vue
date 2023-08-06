<!--
 * @Description:
 * @Author: luckymiaow
 * @Date: 2023-08-02 19:43:22
 * @LastEditors: luckymiaow
-->
<route lang="yaml">
name: Home
style:
  navigationBarTitleText: 主页
</route>

<script setup lang="ts">
</script>

<template>
  <view class="container">
    <view class="sys-title py-6 text-center">
      欢迎您，小朋友!
    </view>
    <!-- <uni-title type="h1" title="欢迎您，小盆友" color="#027fff" class="align-center"></uni-title> -->
    <view class="list">
      <view class="list-item" @click="router.push({ name: 'AddSubCalculate' })">
        <view class="list-icon icon-add bg-#fe9e17">
          <uni-icons type="color" size="130" />
        </view>
        <text class="list-text">
          加减算
        </text>
      </view>
      <view class="list-item" @click="router.push({ name: 'MulCalculate' })">
        <view class="list-icon bg-#19aced">
          <uni-icons type="color" size="130" />
        </view>
        <text class="list-text">
          乘算
        </text>
      </view>
      <view class="list-item" @click="router.push({ name: 'DivisionCalculation' })">
        <view class="list-icon bg-#37a743">
          <uni-icons type="color" size="130" />
        </view>
        <text class="list-text">
          除算
        </text>
      </view>
      <view class="list-item" @click="router.push({ name: 'AbacusExercises' })">
        <view class="list-icon bg-#ed6b76">
          <uni-icons type="color" size="130" />
        </view>
        <text class="list-text">
          珠心算练习
        </text>
      </view>
    </view>

    <!-- <uni-grid :column="3" :square="false" class="py-10 c-emerald">
      <uni-grid-item v-for="item in enum2Array(AbacusType)" :key="item.text" class="bg-#4c9804 border-rd text-center c-white" @click="router.push({ name: 'StraightPlusStraightMinus' })">
        {{ item.text }}
      </uni-grid-item>
    </uni-grid> -->
  </view>
</template>

<style lang="scss" scoped>
.container {
  padding: 0 16px 16px 16px 16px;
}

.sys-title {
  font-size: 8px;
  color: #fff;
  margin-bottom: 10px;
}
.list {
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  list-style: none;
}

.list-item {
  flex: 1;
  text-align: center;
}

.list-icon {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  text-align: center;
  line-height: 50px;
  // background-color: #fe9e17;
  border-radius: 50%;
  box-shadow: inset 10px 20px 30px rgb(0 0 0 / 4%), 10px 10px 20px rgb(175 174 174 / 30%), 15px 15px 30pxrgba(0, 0, 0, 0.05),inset -10px -20px 30px rgb(255 255 255 / 53%);
 position: relative;
//  background: #fe9e17;
}

.list-icon::before{
 content: '';
 position: absolute;
 top: 15%;
 left: 50%;
 width: 6px;
 height: 6px;
 background-color: rgba(255, 255, 255, 0.8);
 border-radius: 46% 54% 36% 64% / 46% 43% 57% 54%;
}

.list-icon::after{
 content: '';
 position: absolute;
 top: 25%;
 left: 30%;
 width: 4px;
 height: 4px;
 background-color: rgba(255, 255, 255, 0.8);
 border-radius: 50%;
}
.list-text {
  font-size: 8px;
}
</style>
