<script setup>
import { useProjectsStore } from '@/stores';

const projectsStore = useProjectsStore();

const getRandomColor = () => {
    const colors = ['#5058F2', '#26736B', '#F26A1B', '#D95252'];
    return colors[Math.floor(Math.random() * colors.length)];
}

</script>

<template>
    <section>
        <div class="container">
            <h3>Areas:
            </h3>
            <div class="areas">
                <div class="tag" v-for="item in projectsStore.state.selectedProject?.areas?.areas" :key="item"
                    :style="{ backgroundColor: getRandomColor() }">
                    {{ item }}
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
section {
    width: 100%;
    height: 5vw;
    text-align: left;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    margin: auto;
}

.areas {
    display: flex;
    gap: 10px;
    text-align: left;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
}

.tag {
    padding: .5rem;
    border-radius: 20px;
    color: var(--white);
    font-size: 10pt;
    font-weight: bold;
}

@media screen and (max-width: 1024px) {
    
    section {
        height: 10vw;
    }
    
}
</style>
