<template>
  <footer class="footer" ref="footer">
    <div class="footer-top">
      <img
        class="footer_text"
        src="../assets/download.svg"
        :class="{
          'showed-text': intersecting,
        }"
      />
      <img
        class="footer_hand"
        src="https://toyfight.co/wp-content/themes/toybox/img/figures/tinified/footer-rock.png"
        :class="{
          'showed-hand': intersecting,
        }"
      />
    </div>
    <div
      class="footer_bottom"
      :class="{
        'showed-bottom': intersecting,
      }"
    >
      <div class="footer_info-text">
        ToyFight® — Suite 4C Origin, Spring Gardens, Manchester, M2 2BQ, UK
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted, ref } from "vue";

const footer = ref(null);
const intersecting = ref(false);

const cb = (e) => {
  if (e[0].isIntersecting) {
    intersecting.value = true;
  } else {
    intersecting.value = false;
  }
};
const options = {
  threshold: 0.35,
  root: null,
  rootMargin: "0px",
};
const observer = new IntersectionObserver(cb, options);

onMounted(() => {
  observer.observe(footer.value);
});
</script>

<style scoped>
.footer {
  position: relative;
  height: 500px;
  overflow: hidden;
  background-color: #f1f5f5;
}
.footer-top {
  height: 465px;
}
.footer_bottom {
  background-color: #fff;
  padding: 15px 41px 16px;
  opacity: 0;
  visibility: hidden;
  transition: 0.5s ease;
  transition-delay: 1s;
  transform: translateY(45px);
  height: 45px;
}
.footer_text {
  width: 660px;
  height: 330px;
  position: absolute;
  top: 50%;
  left: 50%;
  transition: 0.5s ease-in-out;
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -30%);
}
.footer_hand {
  width: 175px;
  height: 450px;
  position: absolute;
  bottom: -450px;
  left: 50%;
  transition: 0.3s linear;
  transition-delay: 0.5s;
  opacity: 0;
  visibility: hidden;
  transform: translateX(-50%);
}

.footer_info-text {
  font-size: 11px;
  color: #212121;
}

.showed-hand {
  opacity: 1;
  visibility: visible;
  bottom: 0;
}

.showed-text {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, -50%);
}

.showed-bottom {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
</style>
