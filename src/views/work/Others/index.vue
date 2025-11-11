<script setup lang="ts">
import DirCompo from '@/components/DirCompo.vue'
import BigText from '@/components/BigText.vue'
import ItaText from '@/components/ItaText.vue'
import HoverItem from '@/components/HoverItem.vue'

const hoverDataItem = ref([
  'TR3 Data Centre',
  'PJ Life and Health Industrial Park',
  'Ottawa Bell Data Centre',
  '200 Front St.',
  'Lingang Group Headquarter',
])

</script>

<template>
  <div class="work_Other">
    <dir-compo
      assets-path="work"
      file-name="moon.png"
      :isUseOrigin="false"
      :routerList="[
        {
          path: '/',
          pathName: 'Home',
        },
        {
          path: '/work',
          pathName: 'Work',
        },
        {
          path: '/work/Others',
          pathName: 'Others',
        },
      ]"
    >
    </dir-compo>

    <main class="article_body">
      <article class="wow slideInLeft">
        <big-text class="top_title" text="Others"></big-text>

        <ita-text
          class="ita_sub_text"
          text="Industrial and Office — Where Technology Meets the City"
        ></ita-text>

        <big-text class="sumary_text" text="Notes on Other projects"></big-text>

        <big-text
          class="article_item"
          text="These projects ask how technology and workspace can  live with the city—not as sealed machines, but as  permeable neighbors."
        ></big-text>

        <big-text
          class="article_item"
          text="Through material warmth and reflection, transparent  ground planes, and façade rhythms aligned to urban  grids, infrastructure becomes walkable."
        ></big-text>

        <big-text
          class="article_item"
          text="Here, urban landscapes are not the background of living, but its shared ground—where architecture mediates between community, view, and belonging."
        ></big-text>

        <big-text
          class="article_item"
          text="Through scale, transparency, and proportion, the  architecture supports human occupation—where sitting,  walking, and meeting become part of the urban rhythm."
        ></big-text>

        <big-text
          class="botm_text"
          text="This exploration spans the following projects:"
        ></big-text>

        <hover-item :dataItem="hoverDataItem" />

        <ita-text class="b_ita" text="Selected projects featured on this page."></ita-text>

        <div class="btom_text">
          Text reflects my personal understanding from practice; project images are intentionally
          omitted to respect firm IP.
        </div>
      </article>
    </main>
    <div class="bird_right wow slideInRight">
    </div>
  </div>
</template>

<style scoped lang="scss">
@mixin flexStyle($align: 'center', $justContent: 'space-around') {
  display: flex;
  align-items: $align;
  justify-content: $justContent;
}
.work_Other {
  padding: 104px 154px;
  overflow: hidden;

  * {
    font-family: inter-normal;
  }

  .article_body {
    margin-top: 45px;
    padding-left: 64px;
    @include flexStyle();

    article {
      margin-right: 69px;
      .top_title {
        width: 239px;
        height: 49px;
        color: rgba(30, 30, 30, 1);
        font-weight: 500;
        font-size: 44px;
        line-height: 48.4px;
        letter-spacing: -0.7px;
        margin-bottom: 6px;
      }
      .ita_sub_text {
        color: rgba(189, 189, 189, 1);
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.3px;
        height: unset;
        margin-bottom: 40px;
      }

      .sumary_text {
        height: unset;
        color: rgba(68, 68, 68, 0.87);
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: -0.4px;
        margin-bottom: 13px;
      }

      .article_item {
        width: 450px;
        color: rgba(138, 138, 138, 1);
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.3px;
        margin-bottom: 10px;
      }

      .botm_text {
        color: rgba(138, 138, 138, 1);
        font-weight: 300;
        font-size: 14px;
        line-height: 22.4px;
        letter-spacing: -0.2px;
        margin-bottom: 9px;
        margin-top: 5px;

      }

      .sm_tit {
        font-size: 14px;
        height: unset;
        font-weight: 500;
        color: rgb(96, 96, 96);
      }

      .b_ita {
        margin-top: 12px;
        color: rgba(144, 144, 144, 1);
        font-weight: 400;
        font-size: 12px;
        height: unset;
      }

      .btom_text {
        width: 466px;
        padding-top: 9px;
        color: rgba(138, 138, 138, 1);
        font-size: 12px;
        line-height: 16px;
        border-top: 1px solid rgba(26, 26, 26, 1);
      }
    }
  }

  .bird_right {
    position: fixed;
    right: 0;
    top: 0;
    width: 1166px;
    height: 1080px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url('@/assets/work/bird.png');
  }
}

@media screen and (max-width: 1850px) {
  .bird_right {
    width: 1000px !important;
  }
}
</style>
