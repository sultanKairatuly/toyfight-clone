import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useLinksStore = defineStore("link", () => {
  const links = reactive(["intro", "who", "what", "work"]);
  const currentLink = ref(null);
  currentLink.value = localStorage.getItem("currentLink") || "intro";
  
  const changeLink = (newLink) => {
    localStorage.setItem("currentLink", newLink);
    currentLink.value = localStorage.getItem("currentLink");
  };

  return {
    links,
    currentLink,
    changeLink,
  };
});
