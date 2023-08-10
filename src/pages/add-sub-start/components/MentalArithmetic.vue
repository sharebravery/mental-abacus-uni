<!--
 * @Description:
 * @Author: 景 彡
 * @Date: 2023-08-10 15:29:35
 * @LastEditors: 景 彡
-->
<script lang='ts' setup>
const props = defineProps<{ speed: number }>()

const showBox = ref(true)

function startAnimation() {
  showBox.value = true
  setTimeout(() => {
    showBox.value = false
  }, 2000)
}

onMounted(() => {
  startAnimation()
})
</script>

<template>
  <view class="mental-arithmetic">
    <transition v-show="showBox" mode="out-in" name="slide-fade">
      <view class="mental-arithmetic-content">
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
  height: 100%;
  text-align: center;
  margin: auto;
}
.mental-arithmetic-content {
  width: 100rpx;
  height: 100rpx;
  margin: auto;
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

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to
 {
  transform: translateY(100vh);
  opacity: 0;
}
</style>
