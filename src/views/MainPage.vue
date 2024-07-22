<template>
  <div class="main-page">
   
    <div class="main-page__info">
      <div style="display: flex; gap: 10px;">
      <BtnCreationEvent class="main-page__btn-creation-event" /> <BtnRating />
    </div>
      <Heading> Каталог мероприятий </Heading>

      <RouterLink to="/catalog-event">
        <EventCard class="main-page__event-card"
      /></RouterLink>

      <RouterLink to="/catalog-event">
        <EventCard class="main-page__event-card"
      /></RouterLink>

      <RouterLink to="/catalog-event">
        <EventCard class="main-page__event-card"
      /></RouterLink>
    </div>

    <div class="main-page__footer bg-color__black">
      <BtnMain /> <BtnAccount />
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import HeadingName from "@/components/HeadingName.vue";

import BtnAccount from "@/components/btn/BtnAccount.vue";
import BtnMain from "@/components/btn/BtnMain.vue";
import BtnCreationEvent from "@/components/btn/BtnCreationEvent.vue";
import BtnRating from "@/components/btn/BtnRating.vue";

import EventCard from "@/components/EventCard.vue";

export default {
  name: "MainPage",

  components: {
    Heading,
    HeadingName,
    BtnAccount,
    BtnMain,
    EventCard,
    BtnCreationEvent,
    BtnRating,
  },
};
</script>

<style lang="scss">
.main-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: hidden;
  justify-content: space-between;

  &__photo {
    margin-bottom: 10px;
    width: 100%;
  }

  &__name {
    margin-bottom: 20px;
  }

  &__info {
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px 20px 10px;
  }

  &__wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
  }

  &__form-wrap {
    display: flex;
    flex-direction: column;
    margin: 20px 10px;
    width: 100%;
    padding: 0 10px;
  }

  &__footer {
    height: 70px;
    width: 100%;
    padding: 20px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgb(255 255 255 / 37%);
    // box-shadow: inset 1px 2px 5px 0px rgba(255, 255, 255, 0.207);
  }

  &__event-card {
    margin-bottom: 10px;
    width: 100%;
  }

  &__btn-creation-event {
    margin-bottom: 20px;
  }
}
</style>
