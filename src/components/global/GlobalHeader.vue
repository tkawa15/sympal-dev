<script setup lang="ts">
import AppLink from "@/components/app/AppLink.vue";
</script>

<template>
  <nav class="wrapper shadow-none">
    <div>
      <AppLink to="/">
        <img src="@/assets/images/sympal_rogotype_RGB.png" class="h-12" />
      </AppLink>
    </div>
    <div class="flex gap-x-5">
      <AppLink to="/about">About</AppLink>
      <AppLink to="/service">Service</AppLink>
      <AppLink to="/news">News</AppLink>
      <AppLink to="https://sympal.co.jp/contact/">Contact</AppLink>
    </div>
  </nav>
</template>

<style scoped>
.wrapper {
  @apply h-full px-5;
  @apply flex justify-between items-center;
  @apply bg-white text-red shadow-md;
}
</style>
