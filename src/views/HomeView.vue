<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import CommonLink from '@/components/partials/common/CommonLink.vue';
import HomeFirstView from '@/components/pages/Home/HomeFirstView.vue';
import HomeServiceContents from '@/components/pages/Home/HomeServiceContents.vue';
import HomeSection from '@/components/pages/Home/HomeSection.vue';
import movSympalAnimation from '@/assets/logos/sympal-animation.mp4';

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

const NEWS = [
  {
    title: "栃木銀行主催の「第8回とちぎんビジネスプランコンテスト」で特別賞を受賞",
    to: "https://sympal.co.jp/press5/",
    description: "栃木銀行が主催する「第8回とちぎんビジネスプランコンテスト 最終選考会」にて特別賞(とちぎんリーシング賞)を受賞しました。栃木銀行によるプレスリリースはこちら",
    date: "2024年2月21日",
    image: "https://sympal.co.jp/wp-content/uploads/2024/04/IMG_0677-768x576.jpg",
    isNew: true,
  },
  {
    title: "栃木銀行主催の「第8回とちぎんビジネスプランコンテスト」で特別賞を受賞",
    to: "https://sympal.co.jp/press5/",
    description: "栃木銀行が主催する「第8回とちぎんビジネスプランコンテスト栃木銀行が主催する「第8回とちぎんビジネスプランコンテスト 最終選考会」にて特別賞(とちぎんリーシング賞)を受賞しました。栃木銀行が主催する「第8回とちぎんビジネスプランコンテスト 最終選考会」にて特別賞(とちぎんリーシング賞)を受賞しました。栃木銀行が主催する「第8回とちぎんビジネスプランコンテスト 最終選考会」にて特別賞(とちぎんリーシング賞)を受賞しました。栃木銀行によるプレスリリースはこちら",
    date: "2024年2月21日",
    image: "https://sympal.co.jp/wp-content/uploads/2024/04/IMG_0677-768x576.jpg",
    isNew: false,
  },
  {
    title: "栃木銀行主催の「第8回とちぎんビジネスプランコンテスト」で特別賞を受賞",
    to: "https://sympal.co.jp/press5/",
    description: "栃木銀行が主催する「第8回とちぎんビジネスプランコンテスト 最終選考会」にて特別賞(とちぎんリーシング賞)を受賞しました。栃木銀行によるプレスリリースはこちら",
    date: "2024年2月21日",
    image: "https://sympal.co.jp/wp-content/uploads/2024/04/IMG_0677-768x576.jpg",
    isNew: false,
  },
]
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
      <HomeServiceContents />
    </HomeSection>

    <!-- News -->
    <HomeSection title="News" more-link="/service" moreText="ニュース一覧を見る→">
      <div class="flex flex-col gap-y-10 md:gap-y-20">
        <div v-for="item in NEWS" :key="item.title">
          <CommonLink :to="item.to" color="transparent" class="transition-opacity hover:opacity-50">
            <div class="flex gap-x-5">
              <img :src="item.image" class="w-20 h-20 md:w-40 md:h-40 object-cover" />
              <div class="flex flex-col gap-y-2.5 md:gap-y-5">
                <div class="flex flex-col md:flex-row gap-2.5 items-baseline">
                  <h4 class="opacity-70">{{ item.title }}</h4>
                  <p class="text-xs">
                    <span class="opacity-50">{{ item.date }}</span>
                    <span v-if="item.isNew" class="text-red ml-2.5">New!</span>
                  </p>
                </div>
                <p class="opacity-50 line-clamp-2 md:line-clamp-3">{{ item.description }}</p>
              </div>
            </div>
          </CommonLink>
        </div>
      </div>
    </HomeSection>
  </div>
</template>

<style scoped>
h3 {
  @apply text-3xl font-light;
}
</style>
