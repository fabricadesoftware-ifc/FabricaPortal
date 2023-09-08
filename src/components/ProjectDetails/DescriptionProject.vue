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
  type: String,
  langsProject: { type: Array, default: () => [] },
  tags: Array,
  newField: Array,
  access: { type: Array, default: () => [] }
})

const modalHidden = ref(true)
const toggleModal = () => {
  modalHidden.value = !modalHidden.value
}
</script>

<template>
  <section class="description">
    <header class="container" @click="toggleModal">
      <h3>Sobre esse projeto</h3>
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
        <h3 class="title"></h3>
      </div>
      <button class="btn-close" @click="toggleModal"><box-icon name="x"></box-icon></button>
    </header>
    <main>
      <section class="details">
        <h4>Detalhes</h4>
        <ul>
          <li>
            <h5>Tipo:</h5>
            <span>{{ type }}</span>
          </li>
          <li>
            <h5>Status:</h5>
            <span>{{ status }}</span>
          </li>
          <li v-if="version">
            <h5>Versão:</h5>
            <span>{{ version }}</span>
          </li>
          <li v-if="updated">
            <h5>Atualizado em:</h5>
            <span>{{ updated }}</span>
          </li>
          <li>
            <h5>Cordenador(es):</h5>
            <div>
              <button>Eduardo da Silva</button>
              <button>Fábio longo de Moura</button>
            </div>
          </li>
          <li>
            <h5>Bolsista(s):</h5>
            <div>
              <button>Eduardo da Silva</button>
            </div>
          </li>
          <li>
            <h5>Parceiros(s):</h5>
            <div>
              <button>Eduardo da Silva</button>
            </div>
          </li>
          <li v-if="published">
            <h5>Publicado em:</h5>
            <span>{{ published }}</span>
          </li>
          <li v-if="langsProject.length > 0">
            <h5>Tecnologias:</h5>
            <ul id="content-lang">
              <li v-for="langId in langsProject" :key="langId">
                <button>
                  {{ langId.desc }}
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section v-if="access.length > 0" class="access">
        <h4>Acesso</h4>
        <ul>
          <li v-for="item in access" :key="item">
            <a :href="item.link">
              <button>
                <box-icon :type="item.type" :name="item.icon"></box-icon>
                {{ item.desc }}
              </button>
            </a>
          </li>
        </ul>
      </section>
      <section>
        <div v-for="field in newField" :key="field">
          <h4>{{ field.title }}</h4>
          <p>{{ field.desc }}</p>
        </div>
      </section>
      <section v-if="tags" class="tags">
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
  transform: scale(0);
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

section:hover h3:before,
section:hover h3:after,
section:hover h3:nth-child(1)::before,
section:hover h3:nth-child(1)::after,
section:hover h3:nth-child(2)::before {
  transform: scale(1);
}

body.modal-open {
  overflow: hidden;
}

#modal-content main {
  padding: 10px 20px;
  overflow-y: scroll;
  height: 65vh;
}

ul {
  list-style-type: none;
  gap: 12px;
}

li ul {
  display: flex;
}
.access ul {
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
  background-color: var(--white);
  padding: 4px;
  border-radius: 50em;
  border: 0;
  margin-top: 0;
  outline: 0;
  display: flex;
  transition: transform var(--effect);
  align-items: center;
  transform: scale(0.8);
}
section:hover .btn-arrow {
  background-color: var(--primary-color);
  transform: scale(1);
  cursor: pointer;
}

.tags ul {
  display: flex;
  flex-wrap: wrap;
}

#modal-content section p {
  padding: 10px;
}

#modal-content section {
  margin: 15px 0;
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

.title:before,
.title:after,
.title:nth-child(1)::before,
.title:nth-child(1)::after,
.title:nth-child(2)::before {
  content: '';
  position: absolute;
  border-radius: 50%;
  transform: scale(1);
  transition: var(--effect) transform;
}
.title:nth-child(3)::before {
  background-color: var(--secondary-color);
  top: 0.9vh;
  right: 1em;
  width: 15px;
  height: 15px;
}

.title:nth-child(3)::after {
  background-color: var(--primary-color);
  top: 0.5vh;
  right: 2em;
  width: 20px;
  height: 20px;
}

.title:nth-child(2)::after {
  background-color: var(--tertiary-color);
  top: 1.8vh;
  right: 9px;
  width: 12px;
  height: 12px;
}

.title:nth-child(2)::before {
  top: 4vh;
  right: 6px;
  width: 8px;
  height: 8px;
  background-color: var(--quaternary-color);
}
/* .title:nth-child(3)::before {
  background-color: var(--secondary-color);
  top: 15px;
  left: -23px;
  width: 15px;
  height: 15px;
}

.title:nth-child(3)::after {
  background-color: var(--primary-color);
  top: -10px;
  left: -23px;
  width: 20px;
  height: 20px;
}

.title:nth-child(2)::after {
  background-color: var(--tertiary-color);
  top: -17px;
  left: 0em;
  width: 12px;
  height: 12px;
}

.title:nth-child(2)::before {
  top: -15px;
  left: 1em;
  width: 8px;
  height: 8px;
  background-color: var(--quaternary-color);
} */

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
  z-index: 9;
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
</style>