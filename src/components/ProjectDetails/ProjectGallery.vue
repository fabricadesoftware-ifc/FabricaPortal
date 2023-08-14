<script setup>
defineProps({
    images: String
})
</script>
<template>
    <section>
        <img :src="images" alt="">
    </section>
</template>


<style scoped>
img {
    width: 100%;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.062);
    border-radius: 10px;
}
</style>