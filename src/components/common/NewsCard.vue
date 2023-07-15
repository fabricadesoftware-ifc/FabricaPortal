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
      <div class="container-details">
        <div class="header">
          <div>
            <span >{{ data }}</span>
          </div>
        </div>
        <div class="data">
          <div class="content">
            <div class="status"><span>evento</span></div>
            <h3>
              {{ title }}
            </h3>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt debitis nam tempore
              modi nobis.
            </p>
            <!-- buttonall aqui -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
span, h3, p{
  color: var(--white);

}
h3 {
  margin-bottom: 10px;
}

.card {
  width: 31%;
}

.card .wrapper {
  background-color: var(--white);
  min-height: 60vh;
  position: relative;
  overflow: hidden;
  border-bottom: 5px solid var(--primary-color);
  background-position: center;
  background-size: cover;
  box-shadow: 0 19px 38px rgba(var(--black), 0.3), 0 15px 12px rgba(var(--black), 0.2);
}

.card .wrapper:hover  .container-details .data {
  transform: translateY(0);
}
.card .container-details {
  width: 100%;
  height: 60vh;
  background-color: var(--light-shadow);
}
.card .container-details .data {
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: translateY(calc(70px + 1em));
  transition: transform 0.3s;
}

.card .container-details .data .content {
  padding: 1em;
  position: relative;
  z-index: 1;
}

.card .container-details .data .content .author {
  font-size: 12px;
}

.card .container-details .data .text {
  height: 70px;
  margin: 0;
}

.card .wrapper:hover .menu-content span {
  transform: translate(-50%, -10px);
  opacity: 1;
}

.card .header {
  color: #ffffff;
  padding: 1em;
}

.card .container-details .header  div {
  float: left;
  font-size: 12px;
}

.card .container-details .header .data {
  transform: translateY(calc(70px + 4em));
}

</style>
