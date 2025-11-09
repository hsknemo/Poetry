<script setup lang="ts">
import DirCompo from '@/components/DirCompo.vue'
import { getImg } from '@/utils/getImg.ts'
import BigText from '@/components/BigText.vue'
import ItaText from '@/components/ItaText.vue'
import { clipBord } from '@/utils/copyBorad.ts'


const createAchor = () => {
  let a = document.createElement('a')
  a.download = 'Chenxuan_Meng_CV.pdf'
  a.href = '/file/Chenxuan_Meng_CV.pdf'
  document.body.appendChild(a)
  a.style.display = "none";
  a.click()
  a.remove()
}

const downloadLink = (url, fileName) => {
  let a = document.createElement('a')
  a.download = fileName
  a.href = url
  document.body.appendChild(a)
  a.style.display = "none";
  a.click()
  a.remove()
}

const emailTo = url => {
  let a = document.createElement('a')
  a.href = `mailto:${url}`
  document.body.appendChild(a)
  a.style.display = "none";
  a.click()
  a.remove()
}

const onDownloadPdf = () => {
  createAchor('/file/Chenxuan_Meng_CV.pdf', 'Chenxuan_Meng_CV')
}

const onSendEmail = () => {
  let url = 'chenxuan.meng@mail.utoronto.ca'
  emailTo(url)
  clipBord(url)
}


</script>

<template>
<div class="arc_about">
 <DirCompo
   fileName="about.png"
   assetsPath="about"
 ></DirCompo>

  <div class="about_profile">
    <div class="imgWrap">
      <img class="wow fadeInLeft" :src="getImg('profile', 'profile.png')" alt="">
      <div class="btns wow fadeInUp" >
        <div @click="onDownloadPdf" class="button_wrap">
          <img :src="getImg('about', 'detail.png')" alt="">
          <span>Download Academic CV (PDF)</span>
        </div>

        <div class="button_wrap white" @click="onSendEmail">
          <img :src="getImg('about', 'email.png')" alt="">
          <span>Email me</span>
        </div>
      </div>
    </div>
    <article class="art_content wow fadeInRight">
      <BigText
        class="tilte"
        text="About"
      ></BigText>
      <BigText
        class="second_title"
        text="Architectural & Learning Designer - M.Arch; M.A."
      ></BigText>
      <ita-text
        class="ita_text_c"
        text="Flex-PhD (Curriculum & Pedagogy, University of Toronto)"
      ></ita-text>

      <BigText
        class="usual_title"
        :text="'Introduction'.toUpperCase()"
      ></BigText>

      <ita-text
        style="font-size: 16px  ;"
        class="usual_content"
        :is-italic="false"
        text="I bridge architecture and education—designing both physical spaces and learning experiences. With 6+ years of professional experience across China and Canada, I've delivered projects spanning institutional, industrial, residential, and office typologies in China, Canada, and Abu Dhabi."
      ></ita-text>

      <BigText
        class="usual_title"
        :text="'Education'.toUpperCase()"
      ></BigText>

      <ita-text
        class="usual_p"
        :is-italic="false"
        text="M.Arch (Daniels, University of Toronto)"
      ></ita-text>

      <ita-text
        class="usual_p"
        :is-italic="false"
        text="M.A.in Curriculum & Pedagogy (OISE, University of Toronto)"
      ></ita-text>

      <ita-text
        class="usual_p"
        :is-italic="false"
        text="Currently pursuing a Flex-PhD in Curriculum & Pedagogy, exploring how architectural thinking can inform educational design."
      ></ita-text>

      <BigText
        style="margin-top: 14px;"
        class="usual_title"
        :text="'Architectural Practice'.toUpperCase()"
      ></BigText>

      <ita-text
        class="usual_p"
        :is-italic="false"
        text="My architectural practice includes façade/layout studies, multi-stakeholder coordination, and delivery-ready documentation. I approach each project as an opportunity to translate programmatic requirements into spatial experiences that support human activity and organizational goals."
      ></ita-text>

      <BigText
        style="margin-top: 14px;"
        class="usual_title"
        :text="'Learning Design & Mentorship'.toUpperCase()"
      ></BigText>

      <ita-text
        class="usual_p"
        :is-italic="false"
        text="I teach design across two contexts: design-thinking workshops for K-12 students (including Future City competition preparation) and one-on-one studio instruction for students preparing graduate applications in architecture. My approach emphasizes iterative design processes, structured feedback, and developing students' ability to articulate their design thinking. Students I've mentored have gained admission to selective programs."
      ></ita-text>

      <div class="desc_wrap">
        <BigText
          style="font-weight: 400;font-size: 12px;letter-spacing: 1.5px; margin-bottom: 12px;"
          class="usual_title"
          :text="'Current Research'.toUpperCase()"
        ></BigText>

        <div class="desc">
          My doctoral research, <span class="bold">IDEAL</span> (Intelligent Design Environment for Active  Learning), explores how architectural visualization tools can support  educators in curriculum design for active learning classrooms.
        </div>

      </div>


    </article>
  </div>
</div>
</template>

<style scoped lang="scss">
@mixin flexStyle($align:'center', $justContent:'space-around') {
  display: flex;
  align-items: $align;
  justify-content: $justContent;
}
.arc_about {
  padding-top: 101px;
  padding-bottom: 107px;
  width: calc(501px + 94px + 957px);
  margin: 0 auto;

  * {
    font-family: inter-normal;
  }

  .about_profile {
    margin-top: 86px;
    @include flexStyle(center, space-around);
    .imgWrap {
      margin-right: 94px;
      .btns {
        padding-top: 24px;
        @include flexStyle(center, space-between);
        .button_wrap {
          cursor: pointer;
          @include flexStyle(center);
          height: 56px;
          border-radius: 10px;
          border: 2px solid rgba(42, 42, 42, 1);
          background: rgba(42, 42, 42, 1);
          color: rgb(255, 255, 255);
          padding: 16px 35px;

          &.white {
            border: 2px solid rgba(209, 213, 220, 1);
            background-color: unset;
            width: 160px;
            span {
              white-space: nowrap;
              color: rgb(42, 42, 42);
              font-weight: 400;
            }
          }
          img {
            display: block;
            --size: 20px;
            width: var(--size);
            height: var(--size);
            margin-right: 10px;
          }
        }
      }
    }
    img {
      width: 501px;
      height: 671px;
    }
    .art_content {
      width: 957px;
      .tilte {
        color: rgb(26, 26, 26);
        font-size: 36px;
        margin-bottom: 11px;
        font-weight: 400;
      }

      .second_title {
        color: rgba(74, 74, 74, 1);
        font-weight: 400;
        font-size: 20px;
      }

      .ita_text_c {
        color: rgba(112, 112, 112, 1);
        font-weight: 400;
        font-size: 16px;
      }

      .usual_title {
        font-size: 12px;
        font-weight: 400;
        color: rgb(153, 161, 175);
        margin-bottom: 14px;
        letter-spacing: 2px;
      }

      .usual_content {
        color: rgb(30, 41, 57);
        font-weight: 400;
        line-height: 26px;
        margin-bottom: 14px;
      }

      .usual_p {
        color: rgb(30, 41, 57);
        font-weight: 400;
        font-size: 16px;
        height: unset;
        line-height: 26px;
      }

      .desc_wrap {
        padding-top: 20px;
        margin-top: 17px;
        background-color: rgb(243, 244, 246);
        border-left: 3px solid rgb(74, 85, 101);
        padding-left: 27px;
        .desc {
          line-height: 26px;
          font-weight: 300;
          font-size: 16px;
          .bold {
            font-weight: 700;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
