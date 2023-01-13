<template>
  <div
    class="container"
    :class="{
      showed: isIntersecting,
    }"
    ref="container"
  >
    <h3 class="section_title">pocket dynamos</h3>
    <h1 class="title">
      We're designers, directors, strategists, and awkward dancers.
    </h1>
    <div class="description">
      We have over a decade of experience in the creative industry, producing
      exciting experiences for brands that are as smart, as they are effective.
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isIntersecting = ref(false);

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
</script>

<style scoped>
.container {
  opacity: 0;
  visibility: hidden;
  transition: 0.3s ease-in-out;
}
.section_title {
  font-size: 11px;
  padding-bottom: 24px;
  margin-bottom: 40px;
  text-transform: uppercase;
  color: #fff;
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
  color: #fff;
  margin: 21px auto;
}
.description {
  color: #fff;
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
