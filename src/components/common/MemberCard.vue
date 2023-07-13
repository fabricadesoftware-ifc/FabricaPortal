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
  <div class="card">
    <router-link :to="UrlMember(linkMember.id)">
      <div class="image" :style="{ backgroundImage: `url(${image})` }"><span></span></div>
      <div class="member-details">
        <h5>{{ occupation.description }}</h5>
        <h3>{{ shortenName(name) }}</h3>
        <p>
          {{ description }}
        </p>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.card {
  background-color: var(--background-color-card-member);
  width: 50%;
  height: 20vh;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  transition: transform 0.6s;
  transform: scale(97%);
}

.card a {
  text-decoration: none;
  display: flex;
}

.card:hover {
  cursor: pointer;
  transform: scale(100%);
}

.card:hover .image {
  filter: brightness(1);
}
.card .image {
  width: 200px;
  height: 20vh;
  background-position: center;
  background-size: cover;
  transition: filter 0.6s;
  filter: brightness(0.6);
}

.card .member-details {
  border-left: 5px solid var(--color-details-members);
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.card .member-details p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
}
h5 {
  color: var(--color-details-members);
  text-transform: uppercase;
}
</style>
