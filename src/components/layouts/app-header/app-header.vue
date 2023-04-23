<template>
  <header>
    <main-logo />
    <app-nav />
    <app-search />
  </header>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {mainLogo} from '@/components/ui';
import AppNav from '@/components/blocks/app-nav/app-nav.vue';
import AppSearch from '@/components/blocks/app-search/app-search.vue';

export default defineComponent({
  name: 'app-header',
  components: {AppSearch, AppNav, mainLogo},
});
</script>

<style lang="scss" scoped>
header {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}
</style>
