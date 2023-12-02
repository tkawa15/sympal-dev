<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { throttle } from 'lodash-es';
import AppLink from "@/components/app/AppLink.vue";

const isTransforming = ref<boolean>(false);

onMounted(() => {
  const header = document.querySelector("#header") as HTMLElement;
  const menuToggleButton = document.querySelector("#menu-toggle-button") as HTMLElement;
  if (!header || !menuToggleButton) return;
  const windowHeight = window.innerHeight;
  const headerInitialWidth = header.clientWidth;
  const headerInitialHeight = header.clientHeight;
  const menuToggleButtonWidth = 72;

  window.addEventListener("scroll", throttle(() => {
    const scrollY = window.scrollY;
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
        header.style.left = `${headerInitialWidth}px`;
      }
    }
  }, 10))
})
</script>

<template>
  <div>
    <nav id="header" class="header">
      <div class="shrink-0 mr-5">
        <AppLink to="/">
          <img src="@/assets/images/sympal_rogotype_RGB.png" class="w-40 h-12" />
        </AppLink>
      </div>
      <div class="flex gap-x-5">
        <AppLink to="/about">About</AppLink>
        <AppLink to="/service">Service</AppLink>
        <AppLink to="/news">News</AppLink>
        <AppLink to="https://sympal.co.jp/contact/">Contact</AppLink>
      </div>
    </nav>

    <div id="menu-toggle-button" class="menu-toggle-button">
      <img src="@/assets/images/sympal_symbol_RGB.png" class="h-12" />
    </div>
    <MenuOpenIcon />
  </div>
</template>

<style scoped>
.header {
  @apply absolute inset-x-0 h-full pl-4 pr-5;
  @apply hidden md:flex justify-between items-center;
  @apply bg-white text-red shadow-md;
}

.menu-toggle-button {
  @apply hidden items-center;
  @apply absolute right-0 h-20 pl-5 pr-2.5;
  @apply rounded-l-full;
  @apply bg-white text-red shadow-md;
}
</style>
