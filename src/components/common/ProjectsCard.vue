<script setup>
import { ref, onMounted, defineProps } from 'vue'

const props = defineProps({
  description: String,
  title: String,
  logo: String,
  status: String,
  type: String,
  langsProject: { type: Array, default: () => [] },
  linkProject: { type: Object },
  images: {
    type: Array,
    default: () => []
  },
  members: {
    type: Array,
    default: () => []
  }
})

const UrlProject = (id) => {
  return `/project/${id}`
}

const carouselRef = ref(null)
const carouselInnerRef = ref(null)
const imageElements = ref([])

let currentIndex = 0
let intervalId = null

const showImage = (index) => {
  const offset = index * -100
  carouselInnerRef.value.style.transform = `translateX(${offset}%)`
}

const nextImage = () => {
  currentIndex = (currentIndex + 1) % imageElements.value.length
  showImage(currentIndex)
}

const activateCarousel = () => {
  intervalId = setInterval(nextImage, 1500)
}

const deactivateCarousel = () => {
  clearInterval(intervalId)
  carouselInnerRef.value.style.transform = `translateX(${0}%)`
}

onMounted(() => {
  imageElements.value = props.images.map((src) => {
    const img = new Image()
    img.src = src
    img.classList.add('container-img')
    carouselInnerRef.value.appendChild(img)
    return img
  })
})
</script>

<template>
  <div class="card" @mouseenter="activateCarousel" @mouseleave="deactivateCarousel">
    <RouterLink :to="UrlProject(linkProject.id)">
      <!-- sem certeza desse figure -->
      <header>
        <img :src="logo" class="image" />
        <div class="carousel" ref="carouselRef">
          <div class="carousel-inner" ref="carouselInnerRef">
            <img v-for="(img, index) in images" :key="index" class="container-img" :src="img" />
          </div>
        </div>
      </header>
      <div class="content">
        <h3>{{ title }}</h3>
        <p>
          {{ description }}
        </p>
        <footer>
          <div class="col">
            <span>Equipe</span>
            <div class="members">
              <img
                v-for="member in members.slice(0, 3)"
                :key="member"
                :src="member.image"
              />
              <span v-if="members.length > 3">
                +{{ members.length - 3 }}
              </span>
            </div>
          </div>
          <div class="col" v-if="langsProject.length > 0">
            <span>Tecnologias</span>
            <div>
              <box-icon
                v-for="langId in langsProject"
                :key="langId"
                color="var(--dark-shadow)"
                size="2em"
                :type="langId.type"
                :name="langId.icon"
              ></box-icon>
            </div>
          </div>
        </footer>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
h3 {
  -webkit-line-clamp: 2;
}

p {
  margin: 10px 0;
  text-align: justify;
  -webkit-line-clamp: 4;
}

p,
h3 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

a {
  text-decoration: none;
}

.carousel {
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  aspect-ratio: 16 / 6;
  transition: transform 0.3s ease;
}

.carousel-inner img {
  height: fit-content;
}
.card {
  width: 32%;
  border: 5px solid var(--light-gray);
  margin-bottom: 70px;
  background-color: var(--white);
}

.container-img {
  width: 100%;
  filter: brightness(0.5);
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 0.6s;
}

.card:hover .container-img {
  filter: brightness(1);
}

.content {
  padding: 10px;
  display: flex;
  height: 40vh;
  border-top: 5px solid var(--color-details-projects);
  flex-direction: column;
  justify-content: space-evenly;
}

footer {
  display: flex;
  justify-content: space-between;
}
.col {
  gap: 5px;
  display: flex;
  flex-direction: column;
}
.image {
  flex-shrink: 0;
  height: 4rem;
  margin: 10px;
  position: absolute;
  z-index: 1;
  width: 4rem;
  opacity: 1;
  transition: opacity 0.3s;
}

.card:hover .image {
  opacity: 0;
}

.members {
  display: flex;
}

span {
  font-weight: 500;
  color: var(--text-color);
  font-size: 1.2em;
}

.members img,
.members span {
  width: 37px;
  position: relative;
  border-radius: 50px;
  margin-right: -14px;
}

.members span {
  display: flex;
  justify-content: center;
  font-weight: 500;
  z-index: 1;
  align-items: center;
  background-color: #fce8da;
}
</style>
