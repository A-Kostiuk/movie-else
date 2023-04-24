<template>
  <div class="relative">
    <router-link :to="`/movie/${movie.id}`">
      <div class="absolute top-4 right-4 font-bold text-xl rounded px-4 py-1"
           :class="{'bg-goodRating': movie.vote_average >= 7,
          'bg-averageRating': movie.vote_average < 7,
          'bg-badRating': movie.vote_average < 5}">
        {{ movie.vote_average }}
      </div>
      <img class="mb-2 h-full w-full object-cover rounded-xl h-[300px] laptop:h-[385px] desktop:h-[485px]" :src="imageUrl"
           :alt="movie.title" width="200" height="300">
      <h3 class="text-xl font-semibold text-center">{{ movie.title }}</h3>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ShortDescMovie } from '@/interfaces/movie-api';
import getImageUrl from '@/utils/images';

export default defineComponent({
  name: 'movie-card',
  props: {
    movie: {
      required: true,
      type: Object as PropType<ShortDescMovie>,
    },
  },
  computed: {
    imageUrl() {
      return getImageUrl('poster', 'w500', this.movie.poster_path);
    },
  },
});
</script>
