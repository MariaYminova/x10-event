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

      <div class="personal-results-event__participants">
        <RouterLink :to="link" v-for="user in filteredUsers" :key="user.id">
          <RatingCardPlayer class="personal-results-event__card" :name="user.name" />
        </RouterLink>
      </div>

      <RouterLink to="/rating-game-page">
        <button type="button" class="personal-results-event__btn personal-results-event__btn--finish">
          Завершить игру
        </button>
      </RouterLink>
      
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

    const filteredUsers = computed(() => {
      return isOrganizer.value ? users.value.organizers : users.value.players;
    });

    const link = computed(() => {
      return isOrganizer.value ? '/results-player-page' : '/results-organizer-page';
    });

    return {
      isOrganizer,
      users,
      status,
      filteredUsers,
      link,
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
