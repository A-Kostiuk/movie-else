<template>
  <svg v-if="iconId === 'search'" xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" fill="none">
    <path stroke="#151A26" stroke-linecap="round" stroke-width="1.5"
          d="M11.1 11.1 16 16m-3.26-9.13A5.87 5.87 0 1 1 1 6.87a5.87 5.87 0 0 1 11.74 0Z" />
  </svg>
  <p v-else>Useless Id</p>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';

type IdIcon = 'search'

export default defineComponent({
  name: 'shared-svg',
  props: {
    width: {
      required: true,
      type: Number,
    },
    height: {
      required: true,
      type: Number,
    },
    iconId: {
      required: true,
      type: String as PropType<IdIcon>,
    },
  },
});
</script>

<style lang="scss" scoped>
svg {
  display: block;
}
</style>
