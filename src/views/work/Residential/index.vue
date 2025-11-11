<script setup lang="ts">
import DirCompo from '@/components/DirCompo.vue'
import BigText from '@/components/BigText.vue'
import ItaText from '@/components/ItaText.vue'
import HoverItem from '@/components/HoverItem.vue'

const hoverDataItem = ref([
  '335 Adelaide Street West',
  'Ellesmere & McCowan',
  '2700 Dufferin Street',
  '1105 McCraney Street East',
  'Barrie Yonge & Lockhart',
])


const rightDataThirdStruct = ref([
  {
    tit: '5 Fairview',
    card_btn_list: ['High-rise', 'Residential'],
    subTit:
      'Massing studies, façade design, floor plan layouts, and shadow analysis for high-rise residential development.',
    year_list: [
      {
        b: 'AutoCAD, Rhino',
      },
      {
        b: '2025',
      },
    ],
    url: 'https://www.wzmh.com/projects/5-fairview?cat=residential',
  },
  {
    tit: '522 University Ave',
    card_btn_list: ['High-rise', 'Residential'],
    subTit: 'Heritage façade preservation with minimalist residential addition. Design process and presentation updates.',
    year_list: [
      {
        b: 'AutoCAD, Rhino',
      },
      {
        b: '2024',
      },
    ],
    url: 'https://www.wzmh.com/projects/522-university-avenue?cat=residential',
  },
  {
    tit: 'Lansing Square Masterplan',
    card_btn_list: ['Masterplan', 'Mixed-use'],
    subTit: 'Podium design and analytical drawings. Created templates adopted for future residential projects.',
    year_list: [
      {
        b: 'AutoCAD, Rhino',
      },
      {
        b: '2021',
      },
    ],
    url: 'https://www.wzmh.com/projects/lansing-square-masterplan?cat=master-plan',
  },
])


const rightDataStruct = ref([
  {
    tit: 'Toromont Concord Lands Masterplan',
    card_btn_list: ['Masterplan', 'Mixed-use'],
    subTit:
      'Active collaboration within the internal team. Effective communication with external consultants: engaged with landscape and wind consultants, providing essential models and materials. Coordination and communication of external renderings. Managed interactions with outsourcing firms for renderings.',
    year_list: [
      {
        t: 'TOOLS',
        b: 'AutoCAD, Adobe Suite',
      },
      {
        t: 'YEAR',
        b: '2024',
      },
    ],
    url: 'https://www.wzmh.com/projects/toromont-masterplan-3131-highway-7?cat=master-plan',
  },
  {
    tit: 'Queensway Masterplant',
    card_btn_list: ['Masterplan', 'Mixed-use'],
    subTit: 'From the concept design stage, completed all site plans, statistics, diagrams and shadow studies. Prepared presentation packages and attended city meetings, coordinating with client and other consultants.',
    year_list: [
      {
        t: 'TOOLS',
        b: 'AutoCAD, Adobe Suite',
      },
      {
        t: 'YEAR',
        b: '2023',
      },
    ],
    url: 'https://www.wzmh.com/projects/queensway-masterplan?cat=master-plan',
  },
])


</script>

<template>
  <div class="work_Res">
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
          path: '/work/Residential',
          pathName: 'Residential',
        },
      ]"
    >
    </dir-compo>

    <main class="article_body">
      <article class="wow slideInLeft">
        <big-text class="top_title" text="Residential"></big-text>

        <ita-text
          class="ita_sub_text"
          text="Interacting with the City as Its Residents"
        ></ita-text>

        <big-text class="sumary_text" text="Notes on Residential Space"></big-text>

        <big-text
          class="article_item"
          text="These projects explore how people and cities meet—across plazas, courtyards, and green corridors."
        ></big-text>

        <big-text
          class="article_item"
          text="Public realm becomes the most humane scale of architecture: a space for walking, pausing, and seeing others."
        ></big-text>

        <big-text
          class="article_item"
          text="Here, urban landscapes are not the background of living, but its shared ground—where architecture mediates between community, view, and belonging."
        ></big-text>


        <big-text
          class="sm_tit"
          text="Additional projects:"
        >

        </big-text>

        <big-text
          class="botm_text"
          text="Other residential work completed during this period:"
        ></big-text>

        <hover-item :dataItem="hoverDataItem" />

        <ita-text class="b_ita" text="Selected projects featured on this page."></ita-text>

        <div class="btom_text">
          Text reflects my personal understanding from practice; project images are intentionally
          omitted to respect firm IP.
        </div>
      </article>

      <section class="card_right wow slideInRight">
        <div class="card_list third">
          <div class="cart_item" :key="index" v-for="(item, index) in rightDataThirdStruct">
            <big-text class="card_tit" :text="item.tit" />
            <div class="card_btn_list">
              <div class="cart_btn" :key="index" v-for="(btn, index) in item.card_btn_list">
                {{ btn.toUpperCase() }}
              </div>
            </div>

            <big-text class="center_text" :text="item.subTit" />

            <div class="year_list">
              <div class="year_list_item" :key="index" v-for="(year, index) in item.year_list">
                <div class="b">{{ year.b }}</div>
              </div>
            </div>

            <a :href="item.url"  target="_blank" class="card_btn"> Company site </a>
          </div>
        </div>

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
.work_Res {
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
        margin-top: 42px;
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

  .card_right {
    @include flexStyle(center, center);
    flex-direction: column;
    position: relative;
    top: -38px;

    .card_list {
      @include flexStyle(center, space-around);
      width: calc(492px * 2 + 25px);
      .cart_item {
        padding: 20px 32px;
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
          padding: 2px 0;
          width: 390px;
          height: 155px;
          font-weight: 400;
          font-size: 14px;
          color: rgba(96, 96, 96, 1);
          letter-spacing: -0.2px;
          line-height: 24.5px;
          margin-bottom: 25px;
        }

        .year_list {
          @include flexStyle(center);
          .year_list_item {
            margin-right: 81px;
          }
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
          margin-top: 13px;
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

      &.third {
        margin-bottom: 28px;
        .card_tit {
          font-size: 20px ;
        }
        .cart_item {
          width: 320px;
          height: 300px;
        }

        .card_btn_list {
          margin-bottom: 7px;
        }

        .center_text {
          width: 275px;
          padding: 5px 0;
          height: unset;
          margin-bottom: 13px;
        }
        .card_btn {
          margin-top: 13px;
        }

        .year_list {
          justify-content: unset;
          .year_list_item {
            margin-right: 19px;
            .b {
              font-size: 11px;
              color: rgba(112, 112, 112, 1);
            }
          }
        }
      }
    }
  }
}
</style>
