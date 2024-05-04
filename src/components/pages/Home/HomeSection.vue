<script setup lang="ts">
import CommonLink from '@/components/partials/common/CommonLink.vue';

type Props = {
  title?: string;
  moreLink?: string;
  moreText?: string;
};
const { title } = withDefaults(defineProps<Props>(), {
  moreText: 'さらに詳しく→',
});
</script>

<template>
  <section>
    <div class="section-wrapper flex justify-between gap-x-5">
      <div class="flex grow flex-col justify-between">
        <slot />
        <div class="mt-10 w-full rounded-full bg-red py-4 text-center md:mt-20 md:w-60">
          <CommonLink v-if="moreLink" :to="moreLink" color="white">{{ moreText }}</CommonLink>
        </div>
      </div>
      <div v-if="title">
        <h2 class="sticky top-20 inline-block">{{ title }}</h2>
      </div>
    </div>
  </section>
</template>

<style scoped>
h2 {
  @apply sticky top-32;
  @apply text-7xl font-bold leading-[80px] text-red;
  writing-mode: vertical-rl;
}
</style>
