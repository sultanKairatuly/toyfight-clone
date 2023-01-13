<template>
  <div id="app">
    <AppHeader />
    <SectionWho />
    <WhoSectionDymanos />
    <WhoSectionFounders />
    <FounderInfo :founder="Johny" />
    <FounderInfo :founder="Leigh" />
    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from "vue";

import AppHeader from "./components/AppHeader.vue";
import FounderInfo from "./components/FounderInfo.vue";
import SectionWho from "./components/WhoSectionMainPage.vue";
import WhoSectionDymanos from "./components/WhoSectionDymanos.vue";
import WhoSectionFounders from "./components/WhoSectionFounders.vue";
import AppFooter from "./components/AppFooter.vue";

const Johny = {
  position: "JONNY LANDER – CD / CO-FOUNDER",
  title: "Napoleon complex.",
  subtitle: "A hands-on creative with more than 16 years design experience.",
  description: `Jonny has been responsible for bringing concepts to life for clients such as Nintendo, Estée Lauder, Oxfam, Scribner, 
          Sony, and many others. His work has been recognised by One Show, ADC, Webby Awards, and Cannes Lions. When Jonny isn\'t 
          busy educating people on the difference between fonts and typefaces, he can be found taking part in competitive tickling 
          competitions across the UK.`,
  image1:
    "https://toyfight.co/wp-content/themes/toybox/img/figures/tinified/jon-exploded-face-on-1.png",
  image2:
    "https://toyfight.co/wp-content/themes/toybox/img/figures/tinified/jon-exploded-face-on-2.png",
  image3:
    "https://toyfight.co/wp-content/themes/toybox/img/figures/tinified/jon-exploded-face-on-3.png",
  image4:
    "https://toyfight.co/wp-content/themes/toybox/img/figures/tinified/jon-exploded-face-on-4.png",
};

const Leigh = {
  position: "LEIGH WHIPDAY – CD / CO-FOUNDER",
  title: "Beardless wonder.",
  subtitle: "A multi-award winning creative, with a passion for the details.",
  description: `Leigh has spent the last 16 years designing, and directing work for some of the world’s most
   exciting and forward-thinking brands, such as Google, Coca-Cola, Pepsi, Ford, Netflix, and Gorton Market. 
   Outside of work Leigh can be found performing as the frontman of Warrant tribute act, 'Sweet Cherry Pie'.`,
  image1:
    "https://toyfight.co/wp-content/themes/toybox/img/figures/tinified/leigh-exploded-face-on-1.png",
  image2:
    "https://toyfight.co/wp-content/themes/toybox/img/figures/tinified/leigh-exploded-face-on-2.png",
  image3:
    "https://toyfight.co/wp-content/themes/toybox/img/figures/tinified/leigh-exploded-face-on-3.png",
  image4:
    "https://toyfight.co/wp-content/themes/toybox/img/figures/tinified/leigh-exploded-face-on-4.png",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Ginger";
  z-index: 5;
}

#app {
  background-color: #1644be;
  padding-top: 30px;
}

@font-face {
  font-family: "Ginger";
  src: url(./assets/fonts/Ginger/Ginger.woff2);
}
</style>
