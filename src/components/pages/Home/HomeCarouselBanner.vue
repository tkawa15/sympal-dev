<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import CommonLink from '@/components/partials/common/CommonLink.vue';

type Props = {
  items: Array<{
    title: string;
    image: string;
    to: string;
  }>;
};
const { items } = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div class="rounded-b-lg rounded-l-lg border-8 border-red">
    <Carousel class="top-banner" :autoplay="5000" :wrap-around="true">
      <Slide v-for="item in items" :key="item.title">
        <CommonLink :to="item.to" color="transparent" class="carousel__pagination-item">
          <img :src="item.image" />
        </CommonLink>
      </Slide>
      <template #addons>
        <Navigation />
        <div class="carousel__pagination-wrapper">
          <Pagination />
          <p>Topics</p>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<style>
.carousel.top-banner {
  @apply p-0 shadow-lg;
}

.carousel.top-banner .carousel__pagination-item {
  @apply transition-opacity duration-300 hover:opacity-80;
}

.carousel.top-banner .carousel__pagination-wrapper {
  @apply rounded-t-lg px-5 py-2.5;
  @apply flex items-center gap-x-5;
  @apply absolute -right-2 -top-12;
  @apply bg-red font-medium text-white;
}

.carousel.top-banner .carousel__pagination {
  @apply m-0;
}

.carousel.top-banner .carousel__pagination-button::after {
  @apply h-2 w-2 rounded-full bg-white opacity-50;
}

.carousel.top-banner .carousel__pagination-button::hover {
  @apply opacity-100;
}

.carousel.top-banner .carousel__pagination-button:hover::after {
  @apply bg-white opacity-100;
}

.carousel.top-banner .carousel__pagination-button--active::after {
  @apply opacity-100;
}
</style>
