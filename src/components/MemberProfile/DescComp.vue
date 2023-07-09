<script setup>
defineProps({
  image: String,
  name: String,
  description: String,
  background: String,
  occupation: {
    type: Object
  },
  linkMember: {
    type: Object
  }
})
</script>
<template>
  <section>
    <div class="container">
      <h3>Descrição</h3>
      <p>
        Possui graduação em Sistemas de Informação pela Universidade da Região de Joinville (2005) e
        mestrado em Sistemas de Informação pela Universidade do Minho (2014). Atualmente é
        pesquisador e professor do ensino básico, técnico e tecnológico do Instituto Federal
        Catarinense e pesquisador do Departamento de Sistemas de Informação da Universidade do Minho
        (Campus Azurém), em Guimarães, Portugal. Tem experiência na área de Ciência da Computação,
        com ênfase em Sistemas de Informação, atuando principalmente nos seguintes temas:
        information system, information system management, competences, capability, management.
      </p>
      <!--         <p>{{ description }}</p> -->
    </div>
    <div class="container">
      <h3>Projetos</h3>
      <div class="projeto">
        <div class="row-1">
          <div>
            <h4>ISSEM</h4>
            <div>
              <span>Extensão</span>
            </div>
          </div>
          <span>finalizado</span>
        </div>
        <div class="row-2">
          <div>
            <div>
              <box-icon size="1em" name="vuejs" type="logo"></box-icon>
              <span>vue.js</span>
            </div>
            <div>
              <box-icon size="1em" name="vuejs" type="logo"></box-icon>
              <span>vue.js</span>
            </div>
            <div>
              <box-icon size="1em" name="vuejs" type="logo"></box-icon>
              <span>vue.js</span>
            </div>
            <div>
              <box-icon size="1em" name="vuejs" type="logo"></box-icon>
              <span>vue.js</span>
            </div>
          </div>
          <div>
            <div>
              <span>15/06/2019 - 20/07/2022</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
section {
  width: 60%;
  padding: 80px 145px 0 0px;
}
section .container {
  margin-bottom: 10px;
}
.container .projeto {
  width: 100%;
  padding: 5px;
}
section p {
  font-weight: 500;
  color: #252525;
}
</style>
