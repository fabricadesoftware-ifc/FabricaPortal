<script setup>
import { ref } from 'vue';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

defineProps({
    description: String,
    logo: String,
    title: String
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
            <button @click="toggleModal">
                <box-icon name='right-arrow-alt'></box-icon>
            </button>
        </header>
        <p>{{ description }}</p>
    </section>
    <div class="modal-overlay" v-body-scroll-lock="!modalHidden" :class="{ 'hide': modalHidden }" ></div>
    <section id="modal-content" :class="[{ hide: modalHidden }]">
        <header>
            <div>
                <img class="logo" :src="logo" />
                <h3>{{ title }}</h3>
            </div>
            <button @click="toggleModal"><box-icon name='x'></box-icon></button>
        </header>
    </section>
</template>


<style scoped>
p {
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
}

header {
    display: flex;
    gap: 15px;
    align-items: flex-start;

}
body.modal-open {
    overflow: hidden;
}

#modal-content header {
    justify-content: space-between;
}

#modal-content header div {
    display: flex;
    align-items: center;
}

button {
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
    background-color: var(--light-gray);
    padding: 10px;
    z-index: 10;
    transition: opacity 0.2s, pointer-events 0.2s;
}


#modal-content {
    transition: 0.2s;
    opacity: 1;
    pointer-events: all;
}


#modal-content.hide,
.hide {
    opacity: 0;
    pointer-events: none;
}

.logo {
    width: 10em;
}
</style>