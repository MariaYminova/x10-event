<template>
  <div class="event-img">
    <img class="event-img__img" src="@/img/event-img.jpg" alt="#" />
  </div>
</template>

<script>
export default {
  name: "EventImg",

  components: {},
};
</script>

<style lang="scss">
.event-img {
  border-radius: 5px;
  width: 100%;
  height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &__img {
    height: auto;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
