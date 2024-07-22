<template>
  <div class="creation-event-page">
    <div class="creation-event-page__info">
      <Heading>Создание события</Heading>

      <div class="creation-event-page__form">
        <div class="creation-event-page__heading color">Изображение</div>
        <input
          type="file"
          class="creation-event-page__input bg-color__black"
          @change="handleImageUpload"
        />
        <div class="creation-event-page__image-container">
          <img
            v-if="eventData.image"
            :src="eventData.image"
            alt="Event Image"
            class="creation-event-page__image"
          />
          <div v-else class="creation-event-page__placeholder">
            Пожалуйста, загрузите изображение
          </div>
        </div>
      </div>

      <div class="creation-event-page__form">
        <div class="creation-event-page__heading color">Название</div>
        <textarea
          class="creation-event-page__input bg-color__black"
          v-model="eventData.name"
          rows="1"
          maxlength="40"
        ></textarea>
      </div>

      <div class="creation-event-page__form">
        <div class="creation-event-page__heading color">Тип события</div>
        <div class="switch-container">
          <span class="switch-label">Игра</span>
          <label class="switch">
            <input type="checkbox" v-model="eventData.isEvent" />
            <span class="slider"></span>
          </label>
          <span class="switch-label">Мероприятие</span>
        </div>
      </div>

      <div class="creation-event-page__form">
        <div class="creation-event-page__heading color">Дата</div>
        <input
          type="date"
          class="creation-event-page__input bg-color__black"
          v-model="eventData.date"
        />
      </div>

      <div class="creation-event-page__form">
        <div class="creation-event-page__heading color">Город</div>
        <input
          type="text"
          class="creation-event-page__input bg-color__black"
          v-model="eventData.city"
          maxlength="40"
        />
      </div>

      <div class="creation-event-page__form">
        <div class="creation-event-page__heading color">Место</div>
        <input
          type="text"
          class="creation-event-page__input bg-color__black"
          v-model="eventData.place"
          maxlength="40"
        />
      </div>

      <div class="creation-event-page__form">
        <div class="creation-event-page__heading color">Описание</div>
        <textarea
          class="creation-event-page__input bg-color__black"
          v-model="eventData.description"
          rows="6"
          maxlength="200"
        ></textarea>
      </div>

      <div class="creation-event-page__form">
        <button @click="addEvent" class="creation-event-page__button">
          Сохранить событие
        </button>
      </div>
    </div>

    <div class="creation-event-page__footer bg-color__black">
      <BtnMain /> <BtnAccount />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import Heading from "@/components/Heading.vue";
import BtnAccount from "@/components/btn/BtnAccount.vue";
import BtnMain from "@/components/btn/BtnMain.vue";

export default {
  name: "CreationEventPage",
  components: {
    Heading,
    BtnAccount,
    BtnMain,
  },
  setup() {
    const eventData = ref({
      name: "",
      date: "",
      city: "",
      place: "",
      description: "",
      isEvent: false,
      image: null,
    });

    const eventType = computed(() =>
      eventData.value.isEvent ? "Мероприятие" : "Игра"
    );

    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        eventData.value.image = URL.createObjectURL(file);
      }
    };

    const addEvent = () => {
      const newEvent = {
        ...eventData.value,
        type: eventType.value,
      };

      console.log(newEvent);

      eventData.value = {
        name: "",
        date: "",
        city: "",
        place: "",
        description: "",
        isEvent: false,
        image: null,
      };
    };

    return {
      eventData,
      handleImageUpload,
      addEvent,
    };
  },
};
</script>

<style lang="scss">
.creation-event-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: hidden;
  justify-content: space-between;

  &__form {
    margin-bottom: 20px;
    width: 100%;
  }

  &__heading {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  &__input {
    width: 100%;
    border-radius: 10px;
    border: 1px solid #fff;
    padding: 10px;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
  }

  &__info {
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px 20px 10px;
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

  &__image-container {
    border-radius: 5px;
    width: 100%;
    height: 200px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 1px solid #fff;
    margin: 20px 0;
  }

  &__image {
    height: auto;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__placeholder {
    font-size: 14px;
    font-weight: 500;
    color: #fff;
  }

  &__button {
    padding: 7px 20px;
    border: none;
    border-radius: 5px;
    border: 1px solid #00bfff;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
  }

  // &__button:hover {
  //   background-color: #1976d2;
  // }
}

.switch-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 24px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.switch-label {
  font-size: 14px;
  font-weight: 500;
  color: white;
}

.event-list {
  margin-top: 20px;
  width: 100%;
}

.event-list h2 {
  text-align: center;
  color: white;
}

.event-list ul {
  list-style-type: none;
  padding: 0;
}

.event-list li {
  background-color: #444;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
  color: white;
}

.event-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.event-placeholder {
  text-align: center;
  color: white;
  font-size: 14px;
  font-weight: 500;
}
</style>
