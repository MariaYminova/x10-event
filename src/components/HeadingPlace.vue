<template>
  <div class="heading-place color"><slot></slot></div>
</template>

<script>
export default {
  name: "HeadingPlace",
};
</script>

<style lang="scss">
.heading-place {
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 400;
  padding: 0 0 10px 0;
}
</style>
