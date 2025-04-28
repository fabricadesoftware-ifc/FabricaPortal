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
      <div class="image">
        <img :src="image" alt="Member Image" />
      </div>
      <div class="details">
        <h5>{{ occupation.description }}</h5>
        <h3>{{ shortenName(name) }}</h3>
        <p>{{ description }}</p>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.card {
  background-color: var(--bg-white);
  height: 200px; /* altura fixa */
  padding: 10px;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr 5fr;
  align-items: center;
  transition: transform var(--effect);
  transform: scale(97%);
  overflow: hidden;
  border-radius: 10px;
}

.card:hover {
  cursor: pointer;
  transform: scale(100%);
}

.card:hover .image img {
  filter: brightness(1);
}

.image {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: filter var(--effect);
  filter: brightness(0.6);
  border-radius: 10px;
}

.details {
  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
}

h3 {
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

h5 {
  color: var(--members);
  text-transform: uppercase;
  margin: 0;
}

a {
  width: 100%;
  text-decoration: none;
  display: block;
}

p {
  margin-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

@media screen and (max-width: 1024px) {
  .card {
    height: auto;
    display: flex;
    flex-direction: column;
  }

  .image {
    width: 100%;
    height: 200px; 
  }

  .details {
    align-items: center;
    text-align: center;
  }
}
</style>
