<template>
  <div class="event-card">
    <div class="event-card__photo-block">
      <img class="event-card__img" src="@/img/event-img.jpg" alt="#" />
    </div>

    <div class="event-card__data-wrap">
      <div class="event-card__top">
        <div class="event-card__name">Рыбаков. Игра на миллиард</div>
        <img class="event-card__access" src="@/icons/icon-lock.svg" alt="" />
      </div>

      <div class="event-card__place">
        <div class="event-card__city color__gray">Москва</div>
        <div class="event-card__date color__gray">01.08.2024</div>
      </div>
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
  border: 1px solid #ffffff30;
  background-color: rgba(22, 22, 29, 0.2);
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  height: 85px;
  align-items: center;

  &__photo-block {
    width: 72px;
    height: 85px;
    margin: -11px 17px -11px -11px;
  }

  &__img {
    width: 72px;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  &__data-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  &__top {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 10px;
    height: 36px;
  }

  &__data {
    width: 180px;
  }

  &__name {
    font-size: 18px;
    font-weight: 700;
    font-family: "Rothek", Arial;
    line-height: 19.8px;
  }

  &__place {
    display: flex;
    justify-content: space-between;
  }

  &__city {
    font-size: 12px;
  }

  &__date {
    font-size: 12px;
  }

  &__access {
    width: 16px;
    height: 20px;
    margin-left: 20px;
  }
}
</style>
