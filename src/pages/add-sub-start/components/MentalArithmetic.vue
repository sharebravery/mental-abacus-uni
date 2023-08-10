<!--
 * @Description:
 * @Author: 景 彡
 * @Date: 2023-08-10 15:29:35
 * @LastEditors: 景 彡
-->
<script lang='ts' setup>
const props = defineProps<{ speed: number }>()

const showBox = ref(false)
const translateY = ref('translateY(100%)')

function startAnimation() {
  showBox.value = true

  setTimeout(() => {
    translateY.value = 'translateY(0)'
    showBox.value = false
  }, 2000)
}

onMounted(() => {
  startAnimation()
})
</script>

<template>
  <view class="mental-arithmetic">
    <transition v-show="showBox" mode="out-in" name="slide-up">
      <view class="mental-arithmetic-content" :style="{ transform: translateY }">
        <view class="mental-arithmetic-num">
          20
        </view>
        <view class="mental-arithmetic-num">
          -12
        </view>
        <view class="divisionLine" />
      </view>
    </transition>
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
  margin: auto;
  transition: transform 0.5s ease-in-out;
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

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(100%);
}
</style>
