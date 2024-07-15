<template>
  <div class="statistical-block color"><slot></slot></div>
</template>

<script>
export default {
  name: "StatisticalBlock",
};
</script>

<style lang="scss">
.statistical-block {
  border: 1px solid #ffffff;
  font-size: 14px;
  font-weight: 400;
  padding: 10px 10px;
  border-radius: 10px;
  margin-bottom: 10px;
}
</style>
