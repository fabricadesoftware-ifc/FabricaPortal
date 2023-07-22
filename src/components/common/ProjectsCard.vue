<script setup>
defineProps({
  description: String,
  title: String,
  logo: String,
  image: String,
  status: String,
  type: String,
  langsProject: {
    type: Object
  },
  linkProject: {
    type: Object
  }
})
const UrlProject = (id) => {
  return `/project/${id}`
}
</script>

<template>
  <div class="card">
    <RouterLink :to="UrlProject(linkProject.id)">
      <img :src="logo" class="image" />
      <img class="container-img" :src="image" />
      <div class="container-details">
        <h3>{{ title }}</h3>
        <p>
          {{ description }}
        </p>
        <div class="row">
          <div>
            <span>Equipe</span>
            <div class="members">
              <img src="https://avatars.githubusercontent.com/u/99155494?v=4" />
              <img src="https://avatars.githubusercontent.com/u/849206?v=4" />
              <img src="https://avatars.githubusercontent.com/u/48130339?v=4" />
              <div>
                <span>+3</span>
              </div>
            </div>
          </div>
          <div>
            <span>Tecnologias</span>
            <div>
              <box-icon
                v-for="lang in langsProject"
                :key="lang.id"
                color="var(--dark-shadow)"
                size="2em"
                :type="lang.type"
                :name="lang.icon"
              ></box-icon>
            </div>
          </div>
        </div>
        <!--       <div class="status">
          <span>{{ type }}</span>
          <span>{{ type }}</span>
          <span>{{ status }}</span>
        </div> -->
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
h3 {
  -webkit-line-clamp: 2;
}
p {
  margin: 10px 0;
  text-align: justify;
  -webkit-line-clamp: 4;
}
p,
h3 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
a {
  text-decoration : none;
}
.card {
  width: 32%;
  border: 5px solid var(--light-gray);
  margin-bottom: 70px;
}
.card .container-img {
  width: 100%;
  filter: brightness(0.5);
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 0.6s;
}
.card:hover .container-img {
  filter: brightness(1);
}

.card .container-details {
  padding: 10px;
  display: flex;
  height: 41vh;
  border-top: 5px solid var(--color-details-projects);
  flex-direction: column;
  justify-content: space-evenly;
}
.card .container-details .row {
  display: flex;
  justify-content: space-between;
}

.card .image {
  flex-shrink: 0;
  height: 4rem;
  margin: 10px;
  position: absolute;
  z-index: 1;
  width: 4rem;
  opacity: 1;
  transition: opacity 0.3s;
}
.card:hover .image {
  opacity: 0;
}
.card .container-details .row .members {
  display: flex;
}
.card .container-details .row span {
  font-weight: 500;
  color: var(--text-color);
  font-size: 1.2em;
}

.card .container-details .row .members img,
.card .container-details .row .members div {
  width: 37px;
  position: relative;
  border-radius: 50px;
  margin-right: -14px;
}
.card .container-details .row .members div {
  display: flex;
  justify-content: center;
  font-weight: 500;
  z-index: 1;
  align-items: center;
  background-color: #fce8da;
}
</style>
