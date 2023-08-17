<!--
 * @Description:
 * @Author: luckymiaow
 * @Date: 2023-08-04 23:48:39
 * @LastEditors: luckymiaow
-->
<route lang="yaml">
name: AddSubStart
style:
  navigationBarTitleText: 答题页
  </route>

<script lang='ts' setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { AddAndSubtractOptions, calculateArraySum, generateAdditionOrSubtractionExpression } from '@/utils/abacusCalculation/generateArithmeticExpression'

const params = ref({
  type: 1,
  speed: 0,
  option: new AddAndSubtractOptions(),
})

onLoad((option: any) => {
  params.value = JSON.parse(decodeURIComponent(option.params))
})
</script>

<template>
  <c-practice :type="params.type" :speed="params.speed" :gen-fn="() => generateAdditionOrSubtractionExpression(params.option)" :result-fn="calculateArraySum" />
</template>

  <style scope>
    .c2-start-box {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
      background-color: green;
    }
    .countdown {
      width: 30px;
      height: 30px;
      line-height: 30px;

      border: 2px solid #fff;
      border-radius: 50%;
      text-align: center;
      color: #fff;
      position: absolute;
    top: calc(50% - 30px);
    }
    .c2-start-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .back-btn {
    position: fixed;
    left: 4px;
    top: 4px;
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

.left-box {
  flex: 2;text-align: center; color: #fff;
}
  </style>
