<template>
  <li class="movie-card">
    <router-link class="movie-card__link" :to="`/movie/${movie.id}`">
      <div class="movie-card__rating"
           :class="{'movie-card__rating--good': movie.vote_average >= 7,
          'movie-card__rating--average': movie.vote_average < 7,
          'movie-card__rating--bad': movie.vote_average < 5}">
        {{ movie.vote_average }}
      </div>
      <img class="movie-card__poster" :src="imageUrl" :alt="movie.title" width="200" height="300">
      <h3 class="movie-card__title">{{ movie.title }}</h3>
    </router-link>
  </li>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {ShortDescMovie} from '@/interfaces/movie-api';
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

<style lang="scss" scoped>
.movie-card {
  position: relative;
}

.movie-card__link {
  color: inherit;
  text-decoration: none;
}

.movie-card__poster {
  height: 300px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;

  @media (min-width: $tablet-width) {
    height: 300px;
  }

  @media (min-width: $laptop-width) {
    height: 385px;
  }

  @media (min-width: $desktop-width) {
    height: 485px;
  }
}

.movie-card__title {
  margin: 5px 0 0;

}

.movie-card__rating {
  position: absolute;
  top: 15px;
  right: 15px;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  padding: 5px 10px;
  border-radius: 5px;
}

.movie-card__rating--good {
  background-color: $good-rating;
}

.movie-card__rating--average {
  background-color: $average-rating;
}

.movie-card__rating--bad {
  background-color: $bad-rating;
}
</style>
