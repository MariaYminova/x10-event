<template>
  <div class="container">
    <TheHeader />
    <RouterView />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
.container {
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
