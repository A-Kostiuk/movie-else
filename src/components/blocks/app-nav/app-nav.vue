<template>
  <nav class="navigation">
    <ul class="nav-list">
      <li class="nav-list__item" v-for="navItem of navItems"
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

<style lang="scss" scoped>
.navigation {
  display: flex;
  align-self: center;
}

.nav-list {
  display: flex;
  gap: 10px;
  align-self: center;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 13px;
  line-height: 1.3;
  font-weight: 700;

  @media (min-width: $desktop-width) {
    font-size: 17px;
    line-height: 1.3;
  }
}

.nav-list__item a {
  text-decoration: none;
  color: $base-white;
}
</style>
