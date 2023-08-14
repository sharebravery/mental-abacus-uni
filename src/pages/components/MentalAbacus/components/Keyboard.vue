<script setup lang='ts'>
import { Abacus } from '@/utils/abacusCalculation/abacus'

const emit = defineEmits(['update:modelValue', 'confirm'])

const modelValue = ref<bigint | string>()

const attrs = useAttrs()

watch(() => attrs.modelValue as any, (newVal: any) => {
  modelValue.value = newVal
})

watch(modelValue, (newVal) => {
  emit('update:modelValue', Number.isNaN(Number(newVal)) ? undefined : Number(newVal))
})

function changeModelValue(number: bigint | string) {
  modelValue.value ? modelValue.value += number as string : modelValue.value = number
}
</script>

<template>
  <view class="container text-center w-200" style="width: 100%;">
    <view class="c2-num-input solid bg-white border-rd-2">
      {{ modelValue }}
    </view>

    <view class="content-row">
      <uni-row :gutter="4">
        <uni-col :span="6">
          <view class="keyword-num" @click="changeModelValue('1')">
            1
          </view>
        </uni-col>
        <uni-col :span="6">
          <view class="keyword-num" @click="changeModelValue('2')">
            2
          </view>
        </uni-col>
        <uni-col :span="6">
          <view class="keyword-num" @click="changeModelValue('3')">
            3
          </view>
        </uni-col>
        <uni-col :span="6">
          <view class="btn-text" @click="modelValue = undefined">
            清空
          </view>
        </uni-col>
      </uni-row>
      <uni-row class="demo-uni-row" :gutter="4">
        <uni-col :span="6">
          <view class="keyword-num" @click="changeModelValue('4')">
            4
          </view>
        </uni-col>
        <uni-col :span="6">
          <view class="keyword-num" @click="changeModelValue('5')">
            5
          </view>
        </uni-col>
        <uni-col :span="6">
          <view class="keyword-num" @click="changeModelValue('6')">
            6
          </view>
        </uni-col>
        <uni-col :span="6">
          <view
            class="btn-text bg-red"
            @click="modelValue && (modelValue = Abacus.deleteLastDigit(modelValue as bigint))"
          >
            删除
          </view>
        </uni-col>
      </uni-row>
      <uni-row class="demo-uni-row" :gutter="4">
        <uni-col :span="6">
          <view class="keyword-num" @click="changeModelValue('7')">
            7
          </view>
        </uni-col>
        <uni-col :span="6">
          <view class="keyword-num" @click="changeModelValue('8')">
            8
          </view>
        </uni-col>
        <uni-col :span="6">
          <view class="keyword-num" @click="changeModelValue('9')">
            9
          </view>
        </uni-col>
        <uni-col :span="6">
          <view class="btn-text bg-#4c9804" @click="emit('confirm')">
            确定
          </view>
        </uni-col>
      </uni-row>
      <uni-row class="demo-uni-row" :gutter="4">
        <uni-col :span="12">
          <view class="keyword-num" @click="changeModelValue('0')">
            0
          </view>
        </uni-col>
        <uni-col :span="12">
          <view class="keyword-num" @click="changeModelValue('.')">
            .
          </view>
        </uni-col>
      </uni-row>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.container {

  .c2-num-input {
    height: 24px;
    line-height: 24px;
  }
}

:deep(.content-row){
  >view{
    margin-top:2px ;
  }

  .keyword-num,
  .btn-text {
    height: 20px;
    line-height: 20px;
    background: #fff;
    border-radius: 4px;
  }

  .btn-text {
    white-space: nowrap;
    // height: 100%;
    font-size: 10px;
  }
}
</style>
