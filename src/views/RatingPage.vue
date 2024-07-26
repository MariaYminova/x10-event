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
        <RouterLink to="/viewing-profile" v-for="user in users" :key="user.id">
          <RatingCardPlayer class="rating-page__card" :name="user.name" :stats="user.playerStats" />
        </RouterLink>
      </div>
      
      <div v-else class="rating-page__tab">
        <RouterLink to="/viewing-profile" v-for="user in users" :key="user.id">
          <RatingCardOrganizer class="rating-page__card" :name="user.name" :stats="user.organizerStats" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import UserPhoto from "@/components/UserPhoto.vue";
import HeadingName from "@/components/HeadingName.vue";
import RatingCardPlayer from "@/components/RatingCardPlayer.vue";
import RatingCardOrganizer from "@/components/RatingCardOrganizer.vue";

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
    RatingCardOrganizer,
  },

  data() {
    return {
      activeTab: "players",
      users: [
        {
          id: 1,
          name: "Иван Иванович",
          organizerStats: [
            { name: "Игр проведено", score: 230 },
            { name: "Мероприятий проведено", score: 10 },
          ],
          playerStats: [
            { name: "Заработано", score: 12400 },
            { name: "Предприятий", score: 33 },
            { name: "Побед", score: 12 },
            { name: "Игр сыграно", score: 204 },
            { name: "Посетил мероприятий", score: 10 },
          ],
        },
        {
          id: 1,
          name: "Петр Васильевич",
          organizerStats: [
            { name: "Игр проведено", score: 320 },
            { name: "Мероприятий проведено", score: 140 },
          ],
          playerStats: [
            { name: "Заработано", score: 100 },
            { name: "Предприятий", score: 43 },
            { name: "Побед", score: 12 },
            { name: "Игр сыграно", score: 205 },
            { name: "Посетил мероприятий", score: 10 },
          ],
        },
        {
          id: 1,
          name: "Валентин Андреевич",
          organizerStats: [
            { name: "Игр проведено", score: 240 },
            { name: "Мероприятий проведено", score: 10 },
          ],
          playerStats: [
            { name: "Заработано", score: 100 },
            { name: "Предприятий", score: 23 },
            { name: "Побед", score: 152 },
            { name: "Игр сыграно", score: 230 },
            { name: "Посетил мероприятий", score: 110 },
          ],
        },
        {
          id: 1,
          name: "Николай Петрович",
          organizerStats: [
            { name: "Игр проведено", score: 120 },
            { name: "Мероприятий проведено", score: 10 },
          ],
          playerStats: [
            { name: "Заработано", score: 1200 },
            { name: "Предприятий", score: 30 },
            { name: "Побед", score: 12 },
            { name: "Игр сыграно", score: 20 },
            { name: "Посетил мероприятий", score: 10 },
          ],
        },
        {
          id: 1,
          name: "Петр Николаевич",
          organizerStats: [
            { name: "Игр проведено", score: 200 },
            { name: "Мероприятий проведено", score: 10 },
          ],
          playerStats: [
            { name: "Заработано", score: 3000 },
            { name: "Предприятий", score: 3 },
            { name: "Побед", score: 12 },
            { name: "Игр сыграно", score: 20 },
            { name: "Посетил мероприятий", score: 10 },
          ],
        },
      
      ],
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
    margin-bottom: 15px;
    max-width: 390px;
  }
}
</style>
