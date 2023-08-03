<script setup lang="ts">
import Keyboard from './components/Keyboard.vue'
import Diamond from './components/Diamond.vue'
import { Abacus } from '@/utils/abacus'

const value = ref(3)

function test() {
  const res = Abacus.convertToBeads('21' as unknown as bigint)
  console.log('%c [ res ]-10', 'font-size:13px; background:#bf89d8; color:#ffcdff;', res)
}
</script>

<template>
  <view class="container flex">
    <view class="w-5xl">
      <uni-icons type="contact" size="30" />
      <Diamond color="#FF0000" />{{ value }}
    </view>
    <view>
      <Keyboard v-model="value" @update:modelValue="test" />
    </view>
  </view>
</template>
