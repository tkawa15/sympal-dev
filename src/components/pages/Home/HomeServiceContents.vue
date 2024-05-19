<script setup lang="ts">
import imgServiceMedifresh from '@/assets/images/service-medifresh.jpg';
import imgServiceFood from '@/assets/images/service-food.jpeg';
import imgServiceDish from '@/assets/images/service-dish.jpeg';
import imgServiceStartup from '@/assets/images/service-startup.jpeg';
</script>

<template>
  <div>
    <!-- PC -->
    <div class="hidden md:block">
      <div class="grid grid-cols-2">
        <img :src="imgServiceMedifresh" class="object-cover h-60 w-full" />
        <div class="flex flex-col gap-y-10 justify-center text-right ml-5 md:ml-10">
          <h3 class="opacity-70">機能性フレッシュドッグフード「MEDIFRESH」</h3>
          <p class="opacity-50">愛犬のライフステージに合わせた高品質なドッグフードの開発を行っております。<br/>2024年販売開始予定。</p>
        </div>
      </div>
      <div class="grid grid-cols-2">
        <div class="flex flex-col gap-y-10 justify-center mr-5 md:mr-10">
          <h3 class="opacity-70">ペットフードの開発</h3>
          <p class="opacity-50">ドライ・ウェット・フレッシュペットフードの受託開発を行っております。<br/>総合栄養食も対応しております。</p>
        </div>
        <img :src="imgServiceFood" class="object-cover h-60 w-full" />
      </div>
      <div class="grid grid-cols-2">
        <img :src="imgServiceDish" class="object-cover h-60 w-full" />
        <div class="flex flex-col gap-y-10 justify-center text-right ml-5 md:ml-10">
          <h3 class="opacity-70">食品の開発</h3>
          <p class="opacity-50">完全栄養食・機能性食品などの受託開発を行っております。</p>
        </div>
      </div>
      <div class="grid grid-cols-2">
        <div class="flex flex-col gap-y-10 justify-center mr-5 md:mr-10">
          <h3 class="opacity-70">スタートアップ支援</h3>
          <p class="opacity-50">フードテック、ペットテック、ヘルスケアテックのスタートアップを総合的に支援させていただきます。<br/>お気軽にご相談ください。</p>
        </div>
        <img :src="imgServiceStartup" class="object-cover h-60 w-full" />
      </div>
    </div>

    <!-- SP -->
    <div class="md:hidden">
    </div>
  </div>
</template>

<style scoped>
h3 {
  @apply text-3xl font-light;
}
</style>
