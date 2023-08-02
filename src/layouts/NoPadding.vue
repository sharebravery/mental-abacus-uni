<script lang="ts" setup>
const pages = getCurrentPages()
const page = pages[pages.length - 1] as any
const title = page.$page.meta.navigationBar.titleText

const pageRef = ref()

console.log('%c [ pageRef ]-10', 'font-size:13px; background:pink; color:#bf2c9f;', pageRef)

function back() {
  uni.navigateBack({
    delta: 1,
  })
}
</script>

<template>
  <view class="container">
    <uni-nav-bar left-icon="left" shadow :title="title" :border="false" @clickLeft="back" />
    <view class="px-4 pt-6">
      <slot ref="pageRef" />
    </view>
  </view>
</template>
