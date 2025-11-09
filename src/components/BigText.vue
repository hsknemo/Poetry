<script setup lang="ts">


defineProps({
  text: String,
  isCenter: Boolean,
})
</script>

<template>
<div class="big_text"
     :class="[
       {
         flex_center: isCenter,
       }
     ]"
>
  {{ text }}
</div>
</template>

<style scoped lang="scss">
.big_text {
  width: 100%;
  display: flex;
  align-items: center;
  color: rgba(228, 228, 228, 1);
  font-weight: 300;
  font-size: 32px;
  font-family: inter-normal;

  &.flex_center {
    justify-content: center;
  }
}
</style>
