<template>
  <div class="container">
    <TheHeader />
    <RouterView />
    <div class="container__background-color">

    </div>
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
  position: relative;
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;

  &__background-color {
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: -1;

    &::before {
      content: '';
      position: absolute;
      z-index: 2;
      top: 0px;
      right: 0px;
      width: 0px;
      height: 70px;
      background: rgba(0, 191, 255, 1);
      -webkit-box-shadow: 0px 0px 220px 170px rgba(0, 191, 255, 1);
      -moz-box-shadow: 0px 0px 220px 170px rgba(0, 191, 255, 1);
      box-shadow: 0px 0px 220px 170px rgba(0, 191, 255, 1);
    }

    &::after {
      content: '';
      position: absolute;
      z-index: 1;
      top: 100px;
      right: 100px;
      width: 0px;
      height: 70px;
      background: rgba(255, 127, 0, 1);
      -webkit-box-shadow: 0px 0px 220px 200px rgba(255, 127, 0, 1);
      -moz-box-shadow: 0px 0px 220px 200px rgba(255, 127, 0, 1);
      box-shadow: 0px 0px 220px 200px rgba(255, 127, 0, 1);
    }
  }
}
</style>
