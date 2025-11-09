<script setup lang="ts">


import RightArrow from '@/components/iconCompo/rightArrow.vue'

defineProps({
  text: Array,
  isCenter: Boolean,
})
</script>

<template>
<div class="arrow_text"
     :class="[
       {
         flex_center: isCenter,
       }
     ]"
>

  <span>{{ text[0] }}</span>
  <span class="arrow_text_jt">
    <rightArrow />
  </span>
  <span>{{ text[1] }}</span>
</div>
</template>

<style scoped lang="scss">
@mixin flexStyle($align:'center', $justContent:'space-around') {
  display: flex;
  align-items: $align;
  justify-content: $justContent;
}
.arrow_text {
  width: 100%;
  display: flex;
  align-items: center;
  color: rgba(228, 228, 228, 1);
  font-weight: 300;
  font-size: 32px;
  font-family: inter-normal;
  span {
    font-size: 20px;
  }

  .arrow_text_jt {
    color: rgb(128, 128, 128);
    font-size: 20px;
    margin: 0 8px;
    @include flexStyle(center, center);
  }

  &.flex_center {
    justify-content: center;
  }
}
</style>
