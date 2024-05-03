<script setup lang="ts">
import { onMounted, ref, toRefs } from 'vue';
import CommonLink from '@/components/partials/common/CommonLink.vue';
import imgSympalFullWhite from '@/assets/logos/sympal-full-white.png';
import imgSympalLogoWhite from '@/assets/logos/sympal-logo-white.png';
import iconMenuOpen from '@/assets/icons/menu-open.svg';

type Props = {
  showFullHeader: boolean;
};
const props = withDefaults(defineProps<Props>(), { showFullHeader: false });

const { showFullHeader } = toRefs(props);
const isMounted = ref<boolean>(false);

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
  const body = document.querySelector('body');
  const menuToggleButton = document.querySelector('#menu-toggle-button');
  const sideMenu = document.querySelector('#side-menu');
  if (!body || !menuToggleButton || !sideMenu) return;
  body.classList.toggle('no-scroll');
  menuToggleButton.classList.toggle('open');
  sideMenu.classList.toggle('open');
};

onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
  <div class="relative">
    <!-- ヘッダー（PC） -->
    <nav class="header" :class="[showFullHeader ? 'w-full pl-8 pr-10' : 'w-20 p-0']">
      <div
        class="absolute flex w-full justify-center hover:cursor-pointer"
        :class="[showFullHeader ? 'transition-invisibility' : 'transition-visibility']"
      >
        <img :src="imgSympalLogoWhite" class="h-12 w-12" />
        <img :src="iconMenuOpen" class="absolute left-7 top-3" />
      </div>
      <div
        class="mr-5 shrink-0"
        :class="[showFullHeader ? 'transition-visibility' : 'transition-invisibility']"
      >
        <CommonLink to="/" color="transparent">
          <img :src="imgSympalFullWhite" class="h-12 w-40" />
        </CommonLink>
      </div>
      <div
        class="flex gap-x-5"
        :class="[showFullHeader ? 'transition-visibility' : 'transition-invisibility']"
      >
        <template v-for="(menu, index) in HEADER_MENUS" :key="`header-menu-${index}`">
          <CommonLink :to="menu.to" color="white">{{ menu.text }}</CommonLink>
        </template>
      </div>
    </nav>
    <!-- ヘッダー（SP） -->

    <!-- サイドメニュー -->
    <Teleport v-if="isMounted" to="#side-menu-portal">
      <nav id="side-menu" class="side-menu">
        <div
          class="bg-wrapper hodden inset-0 -z-10 bg-black opacity-0"
          :onClick="toggleSideMenu"
        ></div>
        <div>
          <CommonLink to="/" color="transparent">
            <img :src="imgSympalFullWhite" class="h-12" />
          </CommonLink>
        </div>
        <template v-for="(menu, index) in HEADER_MENUS" :key="`header-menu-${index}`">
          <CommonLink :to="menu.to" color="white">{{ menu.text }}</CommonLink>
        </template>
      </nav>
    </Teleport>
  </div>
</template>

<style scoped>
.header {
  @apply absolute right-0 h-20;
  @apply flex items-center justify-between;
  @apply rounded-[80px] bg-red shadow-lg;
  @apply transition-all duration-300;
}

.transition-visibility {
  animation: visible 0.3s forwards;
}
.transition-invisibility {
  animation: invisible 0.3s forwards;
}
@keyframes visible {
  0% {
    @apply block opacity-0;
  }
  100% {
    @apply opacity-100;
  }
}
@keyframes invisible {
  0% {
    @apply opacity-100;
  }
  100% {
    @apply hidden opacity-0;
  }
}

.side-menu {
  @apply absolute -right-60 h-screen w-60 p-5;
  @apply bg-red;
  @apply flex flex-col gap-y-5 shadow-lg;
  @apply transition-all;
}
.side-menu.open {
  @apply right-0;
}
.side-menu.open > .bg-wrapper {
  @apply fixed opacity-50;
}
</style>
