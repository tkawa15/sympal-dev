<script setup lang="ts">
import { onMounted } from 'vue';
import CommonLink from "@/components/partials/common/CommonLink.vue";
import imgSympalFullWhite from "@/assets/images/sympal-full-white.png";

const HEADER_MENUS = [
  {
    text: 'About',
    to: '/about',
  },
  {
    text: 'Service',
    to: '/service',
  },
  {
    text: 'News',
    to: '/news',
  },
  {
    text: 'Contact',
    to: 'https://sympal.co.jp/contact/',
  },
];

const toggleSideMenu = () => {
  const body = document.querySelector("body");
  const menuToggleButton = document.querySelector("#menu-toggle-button");
  const sideMenu = document.querySelector("#side-menu");
  if (!body || !menuToggleButton || !sideMenu) return;
  body.classList.toggle("no-scroll");
  menuToggleButton.classList.toggle('open');
  sideMenu.classList.toggle('open');
};

onMounted(() => {
});
</script>

<template>
  <div>
    <!-- ヘッダー（PC） -->
    <nav class="hidden rounded-[80px] md:flex justify-between items-center bg-red h-20 pl-8 pr-10">
      <div class="shrink-0 mr-5">
        <CommonLink to="/" color="transparent">
          <img :src="imgSympalFullWhite" class="w-40 h-12" />
        </CommonLink>
      </div>
      <div class="flex gap-x-5">
        <template v-for="(menu, index) in HEADER_MENUS" :key="`header-menu-${index}`">
          <CommonLink :to="menu.to" color="white">{{ menu.text }}</CommonLink>
        </template>
      </div>
    </nav>
    <!-- ヘッダー（SP） -->

    <!-- サイドメニュー -->
    <nav id="side-menu" class="side-menu">
      <div class="bg-wrapper hodden inset-0 bg-black opacity-0 -z-10" :onClick="toggleSideMenu"></div>
      <div>
        <CommonLink to="/" color="transparent">
          <img src="@/assets/images/sympal-text-white.png" class="h-12" />
        </CommonLink>
      </div>
      <template v-for="(menu, index) in HEADER_MENUS" :key="`header-menu-${index}`">
        <CommonLink :to="menu.to" color="white">{{ menu.text }}</CommonLink>
      </template>
    </nav>
  </div>
</template>

<style scoped>
.header {
  @apply absolute inset-x-0 h-full pl-4 pr-5;
  @apply hidden md:flex justify-between items-center;
  @apply bg-white shadow-md;
}

.side-menu {
  @apply absolute -right-60 w-60 h-screen p-5;
  @apply bg-red;
  @apply flex flex-col gap-y-5 shadow-md;
  @apply transition-all;
}
.side-menu.open {
  @apply right-0;
}
.side-menu.open > .bg-wrapper {
  @apply fixed opacity-50;
}
</style>
