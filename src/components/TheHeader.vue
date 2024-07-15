<template>
  <header class="the-header">
    <img class="the-header__logo" src="@/icons/icon-logo.svg" alt="" />
  </header>
</template>

<script>
export default {
  name: "TheHeader",

  components: {},
};
</script>

<style lang="scss">
.the-header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0 20px 0;

  &__logo {
    width: 76px;
    height: 46px;
  }
}
</style>
