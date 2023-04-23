<template>
  <section>
    <h2>Зараз в кіно</h2>
    <movie-list :movies="movies" />
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import movieList from '@/components/layouts/movie-list/movie-list.vue';
import movieApi from '@/api/movie-api';
import {ShortDescMovie} from '@/interfaces/movie-api';

export default defineComponent({
  name: 'now-in-cinema',
  components: {movieList},
  data() {
    return {
      movies: [] as ShortDescMovie[],
      page: 1,
    };
  },
  async mounted() {
    const res = await movieApi.fetchInCinema(this.page);
    if (res) {
      this.movies = res.results;
      console.log(res);
    }
  },
});
</script>

<style lang="scss" scoped>

</style>
