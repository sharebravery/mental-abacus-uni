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
</script>

<template>
  <view class="container">
    test:{{ value }}
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
</template>
