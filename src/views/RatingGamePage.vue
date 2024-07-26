<template>
  <div class="rating-game-page">
    <Heading> Рейтинг Игры </Heading>
    <div class="rating-game-page__tabs">
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
    <div class="rating-game-page__wrap">
      <div v-if="activeTab === 'players'" class="rating-game-page__tab">
        <RouterLink to="/viewing-profile" v-for="user in users" :key="user.id">
          <RatingCardPlayer
            class="rating-game-page__card"
            :name="user.name"
            :stats="user.playerStats"
            :isWinner="user.isWinner"
          />
        </RouterLink>
      </div>

      <div v-else class="rating-game-page__tab">
        <RouterLink to="/viewing-profile" v-for="user in users" :key="user.id">
          <RatingCardOrganizer
            class="rating-game-page__card"
            :name="user.name"
            :stats="user.organizerStats"
          />
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
  name: "RatingGamePage",
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
            { name: "Заинтересовал на", score: 230 },
            { name: "Организовал на", score: 10 },
          ],
          playerStats: [
            { name: "Заработал", score: 12 },
            { name: "Предприятий", score: 33 },
          ],
          isWinner: true,
        },
        {
          id: 1,
          name: "Петр Васильевич",
          organizerStats: [
            { name: "Заинтересовал на", score: 230 },
            { name: "Организовал на", score: 10 },
          ],
          playerStats: [
            { name: "Заработал", score: 12 },
            { name: "Предприятий", score: 33 },
          ],
          isWinner: false,
        },
        {
          id: 1,
          name: "Валентин Андреевич",
          organizerStats: [
            { name: "Заинтересовал на", score: 230 },
            { name: "Организовал на", score: 10 },
          ],
          playerStats: [
            { name: "Заработал", score: 12 },
            { name: "Предприятий", score: 33 },
          ],
          isWinner: false,
        },
        {
          id: 1,
          name: "Николай Петрович",
          organizerStats: [
            { name: "заинтересовал на", score: 230 },
            { name: "Организовал на", score: 10 },
          ],
          playerStats: [
            { name: "Заработал", score: 12 },
            { name: "Предприятий", score: 33 },
          ],
          isWinner: false,
        },
        {
          id: 1,
          name: "Петр Николаевич",
          organizerStats: [
            { name: "заинтересовал на", score: 230 },
            { name: "Организовал на", score: 10 },
          ],
          playerStats: [
            { name: "Заработал", score: 12 },
            { name: "Предприятий", score: 33 },
          ],
          isWinner: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.rating-game-page {
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
    width: 335px;
  }
}
</style>
