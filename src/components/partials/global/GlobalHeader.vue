<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { once, throttle } from 'lodash-es';
import isMobile from 'ismobilejs';
import CommonLink from "@/components/partials/common/CommonLink.vue";

const isTransforming = ref<boolean>(false);
const isPhone = ref<boolean>(false);

const menus = [
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
  isPhone.value = isMobile(window.navigator).phone;
  const header = document.querySelector("#header") as HTMLElement;
  const menuToggleButton = document.querySelector("#menu-toggle-button") as HTMLElement;

  const showMenuToggleButton = once(() => {
    menuToggleButton.style.display = "flex";
    header.style.display = "none";
    menuToggleButton.classList.add("display");
  });

  if (isPhone.value) {
    showMenuToggleButton();
    return;
  }

  if (!header || !menuToggleButton) return;
  const windowHeight = window.innerHeight;
  const headerInitialWidth = header.clientWidth;
  const headerInitialHeight = header.clientHeight;
  const menuToggleButtonWidth = 72;

  const transformHeader = () => {
    const scrollY = window.scrollY;
    if (scrollY >= windowHeight) {
      showMenuToggleButton();
    }
    
    if (scrollY <= headerInitialHeight) {
      if (isTransforming.value) {
        isTransforming.value = false;
        header.style.left = "0px";
        header.style.borderRadius = "0px";
      }
    } else if (scrollY < windowHeight) {
      if (!isTransforming.value) {
        isTransforming.value = true;
        menuToggleButton.style.display = "none";
        header.style.display = "flex";
        header.style.borderTopLeftRadius = "40px";
        header.style.borderBottomLeftRadius = "40px";
      }
      const headerLeft = (headerInitialWidth - menuToggleButtonWidth) / (windowHeight - headerInitialHeight) * (scrollY - headerInitialHeight);
      header.style.left = `${headerLeft}px`;
    } else {
      if (isTransforming.value) {
        isTransforming.value = false;
        menuToggleButton.style.display = "flex";
        header.style.display = "none";
      }
    }
  };
  window.addEventListener("scroll", throttle(transformHeader, 10));
});
</script>

<template>
  <div>
    <!-- ヘッダー -->
    <nav v-if="!isPhone" id="header" class="header">
      <div class="shrink-0 mr-5">
        <CommonLink to="/" color="transparent">
          <img src="@/assets/images/sympal-full-red.png" class="w-40 h-12" />
        </CommonLink>
      </div>
      <div class="flex gap-x-5">
        <template v-for="(menu, index) in menus" :key="`header-menu-${index}`">
          <CommonLink :to="menu.to">{{ menu.text }}</CommonLink>
        </template>
      </div>
    </nav>

    <!-- メニュー開閉ボタン -->
    <div id="menu-toggle-button" class="menu-toggle-button" :onClick="toggleSideMenu">
      <img src="@/assets/images/sympal-logo-white.png" class="w-12" />
      <img src="@/assets/icons/menu-open.svg" class="absolute right-[23px] w-5" />
    </div>

    <!-- サイドメニュー -->
    <nav id="side-menu" class="side-menu">
      <div class="bg-wrapper hodden inset-0 bg-black opacity-0 -z-10" :onClick="toggleSideMenu"></div>
      <div>
        <CommonLink to="/" color="transparent">
          <img src="@/assets/images/sympal-text-white.png" class="h-12" />
        </CommonLink>
      </div>
      <template v-for="(menu, index) in menus" :key="`header-menu-${index}`">
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

.menu-toggle-button {
  @apply hidden items-center;
  @apply absolute right-0 h-20 pl-5 pr-2.5;
  @apply rounded-l-full;
  @apply bg-red opacity-0 shadow-md;
  @apply hover:cursor-pointer;
  @apply transition-all;
}
.menu-toggle-button.display {
  @apply opacity-100;
}
.menu-toggle-button.open {
  @apply right-60;
}
.menu-toggle-button.open > * {
  @apply -scale-x-100;
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
