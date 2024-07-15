<template>
  <div class="account-page">
    <div class="account-page__wrap">
      <div class="account-page__info">
        <div class="account-page__photo">
          <UserPhoto />
        </div>
        <div class="account-page__info-name">
          <HeadingName class="account-page__name"> Иван Иванович </HeadingName>
          <BtnChangeData />
        </div>
      </div>
      <div class="account-page__statistical-wrap">
        <table>
          <tbody>
            <tr>
              <td class="account-page__td">Побед</td>
              <td class="account-page__td-score">12</td>
            </tr>

            <tr>
              <td class="account-page__td">Заработано</td>
              <td class="account-page__td-score">12</td>
            </tr>

            <tr>
              <td class="account-page__td">Предприятий</td>
              <td class="account-page__td-score">12</td>
            </tr>

            <tr>
              <td class="account-page__td">Игры сыграно</td>
              <td class="account-page__td-score">12</td>
            </tr>

            <tr>
              <td class="account-page__td">Игр проведено</td>
              <td class="account-page__td-score">12</td>
            </tr>

            <tr>
              <td class="account-page__td">Посетил мероприятий</td>
              <td class="account-page__td-score">12</td>
            </tr>

            <tr>
              <td class="account-page__td">Провел мероприятий</td>
              <td class="account-page__td-score">12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="account-page__footer bg-color__black">
      <BtnMain /> <BtnAccount />
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import UserPhoto from "@/components/UserPhoto.vue";
import HeadingName from "@/components/HeadingName.vue";
import TheForm from "@/components/forms/TheForm.vue";
import BtnMain from "@/components/btn/BtnMain.vue";
import BtnChangeData from "@/components/btn/BtnChangeData.vue";
import BtnAccount from "@/components/btn/BtnAccount.vue";
import StatisticalBlock from "@/components/StatisticalBlock.vue";

export default {
  name: "AccountPage",

  components: {
    Heading,
    UserPhoto,
    HeadingName,
    TheForm,
    BtnMain,
    BtnChangeData,
    BtnAccount,
    StatisticalBlock,
  },
};
</script>

<style lang="scss">
.account-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: hidden;
  justify-content: space-between;

  &__photo {
    margin-bottom: 10px;
    width: 120px;
    height: 120px;
  }

  &__name {
    margin-bottom: 20px;
  }

  &__wrap {
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
  }

  &__info {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  &__info-name {
    max-width: 200px;
  }

  &__statistical-wrap {
    margin: 20px 0;
    width: 100%;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
  }

  &__td {
    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;
    padding: 10px;
    font-size: 14px;
    width: 100%;
  }

  &__td-score {
    border-bottom: 1px solid #fff;
    padding: 10px;
    font-size: 14px;
    text-align: center;
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
