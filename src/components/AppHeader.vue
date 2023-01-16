<template>
  <header class="header">
    <div
      class="header__item"
      v-for="head in headerItems"
      :key="head"
      :class="{
        hidden: heads.includes(head[0]),
      }"
      @click="push(head[1], head[0])"
    >
      {{ head[0] }}
    </div>
    <div
      @click="scrollToTop"
      class="scroll-arrow"
      :class="{
        showed: arrow,
      }"
    ></div>
  </header>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { ref, reactive } from "vue";
import { useLinksStore } from "../strores/linksStore";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useLinksStore();

const headerItems = reactive([
  ["Intro", "/"],
  ["Who", "who"],
  ["What", "what"],
  ["Work", "work"],
]);
const heads = reactive([]);
const hidingProcess = ref(false);
const showingProcess = ref(false);
const arrow = ref(false);

window.addEventListener("scroll", (e) => {
  let interval1, interval2;
  let offset = window.scrollY;
  if (offset >= 100) {
    hidingProcess.value = false;
    if (!showingProcess.value) {
      if (
        heads.includes(headerItems[0]) ||
        heads.includes(headerItems[1]) ||
        heads.includes(headerItems[2])
      ) {
        return;
      }
      let i = 0;

      interval1 = setInterval(() => {
        heads.push(headerItems[i]);
        if (i !== headerItems.length - 1) {
          i++;
        } else {
          clearInterval(interval1);
        }
      }, 100);

      setTimeout(() => {
        arrow.value = true;
      }, 1000);

      showingProcess.value = true;
    }
  } else {
    showingProcess.value = false;
    if (!hidingProcess.value) {
      for (let i = 0; i < headerItems.length; i++) {
        setTimeout(() => {
          heads.pop();
        }, 100 * (i + 1));
      }
      arrow.value = false;
      hidingProcess.value = true;
    }
  }
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const push = (link, page) => {
  store.changeLink(page.toLowerCase());
  router.push(link);
};
</script>

<style scoped>
.header {
  display: flex;
  column-gap: 30px;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding: 60px 0px 20px 0px;
  z-index: 100;
}

.header__item {
  font-size: 14px;
  color: #fff;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  transition: 0.4s ease-in-out;
  cursor: pointer;
}

.hidden {
  transform: translateY(-100px);
}

.scroll-arrow {
  position: absolute;
  right: 50px;
  cursor: pointer;
  transform: rotate(180deg) translateY(100px);
  transition: 0.2s ease-in-out;
}

.showed {
  transform: rotate(180deg) translateY(0px);
}

.scroll-arrow:before {
  content: "";
  position: absolute;
  width: 20px;
  height: 13px;
  display: inline-block;
  left: -1px;
  transform: rotate(65deg);
  border-left: 2px solid #fff;
  transition: 0.2s ease-in-out;
}

.scroll-arrow:after {
  content: "";
  width: 20px;
  height: 13px;
  position: absolute;
  right: -1px;
  display: inline-block;
  transform: rotate(-65deg);
  border-right: 2px solid #fff;
  transition: 0.2s ease-in-out;
}

.scroll-arrow:after:hover,
.scroll-arrow:after:hover {
  border: 2px solid #96ffca;
}
</style>
