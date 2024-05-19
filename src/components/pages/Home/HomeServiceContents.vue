<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import CommonLink from '@/components/partials/common/CommonLink.vue';
import imgServiceMedifresh from '@/assets/images/service-medifresh.jpg';
import imgServiceFood from '@/assets/images/service-food.jpeg';
import imgServiceDish from '@/assets/images/service-dish.jpeg';
import imgServiceStartup from '@/assets/images/service-startup.jpeg';

const SERVICES = [
  {
    title: "機能性フレッシュドッグフード「MEDIFRESH」",
    to: "/service#medifresh",
    image: imgServiceFood,
  },
  {
    title: "ペットフードの開発",
    to: "/service#food",
    image: imgServiceDish,
  },
  {
    title: "食品の開発",
    to: "/service#dish",
    image: imgServiceMedifresh,
  },
  {
    title: "スタートアップ支援",
    to: "/service#startup",
    image: imgServiceStartup,
  },
];
</script>

<template>
  <div>
    <!-- PC -->
    <div class="hidden md:block">
      <div class="grid grid-cols-2">
        <img :src="imgServiceMedifresh" class="object-cover h-60 w-full" />
        <div class="flex flex-col gap-y-10 justify-center text-right ml-5 md:ml-10">
          <h3 class="opacity-70">機能性フレッシュドッグフード「MEDIFRESH」</h3>
          <p class="opacity-50">愛犬のライフステージに合わせた高品質なドッグフードの開発を行っております。<br/>2024年販売開始予定。</p>
        </div>
      </div>
      <div class="grid grid-cols-2">
        <div class="flex flex-col gap-y-10 justify-center mr-5 md:mr-10">
          <h3 class="opacity-70">ペットフードの開発</h3>
          <p class="opacity-50">ドライ・ウェット・フレッシュペットフードの受託開発を行っております。<br/>総合栄養食も対応しております。</p>
        </div>
        <img :src="imgServiceFood" class="object-cover h-60 w-full" />
      </div>
      <div class="grid grid-cols-2">
        <img :src="imgServiceDish" class="object-cover h-60 w-full" />
        <div class="flex flex-col gap-y-10 justify-center text-right ml-5 md:ml-10">
          <h3 class="opacity-70">食品の開発</h3>
          <p class="opacity-50">完全栄養食・機能性食品などの受託開発を行っております。</p>
        </div>
      </div>
      <div class="grid grid-cols-2">
        <div class="flex flex-col gap-y-10 justify-center mr-5 md:mr-10">
          <h3 class="opacity-70">スタートアップ支援</h3>
          <p class="opacity-50">フードテック、ペットテック、ヘルスケアテックのスタートアップを総合的に支援させていただきます。<br/>お気軽にご相談ください。</p>
        </div>
        <img :src="imgServiceStartup" class="object-cover h-60 w-full" />
      </div>
    </div>

    <!-- SP -->
    <div class="md:hidden">
      <Carousel class="home-service" :items-to-show="1.15" :autoplay="5000" :wrap-around="true">
        <Slide v-for="item in SERVICES" :key="item.title">
          <CommonLink :to="item.to" color="transparent" class="carousel__pagination-item">
            <img :src="item.image" />
            <p class="carousel__pagination-item-title">{{ item.title }}</p>
          </CommonLink>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<style scoped>
h3 {
  @apply text-3xl font-light;
}

.carousel.home-service {
  @apply p-0 -mx-5;
}

.carousel.home-service .carousel__pagination-item img {
  @apply h-60 w-full object-cover;
}

.carousel.home-service .carousel__pagination-item {
  @apply relative;
}

.carousel.home-service .carousel__pagination-item-title {
  @apply absolute bottom-0 inset-x-0 p-5 bg-white-5 text-xl;
}
</style>
