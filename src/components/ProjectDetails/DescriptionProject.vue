<script setup>
import { ref } from 'vue';

defineProps({
    description: String,
    logo: String,
    title: String,
    type: String
});

const modalHidden = ref(true);
const toggleModal = () => {
    modalHidden.value = !modalHidden.value;

    if (modalHidden.value) {
        enableBodyScroll(document.body);
    } else {
        disableBodyScroll(document.body);
    }
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
                        <span>Extensão</span>
                    </li>
                    <li>
                        <h5>Status:</h5>
                        <span>Em andamento</span>
                    </li>
                    <li>
                        <h5>Versão:</h5>
                        <span>1.0.1</span>
                    </li>
                    <li>
                        <h5>Atualizado em:</h5>
                        <span>13 de ago. de 2023</span>
                    </li>
                    <li>
                        <h5>Cordenador(es):</h5>
                        <div>
                            <button>Eduardo da Silva</button>
                            <button>Fábio longo de Moura</button>
                        </div>
                    </li>
                    <li>
                        <h5>Publicado em:</h5>
                        <span>27 de jun. de 2023</span>
                    </li>
                    <li>
                        <h5>Tecnologias:</h5>
                        <ul id="content-lang">
                            <li>
                                <button>
                                    vue
                                </button>
                            </li>
                            <li>
                                <button>
                                    react
                                </button>
                            </li>
                            <li>
                                <button>
                                    django
                                </button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
            <section class="access">
                <h4>Acesso</h4>
                <ul>
                    <li>
                        <button>
                            <box-icon type='logo' name='github'></box-icon>
                            Github
                        </button>
                    </li>
                    <li>
                        <button>
                            <box-icon name='windows'></box-icon>
                            Deploy
                        </button>
                    </li>
                </ul>
            </section>
            <section>
                <h4>Novidades</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquid odit porro assumenda unde dolore
                    eius minima, voluptas quis veniam, aperiam sint dolorum sed corporis vel impedit debitis odio dolores.
                </p>
            </section>
            <section class="tags">
                <h4>Tags</h4>
                <ul>
                    <li v-for="li in 13" :key="li">
                        <button>hackathon</button>
                    </li>
                </ul>
            </section>
        </main>
        <div class="body">
        </div>
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
}

li ul {
    display: flex;
}
.access ul{
    display: flex;
    gap: 10px
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
    gap: 12px;
    flex-wrap: wrap;
    justify-content: space-between;
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