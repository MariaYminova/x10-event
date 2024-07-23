<template>
  <div class="organizer-page">
    <div class="organizer-page__content">

      <div class="organizer-page__top">
        <h1 class="organizer-page__title color__orange">Организатор</h1>
        <RouterLink to="/creation-event-page" class="organizer-page__btn">
          Изменить карточку игры
        </RouterLink>
      </div>

      <div class="organizer-page__players">
        <RouterLink to="/results-player-page" v-for="user in users" :key="user.id">
          <RatingCardPlayer class="rating-page__card" :name="user.name"  />
        </RouterLink>
      </div>
      <button type="button" class="organizer-page__btn">Завершить игру</button>
    </div>

    <div class="organizer-page__footer bg-color__black">
      <BtnMain />
      <BtnAccount />
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import BtnMain from "@/components/btn/BtnMain.vue";
import BtnAccount from "@/components/btn/BtnAccount.vue";
import RatingCardPlayer from "@/components/RatingCardPlayer.vue";

export default {
  name: "rganizerPage",
  components: {
    RatingCardPlayer,
    BtnMain,
    BtnAccount
  },
  data() {
    return {
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
  setup() {
    const interest = ref(0);
    const organized = ref(0);
    return {
      interest,
      organized
    };
  }
};
</script>


<style lang="scss">
.organizer-page {
  display: flex;
  flex-direction: column;
  height: calc(100% - 76px);

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
  }

  &__btn {
    padding: 5px 30px;
    text-align: center;
    border-radius: 5px;
    font-weight: 500;
    font-size: 14px;
    border: 1px solid #ff7f00;
    color: #ffffff;
  }


  &__content {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0 20px 20px;
    flex: 1;
    overflow: auto;
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