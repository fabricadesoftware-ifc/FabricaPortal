<script setup>
defineProps({
  title: String,
  data: String,
  user: String,
  background: String
})
</script>

<template>
  <div class="card">
    <div class="wrapper" :style="{ backgroundImage: `url(${background})` }">
      <div class="content">
        <header>
          <time>{{ data }}</time>
        </header>
        <div class="info">
          <!-- transformar esse status em componente -->
          <div class="status"><span>evento</span></div>
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
  margin: 0;
}
header {
  padding: 1em;
}
.card {
  width: 31%;
}

.wrapper {
  background-color: var(--white);
  min-height: 60vh;
  position: relative;
  overflow: hidden;
  border-bottom: 5px solid var(--primary-color);
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

</style>
