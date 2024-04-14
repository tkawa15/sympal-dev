<script setup lang="ts">
import { RouterView } from 'vue-router';
import GlobalHeader from '@/components/partials/global/GlobalHeader.vue';
import GlobalFooter from '@/components/partials//global/GlobalFooter.vue';
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <header class="fixed z-50 w-full">
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
