<!--
 * @Description:
 * @Author: luckymiaow
 * @Date: 2023-08-04 23:48:39
 * @LastEditors: luckymiaow
-->
<route lang="yaml">
name: AddSubStart
style:
  navigationBarTitleText: 主页
  </route>

<script lang='ts' setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import Keyboard from '../components/MentalAbacus/components/Keyboard.vue'

const countdown = ref(3)

const timer = ref<any>(null)

function sendCode() {
  timer.value = setInterval(() => {
    // 创建定时器
    if (countdown.value === 0)
      clearTimer() // 关闭定时器
    else
      loading()
  }, 1000)
}

function loading() {
  // 启动定时器
  countdown.value-- // 定时器减1
}

function clearTimer() {
  // 清除定时器
  clearInterval(timer.value)
  timer.value = null
}

const answer = ref(3)

function back() {
  const canNavBack = getCurrentPages() // 获取路由栈
  if (canNavBack && canNavBack.length > 1) { // 判断是否刷新了浏览器，如果刷新了浏览器，路由栈只有当前一个
    uni.navigateBack({
      delta: 1,
    })
  }
  else {
    history.back()
  }
}

onLoad(() => {
  sendCode()
})
</script>

<template>
  <view class="c2-start-box">
    <view class="back-btn" @click="back">
      返回
    </view>
    <view v-if="countdown > 0" class="countdown">
      {{ countdown }}
    </view>
    <view v-else class="c2-start-container">
      <view style=" flex: 2;text-align: center; color: #fff;">
        写答案
      </view>
      <Keyboard v-model="answer" style=" flex: 1;" />
    </view>
  </view>
</template>

  <style scope>
    .c2-start-box {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
      background-color: green;
    }
    .countdown {
      width: 30px;
      height: 30px;
      line-height: 30px;

      border: 2px solid #fff;
      border-radius: 50%;
      text-align: center;
      color: #fff;
    }
    .c2-start-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .back-btn {
  position: fixed;
  left: 4px;
  top: 4px;
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
  </style>
