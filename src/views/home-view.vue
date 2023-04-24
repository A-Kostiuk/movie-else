<template>
  <now-in-cinema class="mt-5" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NowInCinema from '@/components/blocks/now-in-cinema/now-in-cinema.vue';

export default defineComponent({
  name: 'home-view',
  components: {NowInCinema},
});
</script>

<style lang="scss">

</style>
