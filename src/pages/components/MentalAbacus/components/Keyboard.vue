<script setup lang='ts'>
const emit = defineEmits(['update:modelValue'])

const modelValue = ref()

watch(modelValue, (val) => {
  emit('update:modelValue', val)
})
</script>

<template>
  <view class="container w-300">
    <view class="solid bg-white border-rd h-50" />

    <ul class="keyboard flex">
      <li>
        <button @click="modelValue = 1">
          1
        </button>
      </li>
      <li>
        <button @click="modelValue = 2">
          2
        </button>
      </li>
      <li>
        <button @click="modelValue = 3">
          3
        </button>
      </li>
      <li>
        <button>清空</button>
      </li>
    </ul>

    <ul class="keyboard flex">
      <li>
        <button @click="modelValue = 4">
          4
        </button>
      </li>
      <li>
        <button @click="modelValue = 5">
          5
        </button>
      </li>
      <li>
        <button @click="modelValue = 6">
          6
        </button>
      </li>

      <li>
        <button class="bg-red">
          删除
        </button>
      </li>
    </ul>

    <ul class="keyboard flex">
      <li>
        <button @click="modelValue = 7">
          7
        </button>
      </li>
      <li>
        <button @click="modelValue = 8">
          8
        </button>
      </li>
      <li>
        <button @click="modelValue = 9">
          9
        </button>
      </li>

      <li>
        <button class="bg-#4c9804">
          确定
        </button>
      </li>
    </ul>

    <ul class="keyboard flex">
      <li>
        <button @click="modelValue = 0">
          0
        </button>
      </li>
      <li>
        <button @click="modelValue = '.'">
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
        height: 36px;
        line-height: 36px;
      }
    }
  }

}
</style>
