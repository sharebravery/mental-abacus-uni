<!--
 * @Description:
 * @Author: luckymiaow
 * @Date: 2023-08-04 23:48:39
 * @LastEditors: 景 彡
-->
<route lang="yaml">
name: AddSubStart
style:
  navigationBarTitleText: 答题页
  </route>

<script lang='ts' setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import Keyboard from '../components/MentalAbacus/components/Keyboard.vue'
import { AddAndSubtractOptions, calculateArraySum, generateAdditionOrSubtractionExpression } from '@/utils/abacusCalculation/generateArithmeticExpression'
import { Toast } from '@/utils/uniapi/prompt'

const params = ref({
  type: 1,
  speed: 0,
  option: new AddAndSubtractOptions(),
})

const countdown = ref(3)

const timer = ref<any>(null)

function sendCode() {
  return new Promise<void>((resolve, reject) => {
    timer.value = setInterval(() => {
      // 创建定时器
      if (countdown.value === 1) {
        countdown.value-- // 定时器减1
        clearTimer() // 关闭定时器
        resolve()
      }
      else {
        countdown.value-- // 定时器减1
      }
    }, 1000)
  })
}

function clearTimer() {
  // 清除定时器
  clearInterval(timer.value)
  timer.value = null
}

const answer = ref(0)

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

const nums = ref<number[]>([])

const currentSubject = ref<number[]>([]) // 当前生成的一对数字

const currentNum = ref<number | undefined>()

// 开始游戏
function getNumber() {
  currentNum.value = currentSubject.value?.shift()

  if (currentSubject.value.length >= 0)
    setTimeout(getNumber, 1500)
}

function confirm() {
  const res = calculateArraySum(nums.value)
  console.log('%c [ res ]-82', 'font-size:13px; background:pink; color:#bf2c9f;', res)
  console.log('%c [ answer.valu ]-84', 'font-size:13px; background:pink; color:#bf2c9f;', answer.value)
  if (res === answer.value)
    Toast('正确')
  else Toast('错误')
}

onLoad(async (option: any) => {
  nums.value = generateAdditionOrSubtractionExpression(params.value.option)
  currentSubject.value = generateAdditionOrSubtractionExpression(params.value.option)

  const res = JSON.parse(option.params)

  params.value = res
  await sendCode()
  getNumber()
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
        <text v-if="currentNum != null" class="text-3xl c-amber">
          {{ currentNum }}
        </text>
        <text v-else>
          写答案
        </text>
      </view>
      <Keyboard v-model="answer" style=" flex: 1;" @confirm="confirm" />
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
