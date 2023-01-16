<template>
  <SectionMainPage :back-color="backColor" :secondary-color="'#ffd42d'" />
  <SectionSecondaryPage
    :section-title="secondaryTitle"
    :section-subtitle="secondarySubtitle"
    :section-description="secondaryDescription"
    :back-color="'#ffd42d'"
  />
  <BioSectionPage
    :image-one="'https://toyfight.co/wp-content/themes/toybox/img/cms/tinified/home-projects-nerd.png'"
    :image-two="'https://toyfight.co/wp-content/themes/toybox/img/cms/tinified/home-projects-toggl-mobile.png'"
    :size="'30vw'"
    :position-one="positionOne"
    :position-two="positionTwo"
    :gradient-color="gradientColor"
    :container-paddings="containerPaddings"
  >
    <template #title>
      <h1 class="title">Recent<br />Work</h1>
      <div class="link">
        <div class="link__text">View all work</div>
        <div class="link__arrow">
          <span></span>
        </div>
      </div>
    </template>
  </BioSectionPage>
  <AppFooter />
</template>

<script setup>
import SectionMainPage from "../components/SectionMainPage.vue";
import SectionSecondaryPage from "../components/SectionSecondaryPage.vue";
import BioSectionPage from "../components/BioSectionPage.vue";
import AppFooter from "../components/AppFooter.vue";

const secondaryTitle = "SMALL AND CRAFTY";
1;
const secondarySubtitle =
  "ToyFight is an award winning creative agency specialising in design.";
const secondaryDescription = `We partner with global brands and emerging businesses to create exciting and meaningful experiences, whether digital or non-digital.`;

const backColor = {
  background: "rgb(255,219,23)",
  background:
    "linear-gradient(180deg, rgba(255,219,23,1) 17%, rgba(253,214,19,1) 65%, rgba(253,227,42,1) 68%)",
};

const positionOne = {
  left: "10%",
  top: "6%",
};

const positionTwo = {
  bottom: "24%",
  right: "8%",
};

const gradientColor = `linear-gradient(
    27deg,
    rgba(255, 217, 72, 1) 54%,
    rgba(255, 212, 45, 1) 54%
  )`;

const containerPaddings = {
  pb: "20vw",
  pt: "15vw",
};
</script>

<style scoped>
.title {
  color: #fffade;
  font-size: 91px;
  text-transform: capitalize;
  margin-bottom: 31px;
  text-align: center;
}

.link {
  height: 42px;
  border: 2px solid #fff;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
  padding-right: 46px;
  padding-left: 16px;
  cursor: pointer;
}

.link__text {
  color: #212121;
  font-size: 10.5px;
  text-transform: uppercase;
  border-right: 2px solid #fff;
  display: flex;
  align-items: center;
  padding-right: 10px;
  height: 100%;
}
.link__arrow {
  width: 20px;
  margin: -14px 0 0 -10px;
  position: absolute;
  right: 12px;
  top: 100%;
}
.link__arrow span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transition: 0.45s cubic-bezier(0.7, 0.3, 0, 1);
  -moz-transition: 0.45s cubic-bezier(0.7, 0.3, 0, 1);
  transition: 0.45s cubic-bezier(0.7, 0.3, 0, 1);
}

.link__arrow span::before {
  content: "";
  display: block;
  background-image: url(https://toyfight.co/wp-content/themes/toybox/img/ui/arrow-head-black.svg);
  background-repeat: no-repeat;
  background-position: right center;
  position: absolute;
  height: 7px;
  width: 20px;
  bottom: 50%;
  right: 0;
}

.link__arrow span::after {
  content: "";
  display: block;
  height: 2px;
  width: 90%;
  left: 0;
  margin-top: -1px;
  background-color: #212121;
  position: absolute;
  bottom: 2px;
}
</style>
