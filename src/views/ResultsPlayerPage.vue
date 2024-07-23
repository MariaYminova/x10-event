<template>
  <div class="results-player-page">
    <div class="results-player-page__content">
      <Heading>Итоги игрока</Heading>
      <div class="results-player-page__info">
        <div class="results-player-page__photo">
          <UserPhoto />
        </div>
        <HeadingName class="results-player-page__name">
          <span>Райан Гослинг</span>
        </HeadingName>
      </div>
      <div class="results-player-page__comment-container">
        <span class="results-player-page__comment-title">Комментарий</span>
        <textarea class="results-player-page__comment bg-color__black" name="comment" rows="5" maxlength="200"
          placeholder="Пример комментария"></textarea>
      </div>
      <div class="results-player-page__results-container">
        <div class="results-player-page__results">
          <input type="checkbox"><span>Победил</span>
        </div>
        <div class="results-player-page__results">
          <input type="number"><span>Заработал</span>
        </div>
        <div class="results-player-page__results">
          <input type="text"><span>Предприятия</span>
        </div>
      </div>
      <BtnSave />
    </div>

    <div class="results-player-page__footer bg-color__black">
      <BtnMain />
      <BtnAccount />
    </div>
  </div>
</template>
<script>
import Heading from "@/components/Heading.vue";
import UserPhoto from "@/components/UserPhoto.vue";
import HeadingName from "@/components/HeadingName.vue";
import BtnSave from "@/components/btn/BtnSave.vue";
import BtnMain from "@/components/btn/BtnMain.vue";
import BtnAccount from "@/components/btn/BtnAccount.vue";

export default {
  name: "ResultsPlayerPage",
  components: {
    Heading,
    UserPhoto,
    HeadingName,
    BtnSave,
    BtnMain,
    BtnAccount
  },
};
</script>


<style lang="scss">
.results-player-page {
  display: flex;
  flex-direction: column;
  height: calc(100% - 146px);


  &__content {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0 20px 20px;
    flex: 1;
    overflow: auto;
  }

  &__info {
    display: flex;
    align-items: center;
  }

  &__photo {
    border-radius: 50%;
    width: 120px;
    height: 120px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    position: relative;
    margin-right: 15px;
  }

  &__comment-title {
    display: block;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  &-comment {
    width: 100%;
    border-radius: 10px;
    border: 1px solid #fff;
    resize: none;
    padding: 10px;
    color: #fff;
  }

  &__results-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__results {
    display: flex;
    gap: 8px;
  }

  &__footer {
    position: fixed;
    bottom: 0;
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