<template>
  <nav class="flex self-center">
    <ul class="clear-list flex gap-1.5 self-center">
      <li class="text-sm tablet:text-base font-bold" v-for="navItem of navItems"
          :key="navItem.path"
      >
        <router-link :to="navItem.path">{{ navItem.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
interface NavItem {
  title: string,
  path: string
}

export default {
  name: 'app-nav',
  data() {
    return {
      navItems: [
        {title: 'Фільми', path: '/movies'},
        {title: 'Серіали', path: '/tv'},
        {title: 'Актори', path: '/actors'},
      ] as NavItem[],
    };
  },
};
</script>
