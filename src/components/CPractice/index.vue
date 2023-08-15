<script lang='ts' setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import Keyboard from '../../pages/components/MentalAbacus/components/Keyboard.vue'
import MentalArithmetic from './components/MentalArithmetic.vue'

const props = defineProps({
  type: {
    type: Number as PropType< 1 | 2 | 3>,
    default: 1,
    required: true,
  },
  speed: {
    type: Number,
    default: 0,
  },
  genFn: {
    type: Function as PropType<() => number[]>,
    required: true,
  },
  resultFn: {
    type: Function as PropType<(..._args: any) => number>,
    required: true,
  },
  back: {
    type: Function,
  },
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

const answer = ref<null | number>(0)

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

// #region  第一个游戏

const currentSubject = ref<number[]>([]) // 当前生成的一对数字

const currentNum = ref<number | undefined>()

// 开始游戏

const getNumberTimer = ref<NodeJS.Timeout >()

function getNumber() {
  currentNum.value = currentSubject.value?.shift()
  clearTimeout(getNumberTimer.value)
  if (currentSubject.value.length >= 0)
    getNumberTimer.value = setTimeout(getNumber, props.speed * 1000)
}

function startOne() {
  currentSubject.value = [...nums.value]
  getNumber()
}

// #endregion

function confirm() {
  if (currentSubject.value.length > 0)
    return
  const res = props.resultFn(nums.value)
  if (res === answer.value) {
    // Toast('正确')
    uni.showToast({
      title: '正确',
      duration: 1000,
      icon: 'success',
    })
  }
  else {
    uni.showToast({
      title: '错误',
      duration: 1000,
      icon: 'error',
    })
  }
  nums.value = []
  answer.value = null
  setTimeout(() => {
    uni.hideToast()
    start()
  }, 1000)
}

function start() {
  nums.value = props.genFn()
  if (props.type === 1)
    startOne()
}

onLoad(async () => {
  await sendCode()
  nextTick(() => {
    start()
  })
})
</script>

<template>
  <view class="c2-start-box">
    <view class="back-btn z-999" @click="() => (props.back ? props.back() : back())">
      返回
    </view>
    <view class="c2-start-container">
      <view class="flex relative justify-center flex-2">
        <view v-if="countdown !== 0" class="countdown">
          {{ countdown }}
        </view>
        <view v-if="props.type === 1 && countdown === 0" class="left-box">
          <text v-if="currentNum != null" class="text-3xl c-amber" :class="{ 'c-cyan': currentSubject.length % 2 }">
            {{ currentNum }}
          </text>
          <text v-else>
            写答案{{ currentNum }}
          </text>
        </view>
        <MentalArithmetic v-if="props.type === 3" class="left-box" :speed="props.speed" :nums="nums" />
      </view>
      <div class="mr10rpx center flex flex-1">
        <Keyboard v-model="answer" style=" flex: 1;" @confirm="confirm" />
      </div>
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
        position: absolute;
      top: calc(50% - 30px);
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
