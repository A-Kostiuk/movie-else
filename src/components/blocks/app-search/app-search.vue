<template>
  <button class="search-btn" @click="isOpen = !isOpen">
    <shared-svg :width="15" :height="15" :icon-id="'search'" />
  </button>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {sharedSvg} from '@/components/ui';

export default defineComponent({
  name: 'app-search',
  components: {sharedSvg},

  data() {
    return {
      isOpen: false,
    };
  },
});
</script>

<style lang="scss" scoped>

.search-btn {
  width: 40px;
  height: 40px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  svg {
    width: 15px;
    height: 15px;
  }

  @media (min-width: $desktop-width) {
    width: 50px;
    height: 50px;
  }
}
</style>
