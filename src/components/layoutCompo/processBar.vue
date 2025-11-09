<script setup lang="ts">
defineProps({
  text: String,
  percent: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <div class="process_bar">
    <div class="left" v-html="text"></div>
    <div class="right">
      <div class="process_bar_bg">
      </div>
      <div class="process_bar_fill" :style="{ width: percent + '%' }"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@mixin flexStyle($align:'center', $justContent:'space-around') {
  display: flex;
  align-items: $align;
  justify-content: $justContent;
}
.process_bar {
  @include flexStyle(unset, space-around);
  width: 100%;
  height: 24px;
  .left {
    width: 200px;
    color: rgba(245, 245, 245, 1);;
  }
  .right {
    position: relative;
    width: 118px;
    height: 4px;
    border-radius: 15px;
    overflow: hidden;
    margin-top: 9px;
    .process_bar_bg {
      background-color: #000;
      height: 4px;
    }
    .process_bar_fill {
      position: absolute;
      left: 0;
      top: 0;
      height: 4px;
      background: rgba(245, 245, 245, 1);
    }
  }
}
</style>
