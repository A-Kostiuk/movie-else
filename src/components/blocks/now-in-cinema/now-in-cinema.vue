<template>
  <section>
    <h2 class="text-2xl font-bold mb-6">Зараз в кіно</h2>
    <swiper
        :modules="modules"
        :slides-per-view="5"
        :space-between="20"
        :mousewheel="true"
        :breakpoints="swiperOptions.breakpoints"
    >
      <swiper-slide v-for="movie in movies" :key="movie.id">
        <movie-card :movie="movie" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import movieApi from '@/api/movie-api';
import { ShortDescMovie } from '@/interfaces/movie-api';
import MovieCard from '@/components/ui/movie-card/movie-card.vue';

import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel } from 'swiper';

export default defineComponent({
  name: 'now-in-cinema',
  components: {MovieCard, Swiper, SwiperSlide},
  data() {
    return {
      movies: [] as ShortDescMovie[],
      page: 1,
      swiperOptions: {
        breakpoints: {
          425: {slidesPerView: 2},
          768: {slidesPerView: 3},
          1368: {slidesPerView: 4},
          1920: {slidesPerView: 5},
        },
      },
    };
  },
  async mounted() {
    const res = await movieApi.fetchInCinema(this.page);
    if (res) {
      this.movies = res.results;
      console.log(res);
    }
  },
  setup() {
    return {
      modules: [Mousewheel],
    };
  },
});
</script>

<style lang="scss" scoped>

</style>
