<script setup lang="ts">


defineProps({
  text: String,
  isCenter: Boolean,
  isItalic: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="ita_text"
       :class="[
       {
         flex_center: isCenter,
         italic: isItalic,
       }
     ]"
  >
    {{ text }}
  </div>
</template>

<style scoped lang="scss">
.ita_text {
  height: 66px;
  display: flex;
  align-items: center;
  color: rgba(228, 228, 228, 1);
  font-weight: 200;
  font-size: 20px;
  line-height: 36px;
  font-family: inter-normal;
  &.italic {
    font-style: italic;
    font-family: inter-ita;
  }

  &.flex_center {
    justify-content: center;
  }
}
</style>
