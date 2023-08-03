<script setup lang="ts">
import Keyboard from './components/Keyboard.vue'
import Bead from './components/Bead.vue'
import { Abacus } from '@/utils/abacus'

interface IProps {
  value: bigint
}

defineProps<IProps>()

const emit = defineEmits(['confirm'])

const answer = ref(3)

function test() {
  const res = Abacus.convertToBeads('21' as unknown as bigint)
  console.log('%c [ res ]-10', 'font-size:13px; background:#bf89d8; color:#ffcdff;', res)
}
</script>

<template>
  <view class="container flex">
    <view class="w-5xl">
      <Bead color="#FF0000" :value="value" />
    </view>
    <view>
      <Keyboard v-model="answer" @update:modelValue="test" @confirm="emit('confirm')" />
    </view>
  </view>
</template>
