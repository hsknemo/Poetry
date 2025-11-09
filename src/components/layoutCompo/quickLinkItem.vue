<script setup lang="ts">
defineProps({
  text: String,
  link_item: {
    type: Array,
    default: []
  },
  isHasBorder: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
<section class="quick_link_item"
         :class="{
          isHasBorder
         }"
>
  <div class="top">{{ text }}</div>
  <div class="bottom">
    <div :key="index" class="sm_item" v-for="(item, index) in link_item">
      <div>{{ item }}</div>
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
@mixin flexStyle($align:'center', $justContent:'space-around') {
  display: flex;
  align-items: $align;
  justify-content: $justContent;
}
.quick_link_item {
  width: 100%;
  margin-bottom: 30px;

  &.isHasBorder {
    &:after {
      display: block;
      content: '';
      width: 100%;
      height: 1px;
      margin-top: 35px;
      background: linear-gradient(to right, rgba(48, 48, 48, 0), rgb(48, 48, 48) 60%, rgba(48, 48, 48, 0));
    }
  }

  .top {
    color: #fff;
    font-size: 15px;
    margin-bottom: 11px;
    font-weight: 700;
  }
  .bottom {
    @include flexStyle(center);
    font-weight: 400;
    color: rgb(144, 144, 144);
    font-size: 12px;
    div {
      @include flexStyle(center);
      &:after {
        content: '';
        width: 4px;
        height: 4px;
        background-color: rgb(80, 80, 80);
        border-radius: 50%;
        margin: 0 6px;
      }
      &:last-child {
        &:after {
          display: none;
        }
      }
    }
  }
}
</style>
