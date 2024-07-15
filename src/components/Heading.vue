<template>
  <div class="heading color__orange"><slot></slot></div>
</template>

<script>
export default {
  name: "Heading",
};
</script>

<style lang="scss">
.heading {
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  padding: 0 0 20px 0;
}
</style>
