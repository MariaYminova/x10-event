<template>
  <div class="profile-info-block">
    <div class="profile-info-block__heading color">
      <slot></slot>
    </div>
    <p class="profile-info-block__text bg-color__black">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "ProfileInfoBlock",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.profile-info-block {
  margin-bottom: 30px;
  width: 100%;

  &__heading {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  &__text {
    width: 100%;
    border-radius: 10px;
    border: 1px solid #fff;
    font-weight: 400;
    font-size: 14px;
    padding: 10px;
    color: #fff;
  }
}
</style>
