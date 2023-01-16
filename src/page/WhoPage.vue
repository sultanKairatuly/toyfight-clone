<template>
  <div id="app">
    <SectionMainPage
      :section-title="sectionTitle"
      :back-color="backColor"
      :secondary-color="'#1544c0'"
    />
    <SectionSecondaryPage
      :section-title="secondaryTitle"
      :section-subtitle="secondarySubtitle"
      :section-description="secondaryDescription"
      :back-color="'#1544c0'"
    />
    <BioSectionPage
      :image-one="'https://toyfight.co/wp-content/themes/toybox/img/figures/tinified/leigh-exploded.png'"
      :image-two="'https://toyfight.co/wp-content/themes/toybox/img/figures/tinified/jonny-exploded.png'"
      :position-one="positionOne"
      :position-two="positionTwo"
      :gradient-color="gradientColor"
      :size="'40vw'"
      :container-paddings="containerPaddings"
    >
      <template #title>
        <h3
          class="section_title"
          :class="{
            showed: isIntersecting,
            long: isIntersecting,
          }"
        >
          founders
        </h3>
        <h1
          class="title"
          :class="{
            showed: isIntersecting,
          }"
        >
          Meet Johny & Leigh.
        </h1></template
      >
    </BioSectionPage>
    <FounderInfo :founder="Johny" />
    <FounderInfo :founder="Leigh" />
    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from "vue";

import FounderInfo from "../components/FounderInfo.vue";
import SectionMainPage from "../components/SectionMainPage.vue";
import SectionSecondaryPage from "../components/SectionSecondaryPage.vue";
import BioSectionPage from "../components/BioSectionPage.vue";
import AppFooter from "../components/AppFooter.vue";

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

const secondaryTitle = "pocket dynamos";
const secondarySubtitle =
  "We're designers, directors, strategists, and awkward dancers.";
const secondaryDescription = `We have over a decade of experience in the creative industry, producing
      exciting experiences for brands that are as smart, as they are effective.`;

const sectionTitle = "Who.";
const backColor = {
  background: "rgb(22, 68, 190)",
  background: `linear-gradient(
    180deg,
    rgba(22, 68, 190, 1) 17%,
    rgba(15, 50, 176, 1) 65%,
    rgba(18, 57, 186, 1) 68%
)`,
};

const isIntersecting = ref(false);

window.addEventListener("scroll", (e) => {
  let offset = window.scrollY;

  if (offset >= 1000) {
    isIntersecting.value = true;
  } else {
    isIntersecting.value = false;
  }
});

const positionOne = {
  right: "5%",
  top: "5%",
};

const positionTwo = {
  bottom: "13%",
  left: "5%",
};

const gradientColor = `linear-gradient(
    165deg,
    rgba(21, 68, 192, 1) 30%,
    rgba(33, 79, 198, 1) 30%
  )`;

const containerPaddings = {
  pb: "30vw",
  pt: "25vw",
};
</script>

<style scoped>
.title {
  font-size: 42px;
  width: 800px;
  text-align: center;
  color: #fff;
  margin: 21px auto;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s ease-in-out;
  transition-delay: 0.3s;
}

.showed {
  opacity: 1;
  visibility: visible;
}

.section_title {
  font-size: 11px;
  padding-bottom: 24px;
  margin-bottom: 40px;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  position: relative;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s ease-in-out;
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

.long::after {
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
  transition-delay: 0.8s;
}
</style>
