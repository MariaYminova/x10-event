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
          return 'Главная';

        case 'registration-page':
          return 'Регистрация';

        case 'event-flag':
          return 'Мероприятие';

        case 'account-page':
          return 'Мой профиль';

        case 'creation-event-page':
          return 'Создание события';

        case 'search-contacts-page':
          return 'Список участников';

        case 'catalog-event':
          return 'Игра';

        case 'rating-page':
          return 'Рейтинг';

        case 'results-player-page':
          return 'Итоги игрока';

        case 'results-organizer-page':
          return 'Итоги организатора';

        case 'viewing-profile':
          return 'Профиль игрока';

        case 'participant-assessment':
          return 'Оценка участников';

        case 'rating-game-page':
          return 'Итоги игры';

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

  &__title { 
    font-size: 24px;
    font-weight: 700;
  }

  &__logo {
    width: 76px;
    height: 46px;
  }
}
</style>
