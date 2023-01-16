<template>
  <div class="container">
    
    <div
      class="leigh"
      :class="{
        'showed-founders': isIntersecting,
      }"
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
        src="https://toyfight.co/wp-content/themes/toybox/img/figures/tinified/leigh-exploded.png"
      />
    </div>
    <div
      class="johny"
      :class="{
        'showed-founders': isIntersecting,
      }"
    >
      <div
        class="content-to-hover"
        @mouseenter="JohnyHoveredInfo = true"
        @mouseleave="JohnyHoveredInfo = false"
      ></div>
      <img
        class="toy-image"
        src="https://toyfight.co/wp-content/themes/toybox/img/figures/tinified/jonny-exploded.png"
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

<script setup></script>

<style scoped>
.container {
  padding-bottom: 20vw;
  padding-top: 15vw;
  background: rgb(255, 217, 72);
  background: linear-gradient(
    25deg,
    rgba(255, 217, 72, 1) 53%,
    rgba(255, 212, 45, 1) 53%
  );
  position: relative;
}

.toy-image {
  width: 40vw;
  height: 40vw;
}

.leigh {
  position: absolute;
  transition: 0.65s cubic-bezier(0.52, 0.01, 0.16, 1) 0.65s;
  right: 5%;
  top: 5%;
  width: fit-content;
  transform: translate(-15px, -15px);
  transition: 0.4s ease-in-out;
  transition-delay: 0.5s;
}

.johny {
  position: absolute;
  width: fit-content;
  transition: 0.65s cubic-bezier(0.52, 0.01, 0.16, 1) 0.65s;
  bottom: 13%;
  left: 5%;
  transform: translate(15px, 15px);
  transition: 0.4s ease-in-out;
  transition-delay: 0.5s;
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
