<!--
 * @Description:
 * @Author: luckymiaow
 * @Date: 2023-08-04 21:39:43
 * @LastEditors: luckymiaow
-->
<script setup lang="ts">
import { DivisionOptions, GenerateArithmeticExpression } from '../../../utils/abacusCalculation/generateArithmeticExpression'
import Keyboard from './components/Keyboard.vue'

interface IProps {
  value: bigint
}

defineProps<IProps>()

const emit = defineEmits(['confirm'])

const answer = ref(3)

function test() {
  // const res = Abacus.convertToBeads(21n)
  // console.log('%c [ res ]-10', 'font-size:13px; background:#bf89d8; color:#ffcdff;', res)
  // const params = new AddAndSubtractOptions()

  // params.maxDigits = 2
  // params.strokeCount = 3

  // params.questionType = QuestionType.综合

  // params.expressionType = ExpressionType.破五减

  // params.firstDigits = 2

  // const list = generateAdditionOrSubtractionExpression(params)

  const options = new DivisionOptions()

  options.dividend.digits = 2
  options.divisor.digits = 3

  GenerateArithmeticExpression.generateDivisionExpression(options)
}
</script>

<template>
  <uni-row class="container">
    <uni-col :span="16">
      <!-- <Bead color="#FF0000" :value="value" /> -->
    </uni-col>
    <uni-col :span="8" class="c2-keyboard">
      <Keyboard v-model="answer" @update:modelValue="test" @confirm="emit('confirm')" />
    </uni-col>
  </uni-row>
  <!-- <view class="container flex">
    <view class="w-5xl">
      <Bead color="#FF0000" :value="value" />
    </view>
    <view class="keyboard">
      <Keyboard v-model="answer" @update:modelValue="test" @confirm="emit('confirm')" />
    </view>
  </view> -->
</template>

<style>
.container {
  height: 100%;
}
.c2-keyboard {
  display: flex;
  align-items: flex-end;
}
.uni-col {
  height: 100%;
}
</style>
