<script setup lang="ts">
import DirCompo from '@/components/DirCompo.vue'
import BigText from '@/components/BigText.vue'
import FlowItem from '@/components/FlowItem.vue'

import { getImg } from '@/utils/getImg.ts'
import ItaText from '@/components/ItaText.vue'
import MidFour from '@/components/MidFour.vue'

const flowStruct = ref([
  {
    name: 'IDEAL: AI-Assisted Learning Environment Design',
    subName: 'Doctoral Research | Toronto, CA',
    lastName: '2022 - Present',
    leftImg: getImg('four', 'moon4.png'),
  },
  {
    name: 'Back to the Land: Rethinking Leigh Creek',
    subName: "Master's Thesis | Leigh Creek, AU.",
    lastName: '2018',
    leftImg: getImg('four', 'moon2.png'),
  },
  {
    name: 'Material Research: Decay Analysis',
    subName: 'Collaborative Installation | Material Studies',
    lastName: '2017',
    leftImg: getImg('four', 'moon1.png'),
  },
])

const botmDataStruct = ref([
  {
    img: getImg('research', 'left.png'),
    t_tit: 'Rethinking the Australian Outback: Imagining Leigh Creek',
    c_tit: 'Master of Architecture Thesis | Supervisor: Aziza Chaouni | 2018',
    b_tit:
      'Architectural intervention supporting community resilience while honoring Adnyamathanha custodianship. Design proposal for retirement village and reimagined public spaces through Indigenous spatial practices and adaptive reuse.',
  },
  {
    img: getImg('research', 'circle.png'),
    t_tit: 'PULP: Exploring Sustainable Material Innovation',
    c_tit:
      'Master of Architecture Design Studio | Collaboration with Xiaoting Yuan | 2017 Instructor: Georg Rafailidis and Stephanie Davidson',
    b_tit:
      'Material research exploring pulp-based building materials through physical prototyping and design experimentation. This project exploring sustainable materials inspired the visual identity of this website.',
  },
])
</script>

<template>
  <div class="arc_research">
    <div class="mainBg"></div>

    <main class="arc_research_body">
      <dir-compo
        style="--hover-color: #fff; --gang-color: rgb(138, 138, 138)"
        hoverClass="white"
        fileName="moon.png"
        assetsPath="research"
      ></dir-compo>
      <BigText class="title_text wow fadeInDown" text="Design-Based Research | Educational Technology" />

      <BigText
        class="title_text_sub wow fadeInDown"
        data-wow-delay="50ms"
        text="My research practice bridges architecture and education, exploring how spatial thinking can inform learning design and how design can serve communities."
      />

      <BigText class="usual_title wow fadeInDown " :text="'Professional Experience'.toUpperCase()"></BigText>

      <flow-item :flowStruct="flowStruct" />

      <BigText class="usual_title border_text wow fadeInDown " :text="'Current Research'.toUpperCase()"></BigText>

      <BigText
        class="center_txt wow fadeInDown"
        text="IDEAL: Intelligent Design Environment for Active Learning"
      ></BigText>

      <BigText
        class="title_text_sub c_t_s wow fadeInDown"
        text="Developing tools that help teachers visualize and design curriculum for technology-enhanced active learning classrooms"
      ></BigText>

      <ita-text
        class="cts_ita wow fadeInDown"
        text="Doctoral Research | Supervisor: Jim Slotta | 2022 - Present"
      />

      <BigText
        class="duan_txt wow fadeInDown"
        text="My doctoral research investigates how architectural visualization approaches can support educators in designing curriculum for technology-enhanced active learning classrooms. Through participatory design sessions with teacher educators, this work explores two complementary methods: physical classroom models and 3D virtual environments—examining how spatial thinking tools from architectural practice can help instructors more effectively utilize active learning spaces."
      ></BigText>

      <div class="desc_wrap wow fadeInDown">
        <BigText
          style="
            font-weight: 400;
            font-size: 12px;
            letter-spacing: 1.5px;
            margin-bottom: 12px;
            color: rgb(128, 128, 128);
            letter-spacing: 1.4px;
          "
          class="usual_title"
          :text="'Publication'.toUpperCase()"
        ></BigText>

        <div class="desc">
          Meng, C., & Slotta, J. D. (2025). Leveraging Architectural Visualization and AI Design
          Tools to Enhance the Design of Active Learning Curriculum. In Proceedings of CSCL 2025.
        </div>

        <div class="btn_wrap">
          <a href="https://repository.isls.org/handle/1/11953" target="_blank">
            <div class="btn">
              <span>View Poster</span>
              <svg
                t="1762762563535"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4561"
                width="14"
                height="14"
              >
                <path
                  d="M885.113 489.373L628.338 232.599c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255l203.3 203.3H158.025c-17.036 0-30.846 13.811-30.846 30.846 0 17.036 13.811 30.846 30.846 30.846h628.36L583.084 746.147c-12.497 12.496-12.497 32.758 0 45.255 6.248 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372l256.775-256.775a31.999 31.999 0 0 0 0-45.254z"
                  fill="#ffffff"
                  p-id="4562"
                ></path>
              </svg>
            </div>
          </a>
        </div>
      </div>

      <mid-four :isReverse="true" class="wow fadeInDown" />

      <BigText class="botm_title wow fadeInDown" text="Architectural Research" />

      <ita-text class="botm_ita_text wow fadeInDown" text="Design-based investigations from graduate studies" />

      <footer class="botm_footer_item wow fadeInDown">
        <div class="btm_item" :key="index" v-for="(item, index) in botmDataStruct">
          <img :src="item.img" alt="" />
          <big-text class="t_title tit" :text="item.t_tit" />

          <big-text class="c_title tit" :text="item.c_tit" />

          <big-text class="b_title tit" :text="item.b_tit" />
        </div>
      </footer>

      <mid-four class="wow fadeInDown" :isReverse="true" />
    </main>
  </div>
</template>

<style scoped lang="scss">
@mixin flexStyle($align: 'center', $justContent: 'space-around') {
  display: flex;
  align-items: $align;
  justify-content: $justContent;
}

.arc_research {
  padding-bottom: 10px;

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
    background-image: url('../../assets/research/res_bg.png');
    z-index: -1;
  }

  .arc_research_body {
    padding: 100px 155px 0 155px;

    .title_text {
      margin-top: 62px;
      font-weight: 400;
      font-size: 20px;
      color: rgba(160, 160, 160, 1);
      letter-spacing: -0.4px;
    }

    .title_text_sub {
      font-weight: 400;
      font-size: 18px;
      color: rgba(160, 160, 160, 1);
      width: 649px;
      height: 88px;
      margin-top: 17px;
      text-align: justify;
      letter-spacing: -0.4px;
      display: block;
    }

    .usual_title {
      font-size: 14px;
      font-weight: 400;
      color: rgba(189, 189, 189, 1);
      margin-bottom: 25px;
      letter-spacing: 1.8px;
    }

    .border_text {
      margin-top: 98px;
      color: rgb(96, 96, 96);
      font-weight: 400;
      font-size: 14px;
      letter-spacing: 1.8px;
      margin-bottom: 12px;
    }

    .center_txt {
      color: rgba(255, 255, 255, 1);
      height: 58px;
      font-size: 40px;
      letter-spacing: -0.6px;
    }

    .c_t_s {
      margin-top: 17px;
      color: rgba(160, 160, 160, 1);
      font-size: 20px;
      letter-spacing: -0.4px;
      width: 100%;
      line-height: 32px;
      font-weight: 400;
      height: unset;
    }

    .cts_ita {
      line-height: unset;
      height: unset;
      font-weight: 400;
      font-size: 16px;
      color: rgba(144, 144, 144, 1);
      margin-bottom: 28px;
    }

    .duan_txt {
      width: 1560px;
      height: 87px;
      color: rgba(192, 192, 192, 1);
      font-weight: 400;
      font-size: 16px;
      letter-spacing: -0.3px;
      line-height: 28.8px;
      margin-top: 27px;
    }

    .desc_wrap {
      padding-top: 20px;
      margin-top: 17px;
      border-left: 3px solid rgba(80, 80, 80, 1);
      background: rgba(20, 20, 20, 0.5);
      padding-left: 27px;
      height: 150px;

      .desc {
        color: rgba(176, 176, 176, 1);
        font-family: Inter;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
        letter-spacing: -0.2px;
        margin-bottom: 16px;

        .bold {
          font-weight: 700;
          font-size: 16px;
        }
      }

      .btn_wrap {
        cursor: pointer;
        width: 134.9px;
        height: 42px;
        border-radius: 8px;
        border: 1px solid rgba(64, 64, 64, 1);
        @include flexStyle(center, center);

        svg {
          transition: all 0.3s ease-out;
        }

        &:hover {
          svg {
            transform: translateX(10px);
          }
        }

        .btn {
          color: #fff;
          @include flexStyle(center, center);

          span {
            margin-right: 5px;
            font-weight: 400;
            font-size: 14px;
            letter-spacing: -0.2px;
          }
        }
      }
    }

    .botm_title {
      width: 100%;
      justify-content: center;
      color: rgba(255, 255, 255, 1);
      font-family: Inter;
      font-weight: 500;
      font-size: 36px;
      line-height: 54px;
      letter-spacing: 0.4px;
      height: 54px;
      margin-bottom: 16px;
    }

    .botm_ita_text {
      height: unset;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.3px;
      color: rgba(144, 144, 144, 1);
      justify-content: center;
    }

    .botm_footer_item {
      min-width: calc(610px + 62px + 610px);
      max-width: calc(610px + 62px + 610px);
      margin: 0 auto;
      margin-top: 53px;
      margin-bottom: 33px;
      @include flexStyle();
      justify-content: space-around;

      .btm_item {
        img {
          width: 608px;
          height: 400px;
          opacity: 0.85;
          margin-bottom: 24px;
        }

        .tit {
          height: unset;
        }

        .t_title {
          font-size: 16px;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -0.3px;
          margin-bottom: 10px;
        }

        .c_title {
          color: rgba(112, 112, 112, 1);
          font-weight: 400;
          font-size: 13px;
          line-height: 19.5px;
          height: 39px;
          letter-spacing: -0.1px;
          width: 474px;
          margin-bottom: 6px;
        }

        .b_title {
          width: 608px;
          font-weight: 400;
          font-size: 15px;
          line-height: 25.5px;
          letter-spacing: -0.2px;
          color: rgba(176, 176, 176, 1);
        }
      }
    }
  }
}
</style>
