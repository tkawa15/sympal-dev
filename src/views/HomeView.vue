<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import HomeFirstView from '@/components/pages/Home/HomeFirstView.vue';
import HomeSection from '@/components/pages/Home/HomeSection.vue';
import movSympalAnimation from '@/assets/logos/sympal-animation.mp4';
import imgServiceMedifresh from '@/assets/images/service-medifresh.jpg';

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

    <!-- About -->
    <HomeSection title="About" more-link="/about">
      <div>
        <h3 class="opacity-70">
          Sympal = <span class="text-red">Sym</span>biosis(共生) +
          <span class="text-red">pal</span>(仲間)
        </h3>
        <div class="my-20 flex flex-col gap-y-10 opacity-50">
          <p>Sympal株式会社はペットの健康寿命延伸を目指すペットヘルスケアカンパニーです。</p>
          <p>ペットと人間の健康と幸福を追求し、より豊かな共生世界を創り出すために、</p>
          <p>革新的な製品やサービスを提供し続けます。</p>
        </div>
        <div class="flex justify-center">
          <video
            autoplay
            muted
            loop
            playsinline
            class="h-[335px] md:h-[440px] max-w-full w-[540px] object-cover object-center"
          >
            <source :src="movSympalAnimation" type="video/mp4" />
          </video>
        </div>
      </div>
    </HomeSection>

    <!-- Service -->
    <HomeSection title="Service" more-link="/service">
      <div>
        <img :src="imgServiceMedifresh" />
      </div>
    </HomeSection>
  </div>
</template>

<style scoped>
h3 {
  @apply text-3xl font-light;
}
</style>
