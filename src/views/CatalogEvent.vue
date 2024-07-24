<template>
  <div class="catalog-event">
    <div class="catalog-event__info">
      <Heading> Игра </Heading>
      <div class="catalog-event__photo">
        <EventImg />
      </div>

      <HeadingName style="margin-bottom: 10px"> Сила духа</HeadingName>
      <HeadingGray class="color__gray"> Москва</HeadingGray>
      <HeadingDate class="color__gray"> 01.08.2024</HeadingDate>
      <HeadingPlace class="color__gray"> БЦ "Вавилон"</HeadingPlace>
      <div class="catalog-event__wrap">
        <ParagraphText>
          Значимость этих проблем настолько очевидна, что рамки и место обучения
          кадров позволяет выполнять важные задания по разработке дальнейших
          направлений развития. Значимость этих проблем настолько очевидна, что
          рамки и место обучения кадров в значительной степени обуславливает
          создание форм развития. Таким образом постоянный количественный рост и
          сфера нашей активности играет важную роль в формировании позиций,
          занимаемых участниками в отношении поставленных задач. Таким образом
          сложившаяся структура организации позволяет выполнять важные задания
          по разработке направлений прогрессивного развития. Значимость этих
          проблем настолько очевидна, что дальнейшее развитие различных форм
          деятельности в значительной степени обуславливает создание
          соответствующий условий активизации.</ParagraphText>
      </div>

      <RouterLink to="/participant-assessment" class="catalog-event__btn">Перейти в игру</RouterLink>
    </div>

    <div class="catalog-event__footer bg-color__black">
      <BtnMain />
      <BtnAccount />
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import EventImg from "@/components/EventImg.vue";

import HeadingName from "@/components/HeadingName.vue";
import HeadingGray from "@/components/HeadingGray.vue";
import HeadingDate from "@/components/HeadingDate.vue";
import HeadingPlace from "@/components/HeadingPlace.vue";
import ParagraphText from "@/components/ParagraphText.vue";

import BtnSearchContacts from "@/components/btn/BtnSearchContacts.vue";
import BtnAccount from "@/components/btn/BtnAccount.vue";
import BtnMain from "@/components/btn/BtnMain.vue";
import BtnSearchContactsAccess from "@/components/btn/BtnSearchContactsAccess.vue";

export default {
  name: "CatalogEvent",

  components: {
    Heading,
    EventImg,
    HeadingName,
    HeadingGray,
    HeadingDate,
    HeadingPlace,
    ParagraphText,
    BtnSearchContacts,
    BtnAccount,
    BtnMain,
    BtnSearchContactsAccess,
  },
};
</script>

<style lang="scss">
.catalog-event {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: hidden;
  justify-content: space-between;

  &__photo {
    margin-bottom: 10px;
    width: 100%;
  }

  &__name {
    margin-bottom: 20px;
  }

  &__info {
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px 20px 10px;
  }

  &__wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
  }

  &__form-wrap {
    display: flex;
    flex-direction: column;
    margin: 20px 10px;
    width: 100%;
    padding: 0 10px;
  }

  &__btn {
    padding: 5px 30px;
    text-align: center;
    border-radius: 5px;
    font-weight: 500;
    font-size: 14px;
    // box-shadow: 10px 5px 5px rgb(255, 255, 255);
    border: 1px solid #ff7f00;
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
