<template>
  <div class="event-flag">
    <div class="event-flag__info">
      <Heading> Мероприятие </Heading>
      <div class="event-flag__photo"><EventImg /></div>

      <HeadingName style="margin-bottom: 10px"> Сила духа</HeadingName>
      <HeadingGray class="color__gray"> Москва</HeadingGray>
      <HeadingDate class="color__gray"> 01.08.2024</HeadingDate>
      <HeadingPlace class="color__gray"> БЦ "Вавилон"</HeadingPlace>
      <div class="event-flag__wrap">
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
          соответствующий условий активизации.</ParagraphText
        >
      </div>
      <RouterLink to="/search-contacts-page"> <BtnSearchContacts /></RouterLink>
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

export default {
  name: "EventFlag",

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
  },
};
</script>

<style lang="scss">
.event-flag {
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
}
</style>
