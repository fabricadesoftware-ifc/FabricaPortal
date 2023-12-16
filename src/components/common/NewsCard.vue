<script setup>
defineProps({
  title: String,
  data: String,
  user: String,
  background: String
})
</script>

<template>
  <RouterLink to="/news">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt debitis nam tempore
              modi nobis.
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
}
.wrapper {
  background-color: var(--bg-white);
  min-height: 60vh;
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

@media only screen and (max-width: 1024px) {
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
