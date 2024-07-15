<template>
  <p class="paragraph-text color"><slot></slot></p>
</template>

<script>
export default {
  name: "ParagraphText",
};
</script>

<style lang="scss">
.paragraph-text {
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 400;
  padding: 0px 10px 40px 10px;
  line-height: 18px;
}
</style>
