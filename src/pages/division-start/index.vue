<route lang="yaml">
name: DivisionStart
style:
  navigationBarTitleText: 除算答题页
      </route>

<script lang='ts' setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import Keyboard from '../components/MentalAbacus/components/Keyboard.vue'
import { DivisionOptions, OperationType, calculateArrayExpression, generateDivisionExpression } from '@/utils/abacusCalculation/generateArithmeticExpression'

const params = ref({
  speed: 2,
  option: new DivisionOptions(),
})

const countdown = ref(3)

// 开始游戏定时器
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

const currentNum = ref<string | undefined>()

// 开始游戏

const getNumberTimer = ref<NodeJS.Timeout >()

function getNumber() {
  currentNum.value = currentSubject.value?.join(' ÷ ')
  clearTimeout(getNumberTimer.value)
  currentSubject.value = []
  if (currentSubject.value.length >= 0)
    getNumberTimer.value = setTimeout(getNumber, params.value.speed * 1000)
}

function confirm() {
  if (currentSubject.value.length > 0)
    return
  const res = calculateArrayExpression(nums.value, OperationType.除)
  if (res === answer.value) {
    // Toast('正确')
    uni.showToast({
      title: '正确',
      duration: 1500,
      icon: 'success',
    })
  }

  else {
    uni.showToast({
      title: '错误',
      duration: 1500,
      icon: 'error',
    })
  }
  nums.value = []
  answer.value = 0
  setTimeout(() => {
    uni.hideToast()
    topicSwitching()
  }, 1000)
}

async function topicSwitching() {
  nums.value = generateDivisionExpression(params.value.option)
  currentSubject.value = [...nums.value]
  getNumber()
}

onLoad(async (option: any) => {
  const res = JSON.parse(decodeURIComponent(option.params))
  params.value = res
  await sendCode()
  topicSwitching()
})
</script>

<template>
  <view class="c2-start-box">
    <view class="back-btn" @click="back">
      返回
    </view>

    <!-- <template v-else> -->
    <view class="c2-start-container">
      <view v-if="countdown > 0" style="flex: 2">
        <view class="countdown">
          {{ countdown }}
        </view>
      </view>
      <template v-else>
        <view class="left-box" style="flex: 2">
          <text v-if="currentNum != null" class="text-3xl c-amber">
            {{ currentNum }}
          </text>
          <text v-else>
            写答案
          </text>
        </view>
      </template>
      <Keyboard v-model="answer" style=" flex: 1;" @confirm="confirm" />
    </view>
    <!-- </template> -->
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
          margin: auto;
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

    .left-box {
      flex: 2;text-align: center; color: #fff;
    }
      </style>
