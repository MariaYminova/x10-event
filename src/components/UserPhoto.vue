<template>
  <img class="user-photo" src="@/img/img-avatar.jpg" alt="" />
</template>

<script>
export default {
  name: "UserPhoto"
};
</script>

<style lang="scss">
.user-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
</style>
