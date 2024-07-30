<template>
  <div>
    <div class="btn-search-contacts-access color" @click="openPopup">
      <img
        class="btn-search-contacts-access__icon"
        src="@/icons/icon-lock.svg"
        alt="#"
      />
       Контакты участников
    </div>

    <div v-if="isPopupOpen" class="popup-overlay" @click="closePopup">
      <div class="popup-content" @click.stop>
        <p>Отсканируйте QR-код</p>
        
        <button @click="closePopup">Закрыть</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BtnSearchContactsAccess",
  data() {
    return {
      isPopupOpen: false,
    };
  },
  methods: {
    openPopup() {
      this.isPopupOpen = true;
    },
    closePopup() {
      this.isPopupOpen = false;
    },
  },
};
</script>

<style lang="scss">
.btn-search-contacts-access {
  padding: 7px 30px;
  text-align: center;
  border-radius: 5px;
  font-weight: 500;
  font-size: 14px;
  gap: 10px;
  // box-shadow: 10px 5px 5px rgb(255, 255, 255);
  border: 1px solid #ff7f00;
  display: flex;
  align-items: center;

  &__icon {
    width: 14px;
    height: 18px;
  }
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background: #18171f;;
  padding: 20px;
  border: 1px solid #97959d;;
  border-radius: 10px;
  color: #fff;
  text-align: center;
  max-width: 300px;
  width: 100%;
  gap: 20px;
}

.popup-content img {
  max-width: 100%;
  height: auto;
  margin-bottom: 15px;
}

.popup-content button {
  background: #ff7f00;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px ;
}
</style>
