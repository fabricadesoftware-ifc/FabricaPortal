<script setup>
defineProps({
  title: String,
  data: String,
  user: String,
  background: String,
  linkProject: Number,
})

const UrlProject = (id) => {
  return `/news/${id}`
}

</script>

<template>
  <RouterLink :to="UrlProject(linkProject)">
    <div class="card">
      <div class="wrapper" :style="{ backgroundImage: `url(${background})` }">
        <div class="content">
          <header>
            <time>{{ data }}</time>
          </header>
          <div class="info">
            <h3>
              {{ title }}
            </h3>
            <p>
              Clique aqui para ler a notícia na íntegra.
            </p>
          </div>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
span,
h3,
p,
time {
  color: var(--white);
}
h3 {
  margin-bottom: 10px;
}
p {
  height: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin: 0;
}
header {
  padding: 1em;
}

a {
  width: 31%;
  min-width: 300px;
}
.wrapper {
  background-color: var(--bg-white);
  min-height: 300px;
  max-height: 500px;
  position: relative;
  overflow: hidden;
  border-bottom: var(--border) solid var(--news);
  background-position: center;
  background-size: cover;
}

.wrapper:hover .content .info {
  transform: translateY(0);
}
.content {
  width: 100%;
  height: 60vh;
  background-color: var(--light-shadow);
}
.info {
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: translateY(calc(70px + 1em));
  transition: transform 0.3s;
  padding: 1em;
  z-index: 1;
}


.card {
  margin: 0 auto;
}

@media only screen and (max-width: 1300px) {
  .wrapper {
    width: 300px;
  }
  a {
    width: auto;
    margin-bottom: 15px;
  }
  p {
    display: none;
  }
  .info {
    transform: translateY(0);
  }
}
</style>
