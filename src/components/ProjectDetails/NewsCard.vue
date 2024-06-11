<script setup>
defineProps({
    title: String,
    data: String,
    user: String,
    background: String
})
</script>

<template>
    <div class="card">
        <div class="header">
            <div>
                <a class="title" href="#">
                    {{ title }}
                </a>
            </div>
            <img :src="background" class="image" />
        </div>
        <p class="description">
            Clique para ler a notícia na íntegra.
        </p>
    </div>
</template>

<style scoped>
.card {
    width: 49%;
    padding: 10px;
}

.header {
    display: flex;
    justify-content: space-between;
    grid-gap: 1rem;
    gap: 1rem;
}

.title {
    color: var(--text-color);
    text-decoration: none;
}

.title:hover {
    text-decoration: underline var(--secondary-color);
}


.image {
    height: 3rem;
    width: 3rem;
}

.description {
    margin-top: 1rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
}

@media only screen and (max-width: 725px) {
  .image {
    display: none
  }
}
@media only screen and (max-width: 425px) {
  .card {
    width: 100%
}
}
</style>
