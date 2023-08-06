<!--
 * @Description:
 * @Author: luckymiaow
 * @Date: 2023-08-04 21:39:43
 * @LastEditors: luckymiaow
-->
<script setup lang="ts">
import Diamond from './Diamond.vue'
import type { IBead } from '@/utils/abacus'
import { Abacus } from '@/utils/abacus'

interface IProps {
  value: bigint
  color?: string
}

const props = defineProps<IProps>()

const beads = ref<IBead[]>([])

watchEffect(() => {
  beads.value = Abacus.convertToBeads(props.value)
  console.log('%c [  beads.value ]-17', 'font-size:13px; background:#f50c5e; color:#ff50a2;', beads.value)
})

function back() {
  const canNavBack = getCurrentPages() // 获取路由栈
  if (canNavBack && canNavBack.length > 1) { // 判断是否刷新了浏览器，如果刷新了浏览器，路由栈只有当前一个
    uni.navigateBack({
      delta: 1,
    })
  }
  else {
    history.back()
  }
}
</script>

<template>
  <view class="container">
    <view class="c2-top">
      <view class="back-btn" @click="back">
        返回
      </view>
      test:{{ value }}
    </view>
    <view class="abacus">
      <view>
        <view class="flex">
          <view v-for="(bead, j) in beads.filter(e => e.upper || e.upper === 0)" :key="j">
            <Diamond v-for="(n, k) in bead.upper" :key="k" :color="color" />
            <Diamond v-show="bead.upper === 0" color="#fb8b05" class="opacity-6" />
          </view>
        </view>
        <hr>
        <view class="flex">
          <view v-for="(bead, j) in beads.filter(e => e.lower || e.lower === 0)" :key="j">
            <Diamond v-for="(n, k) in bead.lower" :key="k" :color="color" />
            <Diamond v-show="bead.lower === 0" color="#fb8b05" class="opacity-6" />
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style>
.c2-top {
  padding: 4px;
}
.abacus {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
.back-btn {
width: 20px;
color: #ecf0f1;
text-align: center;
font-size: 6px;
background-color: #e67e22;
border: 1px solid #f39c12;
border-radius: 5px;
padding: 2px;
box-shadow: 0px 2px 0px #d35400;
transition: all .1s;
}
</style>
