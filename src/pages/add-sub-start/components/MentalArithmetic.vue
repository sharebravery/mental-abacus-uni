<!--
 * @Description:
 * @Author: luckymiaow
 * @Date: 2023-08-11 23:40:08
 * @LastEditors: luckymiaow
-->

<script lang='ts' setup>
import gsap from 'gsap'

const props = defineProps<{ speed: number; nums: string[] }>()

const box = ref<HTMLDivElement>()

function startAnimation() {
  const timeline = gsap.timeline()
  if (box.value)
    box.value.style.display = 'block'
  timeline.to(box.value, {
    y: -100, // 向上移动的距离
    opacity: 0, // 渐隐
    duration: 2, // 动画持续时间
    ease: 'power2.out', // 缓动函数
    onComplete: () => {
      // 动画完成后的回调
      if (box.value)
        box.value.style.display = 'none' // 隐藏元素
    },
  })
}

watch(() => props.nums,
  () => {
    startAnimation()
  }, { immediate: true })
</script>

<template>
  <view class="mental-arithmetic">
    <view ref="box" class="mental-arithmetic-content">
      <view class="mental-arithmetic-num">
        {{ nums?.[0] }}
      </view>
      <view class="mental-arithmetic-num">
        {{ nums?.[1] }}
      </view>
      <view class="divisionLine" />
    </view>
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
