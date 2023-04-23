<template>
  <div class="main-desc">
    <nav-breadcrumbs :breadcrumbs-list="breadcrumbsList" />
    <h1 class="main-desc__title">{{ title }}</h1>
    <p class="main-desc__original-title">{{ originalTitle }}</p>
    <img class="main-desc__poster" :src="posterUrl" :alt="title" />
    <p class="main-desc__overview">{{ overview }}</p>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import NavBreadcrumbs from '@/components/ui/nav-breadcrumbs/nav-breadcrumbs.vue';
import getImageUrl from '@/utils/images';

export default defineComponent({
  name: 'movie-main-desc',
  components: {NavBreadcrumbs},
  data() {
    return {
      breadcrumbsList: [
        {title: 'Головна', path: '/'},
        {title: 'Фільми', path: '/movies'}],
    };
  },
  props: {
    title: {
      required: true,
      type: String,
    },
    originalTitle: {
      required: true,
      type: String,
    },
    overview: {
      required: true,
      type: String,
    },
    posterPath: {
      required: false,
      type: String,
    },
  },
  mounted() {
    this.breadcrumbsList.push({title: this.title, path: ''});
  },
  computed: {
    posterUrl() {
      if (this.posterPath) {
        return getImageUrl('poster', 'w780', this.posterPath);
      }
      return '';
    },
  },
});
</script>

<style lang="scss" scoped>
.main-desc {
  display: flex;
  flex-direction: column;

  @media (min-width: $tablet-width) {
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: repeat(3, min-content) 1fr;
    gap: 5px 20px;
  }

  @media (min-width: $laptop-width) {
    gap: 5px 30px;
  }

  @media (min-width: $desktop-width) {
    gap: 5px 60px;
  }
}

.main-desc__poster {
  width: 230px;
  height: 310px;
  align-self: center;
  margin-bottom: 20px;

  @media (min-width: $tablet-width) {
    order: -1;
    grid-row-start: span 4;
    margin: 0;
    width: 300px;
    height: 400px;
  }
}

.main-desc__title {
  font-weight: 900;
  font-size: 32px;
  line-height: 41px;
  margin: 0 0 5px;

  @media (min-width: $tablet-width) {
    margin: 0;
  }
}

.main-desc__original-title {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin: 0 0 20px;
}

.main-desc__overview {
  margin: 0;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.5;
}
</style>
