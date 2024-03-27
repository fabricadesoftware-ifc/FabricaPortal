<script setup>
defineProps({
    title: String,
    data: String,
    members: String,
    format: Array
})
</script>

<template>
    <section>
        <h1>
            {{ format.description }}
        </h1>
        <h2>
            {{ title }} ({{ data }})
        </h2>
        <h4>
            {{ members }}
        </h4>
    </section>
</template>

<style scoped>
    section {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    h1 {
        color: var(--primary-color);
        border-bottom: 5px solid var(--primary-color);
        margin-bottom: 20px;
    }

    h2, h4 {
        margin: 0;
    }
</style>