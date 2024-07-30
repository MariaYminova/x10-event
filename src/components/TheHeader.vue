<template>
  <header class="the-header">
    <h1 class="the-header__title">{{ pageTitle }}</h1>
    <img class="the-header__logo" src="@/icons/icon-logo.svg" alt="" />
  </header>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: "TheHeader",

  components: {
  },

  setup() {
    const route = useRoute();

    const pageTitle = computed(() => {
      switch (route.name) {
        case 'main-page':

          return 'главная';

        case 'registration-page':
          return 'регистрация';

        case 'event-flag':
          return 'мероприятие';

        case 'account-page':
          return 'мой профиль';

        case 'creation-event-page':
          return 'создание события';

        case 'search-contacts-page':
          return 'список участников';

        case 'catalog-event':
          return 'игра';

        case 'rating-page':
          return 'рейтинг';

        case 'results-player-page':
          return 'итоги игрока';

        case 'results-organizer-page':
          return 'итоги организатора';

        case 'viewing-profile':
          return 'профиль игрока';

        case 'participant-assessment':
          return 'оценка участников';

        case 'rating-game-page':
          return 'итоги игры';

        default:
          return '';
      }
    });

    return {
      pageTitle
    };
  }
};
</script>

<style lang="scss">
.the-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 24px;
  margin-bottom: 33px;

  &__title { 
    font-size: 24px;
    font-weight: 700;
    font-family: 'Rothek', Arial;
    line-height:26.4px;
  }

  &__logo {
    width: 76px;
    height: 46px;
  }
}
</style>
