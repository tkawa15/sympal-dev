<script setup lang="ts">
import imgTopDummy from "@/assets/images/top-dummy1.jpg";
import imgTopicIntern from "@/assets/images/topic-intern.png";
</script>

<template>
  <div class="h-dvh relative">
    <img :src="imgTopDummy" class="w-full h-full object-cover" />
    <div class="section-wrapper">
      <!-- トップメッセージ -->
      <div class="text-white rounded-2xl absolute top-[40%]">
        <p class="text-4xl font-bold">ペットの健康寿命を<span class="text-red">10年</span>延ばします</p>
        <p>Sympal株式会社は、ペットフードの開発を通じてペットの健康的な生活を実現します。</p>
      </div>
      <!-- トピック -->
      <div class="text-white rounded-2xl absolute top-[60%]">
        <img :src="imgTopicIntern" class="h-40" />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
