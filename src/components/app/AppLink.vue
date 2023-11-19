<script setup lang="ts">
import { RouterLink } from 'vue-router';

type Props = {
  to: string;
  color?: string;
  tag?: string;
  openNewTab?: boolean;
};

const { to, color, tag, openNewTab } = withDefaults(defineProps<Props>(), {
  tag: "",
  color: "red",
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
    class="relative hover:cursor-pointer"
  >
    <span class="link-text">
      <slot></slot>
    </span>
  </Component>
</template>

<style scoped>
.link-text::after {
  background: v-bind(color);
  @apply absolute left-0 bottom-0 w-full h-px;
  @apply content-[''];
  @apply scale-x-0 origin-top-right;
  @apply transition-transform duration-300;
  @apply hover:scale-x-100 hover:origin-top-left;
}
</style>
