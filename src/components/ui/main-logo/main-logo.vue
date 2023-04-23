<template>
  <div>
    <router-link to="/">
      <img src="@/assets/logo.svg" alt="Logo" width="24" height="24" />
      <p><span>Movie</span>Else</p>
    </router-link>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'main-logo',
});
</script>

<style lang="scss" scoped>
a {
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  font-size: 19px;
  line-height: 1.2;

  @media (min-width: $desktop-width) {
    font-size: 25px;
  }

  &:hover {
    transform: scale(1.1);
    transition: 300ms;
  }
}

img {
  width: 15px;
  height: 15px;

  @media (min-width: $desktop-width) {
    width: 25px;
    height: 25px;
  }
}

p {
  margin: 0;
  color: $base-white;
  font-weight: 800;

  span {
    color: $primary;
  }
}
</style>
