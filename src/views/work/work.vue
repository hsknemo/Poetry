<script setup lang="ts">
import DirCompo from '@/components/DirCompo.vue'
import BigText from '@/components/BigText.vue'
import FlowItem from '@/components/FlowItem.vue'
import { useRouter } from 'vue-router'
import { getImg } from '@/utils/getImg.ts'
const router = useRouter()

const flowStruct = ref([
  {
    name: 'WZMH Architects',
    subName: 'Toronto, Canada',
    lastName: 'Architectural Design Assistant | April 2019 - Present',
    leftImg: getImg('four', 'moon1.png'),
  },
  {
    name: 'GALA Architecture',
    subName: 'Shanghai, China',
    lastName: 'Architect & Project Manager | March - September 2022',
    leftImg: getImg('four', 'moon1.png'),
  },
  {
    name: 'BUZZ Büro Ziyu Zhuang',
    subName: 'Beijing, China',
    lastName: 'Design Intern | 2018 - 2019',
    leftImg: getImg('four', 'moon1.png'),
  },
])

const RepresentativeDataStruct = ref([
  {
    topBg: getImg('work', 'book.png'),
    text: 'Institutional',
    shadowText: '3 projects',
    btnText: 'View List',
    toPath: '/work/Institutional',
  },
  {
    topBg: getImg('work', 'bed.png'),
    text: 'Residential',
    shadowText: '10+ projects',
    btnText: 'View List',
    toPath: '/work/Residential',
  },
  {
    topBg: getImg('work', 'company.png'),
    text: 'Others',
    shadowText: '5+ projects',
    btnText: 'View List',
    toPath: '/work/Others',
  },
  {
    topBg: getImg('work', 'rocket.png'),
    text: 'AI Workflow',
    shadowText: 'Personal exploration',
    btnText: 'View Details',
    toPath: '/work/Others',
  },
])

const softSkill = ref([
  {
    tit: 'Design & Visualization',
    smTitList: ['AutoCAD · Revit · Rhino', 'SketchUp · Lumion · V-Ray', 'Adobe Suite (Ps, Ai, Id)'],
  },
  {
    tit: 'Documentation & Coordination',
    smTitList: [
      'Package compilation',
      'Documentation management',
      'Multi-stakeholder coordination',
      'Timeline & resource planning',
    ],
  },
  {
    tit: 'Fabrication & Prototyping',
    smTitList: ['3D Printing', 'Laser Cutting', 'Physical model making'],
  },
])

const onJumpPage = (item: any) => {
  router.replace(item.toPath)
}
</script>

<template>
  <div class="arc_work">
    <div class="mainBg"></div>

    <main class="arc_work_body">
      <dir-compo
        style="--hover-color: #fff; --gang-color: rgb(138, 138, 138)"
        hoverClass="white"
        fileName="moon.png"
        assetsPath="work"
      ></dir-compo>
      <BigText
        class="title_text wow fadeInDown"
        text="6+ Years | Cross-Continental Experience | 20+ Projects"
      />

      <BigText
        class="title_text_sub wow fadeInDown"
        data-wow-delay="50ms"
        text="Professional practice spanning Asia and North America, with collaborations across Europe, bringing international perspectives to diverse architectural typologies."
      />

      <BigText
        class="usual_title wow fadeInDown"
        :text="'Professional Experience'.toUpperCase()"
      ></BigText>

      <flow-item class="flow_style" :flowStruct="flowStruct" />

      <BigText
        class="usual_title border_text wow fadeInDown"
        :text="'Representative Projects'.toUpperCase()"
      ></BigText>

      <div class="work_group">
        <div class="work_group_item" :key="index" v-for="(item, index) in RepresentativeDataStruct">
          <img :src="item.topBg" alt="" />
          <div class="text">
            {{ item.text }}
          </div>
          <div class="shadow_text">
            {{ item.shadowText }}
          </div>
          <div class="btn" @click="onJumpPage(item)">
            <span>
              {{ item.btnText }}
            </span>
            <span>→</span>
          </div>
        </div>
      </div>

      <BigText
        class="usual_title border_text last_text wow fadeInDown"
        :text="'Software Skills'.toUpperCase()"
      ></BigText>

      <div class="last_group_list wow fadeInDown">
        <div class="last_group_list_item" v-for="(item, index) in softSkill">
          <big-text class="btom_title" :text="item.tit" />
          <big-text
            :key="index"
            v-for="(it, index) in item.smTitList"
            class="botm_sm_tit"
            :text="it"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
@mixin flexStyle($align: 'center', $justContent: 'space-around') {
  display: flex;
  align-items: $align;
  justify-content: $justContent;
}

.arc_work {
  padding-bottom: 124px;
  min-width: 1500px;

  .flow_style {
    :deep ._t1 {
      color: #fff !important;
    }
  }

  .mainBg {
    padding: 100px 155px 0 155px;
    content: '';
    width: 100%;
    position: absolute;
    width: 100%;
    min-width: 1500px;
    height: 733px;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url('../../assets/work/work_bg.png');
    z-index: -1;
  }

  .arc_work_body {
    padding: 100px 155px 0 155px;

    .title_text {
      margin-top: 62px;
      font-weight: 400;
      font-size: 20px;
      color: rgb(255, 255, 255);
      letter-spacing: -0.4px;
    }

    .title_text_sub {
      font-weight: 400;
      font-size: 18px;
      color: rgba(192, 192, 192, 1);
      width: 899px;
      height: 88px;
      margin-top: 17px;
      text-align: justify;
      letter-spacing: -0.4px;
      display: block;
    }

    .usual_title {
      font-size: 14px;
      font-weight: 400;
      color: rgba(128, 128, 128, 1);
      margin-bottom: 25px;
      letter-spacing: 1.8px;
    }

    .border_text {
      margin-top: 121px;
      color: rgb(112, 112, 112);
      font-weight: 400;
      font-size: 16px;
      letter-spacing: 2.2px;
      margin-bottom: 12px;
    }
    .last_text {
      margin-top: 27px;
    }

    .work_group {
      width: 100%;
      @include flexStyle(center, space-between);

      &_item {
        @include flexStyle(center, center);
        flex-direction: column;
        margin-top: 10px;
        width: 318px;
        height: 236px;
        border-radius: 10px;
        border: 1px solid rgba(37, 37, 37, 1);
        box-sizing: border-box;
        background: rgba(20, 20, 20, 0.7);
        transition: all 0.3s ease-out;
        &:hover {
          transform: translateY(-10px);
        }

        img {
          display: block;
          width: 24px;
          height: 24px;
          margin-bottom: 23px;
        }

        .text {
          margin-bottom: 8px;
          line-height: 24px;
          color: rgba(255, 255, 255, 1);
          font-weight: 400;
          font-size: 16px;
          letter-spacing: -0.3px;
        }

        .shadow_text {
          margin-bottom: 16px;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -0.3px;
          color: rgba(112, 112, 112, 1);
        }

        .btn {
          cursor: pointer;
          width: 117.5px;
          height: 42px;
          border-radius: 4px;
          border: 1px solid rgba(64, 64, 64, 1);
          color: rgba(255, 255, 255, 1);
          font-weight: 400;
          font-size: 14px;
          letter-spacing: -0.3px;
          @include flexStyle(center, center);

          span:last-child {
            transition: all 0.3s ease-out;
          }
          &:hover {
            span:last-child {
              transform: translateX(10px);
            }
          }
          span:first-child {
            margin-right: 10px;
          }
        }
      }
    }

    .last_group_list {
      @include flexStyle(center, space-between);
      width: 100%;
      &_item {
        margin-top: 20px;
        width: 500px;
        min-width: 500px;
        height: 190px;
        padding: 25px 25px 1px 25px;
        border-radius: 10px;
        border: 1px solid rgba(37, 37, 37, 1);
        box-sizing: border-box;
        background: rgba(20, 20, 20, 0.6);
        transition: all 0.3s linear;
        &:hover {
          transform: translateY(-10px);
        }

        .btom_title {
          color: rgba(255, 255, 255, 1);
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -0.3px;
          margin-bottom: 12px;
        }
        .botm_sm_tit {
          color: rgba(144, 144, 144, 1);
          font-weight: 400;
          font-size: 16px;
          line-height: 26px;
          letter-spacing: -0.3px;
        }
      }
    }
  }
}

@media screen and (max-width: 1850px) {
  .last_group_list {
    &_item {
      --size: calc(500px - 24px);
      width: var(--size) !important;;
      min-width: var(--size) !important;
    }
  }
}
</style>
