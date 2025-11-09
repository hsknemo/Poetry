<script setup lang="ts">
import { useRouter } from 'vue-router'
import MidFour from '@/components/MidFour.vue'
import BigText from '@/components/BigText.vue'
import ItaText from '@/components/ItaText.vue'
import Card from '@/components/layoutCompo/card.vue'
import SmallArrowText from '@/components/SmallArrowText.vue'
import QuickLinkItem from '@/components/layoutCompo/quickLinkItem.vue'
const router = useRouter()
const routes = router.options.routes

const routeArr = computed(() => {
  return routes.slice(1, routes.length)
})

const curYear = computed(() => {
  return new Date().getFullYear()
})

const linkMe = ref([
  {
    text: 'Link me',
    link: 'https://www.linkedin.com/in/chenxuan-meng-b0a0a31a5/',
  },
])
const quickItem = ref([
  {
    text: 'Work / Architecture',
    link_item: [
      'Institutional',
      'Residential',
      'Others',
      'AI in Arch.',
    ],
  },
  {
    text: 'Learning & Mentorship',
    link_item: [
      'Course Demo  ',
      'Workshops',
      'Design coaching',
    ],
  },
  {
    text: 'IDEAL Project',
    link_item: [
      'AI-assisted storyboard for active learning',
    ],
  },
  {
    text: 'Notes & Papers',
    link_item: [
      'ISLS 2025 poster',
      'Methods',
    ],
    isHasBorder: false,
  }
])

</script>

<template>
<div class="blog_layout">
  <div class="blog_link">
    <div class="route_item"
         :key="index"
         v-for="(item, index) in routeArr">
      <router-link :to="item.path">
        {{ item.meta.title }}
      </router-link>
    </div>
  </div>

  <main class="main_body">
    <div class="main_moon_desc">
      <div class="moon_area">
        <img src="@/assets/media/moon.gif" />
      </div>
      <div class="moon_desc">
        <div class="t">My name is Chenxuan Meng</div>
        <div class="b">
          <div class="b_t">I am an Architectural Designer, a Learning
          </div>
          <div class="b_b">
            designer, and a Flex-Ph.D student in Curriculum and Pedagogy.
          </div>
        </div>
      </div>
    </div>
    <mid-four />
    <BigText
      style="margin-top: 160px"
      text="Two Sides of the Moon"
      :is-center="true"
    ></BigText>
    <ita-text
      text="Three Roles Bridges Architectural Spaces to Designing Learning Environments."
      :is-center="true"
    ></ita-text>

    <Card style="margin-top: 33px; margin-bottom: 125px"/>

    <mid-four />

    <section class="fast_desc">
      <div class="left">
        <div class="block">
          <BigText text="Two Sides, One Vision"></BigText>
          <ita-text
            style="color: rgb(228, 228, 228); font-weight: 400;"
            text="Bridging architectural spaces to designing learning environments"
          ></ita-text>
        </div>

        <div class="block">
          <small-arrow-text
            :text="['Architecture', 'Pedagogy']"
          ></small-arrow-text>
          <ita-text
            :isItalic="false"
            text="Enabling teachers to read, choreograph, and leverage space—so intent becomes teachable sequences."
          ></ita-text>
        </div>

        <div class="block">
          <small-arrow-text
            :text="['Pedagogy', 'Architecture']"
          ></small-arrow-text>
          <ita-text
            :isItalic="false"
            text="Translating lived needs into light-touch strategies that renew existing schools while imagining future learning ecologies."
          ></ita-text>
        </div>

        <div class="block">
          <ita-text
            style="color: rgb(208, 208, 208); line-height: 32px; font-weight: 400;"
            text="Space is not a backdrop but a collaborator. These pages document that dialogue—who gathers, how they
connect, and how space can be taught to teach better."
          ></ita-text>
        </div>

        <div class="link_me_wrap">
          <div class="link_me_item">
            <a href="https://www.instagram.com/chenxuan_meng/" target="_blank">
              <img src="../assets/icon/insa.png" alt="">
            </a>

            <a href="https://www.linkedin.com/in/chenxuan-meng/" target="_blank">
              <img src="../assets/icon/link.png" alt="">
            </a>

          </div>
        </div>
      </div>
      <div class="right">
        <div class="title">Quick Links</div>
        <quick-link-item
          :key="index"
          v-bind="item"
          v-for="(item, index) in quickItem"
          :text="item.text"
          :link_item="item.link_item"
        />
      </div>
    </section>
  </main>

  <footer class="botm_copyright">
    <div class="copyright">
      ©Chenxuan {{ curYear }}. All rights reserved.
    </div>
  </footer>

</div>
</template>

<style scoped lang="scss">
@mixin flexStyle($align:'center', $justContent:'space-around') {
  display: flex;
  align-items: $align;
  justify-content: $justContent;
}

@mixin route_item() {
  .route_item {
    width: 108px;
    margin-right: 39px;
    &:last-child {
      margin-right: 0;
    }
    a {
      font-weight: 200;
      font-size: 24px;
      color: #fff;
      font-family: inter-normal;
    }
  }
}

@mixin main_moon_desc {
  .main_moon_desc {
    margin-bottom: 110px;
    @include flexStyle(center);
    justify-content: space-between;
  }
}

@mixin moon_area {
  width: 850px;
  height: 898px;
  min-width: 871px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}

@mixin moon_desc {
  margin-left: 103px;
  width: 633px;
  @include flexStyle(center);
  flex-direction: column;

  .t {
    white-space: nowrap;
    width: 460px;
    text-align: center;
    color: rgba(228, 228, 228, 1);
    font-weight: 400;
    font-size: 36px;
    margin-bottom: 22px;
    text-align: center;
    font-family: inter-normal;
  }
  .b_b, .b_t {
    font-style: italic;
    font-weight: 200;
    font-size: 24px;
    color: #fff;
    text-align: center;
    font-family: inter-ita;
  }
  .b_b {
    white-space: nowrap;
  }
}


@mixin fast_desc() {
  .fast_desc {
    margin-top: 150px;
    @include flexStyle(center, space-around);

    .left {
      width: 920px;
      height: 585px;

      .link_me_wrap {
        .link_me_item {
          @include flexStyle(center);
          a {
            width: 44px;
            height: 44px;
            margin-right: 12px;
          }
          img {
            display: block;
            width: 100%;
            height: 100%;
          };
        }
      }
    }
    .block {
      margin-bottom: 50px;
    }

    .ita_text {
      font-size: 15px;
      color: rgb(176, 176, 176);
    }

    .right {
      width: 400px;
      height: 585px;
      background-color: rgba(20, 20, 20, 1);
      border-radius: 12px;
      padding: 41px;
      @include flexStyle();
      flex-direction: column;
      justify-content: space-between;
      .title {
        font-weight: 700;
        color: rgb(128, 128, 128);
        font-size: 14px;
        margin-bottom: 30px;
      }
    }
  }
}

.blog_layout {
  .blog_link {
    min-width: 1500px;
    margin-top: 83px;
    margin-right: 92px;
    @include flexStyle();
    justify-content: flex-end;
    @include route_item();
  }

  .main_body {
    padding: 0 166px 10px 173px;
    overflow: hidden;

    @include main_moon_desc();

    .moon_area {
      @include moon_area();
    }

    .moon_desc {
      @include moon_desc();
    }

    @include fast_desc();
  }

  .botm_copyright {
    position: relative;
    @include flexStyle(center, center);
    flex-direction: column;
    justify-content: flex-end;
    width: 1000px;
    height: 304px;
    margin: 0 auto;
    margin-top: 41px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url("@/assets/icon/earth.png");
    .copyright {
      color: rgb(98, 97, 111);
      margin-bottom: 20px;
    }
  }
}


</style>
