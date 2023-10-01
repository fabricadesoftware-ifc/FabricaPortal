<script setup>
defineProps({
    image: String,
    name: String,
    description: String,
    occupation: {
        type: Object
    },
    linkMember: {
        type: Object
    }
})

const shortenName = (name) => {
    if (name.length > 25) {
        const nameParts = name.split(' ')
        const firstName = nameParts[0]
        let shortenedName = firstName

        if (nameParts.length > 2) {
            for (let i = 1; i < nameParts.length - 1; i++) {
                const middleName = nameParts[i]
                if (middleName.length > 2) {
                    shortenedName += ' ' + middleName[0] + '.'
                }
            }
        }

        shortenedName += ' ' + nameParts[nameParts.length - 1]
        return shortenedName
    }
    return name
}

const UrlMember = (id) => {
    return `/member/${id}`
}
</script>

<template>
    <router-link :to="UrlMember(linkMember.id)">
        <div class="card">
            <div class="header">
                <img :src="image" class="image" />
                <div>
                    <h5>
                        {{ occupation.description }}
                    </h5>
                    <h4>
                        {{ shortenName(name) }}
                    </h4>
                </div>
            </div>
        </div>
    </router-link>
</template>

<style scoped>
a {
    width: 49%;
    text-decoration: none;
}

.card {
    margin: 10px 0;
    padding: 10px;
    transition: transform var(--effect);
    transform: scale(100%);
}

.card:hover {
    transform: scale(97%);
}

.header {
    display: flex;
    gap: 10px;
}


.image {
    height: 3rem;
    width: 3rem;
    object-fit: cover;
}
@media only screen and (max-width: 600px) {
  a {
    width: 100%
  }
}
</style>
