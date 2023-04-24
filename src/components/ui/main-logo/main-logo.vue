<template>
  <div>
    <router-link to="/"
                 class="flex gap-1.5 items-center text-xl laptop:text-2xl hover:scale-125 hover:ease-out hover:duration-300">
      <img class="w-4 h-4 laptop:w-6 laptop:h-6" src="@/assets/logo.svg" alt="Logo" width="24" height="24" />
      <p class="font-black">
        <span class="text-primary">Movie</span>Else
      </p>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'main-logo',
});
</script>
