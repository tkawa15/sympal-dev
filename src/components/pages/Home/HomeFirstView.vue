<script setup lang="ts">
import imgTopicIntern from '@/assets/images/topic-intern.png';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

const TOPICS = [
  {
    title: 'インターン募集中',
    img: imgTopicIntern,
    to: '/about',
  },
  {
    title: 'バナー2',
    img: imgTopicIntern,
    to: '/service',
  },
  {
    title: 'バナー3',
    img: imgTopicIntern,
    to: '/news',
  },
  {
    title: 'バナー4',
    img: imgTopicIntern,
    to: 'https://sympal.co.jp/contact/',
  },
];
</script>

<template>
  <div class="h-dvh w-full bg-top bg-cover">
    <div class="section-wrapper relative h-full">
      <!-- トップメッセージ -->
      <div class="absolute top-[40%] rounded-2xl text-white">
        <p class="text-4xl font-bold">
          ペットの健康寿命を<span class="text-red">10年</span>延ばします
        </p>
        <p>Sympal株式会社は、ペットフードの開発を通じてペットの健康的な生活を実現します</p>
      </div>
      <!-- トピックカルーセル -->
      <div class="absolute right-5 top-[60%] w-[800px]">
        <Carousel :autoplay="5000" :wrap-around="true">
          <Slide v-for="slide in TOPICS" :key="slide">
            <div class="carousel__item">
              <img :src="slide.img" />
              <p>{{ slide.title }}</p>
            </div>
          </Slide>
          <template #addons>
            <Pagination class="carousel__pagination" />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel__pagination {
  @apply rounded-full bg-red;
}
</style>
