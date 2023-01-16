<template>
  <div
    class="container"
    :style="{
      backgroundColor: props.backColor,
    }"
    ref="container"
  >
    <div
      class="content"
      :style="{
        backgroundColor: props.backColor,
        color: dynamicColor,
      }"
      :class="{
        showed: isIntersecting,
      }"
    >
      <h3 class="section_title" ref="title">{{ props.sectionTitle }}</h3>
      <h1 class="title">
        {{ props.sectionSubtitle }}
      </h1>
      <div class="description">
        {{ props.sectionDescription }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useLinksStore } from "../strores/linksStore";

const store = useLinksStore();
const props = defineProps({
  sectionTitle: {
    type: String,
    default: "",
  },
  sectionSubtitle: {
    type: String,
    default: "",
  },
  sectionDescription: {
    type: String,
    default: "",
  },
  backColor: {
    type: String,
    default: "",
  },
  lineColor: {
    type: String,
    default: "",
  },
});
const isIntersecting = ref(false);
const isDarkText = ref(false);

if (store.currentLink === "intro") {
  isDarkText.value = true;
} else {
  isDarkText.value = false;
}
window.addEventListener("scroll", (e) => {
  let offset = window.scrollY;

  if (offset >= 200) {
    setTimeout(() => {
      isIntersecting.value = true;
    }, 650);
  } else {
    isIntersecting.value = false;
  }
});

const dynamicColor = computed(() => {
  return isDarkText.value ? "#373322" : "#fff";
});
</script>

<style scoped>
.content {
  opacity: 0;
  visibility: hidden;
  transition: 0.3s ease-in-out;
}

.section_title {
  font-size: 11px;
  padding-bottom: 24px;
  margin-bottom: 40px;
  text-transform: uppercase;
  text-align: center;
  position: relative;
}

.section_title::after {
  content: "";
  width: 7px;
  position: absolute;
  height: 5px;
  top: 70%;
  left: 50%;
  transform: rotate(75deg) translateX(-50%);
  background-color: #96ffca;
  display: block;
  transition: 0.5s ease-in-out;
  transition-delay: 1.5s;
}
.title {
  font-size: 42px;
  width: 800px;
  text-align: center;
  margin: 21px auto;
}
.description {
  margin: 0 auto;
  font-size: 16px;
  text-align: center;
  width: 580px;
}

.showed {
  opacity: 1;
  visibility: visible;
}

.showed .section_title::after {
  content: "";
  width: 7px;
  position: absolute;
  height: 24px;
  top: 70%;
  left: 50%;
  float: left;
  transform: rotate(75deg) translateX(-50%);
  background-color: #96ffca;
  display: block;
  transition: 0.5s ease-in-out;
  transition-delay: 1.5s;
}
</style>
