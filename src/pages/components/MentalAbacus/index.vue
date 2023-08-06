<script setup lang="ts">
import Keyboard from './components/Keyboard.vue'
import { AddAndSubtractCondition, generateArithmeticExpression } from '@/utils/arithmeticExpression'

interface IProps {
  value: bigint
}

defineProps<IProps>()

const emit = defineEmits(['confirm'])

const answer = ref(3)

function test() {
  // const res = Abacus.convertToBeads(21n)
  // console.log('%c [ res ]-10', 'font-size:13px; background:#bf89d8; color:#ffcdff;', res)
  const params = new AddAndSubtractCondition()

  params.maxDigits = 2
  params.strokeCount = 3

  params.type = 2
  generateArithmeticExpression(params)
}
</script>

<template>
  <view class="container flex">
    <view class="flex flex-col w-5xl">
      <!-- <Bead color="#FF0000" :value="value" /> -->
      <text>1</text>
      <text>+</text>
      <text>2</text>
    </view>
    <view>
      <Keyboard v-model="answer" @update:modelValue="test" @confirm="emit('confirm')" />
    </view>
  </view>
</template>
