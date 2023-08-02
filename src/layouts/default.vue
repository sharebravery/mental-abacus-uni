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

      font-sans color-gray-700 h-full w-full dark:color-gray-200
    >
      <slot />
    </main>
  </view>
</template>
