<template>
  <div class="сontacts-сard">
    <div class="сontacts-сard__photo-wrap">
      <UserPhoto />
    </div>

    <div class="сontacts-сard__info-wrap">
      <div class="сontacts-сard__name">{{ contact.name }}</div>
      <p class="сontacts-сard__text">{{ contact.description }} </p>
    </div>
  </div>
</template>

<script>
import UserPhoto from "@/components/UserPhoto.vue";
import HeadingName from "@/components/HeadingName.vue";

export default {
  name: "ContactsCard",

  components: {
    UserPhoto,
    HeadingName,
  },

  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.сontacts-сard {
  display: flex;
  border: 1px solid #97959d;
  padding: 10px;
  border-radius: 5px;

  &__text {
    max-height: 60px;
    overflow: hidden;
    font-size: 12px;
    font-weight: 400;
  }

  &__name {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  &__photo-wrap {
    width: 70px;
    height: 70px;
    margin-right: 10px;
    flex-shrink: 0;
  }

  &__info-wrap {
    flex-grow: 1; 
  }
}
</style>
