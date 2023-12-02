<script setup lang="ts">
import { RouterView } from 'vue-router';
import GlobalHeader from '@/components/global/GlobalHeader.vue';
import GlobalFooter from '@/components/global/GlobalFooter.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header class="fixed w-full h-20 z-50">
      <GlobalHeader />
    </header>
    <main class="pt-20 grow">
      <RouterView />
    </main>
    <footer>
      <GlobalFooter />
    </footer>
  </div>
</template>
