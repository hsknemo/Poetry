<script setup lang="ts">
const pngs = [
  'moon1',
  'moon2',
  'moon3',
  'moon4',
]

const getImageUrl = (name) => {
  return new URL(`/src/assets/four/${name}.png`, import.meta.url).href
}
</script>

<template>
  <div class="mid_four">
    <div class="rect"
         :key="index"
         v-for="(item, index) in pngs">
      <img :src="getImageUrl(item)" alt="">
    </div>
  </div>
</template>

<style scoped lang="scss">
@mixin flexStyle($align:'center', $justContent:'space-around') {
  display: flex;
  align-items: $align;
  justify-content: $justContent;
}
.mid_four {
  @include flexStyle(center, center);
  height: 88px;
  .rect {
    --size: 26px;
    width: var(--size);
    height: var(--size);
    border-radius: 100%;
    background-size: 100% 100%;
    margin-right: 20px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
