<script setup>
import { ref } from "vue";

const props = defineProps({
    currentPage: Number,
    pages: Number
})

const emits = defineEmits(['change-page']);

const pagesRef = ref(null);

function previousPage() {
    if (props.currentPage == 1) return;
    pagesRef.value[props.currentPage].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
    emits('change-page', props.currentPage - 1);
}

function nextPage() {
    if (props.currentPage == props.pages) return;
    pagesRef.value[props.currentPage].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
    emits('change-page', props.currentPage + 1);
}
function changePage(page) {
    pagesRef.value[props.currentPage].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
    emits('change-page', page);
}
</script>

<template>
    <section v-if="pages > 1">
        <button class="btn-page previous-page" @click="previousPage" >
            <box-icon name='left-arrow-alt' id="icon"></box-icon>
        </button>

        <div class="pages">
            <div class="page" ref="pagesRef" v-for="page in pages" :key="page" :class="currentPage == page ? 'current-page' : null" @click="changePage(page)">
                {{ page }}
            </div>
        </div>

        <button class="btn-page next-page" @click="nextPage">
            <box-icon name='right-arrow-alt' id="icon"></box-icon>
        </button>
    </section>    
</template>

<style scoped>
    section {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        background-color: transparent;
        margin: 20px 0;
    }

    .pages {
        display: flex;
        gap: 10px;
        align-items: center;
        overflow-x: auto;
    }

    .pages::-webkit-scrollbar {
        display: none;
    }

    .page {
        cursor: pointer;
        background-color: transparent;
        color: var(--primary-color);
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: var(--primary-color) 2px solid;
        border-radius: var(--border);
        font-weight: bolder;
        transition: 0.5s all;
        min-width: 40px;
        min-height: 40px;
    }

    .page:hover {
        transform: translateY(-5px);
    }

    .current-page {
        background-color: var(--primary-color) !important;
        color: var(--white) !important;
    }

    .btn-page {
        cursor: pointer;
        margin: 0;
        width: 40px;
        height: 40px;
        border-radius: var(--border);
        border: var(--ligth-gray) 2px solid;
        transition: .2s all;
    }

    .btn-page:hover {
        border-color: var(--dark-shadow);
    }

    #icon, svg {
        fill: var(--ligth-gray) !important;
        transition: .2s all;
    }

    .btn-page:hover #icon, .btn-page:hover svg {
        fill: var(--dark-shadow) !important;
    }
</style>