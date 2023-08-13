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
  <view class="diamond" />
</template>

  <style scoped lang="scss">
  /* 添加一些样式以使菱形居中显示 */
  .diamond{
      width: 70rpx;
      height: 40rpx;
      background-color: #1E771E;
      border-radius: 50%;
      margin: 4rpx;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
      background: linear-gradient(180deg, rgb(255 196 0), rgb(255 222 111), rgb(255 196 0));

  }
  .top{
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100rpx;
      height: 45rpx;
      background-color: red;
      border-radius: 40%;
    }

    .bot{
      // display: block;
      // position: absolute;
      // top: 0;
      // left: 0;
      // width: 400rpx;
      // height: 25rpx;
      // background-color: red;

    }
  </style>
