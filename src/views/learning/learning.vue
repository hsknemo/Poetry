<script setup lang="ts">
import DirCompo from '@/components/DirCompo.vue'
import BigText from '@/components/BigText.vue'
import FlowItem from '@/components/FlowItem.vue'

import { getImg } from '@/utils/getImg.ts'
import MidFour from '@/components/MidFour.vue'
import IconPlay from '@/components/iconCompo/iconPlay.vue'
import { reactive } from 'vue'
const popControl = reactive({
  show: false,
})
const flowStruct = ref([
  {
    name: 'Reel Arts ',
    subName: 'Shanghai, China',
    lastName: 'Architectural Design Assistant | April 2019 - 2022',
    leftImg: getImg('four', 'moon1.png'),
  },
  {
    name: 'Feiqu Education',
    subName: 'Shanghai, China',
    lastName: 'Architect & Project Manager | August - November 2021',
    leftImg: getImg('four', 'moon1.png'),
  },
])

const fourBlock = ref([
  {
    tit: 'Problem Finding',
    tagList: ['Grades 6-9', 'Critical Thinking', 'Video course'],
    ct1: 'Core Philosophy',
    ct1Content:
      'Through case studies and critical analysis, students develop the ability to discover the essence of problems. They learn to observe existing solutions, identify limitations, and redefine more fundamental design challenges.',
    ct2: 'Pedagogical Approach',
    ct2Content: 'Case analysis, competitive research, user needs insight, problem reframing',
    ct3: 'Learning Outcomes',
    ct3Content:
      'Students apply systematic thinking to move from surface phenomena to fundamental issues, forming clear problem statements as design starting points.',
  },

  {
    tit: 'Problem Finding',
    tagList: ['Grades 6-9', 'Spatial Literacy', 'Video course'],
    ct1: 'Core Philosophy',
    ct1Content: 'Through hands-on urban model making, students understand the components of urban space—architecture, landscape, street networks, paving—and how they collectively shape our living environment.',
    ct2: 'Pedagogical Approach',
    ct2Content: 'Site analysis, model making, spatial element interpretation, scale understanding',
    ct3: 'Learning Outcomes',
    ct3Content: 'Students identify and analyze basic structures of urban space, understand spatial organization logic at different scales, and develop sensitivity to the built environment.',
  },

  {
    tit: 'Making Ideas Visible',
    showVideo: true,
    tagList: ['Grades 6-9', 'Visual Thinking', 'Video course'],
    ct1: 'Core Philosophy',
    ct1Content: 'Teaching students to transform abstract data, concepts, and ideas into clear visual expressions. Through data visualization and chart design, students develop information presentation and communication abilities.',
    ct2: 'Pedagogical Approach',
    ct2Content: 'Data analysis & categorization, visual encoding, chart design, information hierarchy construction',
    ct3: 'Learning Outcomes',
    ct3Content: 'Students master a four-step process for transforming complex information into comprehensible charts (analyze goals → categorize data → select graphics → optimize presentation), enhancing visual thinking capabilities.',
  },

  {
    tit: 'Future Citizens Workshop',
    tagList: ['Grades 6-9', 'game-Based Learning', 'In-person workshop'],
    ct1: 'Core Philosophy',
    ct1Content: 'Through role-playing and real-world scenario simulation, students experience how professionals like architects and engineers solve actual problems. Hands-on challenges foster teamwork, engineering thinking, and career awareness.',
    ct2: 'Pedagogical Approach',
    ct2Content: 'Role-playing, engineering challenges, team competitions, project-based learning',
    ct3: 'Learning Outcomes',
    ct3Content: 'Students complete design challenges under constraints (foundation reinforcement, material transport, structural assembly), understanding real engineering trade-offs and developing problem-solving abilities.',
  },
])

const botmDivData = ref([
  {
    t: 'Student-Centered Design',
    c: 'I believe in differentiated instruction that honors each learner\'s background and aspirations, creating flexible frameworks that adapt to individual learning journeys.',
    width: '405px',
  },
  {
    t: 'Learning by Making',
    c: 'Drawing from architectural design pedagogy, I emphasize hands-on experimentation, iterative refinement, and visual communication through creating.',
    width: '376px',
  },
  {
    t: 'Autonomy & Agency',
    c: 'My goal is to nurture learners\' ability to direct their own creative process, providing scaffolding that builds confidence alongside skill.'
  }
])

const onOpenVideo = () => {
  popControl.show = true
}
</script>

<template>
  <div class="arc_learning">
    <div class="mainBg"></div>

    <main class="arc_learning_body">
      <dir-compo
        style="--hover-color: #fff; --gang-color: rgb(138, 138, 138)"
        hoverClass="white"
        fileName="moon.png"
        assetsPath="research"
      ></dir-compo>
      <BigText
        class="title_text wow fadeInDown"
        text="Design-Based Research | Educational Technology"
      />

      <BigText
        class="title_text_sub wow fadeInDown"
        data-wow-delay="50ms"
        text="Empowering learners through spatial thinking and design pedagogy—from K-12 design workshops to portfolio mentorship for aspiring architects."
      />

      <BigText
        class="usual_title wow fadeInDown"
        :text="'Professional Experience'.toUpperCase()"
      ></BigText>

      <flow-item class="flow_item_class" :flowStruct="flowStruct" />

      <BigText class="mainTitle wow fadeInDown" text="Learning Designer"></BigText>

      <BigText class="sub_tit wow fadeInDown" text="Guiding Architecture Students to Top Programs"></BigText>

      <div class="box_mid wow fadeInDown">
        <BigText class="t" text="My Approach"> </BigText>

        <BigText
          class="b"
          text="My K-12 design curriculum cultivates critical thinking, spatial cognition, visual expression, and practical skills through four interconnected learning approaches. From problem discovery to urban literacy, from making ideas visible to role-based experiences, students develop a systematic understanding of design disciplines through hands-on practice."
        >
        </BigText>
      </div>
    </main>

    <div class="four_box wow fadeInDown">
      <div class="four_box_item" :key="index" v-for="(item, index) in fourBlock">
        <div class="tit">
          <div class="t">{{ item.tit }}</div>
          <icon-play v-if="item.showVideo" />
        </div>
        <div class="tag_list">
          <div class="tag_list_item" :key="idx" v-for="(it, idx) in item.tagList">
            {{ it.toUpperCase() }}
          </div>
        </div>

        <div class="content">
          <div class="content_tit">
            {{ item.ct1.toUpperCase() }}
          </div>

          <div class="ct">
            {{ item.ct1Content }}
          </div>

          <div class="content_tit" style="margin-top: 20px">
            {{ item.ct2.toUpperCase() }}
          </div>

          <div class="ct">
            {{ item.ct2Content }}
          </div>
          <div class="content_tit" style="margin-top: 26px">
            {{ item.ct3.toUpperCase() }}
          </div>

          <div class="ct">
            {{ item.ct3Content }}
          </div>
        </div>
      </div>
    </div>



    <div @click="onOpenVideo" class="video_btn wow fadeInDown">
      <icon-play />
      <span> See Video Demo </span>
    </div>

    <mid-four  style="margin-top: 40px" class="wow fadeInDown" />

    <BigText style="margin-top: 30px" class="mainTitle wow fadeInDown" text="Portfolio Mentorship"></BigText>

    <BigText class="sub_tit wow fadeInDown" text="Guiding Architecture Students to Top Programs"></BigText>

    <div class="box_mid wow fadeInDown" style="margin-top: 59px">
      <BigText class="t" text="My Approach"> </BigText>

      <BigText
        class="b "
        text="My K-12 design curriculum cultivates critical thinking, spatial cognition, visual expression, and practical skills through four interconnected learning approaches. From problem discovery to urban literacy, from making ideas visible to role-based experiences, students develop a systematic understanding of design disciplines through hands-on practice."
      >
      </BigText>
    </div>

    <div class="mid_green wow fadeInDown">
      <div class="text">
        Track Record
      </div>
      <div class="sub_txt">
        Students successfully admitted to highly selective architecture programs including top North American and European universities.
      </div>
    </div>

    <BigText style="margin-top: 60px" class="mainTitle wow fadeInDown" text="Portfolio Examples from My Own Journey"></BigText>

    <BigText style=" width: 658px; margin: 0 auto; font-size: 15px; text-align: center" class="sub_tit wow fadeInDown" text="These examples from my own student portfolio demonstrate the approaches I teach: clear visual hierarchy, compelling narrative structure, technical skill demonstration, and cohesive aesthetic identity."></BigText>

    <div class="img_div wow fadeInDown">
      <div class="imgBox"
           :key="item"
           v-for="(item) in 3">
        <img :src="getImg('learning', `learn${item}.png`)" alt="">
      </div>
    </div>

    <div class="bottom_div wow fadeInDown">
      <big-text
        class="b_txt"
        text="Teaching Philosophy"
      />

      <div class="b_d_list wow fadeInDown">
        <div class="b_d_list_item" v-for="(item, index) in botmDivData" :key="index">
          <div class="t">{{ item.t }}</div>
          <div class="b" :style="{width: item.width}">{{ item.c }}</div>
        </div>



      </div>
    </div>

    <mid-four  style="margin-top: 40px" class="wow fadeInDown" />
  </div>

  <el-dialog
    dark
    draggable
    overflow
    :style="{
    '--el-text-color-primary': '#fff',
    '--el-dialog-bg-color': '#1d1d1d'
    }"
    class="tran_editor"
    v-if="popControl.show"
    v-model="popControl.show"
    title="From Idea to Sharing"
    :close-on-click-modal="false"
    width="1350"
  >
    <iframe width="1311" height="737" src="https://www.youtube.com/embed/N82C_RjwdYE" title="From Idea to Sharing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </el-dialog>
</template>

<style scoped lang="scss">
@mixin flexStyle($align: 'center', $justContent: 'space-around') {
  display: flex;
  align-items: $align;
  justify-content: $justContent;
}

.arc_learning {
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
    background-image: url('../../assets/learning/learnBg.png');
    z-index: -1;
  }

  .arc_learning_body {
    padding: 100px 155px 0 155px;

    .flow_item_class {
      :deep {
        ._t1 {
          color: #fff;
        }

        .flow_item {
          padding-bottom: 72px;

          &:last-child {
            padding-bottom: unset;
          }

          &:before {
            top: 0px;
          }
          &:after {
            top: -1px;
          }
        }
      }
    }

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




  }

  .box_mid {
    width: 1149px;
    margin: 0 auto;
    .t {
      color: rgba(255, 255, 255, 1);
      font-weight: 400;
      font-size: 20px;
      margin-bottom: 11px;
    }
    .b {
      border-top: 1px solid rgba(37, 37, 37, 1);
      padding-top: 15px;
      font-weight: 400;
      font-size: 16px;
      line-height: 28.8px;
      color: rgba(176, 176, 176, 1);
    }
  }

  .mid_green {
    width: 1200px;
    height: 120px;
    border: 1px solid rgba(26, 42, 46, 1);
    background: rgba(13, 20, 22, 1);
    margin: 50px auto 0px;

    .text, .sub_txt {
      width: 889px;
      margin: auto;
      text-align: center;
    }
    .text {
      color: rgba(255, 255, 255, 1);
      font-weight: 400;
      font-size: 18px;
      margin-top: 35px;
      margin-bottom: 10px;
    }
    .sub_txt {
      font-weight: 400;
      font-size: 15px;
      letter-spacing: -0.2px;
      color: rgba(160, 181, 187, 1);
    }
  }

  .mainTitle {
    margin-top: 190px;
    margin-bottom: 16px;
    width: 100%;
    justify-content: center;
  }

  .sub_tit {
    font-weight: 400;
    font-size: 18px;
    width: 100%;
    justify-content: center;
    color: rgba(144, 144, 144, 1);
  }

  .four_box {
    @include flexStyle();
    flex-wrap: wrap;
    width: calc(760px + 37px + 760px);
    margin: 0 auto;
    margin-top: 50px;

    &_item {
      width: 760px;
      height: 550px;
      border-radius: 10px;
      border: 1px solid rgba(42, 42, 42, 1);
      background: rgba(26, 26, 26, 1);
      padding-top: 40px;
      padding-left: 36px;
      &:nth-child(2n + 1) {
        margin-right: 37px;
        margin-bottom: 37px;
      }


      .tit {
        @include flexStyle(center);
        margin-bottom: 20px;
        .t {
          color: rgba(255, 255, 255, 1);
          font-weight: 500;
          font-size: 20px;
          letter-spacing: -0.9px;
          margin-right: 21px;

        }
      }

      .tag_list {
        @include flexStyle();

        .tag_list_item {
          width: fit-content;
          height: 34px;
          border-radius: 4px;
          border: 1px solid rgba(64, 64, 64, 1);
          font-weight: 400;
          font-size: 16px;
          color: rgba(160, 160, 160, 1);
          letter-spacing: 0.5px;
          @include flexStyle(center, center);
          padding: 5px 10px;
          margin-right: 12px;
          &:last-child {
            margin-right: 0;
          }
        }
      }

      .content {
        &:before {
          margin-top: 21px;
          display: block;
          content: '';
          width: 100%;
          height: 1px;
          background-color: rgba(42, 42, 42, 1);
        }

        .content_tit {
          margin-top: 24px;
          color: rgba(128, 128, 128, 1);
          font-weight: 400;
          font-size: 16px;
          letter-spacing: 1.3px;
        }

        .ct {
          text-align: justify;
          margin-top: 12px;
          width: 693px;
          color: rgba(176, 176, 176, 1);
          font-weight: 400;
          font-size: 16px;
          line-height: 26px;
          letter-spacing: -0.3px;
        }
      }
    }
  }

  .video_btn {
    cursor: pointer;
    @include flexStyle(center, center);
    width: 508px;
    height: 56px;
    margin: 0 auto;
    margin-top: 12px;
    border-radius: 10px;
    background: rgba(245, 245, 245, 1);
    color: rgba(26, 26, 26, 1);
    font-weight: 500;
    font-size: 14px;
    :deep {
      svg {
        margin-right: 14px;
        path {
          fill: #000
        }
      }
    }
  }

  .img_div {
    width: calc(471px * 3 + 72px * 2);
    margin: 146px auto 51px;
    @include flexStyle(center, space-between);
    .imgBox {
      width: 471px;
      height: 300px;
      overflow: hidden;
      &:hover {
        img {
          transform: scale(1.2);
        }
      }
      img {
        display: block;
        width: 100%;
        height: 100%;
        transition: all .3s;
      }
    }
  }

  .bottom_div {
    margin: 0 auto;
    width: 1336px;
    height: 216px;
    border-radius: 10px;
    border: 1px solid rgba(37, 37, 37, 1);
    box-sizing: border-box;
    background: rgba(15, 15, 15, 1);
    padding-top: 30px;
    padding-left: 35px;

    .b_txt {
      height: unset;
      color: rgba(255, 255, 255, 1);
      font-weight: 400;
      letter-spacing: -0.4px;
      font-size: 18px;
      margin-bottom: 20px;
    }

    .b_d_list {
      @include flexStyle(center, space-between);
      .b_d_list_item {
        .t {
          color: rgba(255, 255, 255, 1);
          font-weight: 400;
          font-size: 15px;
          margin-bottom: 5px;
        }
        .b {
          width: 376px;
          height: 72px;
          font-weight: 400;
          font-size: 14px;
          line-height: 23.8px;
          letter-spacing: -0.2px;
          color: rgba(160, 160, 160, 1);
        }
      }
    }
  }
}
</style>
