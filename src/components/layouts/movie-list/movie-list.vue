<template>
  <ul>
    <movie-card v-for="movie of movies"
                :key="movie.id"
                :movie="movie"
    />
  </ul>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {movieCard} from '@/components/ui';
import {ShortDescMovie} from '@/interfaces/movie-api';

export default defineComponent({
  name: 'movie-list',
  components: {movieCard},
  props: {
    movies: {
      required: true,
      type: Array as PropType<ShortDescMovie[]>,
    },
  },
});
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (min-width: $tablet-width) {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }

  @media (min-width: $laptop-width) {
    grid-template-columns: repeat(4, 1fr);
    gap: 30px 15px;
  }

}
</style>
