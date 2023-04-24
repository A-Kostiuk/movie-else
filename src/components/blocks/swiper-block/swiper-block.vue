<template>
  <swiper
      :slides-per-view="1"
      :space-between="50"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper>
</template>

<script lang="ts">
// Import Swiper Vue.js components
import { defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper.min.css';

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
});
</script>

<style lang="scss" scoped>
.my-swiper {
  overflow: hidden;
  max-width: 100%;
}
</style>
