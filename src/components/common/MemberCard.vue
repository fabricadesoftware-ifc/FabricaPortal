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
      <img class="image" :src="image" alt="">
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
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

.card {
  background-color: var(--bg-white);
  height: 12em;
  margin-bottom: 30px;
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
}

.details {
  border-left: var(--border) solid var(--members);
  padding: 10px;
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

@media only screen and (max-width: 1280px) {
  a {
    width: 100%;
  }

}

@media only screen and (min-width: 600px) {
  .image {
    min-width: 12em;
    height: 12em;
  }
}

@media only screen and (min-width: 426px) and (max-width: 600px) {
  a {
    width: 49%;
  }

  .card {
    flex-direction: column;
    height: auto;
  }

  .details {
    border-left: 0;
    border-top: var(--border) solid var(--members);
    padding: 15px;
    gap: 9px;
    height: 25vh;
    justify-content: center;
    align-items: flex-start;
  }

  .image {
    width: 100%;
    height: auto;
  }

  p {
    display: none;
  }
}

@media only screen and (max-width: 425px) {

  a {
    width: 100%;
  }

  .card {
    flex-direction: column;
    margin-right: 20px;
    height: 20em;
  }
  p {
    display: none;
  }
  .image {
    width: 12em;
    min-height: 12em;
  }

  .card .details {
    border-left: 0;
    border-top: var(--border) solid var(--members);
    height: 100%;
  }
}

</style>
