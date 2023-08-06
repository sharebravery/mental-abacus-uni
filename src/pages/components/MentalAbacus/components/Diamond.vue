<!--
 * @Description:
 * @Author: luckymiaow
 * @Date: 2023-08-04 21:39:43
 * @LastEditors: luckymiaow
-->
<script setup lang="ts">
import type { PropType } from 'vue'

// const props =
defineProps({
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
// const points = [
//     `${props.size / 2},0`,
//     `${props.size},${props.size / 2}`,
//     `${props.size / 2},${props.size}`,
//     `0,${props.size / 2}`,
// ].join(' ')
</script>

<template>
  <!-- <svg :width="size" :height="size">
    <polygon :points="points" :fill="color" />
  </svg> -->
  <svg :width="size" height="50" xmlns="http://www.w3.org/2000/svg">
    <!-- 椭圆形球体 -->
    <ellipse cx="50" cy="25" rx="40" ry="20" fill="#ff6347" />

    <!-- 添加阴影效果 -->
    <!-- <ellipse cx="100" cy="150" rx="80" ry="40" fill="#ff6347" opacity="0.4" /> -->

    <!-- 添加渐变效果 -->
    <ellipse cx="50" cy="25" rx="40" ry="20" fill="url(#gradient)" />

    <!-- 渐变定义 -->
    <defs>
      <linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="20" y1="0" x2="20" y2="20">
        <stop offset="0%" stop-color="#fda050" />
        <stop offset="100%" stop-color="#ed8b3b" />
      </linearGradient>
    </defs>

    <filter id="innerShadow">
      <feOffset dx="0" dy="0" />
      <feGaussianBlur stdDeviation="5" result="offset-blur" />
      <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
      <feFlood flood-color="black" flood-opacity="0.8" result="color" />
      <feComposite operator="in" in="color" in2="inverse" result="shadow" />
      <feComposite operator="over" in="shadow" in2="SourceGraphic" />
    </filter>

    <!-- 应用内阴影效果 -->
    <ellipse cx="100" cy="100" rx="80" ry="40" fill="#ff0000" filter="url(#innerShadow)" />
  </svg>
</template>

  <style scoped>
  /* 添加一些样式以使菱形居中显示 */
  svg {
    display: block;
    margin: 0 auto;
  }
  </style>
