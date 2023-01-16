<template>
  <AppHeader />
  <router-view></router-view>
</template>

<script setup>
import AppHeader from "./components/AppHeader.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Ginger";
  z-index: 5;
}

@font-face {
  font-family: "Ginger";
  src: url(./assets/fonts/Ginger/Ginger.woff2);
}
</style>
