<script setup lang="ts">
import { RouterView } from 'vue-router';
import GlobalHeader from '@/components/global/GlobalHeader.vue';
import GlobalFooter from '@/components/global/GlobalFooter.vue';
</script>

<template>
  <div>
    <header>
      <GlobalHeader />
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
      <GlobalFooter />
    </footer>
  </div>
</template>
