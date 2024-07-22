<template>
  <div class="event-card">
    <div class="event-card__left-wrap">
      <div class="event-card__photo-block">
        <img class="event-card__img" src="@/img/event-img.jpg" alt="#" />
      </div>

      <div class="event-card__data">
        <div class="event-card__name">Сила Воли</div>

        <div class="event-card__place">
          <div class="event-card__city color__gray">Москва</div>
          <div class="event-card__date color__gray">01.08.2024</div>
        </div>
      </div>
    </div>

    <div class="event-card__access">
      <img src="@/icons/icon-onlock.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "EventCard",
};
</script>

<style lang="scss">
.event-card {
  display: flex;
  border: 1px solid #97959d;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  &__photo-block {
    border-radius: 5px;
    width: 100px;
    height: 85px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: -10px 10px -10px -10px;
  }

  &__img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__left-wrap{
    display: flex;
    justify-content: flex-start;
  }

  &__data {
    width: 180px;
  }

  &__name {
    font-size: 22px;
    margin-bottom: 10px;
  }

  &__place {
    display: flex;
    justify-content: space-between;
  }

  &__city {
    font-size: 14px;
  }

  &__date {
    font-size: 14px;
  }

  &__access {
    width: 16px;
    height: 20px;
    margin-left: 20px;
  }
}
</style>
