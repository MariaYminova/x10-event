<template>
  <div class="сontacts-сard">
    <div class="сontacts-сard__photo-wrap">
      <UserPhoto />
    </div>

    <div class="сontacts-сard__info-wrap">
     <div class="сontacts-сard__name"> Иван Иванович</div>
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
    HeadingName
  },
};
</script>

<style lang="scss">
.сontacts-сard {
  display: flex;
  border: 1px solid #97959d;
  padding: 10px;
  border-radius: 5px;

  &__name{
    font-size: 16px;
    font-weight: 700;
  }
 

  &__photo-wrap {
    border-radius: 50%;
    width: 70px;
    height: 70px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    position: relative;
    margin-right: 20px ;
  }
}
</style>
