<script setup>
import { ref } from 'vue'

defineProps({
  description: String,
  logo: String,
  title: String,
  status: String,
  published: String,
  updated: String,
  version: String,
  tags: Array,
})

const modalHidden = ref(true)
const toggleModal = () => {
  modalHidden.value = !modalHidden.value
}
</script>

<template>
  <section class="description">
    <header class="container" @click="toggleModal">
      <h3>Sobre essa noticia</h3>
      <h3></h3>
      <button class="btn-arrow">
        <box-icon name="right-arrow-alt" color="white"></box-icon>
      </button>
    </header>
    <p class="short-bio">{{ description }}</p>
  </section>
  <div class="modal-overlay" @click="toggleModal" :class="{ hide: modalHidden }"></div>
  <section id="modal-content" :class="[{ hide: modalHidden }]">
    <header>
      <div>
        <img class="logo" :src="logo" />
        <h3 class="title">{{ title }}</h3>
      </div>
      <button class="btn-close" @click="toggleModal"><box-icon name="x"></box-icon></button>
    </header>
    <main>
      <section class="details">
        <h4>Detalhes</h4>

        <ul>
          <li v-if="status != ''">
            <h5>Status:</h5>
            <span>{{ status }}</span>
          </li>
          <li v-if="version != null">
            <h5>Versão:</h5>
            <span>{{ version }}</span>
          </li>
          <li v-if="updated != null">
            <h5>Atualizado em:</h5>
            <span>{{ updated }}</span>
          </li>
          <li v-if="published != null">
            <h5>Publicado em:</h5>
            <span>{{ published }}</span>
          </li>
        </ul>
      </section>

      <section v-if="tags != null" class="tags">
        <h4>Tags</h4>
        <ul>
          <li v-for="tag in tags" :key="tag">
            <button>{{ tag }}</button>
          </li>
        </ul>
      </section>
    </main>
  </section>
</template>

<style scoped>
p {
  text-align: justify;
}

.container {
  gap: 10px;
  display: flex;
  align-items: center;
  position: relative;
}

.container h3:before,
.container h3:after,
.container h3:nth-child(1)::before,
.container h3:nth-child(1)::after,
.container h3:nth-child(2)::before {
  content: '';
  position: absolute;
  border-radius: 50%;
  transition: var(--effect) transform;
}

.container h3:nth-child(1)::before {
  background-color: var(--secondary-color);
  top: -15px;
  left: -5px;
  width: 15px;
  height: 15px;
}

.container h3:nth-child(1)::after {
  background-color: var(--tertiary-color);
  top: -3px;
  left: 11.5em;
  width: 12px;
  height: 12px;
}

.container h3:nth-child(2)::before {
  top: 15px;
  left: -18px;
  width: 8px;
  height: 8px;
  background-color: var(--quaternary-color);
}

body.modal-open {
  overflow: hidden;
}

#modal-content main {
  padding: 0em 1em 2em 1em;
  overflow-y: scroll;
  height: 65vh;
  display: flex;
  gap: 1em;
  flex-direction: column;
}

ul {
  list-style-type: none;
  gap: 12px;
}

li ul {
  display: flex;
}
.accessDetails ul {
  display: flex;
}
#content-lang {
  justify-content: flex-start;
  padding: 0;
}

#content-lang li {
  width: fit-content;
}

.details ul {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.details li {
  display: flex;
  flex-direction: column;
  width: 48%;
}
.container h3:hover {
  cursor: pointer;
}
.btn-arrow {
  background-color: var(--primary-color);
  padding: 4px;
  border-radius: 50em;
  border: 0;
  margin-top: 0;
  outline: 0;
  display: flex;
  transition: transform var(--effect);
  cursor: pointer;
  align-items: center;
}

.tags ul {
  display: flex;
  flex-wrap: wrap;
}

#modal-content section p {
  padding: 10px;
}

#modal-content header {
  justify-content: space-between;
  padding: 20px;
  display: flex;
}

#modal-content header div {
  gap: 15px;
  display: flex;
  align-items: center;
}
#modal-content button {
  margin-top: 10px;
  border-radius: var(--border-rd);
  justify-content: center;
  display: flex;
  padding: 5px;
  border: none;
  align-items: center;
}

a {
  text-decoration: none;
  color: var(--text-color);
}
.btn-close {
  margin-top: 0;
  padding: 0px;
  width: 3em;
  height: 3em;
  cursor: pointer;
}
.description p {
  margin-top: 5px;
}

main .midias {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  transition: opacity 0.2s, pointer-events 0.2s;
}

.modal-overlay.hide {
  opacity: 0;
  pointer-events: none;
}

#modal-content {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  background-color: var(--white);
  z-index: 100;
  transition: opacity 0.2s, pointer-events 0.2s;
  opacity: 1;
  pointer-events: all;
  overflow: hidden;
  height: 80vh;
}

#modal-content.hide,
.hide {
  opacity: 0;
  pointer-events: none;
}

.logo {
  width: 5em;
}
@media only screen and (max-width: 1024px) {
  #modal-content {
    width: 70%;
  }
}
@media only screen and (max-width: 725px) {
  .details li {
    width: 100%;
  }
  .title {
    display: none;
  }
}
@media only screen and (max-width: 600px) {
  .container h3:nth-child(1)::after {
    top: -10px;
  }
}
@media only screen and (max-width: 425px) {
  .container h3:nth-child(2)::before {
    top: 27px;
    left: 36px;
  }
  #modal-content {
    width: 90%;
  }
}
</style>