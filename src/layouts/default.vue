<!--
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2023-06-28 09:44:47
-->
<script lang="ts" setup>

</script>

<template>
  <view
    class="app" :class="{
      dark: isDark,
    }"
    style="width: 100vw; height: 100vh;background-color: #b9e063;"
  >
    <main
      class="main-box"

      font-sans h-full w-full dark:color-gray-200
    >
      <slot />
    </main>
  </view>
</template>

<style lang="scss" scoped>
.main-box {
  background: url(../static/images/bg2.jpg) no-repeat;
  background-size: 100% 100%;
}
</style>
