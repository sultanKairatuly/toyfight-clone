<template>
  <div class="container">
    <div class="text">
      <div class="position">{{ props.founder.position }}</div>
      <div class="title">{{ props.founder.title }}</div>
      <div class="subtitle">{{ props.founder.subtitle }}</div>
      <div class="description">{{ props.founder.description }}</div>
    </div>
    <div class="figure">
      <img class="founder-image" :src="props.founder.image1" />
      <img class="founder-image" :src="props.founder.image2" />
      <img class="founder-image" :src="props.founder.image3" />
      <img class="founder-image" :src="props.founder.image4" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  founder: {
    type: Object,
    default: {},
    required: true,
  },
});
</script>

<style scoped>
.container {
  background-color: #e7eeed;
  display: flex;
  padding: 20vw 0 10vw;
  justify-content: center;
  color: #1544c0;
  border-bottom: 1px solid #dbe2e1;
}

.text {
  width: 30%;
}
.figure {
  position: relative;
  width: 42vw;
  height: 42vw;
}
.founder-image {
  position: absolute;
  object-fit: contain;
  width: 37vw;
  height: 37vw;
}

.position {
  font-size: 11px;
  text-transform: uppercase;
}
.title {
  font-size: 5vw;
  text-transform: capitalize;
  margin-bottom: 48px;
}
.subtitle {
  font-size: 1.5vw;
  margin-bottom: 11px;
  color: #212121;
  font-weight: normal;
}
.description {
  font-size: 16px;
  color: #212121;
}
</style>
