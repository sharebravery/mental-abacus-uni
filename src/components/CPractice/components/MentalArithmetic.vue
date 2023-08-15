<script lang='ts' setup>
const props = withDefaults(defineProps<{ speed: number; nums: number[] }>(), {
  speed: 2,
})

const box = ref<HTMLDivElement>()

const state = ref<'start' | 'end'>('start')

const style = reactive({
  'top': '100vh',
  '--speed': `${props.speed}s`,
})

function startAnimation() {
  style['--speed'] = ` ${props.speed}s`
  style.top = '-120rpx'
}

watch(() => props.nums,
  () => {
    if (props.nums.length > 0) {
      state.value = 'start'
      startAnimation()
      setTimeout(() => {
        state.value = 'end'
      }, props.speed * 1000)
    }
    else {
      style['--speed'] = ` ${0}s`
      style.top = '100vh'
    }
  }, { immediate: true })
</script>

<template>
  <view class="mental-arithmetic flex w[100%]">
    <view ref="box" :style="style" class="mental-arithmetic-content">
      <view class="mental-arithmetic-num">
        {{ nums?.[0] }}
      </view>
      <view class="mental-arithmetic-num">
        {{ nums?.[1] }}
      </view>
      <view class="divisionLine" />
    </view>

    <text v-if="state === 'end'" style="margin: auto;transition: all 1s;">
      写答案
    </text>
  </view>
</template>

<style scoped>
.mental-arithmetic {
  width: 100%;
  height: 100vh;
  /* height: 100%; */
  text-align: center;
  margin: auto;
  position: relative;

}

.mental-arithmetic-content {
  width: 100rpx;
  height: 100rpx;
  position: absolute;
  left: calc(100vw/2 - 100rpx );
  transition:  all var(--speed) linear;
  top:100vh
}

.mental-arithmetic-num {
  font-size: 20px;
  text-align: right;
}

.divisionLine {
  width: 100rpx;
  height: 2px;
  margin: auto;
  background: #fff;
}
</style>
