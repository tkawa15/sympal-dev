<script setup lang="ts">
import HomeFirstView from "@/components/HomeFirstView.vue";
</script>

<template>
  <div>
    <!-- トップ画像 -->
    <HomeFirstView />

    <!-- ファーストビュー以外の枠 -->
    <div class="sticky top-0 -left-10 w-screen h-20 border-red border-[40px] rounded-[80px] border-b-0 rounded-b-none z-40">
      <div class="absolute -inset-10 border-red border-[40px] border-b-0 rounded-b-none"></div>
      <div class="w-32 h-40 absolute -top-20 -right-10 bg-red rounded-l-full"></div>
      <div class="w-24 h-28 absolute -top-14 -right-10 bg-white rounded-l-full"></div>
    </div>
    <div class="sticky w-screen h-20 border-red border-[40px] rounded-[80px] border-t-0 rounded-t-none" style="top: calc(100vh - 80px);">
      <div class="absolute -inset-10 border-red border-[40px] border-t-0 rounded-t-none"></div>
    </div>

    <section class="h-screen -mt-40 border-red border-x-[40px]">
      <div class="sticky top-20 text-white text-4xl font-bold flex">
        <h2 class="p-5 pr-10 bg-red rounded-r-full">わたしたちの信念</h2>
      </div>
      <div class="section-wrapper py-20">
        <p>「Sympal」に込めた思い</p>
        <p>共生（<span class="text-red">Sym</span>biosis）+ 仲間（<span class="text-red">pal</span>）</p>
      </div>
    </section>
  </div>
</template>
