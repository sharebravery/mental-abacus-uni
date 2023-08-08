<script setup lang='ts'>
import { Abacus } from '@/utils/abacusCalculation/abacus'

const emit = defineEmits(['update:modelValue', 'confirm'])

const modelValue = ref<bigint | string>()

watch(modelValue, (newVal) => {
  emit('update:modelValue', newVal)
})

function changeModelValue(number: bigint | string) {
  modelValue.value ? modelValue.value += number as string : modelValue.value = number
}
</script>

<template>
  <view class="container text-center w-200" style="width: 100%;">
    <view class="solid bg-white border-rd-2 h-50">
      {{ modelValue }}
    </view>

    <ul class="keyboard flex">
      <li>
        <button @click="changeModelValue('1')">
          1
        </button>
      </li>
      <li>
        <button @click="changeModelValue('2')">
          2
        </button>
      </li>
      <li>
        <button @click="changeModelValue('3')">
          3
        </button>
      </li>
      <li>
        <button class="btn-text" @click="modelValue = undefined">
          清空
        </button>
      </li>
    </ul>

    <ul class="keyboard flex">
      <li>
        <button @click="changeModelValue('4')">
          4
        </button>
      </li>
      <li>
        <button @click="changeModelValue('5')">
          5
        </button>
      </li>
      <li>
        <button @click="changeModelValue('6')">
          6
        </button>
      </li>

      <li>
        <button class="btn-text bg-red" @click="modelValue && (modelValue = Abacus.deleteLastDigit(modelValue as bigint))">
          删除
        </button>
      </li>
    </ul>

    <ul class="keyboard flex">
      <li>
        <button @click="changeModelValue('7')">
          7
        </button>
      </li>
      <li>
        <button @click="changeModelValue('8')">
          8
        </button>
      </li>
      <li>
        <button @click="changeModelValue('9')">
          9
        </button>
      </li>

      <li>
        <button class="btn-text bg-#4c9804" @click="emit('confirm')">
          确定
        </button>
      </li>
    </ul>

    <ul class="keyboard flex">
      <li>
        <button @click="changeModelValue('0')">
          0
        </button>
      </li>
      <li>
        <button @click="changeModelValue('.')">
          .
        </button>
      </li>
    </ul>
  </view>
</template>

<style lang="scss" scoped>
.container {
  .keyboard {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;

    li {
      width: 100%;
      margin: 1px;
      button {
        margin: 0;
        padding: 0;
        height: 26px;
        line-height: 26px;
      }
    }
  }
.btn-text {
  font-size: 8px;
}
}
</style>
