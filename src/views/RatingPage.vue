<template>
  <div class="rating-page">
    <Heading> Рейтинг </Heading>
    <div class="rating-page__tabs">
      <button
        @click="activeTab = 'players'"
        :class="{ active: activeTab === 'players' }"
      >
        Игроки
      </button>
      <button
        @click="activeTab = 'organizers'"
        :class="{ active: activeTab === 'organizers' }"
      >
        Организаторы
      </button>
    </div>
    <div class="rating-page__wrap">
      <div v-if="activeTab === 'players'" class="rating-page__tab">
        <RatingCardPlayer class="rating-page__card" />
        <RatingCardPlayer class="rating-page__card" />
        <RatingCardPlayer class="rating-page__card" />
      </div>
      <div v-else class="rating-page__tab">
        <RatingCardPlayer class="rating-page__card" />
      </div>
    </div>

    <div class="rating-page__footer bg-color__black">
      <BtnMain /> <BtnAccount />
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import UserPhoto from "@/components/UserPhoto.vue";
import HeadingName from "@/components/HeadingName.vue";
import RatingCardPlayer from "@/components/RatingCardPlayer.vue";

import BtnMain from "@/components/btn/BtnMain.vue";
import BtnAccount from "@/components/btn/BtnAccount.vue";

export default {
  name: "RatingPage",
  components: {
    Heading,
    UserPhoto,
    HeadingName,
    BtnMain,
    BtnAccount,
    RatingCardPlayer,
  },
  data() {
    return {
      activeTab: "players",
    };
  },
};
</script>

<style lang="scss">
.rating-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: hidden;
  justify-content: space-between;

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
      border-radius: 10px;
      font-size: 14px;
      font-weight: 500;

      &.active {
        background: #1aaee0;
        border: none;
      }
    }
  }

  &__wrap {
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
  }

  &__tab {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__card {
    margin-bottom: 30px;
  }

  &__footer {
    width: 100%;
    height: 70px;
    padding: 20px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgb(255 255 255 / 37%);
  }
}
</style>
