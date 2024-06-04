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
      <div v-for="itens in footer" :key="itens">
        <h4>{{ itens.title }}</h4>
        <ul :class="itens.title == 'Redes Sociais' ? 'social' : ''">
          <li v-for="i in itens.accessDetails" :key="i">
            <a :href="i.to" v-if="i.desc !== ''"> {{ i.link }} </a>
            <a :href="i.to" target="_blank" v-else>
              <box-icon style="margin: 0 8px" color="var(--white)" size="2em" type="logo"
                :name="i.link"></box-icon>
            </a>
            <span v-if="i.desc!==''"> {{ i.desc }} </span>
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
span {
  color: var(--white)
}
footer {
  width: 100%;
  padding: 30px 145px;
  background-color: var(--bg-black);
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}
footer .links {
  justify-content: space-between;
  display: flex;
}

.social {
  display: flex;
  gap: 10px;
  justify-content: center;
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
  footer img {
    margin: 40px auto;
  }
}

@media only screen and (max-width: 992px) {
  .links div {
    margin: 30px 0;
    text-align: center;
  }
  footer .links {
    flex-direction: column;
  }
}
@media only screen and (min-width: 600px) {
}

@media only screen and (min-width: 768px) {
}


@media only screen and (min-width: 1200px) {
}
</style>
