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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
            provident a, ipsa maiores deleniti consectetur nobis et eaque.
        </p>
<!--         <dl class="post-info">
            <div class="cr">
                <dd class="dd">{{ data }}</dd>
            </div>
        </dl> -->
    </div>
</template>

<style scoped>
.card {
    width: 32%;
    padding: 10px;
}

.header {
    display: flex;
    justify-content: space-between;
    grid-gap: 1rem;
    gap: 1rem;
}

.title {
    font-size: 1.125rem;
    line-height: 1.25rem;
    font-weight: 700;
    color: rgba(17, 24, 39, 1);
    text-decoration: none;
}

.title:hover {
    text-decoration: underline var(--secondary-color);
}

.name {
    margin-top: 0.25rem;
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 500;
    color: rgba(75, 85, 99, 1);
}

.image {
    display: block;
    flex-shrink: 0;
    height: 3rem;
    width: 3rem;
    border-radius: 0.5rem;
    object-fit: cover;
    background-color: royalblue;
}

.description {
    margin-top: 1rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
}

.post-info {
    margin-top: 1.5rem;
    display: flex;
    grid-gap: 1rem;
    gap: 1rem;
}

.cr {
    display: flex;
    flex-direction: column-reverse;
}

.dt {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;
    color: rgba(75, 85, 99, 1);
}

.dd {
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgba(107, 114, 128, 1);

}
</style>
