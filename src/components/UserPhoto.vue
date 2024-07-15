<template>
  <div class="user-photo">
    <img class="user-photo__img" src="@/img/img-avatar.jpg" alt="User Photo" />
  </div>
</template>

<script>
export default {
  name: "UserPhoto",

  components: {},
};
</script>

<style lang="scss">
.user-photo {
  border-radius: 50%;
  width: 120px;
  height: 120px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  position: relative;

  &__img {
    width: 100%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
