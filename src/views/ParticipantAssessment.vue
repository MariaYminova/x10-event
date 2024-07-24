<template>
  <div class="personal-results-event">
    <div class="personal-results-event__content">

      <label>
        <input type="checkbox" v-model="isOrganizer" /> Организатор
      </label>

      <div class="personal-results-event__top">
        <h1 class="personal-results-event__title color__orange">
          {{ isOrganizer ? 'Организатор' : 'Участник' }}
        </h1>
        <RouterLink v-if="isOrganizer" to="/creation-event-page" class="personal-results-event__btn">
          Изменить карточку игры
        </RouterLink>
      </div>
      <div v-if="isOrganizerOrPlayer" class="personal-results-event__participants">
        <RouterLink :to="link" v-for="user in filteredUsers" :key="user.id">
          <RatingCardPlayer class="personal-results-event__card" :name="user.name" />
        </RouterLink>
      </div>
      <button type="button" class="personal-results-event__btn personal-results-event__btn--finish">Завершить игру</button>

      <div class="personal-results-event__top">
        <h1
          v-if="status === 'organizer'"
          class="personal-results-event__title color__orange"
        >
          Организатор
        </h1>
        <h1
          v-if="status === 'player'"
          class="personal-results-event__title color__orange"
        >
          Участник
        </h1>
        <RouterLink
          v-if="status === 'organizer'"
          to="/creation-event-page"
          class="personal-results-event__btn"
        >
          Изменить карточку игры
        </RouterLink>
      </div>

      <div
        v-if="status === 'organizer'"
        class="personal-results-event__players"
      >
        <RouterLink
          to="/results-player-page"
          v-for="user in users.players"
          :key="user.id"
        >
          <RatingCardPlayer class="rating-page__card" :name="user.name" />
        </RouterLink>
      </div>
      <div v-if="status === 'player'" class="personal-results-event__players">
        <RouterLink
          to="/results-organizer-page"
          v-for="user in users.organizers"
          :key="user.id"
        >
          <RatingCardPlayer class="rating-page__card" :name="user.name" />
        </RouterLink>
      </div>

      <RouterLink to="/rating-game-page">
        <button type="button" class="personal-results-event__btn">
          Завершить игру
        </button></RouterLink
      >

    </div>

    <div class="personal-results-event__footer bg-color__black">
      <BtnMain />
      <BtnAccount />
    </div>
  </div>
</template>

<script>

import { ref, computed } from 'vue';
import BtnMain from "@/components/btn/BtnMain.vue";
import BtnAccount from "@/components/btn/BtnAccount.vue";
import RatingCardPlayer from "@/components/RatingCardPlayer.vue";

export default {
  name: "ParticipantAssessment",
  components: {
    RatingCardPlayer,
    BtnMain,
    BtnAccount,
  },

  data() {
    return {
      users: {
        organizers: [
          {
            id: 1,
            name: "Олег Олегович",
            organizerStats: [
              { games: "Игр проведено", score: 230 },
              { events: "Мероприятий проведено", score: 10 },
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
            id: 2,
            name: "Иван Иванович",
            organizerStats: [
              { games: "Игр проведено", score: 230 },
              { events: "Мероприятий проведено", score: 10 },
            ],
            playerStats: [
              { name: "Заработано", score: 12400 },
              { name: "Предприятий", score: 33 },
              { name: "Побед", score: 12 },
              { name: "Игр сыграно", score: 204 },
              { name: "Посетил мероприятий", score: 10 },
            ],
          },
        ],
        players: [
          {
            id: 1,
            name: "Петр Петрович",
            organizerStats: [
              { games: "Игр проведено", score: 230 },
              { events: "Мероприятий проведено", score: 10 },
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
            id: 2,
            name: "Антон Антонович",
            organizerStats: [
              { games: "Игр проведено", score: 230 },
              { events: "Мероприятий проведено", score: 10 },
            ],
            playerStats: [
              { name: "Заработано", score: 12400 },
              { name: "Предприятий", score: 33 },
              { name: "Побед", score: 12 },
              { name: "Игр сыграно", score: 204 },
              { name: "Посетил мероприятий", score: 10 },
            ],
          },
        ],
      },
    };
  },

  setup() {
    const isOrganizer = ref(true);
    const users = ref({
      organizers: [
        { id: 1, name: "Олег Олегович" },
        { id: 2, name: "Иван Иванович" }
      ],
      players: [
        { id: 1, name: "Петр Петрович" },
        { id: 2, name: "Антон Антонович" }
      ]
    });

    const status = computed(() => (isOrganizer.value ? 'organizer' : 'player'));

    const isOrganizerOrPlayer = computed(() => status.value === 'organizer' || status.value === 'player');

    const filteredUsers = computed(() => {
      return isOrganizer.value ? users.value.players : users.value.organizers;
    });

    const link = computed(() => {
      return isOrganizer.value ? '/results-player-page' : '/results-organizer-page';
    });

    return {

      isOrganizer,
      users,
      status,
      isOrganizerOrPlayer,
      filteredUsers,
      link
      status,
    };
  },
};
</script>

<style lang="scss">
.personal-results-event {
  display: flex;
  flex-direction: column;
  height: calc(100% - 76px);

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 0 20px 20px;
    flex: 1;
    overflow: auto;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 30px;
  }

  &__title {
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
  }

  &__btn {
    width: fit-content;
    padding: 5px 30px;
    text-align: center;
    border-radius: 5px;
    font-weight: 500;
    font-size: 14px;
    border: 1px solid #ff7f00;
    color: #ffffff;

    &--finish {
      padding: 20px;
    }
  }


  &__participants {
    width: 100%;
  }

  &__card {
    width: 100%;
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
