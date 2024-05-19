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

const COMPANY_INFO = [
  {
    head: "会社名",
    body: "Sympal株式会社(Sympal Inc)",
  },
  {
    head: "創業",
    body: "2023年6月",
  },
  {
    head: "代表取締役",
    body: "合田圭佑",
  },
  {
    head: "事業内容",
    body: "食品およびペットフードの開発・販売",
  },
  {
    head: "取引銀行",
    body: "きらぼし銀行、興産信用金庫",
  },
];
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
      <div class="flex flex-col gap-y-10">
        <div v-for="item in NEWS" :key="item.title" class="p-5 shadow rounded transition-shadow hover:shadow-lg">
          <CommonLink :to="item.to" color="transparent">
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

    <!-- Company -->
    <HomeSection title="Company">
      <div class="flex flex-col gap-y-10">
        <table class="w-full">
          <tbody>
            <tr v-for="item in COMPANY_INFO" class="border-b border-black-1 last:border-none">
              <th class="text-left py-2.5 pr-5 w-32 md:w-40 opacity-70">{{ item.head }}</th>
              <td class="py-2.5 opacity-70">{{ item.body }}</td>
            </tr>
          </tbody>
        </table>
        <div class="md:grid grid-cols-[320px_1fr]">
          <div class="flex flex-col gap-y-5 mb-5">
            <h4 class="opacity-70 text-xl">オフィス</h4>
            <p class="opacity-50">〒101-0064<br/>東京都千代田区神田猿楽町2-8-11<br/>VORT水道橋Ⅲ 9階</p>
          </div>
          <iframe class="w-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3240.0262760319642!2d139.757484!3d35.700971!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d80bff12285%3A0x7e5f2baa6f2c635b!2zU3ltcGFs44ix!5e0!3m2!1sja!2sjp!4v1716114835579!5m2!1sja!2sjp" width="400" height="300" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
