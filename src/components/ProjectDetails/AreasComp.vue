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
            <h3>Tecnologias:</h3>
            <div class="areas">
                <div class="tag" v-for="item in projectsStore.state.selectedProject?.technologies" :key="item"
                    :style="{ backgroundColor: getRandomColor() }">
                    {{ item.name }}
                </div>
            </div>
            <h3>Links:</h3>
            <div class="links">
                    <span v-for="(value, key) in projectsStore.state.selectedProject?.links" :key="key" class="link-item">  
                        <a :href="value" target="_blank" :style="{ backgroundColor: getRandomColor() }">{{ key }}</a>
                    </span>
                
            </div>
        </div>
    </section>
</template>
<style scoped>
section {
    width: 100%;
    height: 10vw;
    text-align: left;
}

.links {
    display: flex;
    gap: .5rem;
}

.link-item {
    display: flex;
    align-items: center;
    gap: .5rem;
}

.link-item > a {
    padding: .5rem;
    border-radius: 10px;
    font-size: 10pt;
    color: white;
    font-weight: bold;
    text-decoration: none;
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

.tag, li {
    padding: .5rem;
    border-radius: 20px;
    color: var(--white);
    font-size: 10pt;
    font-weight: bold;
}

a {
    color: blue;
    transition: .5s;
}

a:hover {
    transform: scale(1.02);
}

@media screen and (max-width: 1024px) {

    section {
        height: 35vw;
    }

    .links{
        flex-wrap: wrap;
    }

}
</style>
