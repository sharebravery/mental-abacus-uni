<script setup lang="ts">
import Keyboard from './components/Keyboard.vue'
import Diamond from './components/Diamond.vue'

const value = ref(3)

function test(e) {
  console.log('%c [ value ]-7', 'font-size:13px; background:#f9d53c; color:#ffff80;', value.value)
}
</script>

<template>
  <view class="container flex">
    <view class="w-5xl">
      <Diamond color="#FF0000" />{{ value }}
    </view>
    <view>
      <Keyboard v-model="value" @update:modelValue="test" />
    </view>
  </view>
</template>
