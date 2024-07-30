<template>
  <div class="results-organizer-page">
    <div class="results-organizer-page__content">
      <div class="results-organizer-page__info">
        <div class="results-organizer-page__photo">
          <UserPhoto />
        </div>
        <HeadingName class="results-organizer-page__name">
          <span>Райан Гослинг</span>
        </HeadingName>
      </div>
      <div class="results-organizer-page__comment-container">
        <span class="results-organizer-page__comment-title">Комментарий</span>
        <textarea class="results-organizer-page__comment bg-color__black" name="comment" rows="5" maxlength="200"
          placeholder="Пример комментария"></textarea>
      </div>
      <div class="results-organizer-page__rating-container">
        <div class="results-organizer-page__rating">
          <span>Заинтересовал на - {{ interest }}</span>
          <input type="range" max="10" min="0" v-model="interest">
        </div>
        <div class="results-organizer-page__rating">
          <span>Организовал на - {{ organized }}</span>
          <input type="range" max="10" min="0" v-model="organized">
        </div>
      </div>
      <BtnSave />
    </div>

    <div class="results-organizer-page__footer bg-color__black">
      <BtnMain />
      <BtnAccount />
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import UserPhoto from "@/components/UserPhoto.vue";
import HeadingName from "@/components/HeadingName.vue";
import BtnSave from "@/components/btn/BtnSave.vue";
import BtnMain from "@/components/btn/BtnMain.vue";
import BtnAccount from "@/components/btn/BtnAccount.vue";

export default {
  name: "ResultsorganizerPage",
  components: {
    UserPhoto,
    HeadingName,
    BtnSave,
    BtnMain,
    BtnAccount
  },
  setup() {
    const interest = ref(0);
    const organized = ref(0);
    return {
      interest,
      organized
    };
  }
};
</script>


<style lang="scss">
.results-organizer-page {
  display: flex;
  flex-direction: column;
  height: calc(100% - 76px);


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

  &__comment {
    width: 100%;
    border-radius: 10px;
    border: 1px solid #fff;
    resize: none;
    padding: 10px;
    color: #fff;
  }


  &__rating-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__rating {
    display: flex;
    flex-direction: column;
    gap: 8px;
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