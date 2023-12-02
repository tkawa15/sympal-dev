<script setup lang="ts">
import AppLink from "@/components/app/AppLink.vue";
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <!-- トップ画像 -->
      <section>
        <img src="@/assets/images/top-dummy1.jpg" class="top-image" />
        <div class="-mt-20 flex justify-end">
          <div class="p-10 bg-red text-white rounded-lg">
            <p class="text-4xl">ペットの寿命を10年延ばします</p>
            <AppLink to="/about" color="white">わたしたちの Mission →</AppLink>
          </div>
        </div>
      </section>

      <section class="mt-10 h-[200vh]">
        <p>「Sympal」に込めた思い</p>
        <p>共生（<span class="text-red">Sym</span>biosis）+ 仲間（<span class="text-red">pal</span>）</p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.top-image {
  width: 800px; height: 400px;
  @apply object-cover rounded-lg;
}
</style>
