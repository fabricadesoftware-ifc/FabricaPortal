<script setup>
import { ref } from 'vue';

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
    access: { type: Array, default: () => [] },
});

const modalHidden = ref(true);
const toggleModal = () => {
    modalHidden.value = !modalHidden.value;
};
</script>


<template>
    <section class="description">
        <header>
            <h3>Sobre esse projeto</h3>
            <button class="btn-arrow" @click="toggleModal">
                <box-icon name='right-arrow-alt'></box-icon>
            </button>
        </header>
        <p class="short-bio">{{ description }}</p>
    </section>
    <div class="modal-overlay" v-body-scroll-lock="!modalHidden" :class="{ 'hide': modalHidden }"></div>
    <section id="modal-content" :class="[{ hide: modalHidden }]">
        <header>
            <div>
                <img class="logo" :src="logo" />
                <h3>{{ title }}</h3>
            </div>
            <button class="btn-arrow" @click="toggleModal"><box-icon name='x'></box-icon></button>
        </header>
        <main>
            <section class="details">
                <h4>
                    Detalhes
                </h4>
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

header {
    display: flex;
    gap: 15px;
    align-items: flex-start;

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
.access ul{
    display: flex;
}
#content-lang {
    justify-content: flex-start;
    padding: 0
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

button {
    background-color: var(--light-gray);
    padding: 4px;
    border-radius: 5px;
    border: none;
    display: flex;
    align-items: center;
    gap: 5px;
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
    box-shadow: var(--box-shadow);
    justify-content: space-between;
    padding: 10px
}

#modal-content header div {
    gap: 15px;
    display: flex;
    align-items: center;
}

.btn-arrow {
    border-radius: 50%;
    border: none;
    padding: 5px;
    margin: 0;
    cursor: pointer;
    background-color: transparent;
    transition: var(--effect)
}
a {
    text-decoration: none;
    color: var(--text-color)
}
button:hover {
    background-color: var(--light-gray);
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
    height: 80vh
}

#modal-content.hide,
.hide {
    opacity: 0;
    pointer-events: none;
}

.logo {
    width: 5em;
}</style>