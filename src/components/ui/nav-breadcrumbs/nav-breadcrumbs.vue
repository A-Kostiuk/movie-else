<template>
  <ul class="breadcrumbs">
    <li class="breadcrumbs__item" v-for="(breadcrumbItem, index) of breadcrumbsList" :key="breadcrumbItem.path">
      <router-link class="breadcrumbs__link"
                   :class="{'breadcrumbs__link--current': index === breadcrumbsList.length-1}"
                   :to="breadcrumbItem.path">
        {{ breadcrumbItem.title }}
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';

interface Breadcrumb {
  path: string;
  title: string;
}

export default defineComponent({
  name: 'nav-breadcrumbs',
  props: {
    breadcrumbsList: {
      required: true,
      type: Object as PropType<Breadcrumb[]>,
    },
  },
});
</script>

<style lang="scss" scoped>
.breadcrumbs {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  &__link {
    color: $secondary;
    text-decoration: none;
  }
}

.breadcrumbs__item {
  display: flex;
  gap: 10px;
  align-items: center;

  &:not(:last-child):after {
    display: block;
    content: '';
    width: 6px;
    height: 9px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='9' fill='none'%3E%3Cpath stroke='%234F5B7C' stroke-linecap='round' stroke-linejoin='round' d='m1 1 4 3.38L1.06 8'/%3E%3C/svg%3E");
  }

  &:last-child .breadcrumbs__link {
    color: inherit;
    cursor: auto;
  }
}
</style>
