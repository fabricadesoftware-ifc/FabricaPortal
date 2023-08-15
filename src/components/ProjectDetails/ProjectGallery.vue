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
}
</style>