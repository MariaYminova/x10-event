<template>
  <RouterLink to="/rating-page">
    <div class="btn-rating">Рейтинг</div></RouterLink
  >
</template>

<script>
export default {
  name: "BtnRating",
};
</script>

<style lang="scss">
.btn-rating {
  padding: 5px 25px;
  height: 30px;
  border: 1px solid #ff7f00;
  text-align: center;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;

}
</style>
