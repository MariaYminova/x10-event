<template>
  <RouterLink to="/"
    ><div class="btn-change-data color">Изменить данные</div></RouterLink
  >
</template>

<script>
export default {
  name: "BtnChangeData",
};
</script>

<style lang="scss">
.btn-change-data {
  padding: 7px 30px;
  height: 30px;
  text-align: center;
  border-radius: 5px;
  font-size: 14px;
  border: 1px solid #ff7f00;
}
</style>
