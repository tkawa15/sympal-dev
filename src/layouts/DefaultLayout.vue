<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import GlobalHeader from '@/components/partials/global/GlobalHeader.vue';
import GlobalFooter from '@/components/partials//global/GlobalFooter.vue';

const showFullHeader = ref<boolean>(false);

const setShowFullHeader = (event: boolean) => {
  showFullHeader.value = event;
};
</script>

<template>
  <div class="rerative flex min-h-screen flex-col">
    <header class="fixed z-50 w-full">
      <div class="section-wrapper py-5">
        <GlobalHeader :showFullHeader="showFullHeader" />
      </div>
    </header>
    <main class="grow">
      <RouterView @intersect="setShowFullHeader" />
    </main>
    <footer class="">
      <GlobalFooter />
    </footer>
    <div id="side-menu-portal" class="fixed inset-0" />
  </div>
</template>
