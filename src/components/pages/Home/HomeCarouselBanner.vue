<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

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
  <Carousel :autoplay="5000" :wrap-around="true">
    <Slide v-for="item in items" :key="item.title">
      <div class="carousel__item">
        <img :src="item.image" />
      </div>
    </Slide>
    <template #addons>
      <div class="carousel__pagination-wrapper">
        <Pagination />
        <p>Topics</p>
      </div>
    </template>
  </Carousel>
</template>

<style>
.carousel {
  @apply p-0;
}

.carousel__pagination-wrapper {
  @apply rounded-full px-5 py-2.5;
  @apply flex items-center gap-x-5;
  @apply absolute right-5 top-5;
  @apply bg-red font-medium text-white shadow-xl;
}

.carousel__pagination {
  @apply m-0;
}

.carousel__pagination-button::after {
  @apply h-2 w-2 rounded-full bg-white opacity-50;
}

.carousel__pagination-button::hover {
  @apply opacity-100;
}

.carousel__pagination-button:hover::after {
  @apply bg-white opacity-100;
}

.carousel__pagination-button--active::after {
  @apply opacity-100;
}
</style>
