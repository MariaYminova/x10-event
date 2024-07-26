<template>
  <div class="the-footer bg-color__black">
    <BtnMain />
    <BtnAccount />
  </div>
</template>

<script>
import BtnMain from "@/components/btn/BtnMain.vue";
import BtnAccount from "@/components/btn/BtnAccount.vue";

export default {
  name: "TheFooter",
  components: {
    BtnMain,
    BtnAccount,
  },
}
</script>

<style lang="scss">
.the-footer {
  width: 100%;
  height: 70px;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgb(255 255 255 / 37%);
  // box-shadow: inset 1px 2px 5px 0px rgba(255, 255, 255, 0.207);
}
</style>
