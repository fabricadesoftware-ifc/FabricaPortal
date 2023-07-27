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
      <div class="image" :style="{ backgroundImage: `url(${image})` }"><span></span></div>
      <div class="details">
        <h5>{{ occupation.description }}</h5>
        <h3>{{ shortenName(name) }}</h3>
        <p>
          {{ description }}
        </p>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
h5 {
  color: var(--color-details-members);
  text-transform: uppercase;
}

a {
  width: 49%;
  text-decoration: none;
}

p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

.card {
  background-color: var(--background-color-card-member);
  height: 12em;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  transition: transform 0.6s;
  transform: scale(97%);
}

.card:hover {
  cursor: pointer;
  transform: scale(100%);
}

.card:hover .image {
  filter: brightness(1);
}

.card .image {
  min-width: 12em;
  height: 12em;
  background-position: center;
  background-size: cover;
  transition: filter 0.6s;
  filter: brightness(0.6);
}

.card .details {
  border-left: 5px solid var(--color-details-members);
  padding: 10px;
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
</style>
