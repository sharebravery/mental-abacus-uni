<!--
 * @Description:
 * @Author: luckymiaow
 * @Date: 2023-08-04 22:09:21
 * @LastEditors: 景 彡
-->
<route lang="yaml">
name: NumberBeadsTranslation
style:
  navigationBarTitleText: 数珠互译
    </route>

<script setup lang="ts">
import { ref } from 'vue'
import { AddAndSubtractOptions } from '@/utils/abacusCalculation/generateArithmeticExpression'

// type: 1-闪电算，2-听心算，3-看心算
const params = ref({
  type: 1,
  speed: 2,
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
          听数拨珠
        </view>
        <view class="c2-nav-item" :class="{ 'nav-active': params.type === 2 }" @click="navType(2)">
          看珠译数
        </view>
      </view>
      <view class="c2-content">
        <uni-title class="c2-title" type="h1" title="数珠互译" align="center" />
        <uni-row class="demo-uni-row" :gutter="6">
          <uni-col :span="24">
            <view class="option-child">
              <text class="c2-label">
                最小位：
              </text><uni-number-box
                v-model="params.option.minDigits" class="c2-number" background="rgb(253 212 111)"
                :min="1"
              />
            </view>
            <view class="option-child">
              <text class="c2-label">
                最大位：
              </text><uni-number-box
                v-model="params.option.minDigits" class="c2-number" background="rgb(253 212 111)"
                :min="1"
              />
            </view>
            <view class="option-child">
              <text class="c2-label">
                速度：
              </text><uni-number-box v-model="params.speed" class="c2-number" background="rgb(253 212 111)" :min="1" />
            </view>
          </uni-col>
        </uni-row>
      </view>
    </view>
    <view class="c2-footer">
      <text class="list-icon bg-#fe9e17" @click="router.push({ name: 'NumberBeadsStart', query: { params } })">
        开始
      </text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.add-sub-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.c2-title {
  background: #b9e063;
  padding: 0 6px;
  margin-top: -25px;
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

  .c2-label {
    width: 40px;
    font-size: 8px;
  }

  :deep(.uni-row) {
    margin-top: 15px;
  }

  .c2-title {
    position: absolute;
    top: 0;
    left: 38%;
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
  justify-content: center;
  align-items: center;
  margin-bottom: 6px;
}

.c2-footer {
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
</style>
