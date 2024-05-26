<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue';
import imgTopicIntern from '@/assets/images/topic-intern.png';
import imgFirstiewBackgroundPc from '@/assets/images/firstview-background-pc.png';
import imgFirstiewBackgroundSp from '@/assets/images/firstview-background-sp.png';
import imgSympalFullRed from '@/assets/logos/sympal-full-red.png';
import CommonLink from '@/components/partials/common/CommonLink.vue';
import { useResponsive } from '@/composables/useResponsive';

const { getIsMobile } = useResponsive();

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

const showFirstView = ref<boolean>(false);
const isMobile = computed(() => getIsMobile());

onMounted(() => {
  nextTick(() => { showFirstView.value = true; });
});
</script>

<template>
  <div
    class="w-full bg-cover bg-center transition-opacity duration-500 delay-500"
    :class="[showFirstView ? 'opacity-100' : 'opacity-0']"
    :style="`background-image: url(${isMobile ? imgFirstiewBackgroundSp : imgFirstiewBackgroundPc})`"
  >
    <div class="section-wrapper relative flex h-full flex-col justify-between pb-20 pt-6">
      <div class="h-20">
        <img :src="imgSympalFullRed" class="w-60 md:hidden" />
      </div>
      <div class="flex flex-col gap-y-10">
        <p class="text-6xl md:text-7xl font-bold transition-[translate, opacity] duration-500 delay-1000" :class="[showFirstView ? 'translate-x-0 opacity-80' : '-translate-x-8 opacity-0']">
          ペットと人の<br class="md:hidden">健康寿命延伸
        </p>
        <div class="transition-opacity duration-500 delay-1500 bg-red w-60 text-center py-4 rounded-full" :class="[showFirstView ? 'opacity-100' : 'opacity-0']">
          <CommonLink to="/contact" color="white">お問い合わせはこちら</CommonLink>
        </div>
      </div>
    </div>
  </div>
</template>
