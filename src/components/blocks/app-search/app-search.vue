<template>
  <button class="p-2 laptop:p-3 bg-baseWhite rounded"
          @click="isOpen = !isOpen">
    <shared-svg class="w-4 h-4 laptop:w-5 laptop:h-5" :width="15" :height="15" :icon-id="'search'" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SharedSvg } from '@/components/ui';

export default defineComponent({
  name: 'app-search',
  components: {SharedSvg},

  data() {
    return {
      isOpen: false,
    };
  },
});
</script>
