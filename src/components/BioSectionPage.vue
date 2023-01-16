<template>
  <div
    class="container"
    :style="{
      background: props.gradientColor,
      paddingBottom: props.containerPaddings.pb,
      paddingTop: props.containerPaddings.pt,
    }"
  >
    <slot name="title"></slot>
    <div
      class="leigh"
      :class="{
        'showed-founders': isIntersecting,
      }"
      :style="props.positionOne"
    >
      <div
        class="content-to-hover"
        @mouseenter="LeighHoveredInfo = true"
        @mouseleave="LeighHoveredInfo = false"
      ></div>

      <div
        class="info"
        :class="{
          info_hovered: LeighHoveredInfo,
        }"
      >
        <div class="name">
          Leigh <br />
          Whipday
        </div>
        <div class="view-bio">View bio</div>
      </div>
      <img
        class="toy-image"
        :src="props.imageOne"
        :style="{
          heigth: props.size,
          width: props.size,
        }"
      />
    </div>
    <div
      class="johny"
      :class="{
        'showed-founders': isIntersecting,
      }"
      :style="props.positionTwo"
    >
      <div
        class="content-to-hover"
        @mouseenter="JohnyHoveredInfo = true"
        @mouseleave="JohnyHoveredInfo = false"
      ></div>
      <img
        class="toy-image"
        :src="props.imageTwo"
        :style="{
          heigth: props.size,
          width: props.size,
        }"
      />
      <div
        class="info"
        :class="{
          info_hovered: JohnyHoveredInfo,
        }"
      >
        <div class="name">
          Leigh <br />
          Whipday
        </div>
        <div class="view-bio">View bio</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  imageOne: {
    type: String,
    default: "",
    required: true,
  },
  imageTwo: {
    type: String,
    default: "",
    required: true,
  },
  positionOne: {
    type: Object,
    default: {},
    required: true,
  },
  positionTwo: {
    type: Object,
    default: {},
    required: true,
  },
  gradientColor: {
    type: String,
    required: true,
    default: "",
  },
  size: {
    type: String,
    required: true,
    default: "",
  },
  containerPaddings: {
    type: Object,
    required: true,
    default: {},
  },
});

const LeighHoveredInfo = ref(false);
const JohnyHoveredInfo = ref(false);

const isIntersecting = ref(false);

window.addEventListener("scroll", (e) => {
  let offset = window.scrollY;

  if (offset >= 1000) {
    isIntersecting.value = true;
  } else {
    isIntersecting.value = false;
  }
});
</script>

<style scoped>
.container {
  transition: 0.3s ease-in-out;
  position: relative;
}

.description {
  color: #fff;
  margin: 0 auto;
  font-size: 16px;
  text-align: center;
  width: 580px;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s ease-in-out;
}

.content-to-hover {
  width: 15vw;
  height: 15vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
}

.section_title::after {
  content: "";
  width: 7px;
  position: absolute;
  height: 1px;
  top: 70%;
  left: 50%;
  float: left;
  transform: rotate(75deg) translateX(-50%);
  background-color: #96ffca;
  display: block;
  transition: 0.5s ease-in-out;
  transition-delay: 0.8s;
}

.leigh {
  position: absolute;
  transition: 0.65s cubic-bezier(0.52, 0.01, 0.16, 1) 0.65s;
  width: fit-content;
  transform: translate(-15px, -15px);
  transition: 0.4s ease-in-out;
  opacity: 0;
  visibility: hidden;
  transition-delay: 0.5s;
}

.johny {
  position: absolute;
  width: fit-content;
  transition: 0.65s cubic-bezier(0.52, 0.01, 0.16, 1) 0.65s;
  transform: translate(15px, 15px);
  transition: 0.4s ease-in-out;
  opacity: 0;
  transition-delay: 0.5s;
  visibility: hidden;
}

.info {
  background-color: #212121;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  width: fit-content;
  height: 0;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
  padding: 0px 3vw;
  transition: 0.3s ease-in-out;
}

.name {
  margin: 15px 0;
  -webkit-font-smoothing: antialiased;
  line-height: 1.2em;
  font-weight: normal;
  color: #fff;
  font-size: 24px;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s ease-in-out;
  transition-delay: 0.4s;
}
.view-bio {
  text-transform: uppercase;
  font-size: 10px;
  color: #fff;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s ease-in-out;
  transition-delay: 0.6s;
}

.info_hovered {
  height: auto;
  opacity: 1;
  padding: 3vw;
  visibility: visible;
  transition: 0.4s ease-in-out;
}

.info_hovered .name {
  opacity: 1;
  visibility: visible;
}

.info_hovered .view-bio {
  opacity: 1;
  visibility: visible;
}

.showed-founders {
  transform: translate(0, 0);
  opacity: 1;
  visibility: visible;
}
.showed {
  opacity: 1;
  visibility: visible;
}
</style>
