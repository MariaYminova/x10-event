<template>
  <RouterLink to="/main-page">
    <div class="btn-rating bg-color__orange">Рейтинг</div></RouterLink
  >
</template>

<script>
export default {
  name: "BtnCreationEvent",
};
</script>

<style lang="scss">
.btn-rating {
  padding: 5px 30px;
  height: 30px;

  text-align: center;
  border-radius: 5px;
  font-size: 14px;
}
</style>
