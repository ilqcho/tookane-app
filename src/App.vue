<template>
  <component :is="this.$route.meta.layout || 'div'">
    <RouterView />
  </component>
</template>

<script>
import { RouterView } from "vue-router";

export default {
  name: 'App',
}
</script>