<route lang="yaml">
name: NumberBeadsStart
style:
  navigationBarTitleText: 珠算答题页
      </route>

<script lang='ts' setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import Keyboard from '../components/MentalAbacus/components/Keyboard.vue'
import Diamond from '../components/MentalAbacus/components/Diamond.vue'
import { MultiplicationOptions, getRandomInt, getRandomNumberByDigit } from '@/utils/abacusCalculation/generateArithmeticExpression'
import { Abacus } from '@/utils/abacusCalculation/abacus'

const params = ref({
  type: 1,
  speed: 0,
  option: new MultiplicationOptions(),
})

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

const answer = ref<number | null>(null)

const question = ref< bigint | null>(null)

// 开始游戏

function confirm() {
  if (!question.value)
    return
  if (question.value === BigInt(answer.value || 0)) {
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
  question.value = null
  answer.value = null
  setTimeout(() => {
    uni.hideToast()
    start()
  }, 1000)
}

async function start() {
  // nums.value
  question.value = BigInt(getRandomNumberByDigit(getRandomInt(1, 3)))
  console.log('%c [ question.value ]-94', 'font-size:13px; background:pink; color:#bf2c9f;', question.value)
}

const beads = computed(() => {
  if (question.value === null)
    return []
  return Abacus.convertToBeads(question.value)
})

console.log('%c [  ]-105', 'font-size:13px; background:pink; color:#bf2c9f;', beads)

onLoad(async (option: any) => {
  const res = JSON.parse(decodeURIComponent(option.params))
  params.value = res
  await sendCode()
  start()
})
</script>

<template>
  <view class="c2-start-box">
    <view class="back-btn" @click="back">
      返回
    </view>

    <!-- <template v-else> -->
    <view class="c2-start-container mr10rpx">
      <view v-if="countdown > 0" style="flex: 2">
        <view class="countdown">
          {{ countdown }}
        </view>
      </view>
      <template v-else>
        <view class="left-box mx6rpx" style="flex: 2">
          <view class="text-3xl c-amber">
            <view class="abacus px20px">
              <view>
                <view class="flex">
                  <view v-for="(bead, j) in beads.filter(e => e.upper || e.upper === 0)" :key="j">
                    <Diamond v-for="(n, k) in bead.upper" :key="k" color="red" />
                    <Diamond v-if="bead.upper === 0" seize-a-seat />
                  </view>
                </view>
                <view class="segmentation" />
                <view class="flex">
                  <view v-for="(bead, j) in beads.filter(e => e.lower || e.lower === 0)" :key="j">
                    <Diamond v-for="(n, k) in bead.lower" :key="k" color="green" />
                    <Diamond v-if="bead.lower === 0" seize-a-seat />
                  </view>
                </view>
              </view>
            </view>
          </view>
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
    .segmentation{
      border-bottom:1px solid #ddd ;
      width: 100%;
    }
      </style>
