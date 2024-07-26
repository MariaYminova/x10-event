<template>
  <div class="rating-card-organizer">
    <div class="rating-card-organizer__info">
      <div class="rating-card-organizer__photo">
        <UserPhoto />
      </div>
      <HeadingName class="rating-card-organizer__name">
        {{ name }}
      </HeadingName>
    </div>

    <div class="rating-card-organizer__statistical-wrap">
      <div
        class="rating-card-organizer__statistical-block"
        :class="getBlockClass(index)"
        v-for="(stat, index) in stats" 
        :key="stat.name"
      >
        <div class="rating-card-organizer__statistical-name">
          {{ stat.name }}
        </div>
        <div class="rating-card-organizer__statistical-score">
           {{ stat.score }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserPhoto from "@/components/UserPhoto.vue";
import HeadingName from "@/components/HeadingName.vue";

export default {
  name: "RatingCardOrganizer",
  components: {
    UserPhoto,
    HeadingName,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    stats: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
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
.rating-card-organizer {
  border: 1px solid #f0f0f0;
  border-radius: 5px;
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
    font-size: 18px;
    font-weight: 600;
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
    margin: 7px 7px 0 0;
    padding: 5px 13px;
    border-radius: 5px;
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
