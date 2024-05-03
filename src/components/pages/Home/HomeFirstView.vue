<script setup lang="ts">
import imgTopicIntern from '@/assets/images/topic-intern.png';
import imgTopDummy from '@/assets/images/top-dummy.jpg';
import HomeCarouselBanner from '@/components/pages/Home//HomeCarouselBanner.vue';
import imgSympalLogoRed from '@/assets/logos/sympal-logo-red.png';

const TOPICS = [
  {
    title: 'インターン募集中',
    image: imgTopicIntern,
    to: '/about',
  },
  {
    title: 'インターン募集中',
    image: imgTopicIntern,
    to: '/service',
  },
  {
    title: 'インターン募集中',
    image: imgTopicIntern,
    to: '/news',
  },
  {
    title: 'インターン募集中',
    image: imgTopicIntern,
    to: 'https://sympal.co.jp/contact/',
  },
];
</script>

<template>
  <div class="h-lvh w-full bg-cover" :style="`background-image: url(${imgTopDummy})`">
    <div class="section-wrapper relative flex h-full flex-col justify-evenly pt-32">
      <!-- トップメッセージ -->
      <div class="rounded-2xl text-white">
        <p class="text-4xl font-bold">
          ペットの健康寿命を<span class="text-red">10年</span>延ばします
        </p>
        <p>わたしたちは、ペットフードの開発を通じてペットの健康的な生活を実現します</p>
      </div>
      <div class="flex w-full items-end justify-between">
        <div class="relative w-72">
          <img :src="imgSympalLogoRed" class="absolute bottom-0 w-full" />
          <h1 class="w-full text-center text-4xl font-bold text-red">Sympal株式会社</h1>
        </div>
        <!-- トピックカルーセル -->
        <div class="w-[800px]">
          <HomeCarouselBanner :items="TOPICS" />
        </div>
      </div>
    </div>
  </div>
</template>
