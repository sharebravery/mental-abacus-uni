<!--
 * @Description:
 * @Author: luckymiaow
 * @Date: 2023-08-04 22:09:21
 * @LastEditors: luckymiaow
-->
<route lang="yaml">
name: AddSubCalculate
style:
  navigationBarTitleText: 加减算
  </route>

<script setup lang="ts">
import { ref } from 'vue'

// type: 1-闪电算，2-听心算，3-看心算
const params = ref({
  type: 1,
  minBit: 1,
  largestBit: 1,
})

function navType(type: number) {
  params.value.type = type
}
</script>

<template>
  <view class="add-sub-box flex">
    <view class="add-sub-content">
      <view class="c2-nav">
        <view class="c2-nav-item" :class="{ 'nav-active': params.type === 1 }" @click="navType(1)">
          闪电算
        </view>

        <view class="c2-nav-item" :class="{ 'nav-active': params.type === 2 }" @click="navType(2)">
          听心算
        </view>
        <view class="c2-nav-item" :class="{ 'nav-active': params.type === 3 }" @click="navType(3)">
          看心算
        </view>
      </view>
      <view class="c2-content">
        <uni-title class="c2-title" type="h1" title="加减算" align="center" />
        <uni-row class="demo-uni-row" :gutter="6">
          <uni-col :span="12">
            <view class="option-child">
              <text class="c2-label">
                最小位：
              </text><uni-number-box v-model="params.minBit" class="c2-number" background="rgb(253 212 111)" :min="1" />
            </view>
          </uni-col>
          <uni-col :span="12">
            <view class="option-child">
              <text class="c2-label">
                最大位：
              </text><uni-number-box v-model="params.largestBit" class="c2-number" background="rgb(253 212 111)" :min="1" />
            </view>
          </uni-col>
          <uni-col :span="12">
            <view class="option-child">
              <text class="c2-label">
                间隔速：
              </text><uni-number-box v-model="params.largestBit" class="c2-number" background="rgb(253 212 111)" :min="1" />
            </view>
          </uni-col>
        </uni-row>
      </view>
    </view>
    <view class="c2-footer">
      <text class="list-icon bg-#fe9e17" @click="router.push({ name: 'AddSubStart' })">
        开始
      </text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.add-sub-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.c2-title {
  margin-top: -25px;
}

.add-sub-content {
  width: 80%;
  height: 70%;
  display: flex;
}
.c2-nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .c2-nav-item {
    width: 50px;
    height: 23px;
    line-height: 23px;
    margin-bottom: 10px;
    // background-color: rgb(200 241 108);
    background-color: rgb(253 212 111);
    border-radius: 6px 0 0 6px;

    font-size: 10px;
    text-align: center;
  }
  .nav-active {
    background-color: rgb(243 152 71);
    color: #fff;
  }
}

.c2-content {
  width: 80%;
  padding: 2px;
  border: 4px solid rgb(253 212 111);
  border-radius: 20px;
  text-align: center;

  .c2-label {
    font-size: 8px;
  }

}
:deep(.c2-number) {
  font-size: 10px;
  .uni-numbox-btns {
    padding: 2px 2px;
  }
  .uni-numbox__value {
    height: 10px;
    font-size: 10px
  }
  .uni-numbox--text {
    line-height: 0px;
  }
}

.option-child {
  display: flex;
  align-items: center;
  margin-bottom: 6px;
}

.c2-footer {
  width: 100%;
  padding-right: 10px;
  text-align: right;

  .list-icon {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin: 0 auto;
    text-align: center;
    line-height: 30px;
    border-radius: 50%;
    font-size: 10px;
    box-shadow: inset 0px 0px 6px #ffffff;
    color: #fff;
}
}
</style>
