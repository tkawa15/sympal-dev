<script setup lang="ts">
import imgTopDummy from "@/assets/images/top-dummy1.jpg";
import imgTopMini1 from "@/assets/images/top-mini-1.jpeg";
import imgTopMini2 from "@/assets/images/top-mini-2.jpeg";
import imgTopMini3 from "@/assets/images/top-mini-3.jpeg";
</script>

<template>
  <div class="pt-20" style="height: calc(100vh - 80px);">
    <img :src="imgTopDummy" class="top-image" />
    <div class="-mt-10 pr-20 flex justify-end">
      <div class="p-10 bg-red text-white rounded-2xl">
        <p class="text-4xl font-bold">ペットの健康寿命を10年延ばします</p>
        <p>Sympal株式会社は、ペットフードの開発を通じてペットの健康的な生活を実現します。</p>
      </div>
    </div>
    <img :src="imgTopMini1" class="absolute top-[120px] right-[120px] h-32 border-red border-4 rounded-full" />
    <img :src="imgTopMini2" class="absolute top-[260px] right-[240px] h-32 border-red border-4 rounded-full" />
    <img :src="imgTopMini3" class="absolute top-[380px] right-[60px] h-32 border-red border-4 rounded-full" />
  </div>
</template>

<style scoped>
.top-image {
  width: 800px;
  height: 400px;
  @apply object-cover rounded-r-2xl;
}
</style>
