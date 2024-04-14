<script setup lang="ts">
import { RouterView } from 'vue-router';
import GlobalHeader from '@/components/partials/global/GlobalHeader.vue';
import GlobalFooter from '@/components/partials//global/GlobalFooter.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header class="fixed w-full z-50">
      <div class="section-wrapper py-5">
        <GlobalHeader />
      </div>
    </header>
    <main class="grow">
      <RouterView />
    </main>
    <footer class="">
      <GlobalFooter />
    </footer>
  </div>
</template>
