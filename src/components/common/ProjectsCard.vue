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
  }
})
</script>

<template>
  <div class="card">
    <img :src="logo" class="image" />
    <img class="container-img" :src="image" />
    <div class="container-details">
      <div class="header">
        <div>
          <h3>{{ title }}</h3>
          <div class="status">
            <span>{{ type }}</span>
            <span>{{ status }}</span>
          </div>
        </div>
      </div>
      <p>
        {{ description }}
      </p>
      <div class="row">
        <div>
          <span>Membros</span>
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
          <span>Feito com</span>
          <div>
            <box-icon v-for="lang in langsProject" :key="lang.id" color="var(--dark-shadow)" size="2.2em" :type="lang.type" :name="lang.icon"></box-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-details-btn-more);
  border: none;
  cursor: pointer;
}
button a {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-color-btn-more);
  text-decoration: none;
  text-transform: uppercase;
  margin-left: 9px;
}

h3 {
  -webkit-line-clamp: 2;
}
p {
  margin: 10px 0;
  -webkit-line-clamp: 4;
}
p, h3 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-align: justify;
}
.card {
  width: 31%;
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
  padding: 10px 0;
  border-top: 5px solid var(--color-details-projects);
}
.card .container-details .row {
  display: flex;
  gap: 30px;
}

.card .container-details .header {
  display: flex;
  gap: 1rem;
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
  width: 38px;
  height: 38px;
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
