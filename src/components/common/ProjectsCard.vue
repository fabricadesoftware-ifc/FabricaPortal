<script setup>
defineProps({
  description: String,
  title: String,
  image: String,
  status: String,
  type: String,
  style: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="card">
    <img class="container-img" src="src/assets/images/code.jpeg" />
    <div class="container-details">
      <div class="header">
        <img :src="image" class="image" />
        <div>
          <h3>{{ title }}</h3>
          <div class="status">
            <h5>{{ type }}</h5>
            <h5>{{ status }}</h5>
          </div>
        </div>
      </div>
      <p>
        {{ description }}
      </p>
      <div class="row">
        <div>
          <span>Linguagens</span>
          <div>
            <box-icon color="var(--dark-shadow)" size="2em" type="logo" name="java"></box-icon>
            <box-icon color="var(--dark-shadow)" size="2em" name="php" type="logo"></box-icon>
            <box-icon
              color="var(--dark-shadow)"
              size="2em"
              name="tailwind-css"
              type="logo"
            ></box-icon>
          </div>
        </div>
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
span {
  font-weight: 500;
  color: var(--text-color);
  font-size: 1.2em;
}
h3 {
  color: var(--black);
  font-size: 1.4em;
  font-weight: 500;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
p {
  margin: 10px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.card {
  width: 31%;
  margin-bottom: 70px;
}
.card .container-img {
  width: 100%;
  filter: brightness(0.5);
  height: 30vh;
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

.card .container-details .header .image {
  display: block;
  flex-shrink: 0;
  height: 4rem;
  width: 4rem;
  object-fit: cover;
}

.card .container-details .row .members {
  display: flex;
}
.card .container-details .row .members img,
.card .container-details .row .members div {
  width: 30px;
  height: 30px;
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
.card .container-details .row .members span {
  color: var(--primary-color);
}

.card .container-details .header .status h5 {
  margin-right: 10px;
  padding: 5px;
  background-color: #fce8da;
  color: var(--primary-color);
  border-radius: 5px;
}
.card .container-details .header .status {
  display: flex;
}
</style>
