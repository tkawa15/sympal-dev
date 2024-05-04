<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import HomeFirstView from '@/components/pages/Home/HomeFirstView.vue';

const emits = defineEmits<{ (e: 'intersect', value: boolean): void }>();

const firstViewWrapperRef = ref<HTMLDivElement | null>(null);
const headerObserver = ref<IntersectionObserver>();

onMounted(() => {
  headerObserver.value = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      emits('intersect', true);
    } else {
      emits('intersect', false);
    }
  });

  if (firstViewWrapperRef.value) {
    headerObserver.value.observe(firstViewWrapperRef.value);
  }
});

onUnmounted(() => {
  if (headerObserver.value) {
    headerObserver.value.disconnect();
  }
});
</script>

<template>
  <div>
    <div ref="firstViewWrapperRef">
      <HomeFirstView class="h-lvh" />
    </div>

    <section class="h-[200vh]">
      <div class="section-wrapper">
        <p>Symbiosis(共生) + pal(仲間)</p>
      </div>
    </section>
  </div>
</template>
