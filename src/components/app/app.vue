<template>
  <div class="font-serif font-normal text-baseWhite bg-appBg flex flex-col min-h-screen text-base">
    <app-header />
    <main class="max-w-full grow custom-container">
      <router-view />
    </main>
    <app-footer />
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import AppHeader from '@/components/layouts/app-header/app-header.vue';
import AppFooter from '@/components/layouts/app-footer/app-footer.vue';

export default defineComponent({
  name: 'app',
  components: {AppFooter, AppHeader},
});
</script>

<style lang="scss">
@import "../../assets/styles/styles";
</style>
