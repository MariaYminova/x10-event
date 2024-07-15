<template>
  <div class="heading-gray color"><slot></slot></div>
</template>

<script>
export default {
  name: "HeadingGray",
};
</script>

<style lang="scss">
.heading-gray {
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 400;
  padding: 0 0 10px 0;
}
</style>
