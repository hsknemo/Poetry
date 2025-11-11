<script setup lang="ts">
import DirCompo from '@/components/DirCompo.vue'
import BigText from '@/components/BigText.vue'
import ItaText from '@/components/ItaText.vue'
import HoverItem from '@/components/HoverItem.vue'

const hoverDataItem = ref([
  'Halton Region Courthouse (Confidential)',
  'Abbotsford Law Courts',
  'Sudbury Library and Gallery',
])

const rightDataStruct = ref([
  {
    tit: 'Abbotsford Law Courts',
    card_btn_list: ['Civic', 'Public'],
    subTit:
      'Assisted colleagues to complete the package, signage text, compiled final photos; prepared project presentation.',
    year_list: [
      {
        t: 'TOOLS',
        b: 'Adobe Illustrator, AutoCAD',
      },
      {
        t: 'YEAR',
        b: '2020',
      },
    ],
    url: 'https://www.wzmh.com/projects/abbotsford-law-courts?cat=institutional',
  },
  {
    tit: 'Junction East',
    card_btn_list: ['Mixed-use', 'Library', 'Public'],
    subTit: 'Participated in research, case analysis, layout planning, and façade studies; supported presentation and reclaiming.',
    year_list: [
      {
        t: 'TOOLS',
        b: 'AutoCAD, Revit, Adobe Suite',
      },
      {
        t: 'YEAR',
        b: '2022',
      },
    ],
    url: 'https://www.wzmh.com/projects/junction-east?cat=institutional',
  },
])
</script>

<template>
  <div class="work_ins">
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
          path: '/work/Institutional',
          pathName: 'Institutional',
        },
      ]"
    >
    </dir-compo>

    <main class="article_body">
      <article class="wow slideInLeft">
        <big-text class="top_title" text="Institutional"></big-text>

        <ita-text
          class="ita_sub_text"
          text="From Skin to Light — Returning Civic Architecture to the Public"
        ></ita-text>

        <big-text class="sumary_text" text="Notes on Civic Space"></big-text>

        <big-text
          class="article_item"
          text="The rhythm of façade and the tactility of light transform institutional buildings from symbols of authority into spaces of encounter."
        ></big-text>

        <big-text
          class="article_item"
          text="Each threshold and reflection becomes part of a civic dialogue — negotiating transparency and privacy, permanence and openness."
        ></big-text>

        <big-text
          class="article_item"
          text="Circulation is not only movement: it frames how people see, move, and participate. With material continuity and visible connections, light becomes not only a medium of vision but a medium of trust."
        ></big-text>

        <big-text
          class="botm_text"
          text="This exploration spans three institutional projects:"
        ></big-text>

        <hover-item :dataItem="hoverDataItem" />

        <ita-text class="b_ita" text="Selected projects featured on this page."></ita-text>

        <div class="btom_text">
          Text reflects my personal understanding from practice; project images are intentionally
          omitted to respect firm IP.
        </div>
      </article>

      <section class="card_right wow slideInRight">
        <div class="card_list">
          <div class="cart_item" :key="index" v-for="(item, index) in rightDataStruct">
            <big-text class="card_tit" :text="item.tit" />
            <div class="card_btn_list">
              <div class="cart_btn" :key="index" v-for="(btn, index) in item.card_btn_list">
                {{ btn.toUpperCase() }}
              </div>
            </div>

            <big-text class="center_text" :text="item.subTit" />

            <div class="year_list">
              <div class="year_list_item" :key="index" v-for="(year, index) in item.year_list">
                <div class="t">{{ year.t }}</div>
                <div class="b">{{ year.b }}</div>
              </div>
            </div>

            <a :href="item.url"  target="_blank" class="card_btn"> Company site </a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped lang="scss">
@mixin flexStyle($align: 'center', $justContent: 'space-around') {
  display: flex;
  align-items: $align;
  justify-content: $justContent;
}
.work_ins {
  padding: 104px 154px;
  overflow: hidden;

  * {
    font-family: inter-normal;
  }

  .article_body {
    margin-top: 45px;
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
        font-weight: 500;
        font-size: 14px;
        line-height: 22.4px;
        letter-spacing: -0.2px;
        margin-bottom: 9px;
      }
      .b_ita {
        margin-top: 10px;
        color: rgba(144, 144, 144, 1);
        font-weight: 400;
        font-size: 12px;
        height: unset;
        margin-bottom: 33px;
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

  .card_right {
    @include flexStyle(center, center);

    .card_list {
      @include flexStyle(center, space-around);
      width: calc(492px * 2 + 25px);
      .cart_item {
        padding: 46px 41px 42px 41px;
        width: 492px;
        height: 420px;
        border-radius: 14px;
        border: 1px solid rgba(232, 232, 232, 1);
        background: rgba(255, 255, 255, 0.37);
        transition: all 0.3s;
        &:hover {
          transform: translateY(-10px);
        }

        .card_tit {
          height: unset;
          color: rgba(96, 96, 96, 1);
          font-weight: 600;
          font-size: 24px;
          line-height: 38.4px;
          letter-spacing: -0.2px;
        }

        .card_btn_list {
          margin-top: 5px;
          margin-bottom: 25px;
          @include flexStyle(center);
          .cart_btn {
            @include flexStyle(center, center);
            width: fit-content;
            padding: 5px 10px;
            height: 27px;
            border-radius: 20px;
            color: rgba(96, 96, 96, 1);
            font-weight: 400;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.9px;
            background: rgba(232, 232, 232, 1);
            margin-right: 10px;
            &:last-child {
              margin-right: 0;
            }
          }
        }

        .center_text {
          border-top: 1px solid rgba(240, 240, 240, 1);
          border-bottom: 1px solid rgba(240, 240, 240, 1);
          padding: 23px 0;
          width: 390px;
          font-weight: 400;
          font-size: 14px;
          color: rgba(96, 96, 96, 1);
          letter-spacing: -0.2px;
          line-height: 24.5px;
          margin-bottom: 25px;
        }

        .year_list {
          @include flexStyle(center, space-between);
          .t {
            font-weight: 400;
            font-size: 11px;
            line-height: 16.5px;
            color: rgba(144, 144, 144, 1);
            text-transform: uppercase;
            letter-spacing: 1.1px;
            margin-bottom: 6px;
          }
          .b {
            color: rgba(74, 74, 74, 1);
            font-weight: 400;
            font-size: 13px;
            letter-spacing: -0.1px;
          }
        }

        .card_btn {
          margin-top: 29px;
          width: 154.2px;
          height: 49.5px;
          border-radius: 8px;
          border: 2px solid rgba(42, 42, 42, 1);
          box-sizing: border-box;
          background: rgba(42, 42, 42, 1);
          font-weight: 400;
          font-size: 13px;
          letter-spacing: 0.2px;
          color: rgba(255, 255, 255, 1);
          @include flexStyle(center, center);
        }
      }
    }
  }
}
</style>
