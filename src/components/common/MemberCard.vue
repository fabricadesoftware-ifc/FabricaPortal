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
      <img class="image" :src="image" alt="" />
      <!--       <div class="image" :style="{ backgroundImage: `url(${image})` }"><span></span></div> -->
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
h3 {
  text-overflow: ellipsis;
}

h5 {
  color: var(--members);
  text-transform: uppercase;
}

a {
  width: 100%;
  text-decoration: none;
}

p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.card {
  background-color: var(--bg-white);
  height: 12em;
  padding: 10px;
  margin-bottom: 30px;
  flex-direction: row;
  display: flex;
  align-items: center;
  transition: transform var(--effect);
  transform: scale(97%);
}

.card:hover {
  cursor: pointer;
  transform: scale(100%);
}

.card:hover .image {
  filter: brightness(1);
}

.image {
  background-position: center;
  background-size: cover;
  transition: filter var(--effect);
  filter: brightness(0.6);
  min-width: 11em;
  height: 11em;
}

.details {
  padding: 10px;
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  min-height: 100px;
}

@media screen and (max-width: 1024px) {
  .card {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .image {
    width: 100%;
    height: 100%;
  }
  
}
</style>
