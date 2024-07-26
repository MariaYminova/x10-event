<template>
  <div class="registration-page">
    <div class="registration-page__info">
      <Heading> Регистрация аккаунта </Heading>
      <div class="registration-page__photo"><UserPhoto /></div>

      
      <div class="registration-page__form-wrap">
        <TheForm> Ваше имя </TheForm>
        <TheForm> Контакты </TheForm>
        <TheForm> Расскажите о себе</TheForm>
        <TheForm> Что хотите получить от сообщества</TheForm>
        <TheForm> Ваши навыки</TheForm>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import UserPhoto from "@/components/UserPhoto.vue";
import HeadingName from "@/components/HeadingName.vue";
import TheForm from "@/components/forms/TheForm.vue";
import BtnSave from "@/components/btn/BtnSave.vue";

export default {
  name: "RegistrationPage",

  components: {
    Heading,
    UserPhoto,
    HeadingName,
    TheForm,
    BtnSave,
  },
};
</script>

<style lang="scss">
.registration-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: hidden;
  justify-content: space-between;

  &__photo {
    width: 120px;
    height: 120px;
    margin-bottom: 20px ;
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
}
</style>
