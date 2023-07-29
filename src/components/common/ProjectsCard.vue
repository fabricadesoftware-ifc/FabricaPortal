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
          <div class="col" v-if="members.length > 0">
            <span>Equipe</span>
            <!--             <span class="alert" v-if="members.length === 0">Não há membros cadastrados</span> -->
            <div class="members">
              <img v-for="member in members.slice(0, 3)" :key="member" :src="member.image" />
              <span v-if="members.length > 3"> +{{ members.length - 3 }} </span>
            </div>
          </div>
          <div class="col" v-if="langsProject.length > 0">
            <span>Tecnologias</span>
            <div :class="[{ langs: langsProject.length > 1 }]">
              <box-icon
                v-for="langId in langsProject"
                :key="langId"
                color="var(--dark-gray)"
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
  border: var(--border) solid var(--light-gray);
  margin-bottom: 70px;
  background-color: var(--bg-white);
}
header {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container-img {
  width: 100%;
  /*   filter: blur(1px); */
  filter: brightness(0.5);
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter var(--effect); 
}

.card:hover .container-img {
  /*   filter: blur(0); */
  filter: brightness(1);
}

.content {
  padding: 1em;
  display: flex;
  height: 20em;
  gap: 1em;
  border-top: var(--border) solid var(--projects);
  flex-direction: column;
  justify-content: center;
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
.langs {
  display: flex;
  justify-content: space-evenly;
}
/* .alert {
  font-weight: 600;
  font-style: italic;
} */
.image {
  flex-shrink: 0;
  height: auto;
  position: absolute;
  z-index: 1;
  width: 8rem;
  opacity: 1;
  transition: opacity var(--effect-image);
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
  font-size: 1.2rem;
}

.members img,
.members span {
  width: 2em;
  position: relative;
  border-radius: 50%;
  margin-right: -0.5em;
}

.members span {
  width: 35px;
  display: flex;
  justify-content: center;
  font-weight: 500;
  z-index: 1;
  align-items: center;
  background-color: var(--light-gray);
}
</style>
