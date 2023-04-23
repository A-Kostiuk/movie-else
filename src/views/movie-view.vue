<template>
  <section v-if="movie">
    <movie-main-desc :title="movie.title" :original-title="movie.original_title" :overview="movie.overview"
                     :poster-path="movie.poster_path" style="margin-bottom: 20px" />
    <movie-additional-desc :movie="movie" />
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import movieApi from '@/api/movie-api';
import {ExtendedDescMovie} from '@/interfaces/movie-api';
import MovieMainDesc from '@/components/layouts/movie-main-desc/movie-main-desc.vue';
import MovieAdditionalDesc from '@/components/layouts/movie-additional-desc/movie-additional-desc.vue';

export default defineComponent({
  name: 'movie-view',
  components: {MovieAdditionalDesc, MovieMainDesc},
  data() {
    return {
      movie: null as ExtendedDescMovie | null,
    };
  },
  async mounted() {
    const movieId = this.$route.params.id as string;
    const movie = await movieApi.fetchMovie(movieId);
    console.log(movie);
    if (movie) {
      this.movie = movie;
    }
  },
});
</script>

<style lang="scss" scoped>

</style>
