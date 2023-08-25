<script setup>
import { onMounted, ref } from 'vue'

import FooterApi from '@/api/footer'

const footerApi = new FooterApi()
const footer = ref([])

onMounted(async () => {
  footer.value = footerApi.getFooter()
})

</script>

<template>
  <footer>
    <div class="links">
      <div class="logo">
        <img src="/src/assets/images/logos/LogoFabricaVerticalCor.svg" alt="" />
      </div>
      <div v-for="itens in footer" :key="itens">
        <h4>{{ itens.title }}</h4>
        <ul>
          <li v-for="i in itens.access" :key="i">
            <a href=""> {{ i.link }} </a>
            <span href=""> {{ i.desc }} </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <span>© Todos os direitos reservados</span>
    </div>
  </footer>
</template>

<style scoped>
h4 {
  text-transform: uppercase;
  color: var(--primary-color);
}

footer {
  width: 100%;
  height: 48vh;
  padding: 56px 145px;
  background-color: var(--bg-black);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}
footer .links {
  justify-content: space-between;
  display: flex;
}

footer .links,
.container {
  width: 100%;
}

footer .container {
  display: flex;
  justify-content: center;
  align-items: center;
}

footer .links ul li {
  list-style-type: none;
  margin: 5px 0;
}
footer .links ul li a {
  text-decoration: none;
  color: var(--white);
}
footer .links ul li a:hover {
  text-decoration: underline;
}
footer img {
  width: 200px;
}
@media only screen and (max-width: 768px) {
  footer {
    height: auto;
    padding: 20px 10px;
  }
  footer .links {
    flex-direction: column;
  }
  .links .logo {
  margin: 40px auto;
}
  .links div {
    margin: 30px 0;
    text-align: center;
  }
}

@media only screen and (min-width: 600px) {
}

@media only screen and (min-width: 768px) {
}

@media only screen and (min-width: 992px) {
}

@media only screen and (min-width: 1200px) {
}
</style>
