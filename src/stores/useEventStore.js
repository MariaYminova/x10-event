import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useEventStore = defineStore('event', () => {
  const events = ref({});

  function addEvent(event) {
    const id = Date.now().toString();
    events.value[id] = event;
  }

  return {
    events,
    addEvent,
  };
});
