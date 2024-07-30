<template>
  <div class="search-contacts-page">
    <div class="search-contacts-page__info">

      <input
        v-model="searchQuery"
        @input="filterContacts"
        placeholder="Поиск участников..."
        class="search-contacts-page__search-input"
      />

      <div class="search-contacts-page__card-wrap">
        <RouterLink to="/viewing-profile">
        <ContactsCard
          v-for="contact in filteredContacts"
          :key="contact.id"
          :contact="contact"
          class="search-contacts-page__card"
        /></RouterLink>
      </div>
    </div>
    <div class="search-contacts-page__footer bg-color__black">
      <BtnMain />
      <BtnAccount />
    </div>
  </div>
</template>

<script>
import ContactsCard from "@/components/ContactsCard.vue";

import BtnAccount from "@/components/btn/BtnAccount.vue";
import BtnMain from "@/components/btn/BtnMain.vue";

export default {
  name: "SearchContactsPage",

  components: {
    BtnAccount,
    BtnMain,
    ContactsCard,
  },

  data() {
    return {
      searchQuery: "",
      contacts: [
        {
          id: 1,
          name: "Иван Иванович",
          description: "Я обладаю обширными знаниями и опытом в сфере маркетинга, что позволяет мне разрабатывать эффективные стратегии для привлечения и удержания клиентов. Мои ключевые компетенции включают анализ рынка, создание и проведение маркетинговых кампаний, а также управление брендом. Я имею опыт работы с различными цифровыми инструментами, такими как Google Analytics и SEO, что позволяет мне оптимизировать рекламные бюджеты и достигать высоких результатов.",
        },
        {
          id: 2,
          name: "Петр Петрович",
          description: "Как опытный разработчик программного обеспечения, я владею широким спектром технологий, включая JavaScript, Python, и SQL. Мои навыки включают в себя разработку веб-приложений, мобильных приложений и интеграцию различных систем. Я также обладаю опытом работы в команде с использованием методологий Agile и Scrum, что позволяет эффективно управлять проектами и достигать поставленных целей в срок.",
        },
        {
          id: 1,
          name: "Иван Олегович",
          description: "Я обладаю глубокими знаниями в области финансового анализа и управления, что позволяет мне точно оценивать финансовые показатели и разрабатывать стратегии для их улучшения. Мои ключевые компетенции включают анализ финансовой отчетности, прогнозирование денежных потоков и оценку инвестиционных проектов. Благодаря аналитическому мышлению и внимательности к деталям, я способен принимать обоснованные решения, которые способствуют финансовому благополучию компании.",
        },
        {
          id: 1,
          name: "Олег Иванович",
          description: "Как креативный графический дизайнер, я специализируюсь на создании визуально привлекательных и функциональных дизайнов для различных медиа. Мои навыки включают разработку логотипов, брендинга, печатных материалов и дизайна для веб-сайтов. Я владею инструментами Adobe Creative Suite, что позволяет мне воплощать в жизнь самые смелые идеи и создавать уникальные визуальные решения, соответствующие потребностям клиентов.",
        },
        {
          id: 1,
          name: "Петр Андреевич",
          description: "Я обладаю обширным опытом в сфере продаж, что позволяет мне эффективно взаимодействовать с клиентами и достигать высоких показателей продаж. Мои ключевые компетенции включают управление клиентскими отношениями, проведение переговоров и разработку стратегий по увеличению продаж. Я также обладаю навыками анализа рынка и конкурентной среды, что позволяет мне находить и использовать новые возможности для развития бизнеса.",
        },
      ],
      filteredContacts: [],
    };
  },

  mounted() {
    this.filteredContacts = this.contacts;
  },

  methods: {
    filterContacts() {
      const query = this.searchQuery.toLowerCase();
      this.filteredContacts = this.contacts.filter((contact) =>
        contact.description.toLowerCase().includes(query)
      );
    },
  },
};
</script>

<style lang="scss">
.search-contacts-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: hidden;
  justify-content: space-between;

  &__info {
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px 20px 10px;
  }

  &__search-input {
    margin: 10px 0;
    padding: 5px;
    width: calc(100% - 20px);
    border: 1px solid #97959d;
    border-radius: 5px;
    font-size: 14px;
  }

  &__card-wrap {
    margin: 20px;
    width: 100%;
    padding: 0 10px;
  }

  &__card {
    margin: 10px 0;
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
