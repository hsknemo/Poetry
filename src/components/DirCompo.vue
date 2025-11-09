<script setup lang="ts">

import { getImg } from '@/utils/getImg.ts'
import { useRoute, useRouter} from 'vue-router'
const route = useRoute()
const router = useRouter()
const routeName = route.meta.title
defineProps({
  fileName: String,
  assetsPath: String,
})

const onRouteJumpHome = () => {
  router.push('/')
}
</script>

<template>
<div class="dir_compo wow fadeIn">
  <div class="top_dir">
    <img :src="getImg(assetsPath, fileName)" alt="">
    <div class="dir_list">
      <span @click="onRouteJumpHome" class="route_name">Home</span>
      <span class="r_g">/</span>
      <span class="route_name active">{{ routeName }}</span>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
@mixin flexStyle($align:'center', $justContent:'space-around') {
  display: flex;
  align-items: $align;
  justify-content: $justContent;
}
.dir_compo {
  .top_dir {
    @include flexStyle(center);
    img {
      --size: 48px;
      width: var(--size);
      height: var(--size);
      margin-right: 15px;
    }

    .dir_list {
      @include flexStyle(center);

      .route_name {
        color: rgb(138, 138, 138);
        transition: all .3s linear;
        cursor: pointer;
        &:hover, &.active {
          color: rgb(30, 30, 30);
        }
      }

      .r_g {
        margin: 0 4px;
      }
    }
  }
}
</style>
