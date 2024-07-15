<template>
  <div class="heading-name color"><slot></slot></div>
</template>

<script>
export default {
  name: "HeadingName",
};
</script>

<style lang="scss">
.heading-name {
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
}
</style>
