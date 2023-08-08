<script setup>
import { ref } from 'vue'

defineProps({
    description: String,
    logo: String,
    title: String
})
const modalHidden = ref(true);

const toggleModal = () => {
    modalHidden.value = !modalHidden.value;
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
    <div class="modal">
        <section id="modal-content" :class="[{ hide: modalHidden }]" >
            <header>
                <div>
                    <img class="logo" :src="logo" />
                    <h2>{{ title }}</h2>
                </div>
                <button @click="toggleModal"><box-icon name='x'></box-icon></button>
            </header>
            <div>
            </div>
        </section>
    </div>
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

#modal-content {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    background-color: var(--light-gray);
    padding: 10px;
    z-index: 10;
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