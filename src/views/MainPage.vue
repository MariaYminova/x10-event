<template>
  <div class="main-page">
    <div class="main-page__info">
      <div style="display: flex; gap: 10px">
        <BtnCreationEvent class="main-page__btn-creation-event" />
        <BtnRating />
      </div>

      <Heading>Каталог событий</Heading>

      <div class="main-page__tabs">
        <button
          @click="activeTab = 'events'"
          :class="{ active: activeTab === 'events' }"
        >
          Мероприятия
        </button>
        <button
          @click="activeTab = 'games'"
          :class="{ active: activeTab === 'games' }"
        >
          Игры
        </button>
      </div>

      <swiper class="main-page__swiper-wrap" :slides-per-view="1" navigation>
        <swiper-slide v-if="activeTab === 'events'">
          <div>
            <RouterLink to="/catalog-event">
              <EventCard class="main-page__event-card" />
            </RouterLink>
            <RouterLink to="/catalog-event">
              <EventCard class="main-page__event-card" />
            </RouterLink>
          </div>
        </swiper-slide>
        <swiper-slide v-if="activeTab === 'games'">
          <div>
            <RouterLink to="/catalog-event">
              <EventCard class="main-page__event-card" />
            </RouterLink>
            <RouterLink to="/catalog-event">
              <EventCard class="main-page__event-card" />
            </RouterLink>

            <RouterLink to="/catalog-event">
              <EventCard class="main-page__event-card" />
            </RouterLink>
            <RouterLink to="/catalog-event">
              <EventCard class="main-page__event-card" />
            </RouterLink>
            <RouterLink to="/catalog-event">
              <EventCard class="main-page__event-card" />
            </RouterLink>
            <RouterLink to="/catalog-event">
              <EventCard class="main-page__event-card" />
            </RouterLink>
            <RouterLink to="/catalog-event">
              <EventCard class="main-page__event-card" />
            </RouterLink>
            <RouterLink to="/catalog-event">
              <EventCard class="main-page__event-card" />
            </RouterLink>
            <RouterLink to="/catalog-event">
              <EventCard class="main-page__event-card" />
            </RouterLink>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// import "swiper/css";
import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";

import EventCard from "@/components/EventCard.vue";
import Heading from "@/components/Heading.vue";

import BtnCreationEvent from "@/components/btn/BtnCreationEvent.vue";
import BtnRating from "@/components/btn/BtnRating.vue";
import BtnMain from "@/components/btn/BtnMain.vue";
import BtnAccount from "@/components/btn/BtnAccount.vue";

export default {
  name: "MainPage",
  components: {
    Swiper,
    SwiperSlide,
    Heading,
    BtnMain,
    BtnAccount,
    EventCard,
    BtnCreationEvent,
    BtnRating,
  },
  data() {
    return {
      activeTab: "events",
    };
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

  &__swiper-wrap {
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
    height: 100vh;
    padding: 20px 10px;
  }

  &__tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;

    button {
      padding: 5px 20px;
      margin: 0 5px;
      color: #fff;
      border: 1px solid #686868;
      cursor: pointer;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 500;

      &.active {
        background: #1aaee0;
        border: none;
      }
    }
  }

  &__event-card,
  &__game-card {
    margin-bottom: 10px;
  }

  &__btn-creation-event {
    margin-bottom: 20px;
  }

  &__info {
    overflow: hidden;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px 20px 10px;
  }
}
</style>
