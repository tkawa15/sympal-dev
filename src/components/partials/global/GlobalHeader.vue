<script setup lang="ts">
import { nextTick, onMounted, ref, toRefs } from 'vue';
import CommonLink from '@/components/partials/common/CommonLink.vue';
import imgSympalFullWhite from '@/assets/logos/sympal-full-white.png';
import imgSympalLogoWhite from '@/assets/logos/sympal-logo-white.png';
import iconMenuOpen from '@/assets/icons/menu-open.svg';
import iconClose from '@/assets/icons/close.svg';

type Props = {
  showFullHeader: boolean;
};
const props = withDefaults(defineProps<Props>(), { showFullHeader: false });

const { showFullHeader } = toRefs(props);
const isMounted = ref<boolean>(false);
const showSideMenu = ref<boolean>(false);
const bodyRef = ref<HTMLBodyElement | null>(null);

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
    text: 'Company',
    to: '#Company',
  },
  {
    text: 'Contact',
    to: 'https://sympal.co.jp/contact/',
  },
];

const toggleSideMenu = () => {
  if (!bodyRef.value) return;
  if (showSideMenu.value) {
    bodyRef.value.classList.remove('no-scroll');
    showSideMenu.value = false;
  } else {
    bodyRef.value.classList.add('no-scroll');
    showSideMenu.value = true;
  }
};

onMounted(() => {
  bodyRef.value = document.querySelector('body');
  nextTick(() => { isMounted.value = true; });
});
</script>

<template>
  <div class="relative transition-opacity duration-500 delay-500" :class="[isMounted ? 'opacity-100' : 'opacity-0']">
    <!-- ヘッダー -->
    <nav
      class="transition-padding absolute right-0 h-20 rounded-[80px] bg-red shadow-lg transition-header duration-300"
      :class="[showFullHeader ? 'w-full pl-8 pr-10' : 'w-20 p-0']"
    >
      <Transition name="fade">
        <div
          v-if="!showFullHeader"
          class="absolute flex h-full w-full items-center justify-center hover:cursor-pointer"
          @click="toggleSideMenu"
        >
          <img :src="imgSympalLogoWhite" class="h-12 w-12" />
          <img :src="iconMenuOpen" class="absolute left-7 top-7" />
        </div>
      </Transition>

      <Transition name="fade">
        <div v-if="showFullHeader" class="flex h-full items-center justify-between">
          <div class="mr-5 shrink-0">
            <CommonLink to="/" color="transparent">
              <img :src="imgSympalFullWhite" class="h-12 w-40" />
            </CommonLink>
          </div>
          <div class="flex gap-x-5">
            <template v-for="(menu, index) in HEADER_MENUS" :key="`header-menu-${index}`">
              <CommonLink :to="menu.to" color="white">{{ menu.text }}</CommonLink>
            </template>
          </div>
        </div>
      </Transition>
    </nav>

    <!-- サイドメニュー -->
    <Teleport v-if="isMounted" to="#side-menu-portal" class="relative">
      <!-- メイン -->
      <Transition name="slide">
        <nav
          v-if="showSideMenu"
          class="pointer-events-auto absolute inset-y-0 right-0 flex w-60 flex-col justify-between bg-red p-5 shadow-lg"
        >
          <div class="flex flex-col gap-y-5">
            <div class="flex justify-end">
              <img :src="iconClose" class="h-6 w-6 hover:cursor-pointer" @click="toggleSideMenu" />
            </div>
            <div class="flex justify-center">
              <CommonLink to="/" color="transparent">
                <img :src="imgSympalFullWhite" class="h-12" />
              </CommonLink>
            </div>
            <template v-for="(menu, index) in HEADER_MENUS" :key="`header-menu-${index}`">
              <CommonLink :to="menu.to" color="white">{{ menu.text }}</CommonLink>
            </template>
          </div>
          <p class="text-center text-white">&copy; Sympal Inc.</p>
        </nav>
      </Transition>
      <!-- 背景 -->
      <Transition name="fade">
        <div
          v-if="showSideMenu"
          class="pointer-events-auto absolute inset-0 z-background bg-black opacity-50"
          @click="toggleSideMenu"
        />
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  @apply transition-transform duration-300;
}
.slide-enter-from,
.slide-leave-to {
  @apply translate-x-60;
}

.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-300;
}
.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
</style>
