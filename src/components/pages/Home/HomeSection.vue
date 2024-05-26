<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import CommonLink from '@/components/partials/common/CommonLink.vue';

type Props = {
  title?: string;
  moreLink?: string;
  moreText?: string;
};
const { title } = withDefaults(defineProps<Props>(), {
  moreText: 'さらに詳しく→',
});

const sectionContentsRef = ref<HTMLDivElement | null>(null);
const sectionObserver = ref<IntersectionObserver>();
const showSection = ref<boolean>(false);

onMounted(() => {
  sectionObserver.value = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      showSection.value = true;
    }
  });

  if (sectionContentsRef.value) {
    sectionObserver.value.observe(sectionContentsRef.value);
  }
});

onUnmounted(() => {
  if (sectionObserver.value) {
    sectionObserver.value.disconnect();
  }
});
</script>

<template>
  <section :id="title">
    <div class="section-wrapper grid  grid-cols-[1fr_80px] gap-x-5">
      <div ref="sectionContentsRef" class="flex grow flex-col justify-between transition-opacity duration-500 delay-500" :class="[showSection ? 'opacity-100' : 'opacity-0']">
        <slot class="shrink" />
        <div v-if="moreLink" class="mt-10 w-full rounded-full bg-red py-4 text-center md:mt-20 md:w-60">
          <CommonLink :to="moreLink" color="white">{{ moreText }}</CommonLink>
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
