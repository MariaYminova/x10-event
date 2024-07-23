<template>
  <div class="viewing-profile">
    <div class="viewing-profile__info">
      <div class="viewing-profile__photo">
        <UserPhoto />
      </div>

      <HeadingName class="viewing-profile__name">{{
        profileData.name
      }}</HeadingName>

      <div class="viewing-profile__form-wrap">
        <div v-if="!showContact">
          <div class="viewing-profile__show-contact-heading">Контакты</div>
          <div class="viewing-profile__show-contact-block">
            <button
              @click="showContact = true"
              class="viewing-profile__show-contact-btn"
            >
              Запросить контакты
            </button>
          </div>
        </div>

        <ProfileInfoBlock v-else :text="profileData.contacts"
          >Контакты</ProfileInfoBlock
        >
        <ProfileInfoBlock :text="profileData.about">О себе</ProfileInfoBlock>
        <ProfileInfoBlock :text="profileData.expectations"
          >Хочу получить от сообщества</ProfileInfoBlock
        >
        <ProfileInfoBlock :text="profileData.skills"
          >Мои навыки</ProfileInfoBlock
        >
      </div>
    </div>

    <div class="viewing-profile__footer bg-color__black">
      <BtnMain /> <BtnAccount />
    </div>
  </div>
</template>

<script>
import UserPhoto from "@/components/UserPhoto.vue";
import HeadingName from "@/components/HeadingName.vue";
import BtnSave from "@/components/btn/BtnSave.vue";
import ProfileInfoBlock from "@/components/ProfileInfoBlock.vue";

import BtnMain from "@/components/btn/BtnMain.vue";
import BtnAccount from "@/components/btn/BtnAccount.vue";

export default {
  name: "ViewingProfile",
  components: {
    UserPhoto,
    HeadingName,
    BtnSave,
    ProfileInfoBlock,
    BtnMain,
    BtnAccount,
  },
  data() {
    return {
      showContact: false,
      profileData: {
        name: "Иван Иванович",
        contacts: "+7 123 456-78-90, ivan.ivanovich@example.com",
        about: "Занимаюсь разработкой веб-приложений более 10 лет.",
        expectations:
          "Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке модели развития. Повседневная практика показывает, что рамки и место обучения кадров представляет собой интересный эксперимент проверки дальнейших направлений развития. Повседневная практика показывает, что новая модель организационной деятельности требуют от нас анализа соответствующий условий активизации. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании дальнейших направлений развития. Товарищи! начало повседневной работы по формированию позиции позволяет оценить значение новых предложений.",
        skills:
          "Мои навыки включают в себя: HTML, CSS, JavaScript, Vue.js, Node.js, и др.",
      },
    };
  },
};
</script>

<style lang="scss">
.viewing-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: hidden;
  justify-content: space-between;

  &__show-contact-heading {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  &__show-contact-btn {
    padding: 5px 30px;
    height: 30px;
    border: 1px solid #00bfff;
    background-color: #00bfff;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 500;
  }

  &__show-contact-block {
    width: 100%;
    border-radius: 10px;
    border: 1px solid #fff;
    padding: 10px;
    display: flex;
    padding: 20px 10px;
    margin-bottom: 20px;
    justify-content: center;
  }

  &__photo {
    width: 120px;
    height: 120px;
    margin-bottom: 20px;
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
    padding: 0 10px;
  }

  &__form-wrap {
    display: flex;
    flex-direction: column;
    margin: 20px 10px;
    width: 100%;
    padding: 0 10px;
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
