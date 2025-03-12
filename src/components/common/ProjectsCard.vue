<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  description: String,
  title: String,
  logo: String,
  status: String,
  type: String,
  languagesUsed: { type: Array, default: () => [] },
  linkProject: { type: Object },
  image: { // Changed from images array to single image
    type: String
  },
  members: {
    type: Array,
    default: () => []
  }
})

const UrlProject = (id) => {
  return `/project/${id}`
}
</script>

<template>
  <div class="card">
    <RouterLink :to="UrlProject(linkProject.id)">
      <header>
        <img src="@/assets/images/logos/projeto/site_fabrica_icon.svg" class="image" />
        <div class="image-container">
          <img class="container-img" src="@/assets/images/Projects/FabricaPortal/PortalFabrica.png" />
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
            <div class="members">
              <img v-for="member in members.slice(0, 3)" :key="member" :src="member.image.file" />
              <span v-if="members.length > 3"> +{{ members.length - 3 }} </span>
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

.image-container {
  width: 100%;
  overflow: hidden;
}

.card {
  width: 32%;
  margin-bottom: 70px;
  flex-shrink: 0;
  background-color: var(--bg-white);
  min-width: 300px;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-img {
  width: 100%;
  filter: brightness(0.5);
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  display: block;
  transition: filter var(--effect);
}

.card:hover .container-img {
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

.image {
  flex-shrink: 0;
  height: auto;
  position: absolute;
  z-index: 1;
  width: 10%;
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
  height: 2em;
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

@media only screen and (max-width: 1024px) {
  .card {
    width: 48%;
  }
  .image{
    width: 10%
  }
}

@media only screen and (max-width: 800px) {
  .image{
    width: 15%
  }
}

@media only screen and (max-width: 600px) {
  .card {
    width: 100%;
  }
  .image{
    width: 30%
  }
}

@media only screen and (max-width: 425px) {
  .card {
    width: 85%;
    margin-bottom: 15px;
  }
  footer {
    display: none;
  }
  header {
    position: sticky;
  }
  .content {
    height: 14em;
  }
  .image {
    width: 6rem;
  }
  h3 {
    font-size: 1.5em;
  }
}
</style>