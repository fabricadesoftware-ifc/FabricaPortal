<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    default: () => []
  }
})

let imageIndex = ref(0)
function plusSlides(n) {
  showSlides(imageIndex.value + n)
}

function currentSlide(n) {
  showSlides(n)
}

function showSlides(n) {
  imageIndex.value = (n + props.images.length) % props.images.length
}
</script>
<template>
  <section>
    <div class="slideshow-container">
      <div
        v-for="(image, currentIndex) in images"
        :key="currentIndex"
        class="mySlides fade"
        :style="{ display: imageIndex === currentIndex ? 'block' : 'none' }"
      >
        <div class="numbertext">{{ currentIndex + 1 }} / {{ images.length }}</div>
        <img :src="image?.file" />
      </div>
      <a class="prev" @click="plusSlides(-1)">
        <box-icon color="var(--white)" type="solid" name="chevron-left"></box-icon>
      </a>
      <a class="next" @click="plusSlides(1)">
        <box-icon color="var(--white)" type="solid" name="chevron-right"></box-icon>
      </a>
    </div>
    <br />
    <div class="pointers">
      <span
        v-for="(image, currentIndex) in images"
        :key="currentIndex"
        class="dot"
        :class="{ active: imageIndex === currentIndex }"
        @click="currentSlide(currentIndex)"
      ></span>
    </div>
  </section>
</template>
<style scoped>
img {
  box-shadow: var(--box-shadow);
  width: 100%;
}
.slideshow-container {
  display: flex;
  align-items: center;
  position: relative;
  margin: auto;
}
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1em


}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  width: auto;
  padding: 8px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  background-color: var(--light-shadow);
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.numbertext {
  color: var(--white);
  background-color: var(--light-shadow);
  font-size: 12px;
  border-radius: var(--border-rd);
  padding: 3px;
  position: absolute;
  top: 1%;
  left: 1%;
}
.pointers {
  display: flex;
  gap: 5px;
}
.dot {
  cursor: pointer;
  height: 10px;
  width: 10px;
  background-color: #bbb;
  border-radius: 20px;
  transition: background-color var(--effect);
  transition: width var(--effect);
}
.active,
.dot:hover {
  background-color: var(--secondary-color);
  width: 20px;
  border-radius: 20px;
  height: 10px;
}
.dot:hover {
  background-color: var(--primary-color);
}
</style>
