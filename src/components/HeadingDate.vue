<template>
  <div class="heading-date color"><slot></slot></div>
</template>

<script>
export default {
  name: "HeadingDate",
};
</script>

<style lang="scss">
.heading-date {
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 400;
  padding: 0 0 10px 0;
}
</style>
