<template>
  <RouterLink to="/creation-event-page">
    <div class="btn-creation-event color">Создать мероприятие</div></RouterLink
  >
</template>

<script>
export default {
  name: "BtnCreationEvent",
};
</script>

<style lang="scss">
.btn-creation-event {
  padding: 5px 30px;
  height: 30px;
  border: 1px solid #00bfff;
  text-align: center;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
}
</style>
