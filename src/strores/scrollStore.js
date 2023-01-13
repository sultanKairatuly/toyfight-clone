import { defineStore } from "pinia";
import { ref } from "vue";

export const useScrollerStore = defineStore("scroller", () => {
  const scroll = ref(0);

  window.addEventListener("scroll", () => {
    scroll.value = window.scrollY;
  });

  return {
    scroll,
  };
});
