<script setup lang="ts">
import imgTopicIntern from '@/assets/images/topic-intern.png';
import imgTopDummy from '@/assets/images/top-dummy.jpg';
import HomeCarouselBanner from '@/components/pages/Home//HomeCarouselBanner.vue';

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
  <div class="h-dvh w-full bg-cover" :style="`background-image: url(${imgTopDummy})`">
    <div class="section-wrapper relative h-full">
      <!-- トップメッセージ -->
      <div class="absolute top-[40%] rounded-2xl text-white">
        <p class="text-4xl font-bold">
          ペットの健康寿命を<span class="text-red">10年</span>延ばします
        </p>
        <p>Sympal株式会社は、ペットフードの開発を通じてペットの健康的な生活を実現します</p>
      </div>
      <!-- トピックカルーセル -->
      <div class="absolute bottom-[10%] right-5 w-[800px]">
        <HomeCarouselBanner :items="TOPICS" />
      </div>
    </div>
  </div>
</template>
