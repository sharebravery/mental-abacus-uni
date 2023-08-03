<route lang="yaml">
name: StraightPlusStraightMinus
style:
  navigationBarTitleText: 直加直减
</route>

<script setup lang="ts">
import MentalAbacus from '../../components/MentalAbacus/index.vue'

const randomInt = ref<bigint>('1' as unknown as bigint)

function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min // 含最大值，含最小值
}

// TODO 限制范围
function randomNumber() {
  randomInt.value = String(getRandomIntInclusive(1, 1000)) as unknown as bigint
}

onMounted(() => {
  randomNumber()
})
</script>

<template>
  <view class="container">
    <MentalAbacus :value="randomInt" @confirm="randomNumber()" />
  </view>
</template>
