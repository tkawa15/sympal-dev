<script setup lang="ts">
import { RouterLink } from 'vue-router';

type Props = {
  to: string;
  tag?: string;
  openNewTab?: boolean;
};

const { to, tag, openNewTab } = withDefaults(defineProps<Props>(), {
  tag: "",
  openNewTab: false,
});

const compoment: "a" | typeof RouterLink = tag || to.startsWith('http') ? "a" : RouterLink;
const isExternalLink: boolean = openNewTab && compoment === "a";
</script>

<template>
  <Component
    :is="compoment"
    :href="compoment === 'a' ? to : undefined"
    :to="to"
    :target="isExternalLink ? '_blank' : undefined"
    :rel="isExternalLink ? 'noreferrer' : undefined"
  >
    <slot />
  </Component>
</template>
