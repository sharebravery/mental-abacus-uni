<!--
 * @Description:
 * @Author: luckymiaow
 * @Date: 2023-08-04 22:09:21
 * @LastEditors: 景 彡
-->
<route lang="yaml">
name: AddSubCalculate
style:
  navigationBarTitleText: 加减算
  </route>

<script setup lang="ts">
import { ref } from 'vue'
import { AddAndSubtractOptions, QuestionType } from '@/utils/abacusCalculation/generateArithmeticExpression'

// type: 1-闪电算，2-听心算，3-看心算
const params = ref({
  type: 1,
  speed: 1,
  option: new AddAndSubtractOptions(),
})

function navType(type: number) {
  params.value.type = type
}

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

onMounted(() => {
  // generateAdditionOrSubtractionExpression

})
</script>

<template>
  <view class="add-sub-box flex">
    <view class="back-btn" @click="back">
      返回
    </view>
    <view class="add-sub-content">
      <view class="c2-nav">
        <view class="c2-nav-item" :class="{ 'nav-active': params.type === 1 }" @click="navType(1)">
          闪电算
        </view>

        <view class="c2-nav-item" :class="{ 'nav-active': params.type === 2 }" @click="navType(2)">
          听心算
        </view>
        <view class="c2-nav-item" :class="{ 'nav-active': params.type === 3 }" @click="navType(3)">
          看心算
        </view>
      </view>
      <view class="c2-content">
        <uni-title class="c2-title" type="h1" title="加减算" align="center" />
        <uni-row class="c2-row" :gutter="6">
          <uni-col :span="12">
            <view class="option-child">
              <text class="c2-label">
                最小位：
              </text><uni-number-box
                v-model="params.option.minDigits" class="c2-number" background="rgb(253 212 111)"
                :min="1"
              />
            </view>
          </uni-col>
          <uni-col :span="12">
            <view class="option-child">
              <text class="c2-label">
                最大位：
              </text><uni-number-box
                v-model="params.option.maxDigits" class="c2-number" background="rgb(253 212 111)"
                :min="1"
              />
            </view>
          </uni-col>
          <!-- <uni-col :span="12">
            <view class="option-child">
              <text class="c2-label">
                小数：
              </text><uni-number-box v-model="params.option.largestBit" class="c2-number" background="rgb(253 212 111)" :min="1" />
            </view>
          </uni-col> -->
          <uni-col :span="12">
            <view class="option-child">
              <text class="c2-label">
                题型：
              </text>
              <uni-data-select
                v-model="params.option.questionType" class="c2-checkbox" :localdata="[
                  {
                    value: QuestionType.综合,
                    text: '综合',
                  },
                  {
                    value: QuestionType.连减,
                    text: '连减',
                  },
                  {
                    value: QuestionType.连加,
                    text: '连加',
                  },
                ]"
              />
            </view>
          </uni-col>
          <uni-col v-if="params.type === 3" :span="12">
            <view class="option-child">
              <text class="c2-label">
                笔数：
              </text><uni-number-box v-model="params.option.strokeCount" class="c2-number" background="rgb(253 212 111)" :min="2" :max="10" />
            </view>
          </uni-col>
          <uni-col :span="12">
            <view class="option-child">
              <text class="c2-label">
                间隔速：
              </text><uni-number-box v-model="params.speed" class="c2-number" background="rgb(253 212 111)" :min="0.1" :step="0.1" />
            </view>
          </uni-col>
        </uni-row>
      </view>
    </view>
    <view class="c2-footer">
      <text
        class="list-icon bg-#fe9e17"
        @click="router.push({ name: 'AddSubStart', query: { params: JSON.stringify(params) } })"
      >
        开始
      </text>
    </view>
  </view>
</template>

<style lang="scss"></style>

<style lang="scss" scoped>
.add-sub-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.add-sub-content {
  width: 80%;
  height: 78%;
  display: flex;
}

.c2-nav {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .c2-nav-item {
    width: 50px;
    height: 23px;
    line-height: 23px;
    margin-bottom: 10px;
    // background-color: rgb(200 241 108);
    background-color: rgb(253 212 111);
    border-radius: 6px 0 0 6px;

    font-size: 10px;
    text-align: center;
  }

  .nav-active {
    background-color: rgb(243 152 71);
    color: #fff;
  }
}

.c2-content {
  position: relative;
  width: 80%;
  padding: 2px;
  border: 4px solid rgb(253 212 111);
  border-radius: 20px;
  text-align: center;

  :deep(.uni-row) {
    margin-top: 15px;
  }

  .c2-title {
    position: absolute;
    top: -23px;
    left: 40%;
    background: #b9e063;
  padding: 0 6px;
  // margin-top: -25px;
  }

  .c2-label {
    width: 40px;
    font-size: 8px;
  }

}

:deep(.c2-number) {
  font-size: 10px;

  .uni-numbox-btns {
    padding: 2px 2px;
  }

  .uni-numbox__value {
    height: 10px;
    font-size: 10px
  }

  .uni-numbox--text {
    line-height: 0px;
  }
}

.option-child {
  display: flex;
  align-items: center;
  margin-bottom: 6px;
}

.c2-footer {
  position: relative;
  width: 100%;
  padding-right: 10px;
  text-align: right;

  .list-icon {
    position: fixed;
  right: 4px;
  bottom: 4px;
    display: inline-block;
    width: 30px;
    height: 30px;
    margin: 0 auto;
    text-align: center;
    line-height: 30px;
    border-radius: 50%;
    font-size: 10px;
    box-shadow: inset 0px 0px 6px #ffffff;
    color: #fff;
  }
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

.c2-checkbox {
  width: 50%;
  font-size: 8px important;
  background: #fdd46f;
  height: 14px;
  :deep(.uni-select){
    font-size: 12rpx !important;
    height: 14px;
    .uni-select__input-box{
      height: 14px;
      .uni-select__input-text{
        font-size: 14rpx !important;
        font-weight: bold;

      }
    }
  }
  :deep(.uni-select__selector-item){
    font-size: 6px;
    line-height: 16px;
  }
}
</style>
