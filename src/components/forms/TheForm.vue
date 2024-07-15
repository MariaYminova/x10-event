<template>
  <div class="the-form">
    <div class="the-form__heading color"><slot></slot></div>

    <textarea
      class="the-form__input bg-color__black"
      name="bio"
      rows="5"
      maxlength="200"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "TheForm",
};
</script>

<style lang="scss">
.the-form {
  margin-bottom: 20px;
  width: 100%;

  &__heading {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  &__input {
    width: 100%;
    border-radius: 10px;
    border: 1px solid #fff;
    overflow-x: scroll;
    resize: none;
    padding: 10px;
    color: #fff;
  }
}
</style>
