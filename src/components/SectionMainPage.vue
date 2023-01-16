<template>
  <div
    class="section section-main"
    :style="{
      backgroundColor: props.secondaryColor,
    }"
  >
    <div
      class="container"
      :class="{
        showed: isVisible,
        hidden: isHiden,
      }"
    >
      <div class="content">
        <h1 class="title">{{ props.sectionTitle }}</h1>
      </div>
    </div>
    <div
      class="background"
      :class="{
        hidden: isHiden,
      }"
      :style="props.backColor"
    ></div>
    <div
      class="arrow_container"
      :class="{
        hidden: isHiden,
      }"
    >
      <a href="#toscroll">
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
      </a>
    </div>
    <!-- <img
      class="big-image"
      :class="{
        hidden: isHiden,
      }"
      src="../assets/who.png"
    /> -->
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  sectionTitle: {
    type: String,
    default: "",
  },
  backColor: {
    type: Object,
    default: {},
    required: true,
  },
  secondaryColor: {
    type: String,
    default: "",
  },
});
const isHiden = ref(false);

const isVisible = ref(false);

window.addEventListener("scroll", (e) => {
  if (window.scrollY < 200) {
    isVisible.value = true;
    isHiden.value = false;
  } else {
    isVisible.value = false;
    isHiden.value = true;
  }
});
</script>

<style scoped>
.container {
  transform: scale(0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in-out;
  width: 100%;
  height: 100%;
}

.section-main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  transition: 0.3s ease-in-out;
  transition-delay: 0.2s;
}

.big-image {
  position: fixed;
  width: 800px;
  height: 300px;
  top: 50%;
  left: 50%;
  transition: 0.3s ease-in-out;
  transition-delay: 0.3s;
  transform: translate(-50%, -50%);
  object-fit: contain;
}

.title {
  color: #96ffca;
  font-size: 390px;
  text-align: center;
  font-size: 22vw;
  pointer-events: none;
  transition: 0.3s ease-in-out;
  user-select: none;
}

.hidden {
  opacity: 0;
  visibility: hidden;
}

.showed {
  transform: scale(1);
}

.background {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: 0.4s ease-in-out;
}

.arrow_container {
  position: absolute;
  transition: 0.3s ease-in-out;
  width: 24px;
  height: 24px;
  bottom: 11%;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  margin: 0px auto;
}

.chevron {
  position: absolute;
  width: 28px;
  height: 8px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move 3s ease-out infinite;
}

.chevron:before,
.chevron:after {
  content: " ";
  position: absolute;
  top: 0;
  height: 100%;
  width: 51%;
  background: #fff;
}

.chevron:before {
  left: 0;
  transform: skew(0deg, 30deg);
}

.chevron:after {
  right: 0;
  width: 50%;
  transform: skew(0deg, -30deg);
}

.chevron:first-child {
  animation: move 3s ease-out 1s infinite;
}

.chevron:nth-child(2) {
  animation: move 3s ease-out 2s infinite;
}

.text {
  display: block;
  margin-top: 75px;
  margin-left: -30px;
  font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: 0.25;
  animation: pulse 2s linear alternate infinite;
}

@keyframes pulse {
  to {
    opacity: 1;
  }
}
@keyframes move {
  25% {
    opacity: 1;
  }
  33% {
    opacity: 1;
    transform: translateY(30px);
  }
  67% {
    opacity: 1;
    transform: translateY(40px);
  }
  100% {
    opacity: 0;
    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
  }
}
</style>
