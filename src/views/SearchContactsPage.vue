<template>
  <div class="search-contacts-page">
    <div class="search-contacts-page__info">
      <Heading> Список участников </Heading>
    

    <div class="search-contacts-page__card-wrap">
      <ContactsCard class="search-contacts-page__card" />
      <ContactsCard class="search-contacts-page__card" />
    </div>
</div>
    <div class="search-contacts-page__footer bg-color__black">
      <BtnMain /> <BtnAccount />
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import ContactsCard from "@/components/ContactsCard.vue";

import BtnAccount from "@/components/btn/BtnAccount.vue";
import BtnMain from "@/components/btn/BtnMain.vue";

export default {
  name: "SearchContactsPage",

  components: {
    Heading,
    BtnAccount,
    BtnMain,
    ContactsCard,
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

  &__card-wrap {
    margin: 20px;
    width: 100%;
    padding: 0 10px;
  }

  &__card {
    margin: 10px  0;
   

  }

  &__footer {
    width: 100%;
    height: 70px;
    padding: 20px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgb(255 255 255 / 37%);
    // box-shadow: inset 1px 2px 5px 0px rgba(255, 255, 255, 0.207);
  }
}
</style>
