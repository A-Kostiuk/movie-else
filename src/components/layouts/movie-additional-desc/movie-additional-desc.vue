<template>
  <ul class="desc-list">
    <li>
      <p>Рейтинг / кількість голосів: </p>
    </li>
    <li>
      <p>Жанр: </p>
    </li>
    <li>
      <p>Дата релізу: {{ releaseDate }}</p>
    </li>
    <li>
      <p>Тривалість: {{ duration }}</p>
    </li>
    <li>
      <p>Бюджет: {{ getMoney(movie.budget) }}</p>
    </li>
    <li>
      <p>Дохід: {{ getMoney(movie.revenue) }}</p>
    </li>
    <li>
      <p>Виробничі компанії: </p>
    </li>
  </ul>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {ExtendedDescMovie} from '@/interfaces/movie-api';

export default defineComponent({
  name: 'movie-additional-desc',
  data() {
    return {};
  },
  props: {
    movie: {
      required: true,
      type: Object as PropType<ExtendedDescMovie>,
    },
  },
  methods: {
    getMoney(money: number) {
      return '$' + money.toString().split('').reverse().map((el, i) => (i) % 3 ? el : el + ' ').reverse().join('').trim();
    },
  },
  computed: {
    releaseDate() {
      return this.movie.release_date;
    },
    duration() {
      let time = this.movie.runtime;
      if (time) {
        let hours = 0;
        while (time > 60) {
          time -= 60;
          hours++;
        }
        return `${hours}год. ${time}хв.`;
      }
      return '';
    },
  },
});
</script>

<style lang="scss" scoped>
.desc-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;

  //@media (min-width: $tablet-width) {
  //  font-size: 13px;
  //  line-height: 16px;
  //}
  //@media (min-width: $laptop-width) {
  //  font-size: 16px;
  //  line-height: 20px;
  //}
  //@media (min-width: $desktop-width) {
  //  font-size: 18px;
  //  line-height: 22px;
  //}
}

p {
  margin: 0;
}
</style>
