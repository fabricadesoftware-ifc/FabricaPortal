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
  width: 49%;
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

@media only screen and (max-width: 1280px) {
  a {
    width: 100%;
  }
}
@media only screen and (max-width: 600px) {
  .card {
    flex-direction: column;
    height: 18em;
  }
  p {
    display: none;
  }
  .card {
    height: 22em;
  }
  .image {
    min-width: 15em;
    height: 15em;
  }

  a {
    width: 49%;
  }
}
@media only screen and (max-width: 555px) {
  .image {
    min-width: 9em;
    height: 9em;
  }
  .card {
    height: 17em;
  }
}
@media only screen and (max-width: 320px) {
  .image {
    min-width: 7em;
    height: 7em;
  }
  .card {
    height: 15em;
  }
}
</style>
