<script setup lang="ts">
import ProcessBar from '@/components/layoutCompo/processBar.vue'

const rectArr = ref([
  {
    topImg: 'c_moon1.png',
    topText: 'Architectural Designer',
    circleText: '6+ years',
    midImg: 'c_container1.png',
    clipShow: false,
    circleGroup: ['design', 'visualization', 'coordination'],
    controlBtnText: 'Click to flip',
    processBarArray: [
      {
        text: 'Concept Design',
        percent: 100,
        style: {
          marginBottom: '8px',
        }
      },
      {
        text: 'Facade Design',
        percent: 100,
        style: {
          marginBottom: '6px',
        }
      },
      {
        text: 'Floor plans / Layouts',
        percent: 100,
        style: {
          marginBottom: '11px',
        }
      },
      {
        text: 'Consultant <br />Coordination',
        percent: 90,
        style: {
          marginBottom: '7px',
          height: '48px',
        }
      },
      {
        text: 'Project Management',
        percent: 100,
        style: {
          marginBottom: '11px',
        }
      },
      {
        text: '3D modeling',
        percent: 100,
      },
    ],
    time_line: [
      'WZMH Architects（2019 — Now）',
      'GALA China（2022.04 — 2022.09）',
      'BUZZ Architects（2017.04 — 2017.08）',
    ]
  },
  {
    topImg: 'c_moon2.png',
    topText: 'Architectural Designer',
    circleText: '6+ years',
    midImg: 'c_container2.png',
    clipShow: false,
    circleGroup: ['design', 'visualization', 'coordination'],
    controlBtnText: 'Click to flip',
    processBarArray: [
      {
        text: 'Course-pack Templates',
        percent: 80,
        style: {
          marginBottom: '8px',
        }
      },
      {
        text: 'Storyboard',
        percent: 100,
        style: {
          marginBottom: '6px',
        }
      },
      {
        text: 'Curriculum Design',
        percent: 100,
        style: {
          marginBottom: '11px',
        }
      },
      {
        text: 'Multi-stakeholder <br />Coordination',
        percent: 80,
        style: {
          marginBottom: '7px',
          height: '48px',
        }
      },
      {
        text: 'Design Workshops',
        percent: 100,
        style: {
          marginBottom: '11px',
        }
      },
      {
        text: 'Feedback Systems',
        percent: 70,
      },
    ],
    time_line: [
      'Reel Arts（2019 — 2022）',
      'Feiqu Education（2021.08 — 2021.11）',
    ]
  },
  {
    topImg: 'c_moon3.png',
    topText: 'Architectural Designer',
    circleText: '6+ years',
    midImg: 'c_container3.png',
    clipShow: false,
    circleGroup: ['design', 'visualization', 'coordination'],
    controlBtnText: 'Click to flip',
    processBarArray: [
      {
        text: 'Qualitative Methods',
        percent: 80,
        style: {
          marginBottom: '8px',
        }
      },
      {
        text: 'Design-Based Research',
        percent: 100,
        style: {
          marginBottom: '6px',
        }
      },
      {
        text: 'Thematic Coding',
        percent: 100,
        style: {
          marginBottom: '11px',
        }
      },
      {
        text: 'Participatory Design <br />Co-design',
        percent: 80,
        style: {
          marginBottom: '7px',
          height: '48px',
        }
      },
      {
        text: 'Study & Protocol Design',
        percent: 100,
        style: {
          marginBottom: '11px',
        }
      },
      {
        text: 'Academic Writing (APA)',
        percent: 70,
      },
    ],
    time_line: [
      'IDEAL project (2022 — Now)',
      'ISLS 2025 Poster ',
    ]
  },
])

const onClipShow = (row) => {
  row.clipShow = true
}
const onReback = (row) => {
  row.clipShow = false
}

const getImg = (name) => {
  return new URL(`/src/assets/card/${name}`, import.meta.url).href

}
</script>

<template>
  <div class="body_card">
    <div class="card_item" :key="index" v-for="(item, index) in rectArr">
      <template v-if="!item.clipShow">
        <div class="top_img" :style="{backgroundImage: 'url(' + getImg(item.topImg) + ')'}"></div>
        <div class="top_text">{{ item.topText }}</div>
        <div class="circleText">{{ item.circleText }}</div>
        <div class="mid_img" :style="{backgroundImage: 'url(' + getImg(item.midImg) + ')'}"></div>
        <div class="child_list">
          <div class="child_item" :key="index" v-for="(it, index) in item.circleGroup">
            <div class="circleText">{{ it }}</div>
          </div>
        </div>

        <div class="control_btn" @click="onClipShow(item)">
          {{ item.controlBtnText }}
        </div>
      </template>
      <template v-else>
        <div class="card_clip" @click="onReback(item)">
          <process-bar
            :key="index"
            v-for="(it, index) in item.processBarArray"
            :style="it.style || {}"
            :text="it.text"
            :percent="it.percent"
          ></process-bar>
          <div class="time_line">
            <div class="top">Timeline</div>
            <div class="time_line_list">
              <div class="time_line_item"
                   :key="index"
                   v-for="(it, index) in item.time_line">
                {{ it }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
@mixin flexStyle($align: 'center', $justContent: 'space-around') {
  display: flex;
  align-items: $align;
  justify-content: $justContent;
}
.body_card {
  @include flexStyle(center, space-around);
  * {
    font-family: inter-normal;
  }
  .top_img {
    width: 100px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 27px;
    margin-bottom: 11px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .card_item {
    width: 370px;
    height: 520px;
    position: relative;

    &:before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      border-radius: 20px;
      background-image: url("@/assets/bg/larkmap.png");
      background-size: 100%;
      background-repeat: no-repeat;
      z-index: -1;
    }
  }

  .top_text {
    font-weight: 500;
    font-size: 20px;
    color: rgba(245, 245, 245, 1);
    text-align: center;
    margin-bottom: 7px;
    font-family: inter-normal;
  }

  .circleText {
    margin: 0 auto;
    margin-top: 7px;
    padding: 5px 11px;
    width: fit-content;
    height: 38px;
    border: 1px solid rgba(79, 79, 80, 1);
    border-radius: 20px;
    box-sizing: border-box;
    color: rgba(189, 189, 189, 1);
    font-size: 12px;
    @include flexStyle(center, center);
    font-family: inter-normal;
  }

  .mid_img {
    --size: 193px;
    width: var(--size);
    height: var(--size);
    margin: 0 auto 9px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .child_list {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 22px;
    @include flexStyle(center, space-around);
  }

  .control_btn {
    padding: 5px 20px;
    width: fit-content;
    height: 45px;
    margin: 0 auto;
    border-radius: 100px;
    background: rgba(255, 255, 255, 0.87);
    color: rgb(30, 30, 32);
    font-weight: 400;
    font-size: 16px;
    cursor: pointer;
    @include flexStyle(center, center);
  }

  .card_clip {
    cursor: pointer;
    padding: 63px 29px;
  }

  .time_line {
    color: rgba(245, 245, 245, 1);
    font-size: 16px;
    padding-top: 27px;
    .top {
      margin-bottom: 12px;
    }

    .time_line_item {
      font-size: 14px;
      margin-bottom: 6px;
      color: rgba(189, 189, 189, 1);
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
