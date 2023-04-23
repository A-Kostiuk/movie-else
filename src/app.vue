<template>
  <div class="app">
    <div class="app__container">
      <app-header />
      <main>
        <router-view />
      </main>
      <app-footer />
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import AppHeader from "@/components/layouts/app-header/app-header.vue";
import AppFooter from "@/components/layouts/app-footer/app-footer.vue";

export default defineComponent({
  name: 'app',
  components: {AppFooter, AppHeader}
})
</script>

<style lang="scss">
@import "assets/styles/styles";

.app {
  background-color: $app-bg;
  padding: $mobile-indent;

  @media (min-width: $tablet-width) {
    padding: $tablet-indent;
  }

  @media (min-width: $laptop-width) {
    padding: $laptop-indent;
  }

  @media (min-width: $desktop-width) {
    padding: $desktop-indent;
  }
}

.app__container {
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  min-height: 100vh;
  margin: 0 auto;
}
</style>
