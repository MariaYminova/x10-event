<template>
  <div class="rating-card-player">
    <div class="rating-card-player__info">
      <div class="rating-card-player__photo">
        <UserPhoto />
      </div>
      <HeadingName class="rating-card-player__name">
        Иван Иванович
      </HeadingName>
    </div>

    <div class="rating-card-player__statistical-wrap">
      <div
        class="rating-card-player__statistical-block"
        :class="getBlockClass(index)"
        v-for="(metric, index) in metrics"
        :key="index"
      >
        <div class="rating-card-player__statistical-name">
          {{ metric.name }}
        </div>
        <div class="rating-card-player__statistical-score">
          {{ metric.score }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserPhoto from "@/components/UserPhoto.vue";
import HeadingName from "@/components/HeadingName.vue";

export default {
  name: "RatingCardPlayer",
  components: {
    UserPhoto,
    HeadingName,
  },
  data() {
    return {
      metrics: [
        { name: "Побед", score: 12 },
        { name: "Заработано", score: 1200 },
        { name: "Предприятий", score: 3 },
        { name: "Игр сыграно", score: 20 },
        { name: "Посетил мероприятий", score: 10 },
        // добавьте больше данных по мере необходимости
      ],
      blockClasses: [
        "block-color-1",
        "block-color-2",
        "block-color-3",
        "block-color-4",
        "block-color-5",
      ],
    };
  },
  methods: {
    getBlockClass(index) {
      return this.blockClasses[index % this.blockClasses.length];
    },
  },
};
</script>

<style lang="scss">
.rating-card-player {
  border: 1px solid #f0f0f0;
  border-radius: 20px;
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;

  &__photo {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    position: relative;
    margin-right: 15px;
  }

  &__info {
    display: flex;
    align-items: center;
  }

  &__name {
    font-size: 22px;
    display: block;
  }

  &__statistical-wrap {
    margin: 10px 0;
    color: #fff;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
  }

  &__statistical-block {
    display: flex;
    margin: 10px 10px 0 0;
    padding: 5px 20px;
    border-radius: 20px;
    color: #ffffff;
  }

  &__statistical-name {
    margin-right: 5px;
    font-size: 12px;
    font-weight: 500;
  }

  &__statistical-score {
    font-size: 12px;
    font-weight: 500;
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

.block-color-1 {
  border: 1px solid #52C097;
}

.block-color-2 {
  border: 1px solid #FFCD1C;
}

.block-color-3 {
  border: 1px solid #00BFFF;
}

.block-color-4 {
  border: 1px solid #f0f0f0;
}

.block-color-5 {
  border: 1px solid #f0f0f0;
}
</style>
