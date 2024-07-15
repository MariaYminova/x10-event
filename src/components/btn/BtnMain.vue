<template>
  <RouterLink to="/main-page">
    <div class="btn-main color bg-color__blue">Главная</div></RouterLink
  >
</template>

<script>
export default {
  name: "BtnMain",
};
</script>

<style lang="scss">
.btn-main {
  padding: 7px 30px;
  height: 30px;
  text-align: center;
  border-radius: 5px;
  font-size: 14px;
}
</style>
