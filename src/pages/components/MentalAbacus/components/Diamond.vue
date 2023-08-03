<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  color: {
    type: String as PropType<string>,
    default: '#000000', // 默认颜色为黑色
  },
  size: {
    type: Number as PropType<number>,
    default: 100, // 默认大小为100
  },
})

// 计算菱形的四个点的坐标
const points = [
    `${props.size / 2},0`,
    `${props.size},${props.size / 2}`,
    `${props.size / 2},${props.size}`,
    `0,${props.size / 2}`,
].join(' ')
</script>

<template>
  <svg :width="size" :height="size">
    <polygon :points="points" :fill="color" />
  </svg>
</template>

  <style scoped>
  /* 添加一些样式以使菱形居中显示 */
  svg {
    display: block;
    margin: 0 auto;
  }
  </style>
