<template>
  <header class="flex gap-10 justify-between items-center py-4 custom-container min-h-header">
    <main-logo />
    <app-nav />
    <app-search />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MainLogo } from '@/components/ui';
import AppNav from '@/components/blocks/app-nav/app-nav.vue';
import AppSearch from '@/components/blocks/app-search/app-search.vue';

export default defineComponent({
  name: 'app-header',
  components: {MainLogo, AppNav, AppSearch},
});
</script>
