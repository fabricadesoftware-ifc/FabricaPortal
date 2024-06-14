<script setup></script>

<template>
  <section id="hero-section">
    <div>
      <h1 class="us">Quem Somos</h1>
    </div>
  </section>
  <section class="content">
    <div>
      <h2 class="info">
        Nossa História
      </h2>
      <p class="info">
        A Fábrica de Software existe desde 2013, proporcionando um novo caminho para a formação acadêmica e profissional dos estudantes dos Cursos de Informática do Instituto Federal Catarinense - Campus Araquari.
        Mediada pelo ambiente de ensino, o ambiente possibilita aprendizado que compreende rotinas diárias de um profissional ligado às Tecnologias e Sistemas de Informação, desenvolvendo projetos atendendo a demandas reais existentes no IFC ou em parceria com empresas da iniciativa pública e da iniciativa privada.
      </p>
        <p class="info">
        A Fábrica de Software possibilita um "ensaio profissional" para os estudantes do campus, além de atuar no tripé do IFC, que é o Ensino, a Pesquisa e a Extensão. Todos os estudantes passam por um processo de amadurecimento no que respeita ao desenvolvimento de soluções de tecnologia, pois vivenciam as etapas de análise, avaliação, prototipação, desenvolvimento e implantação de soluções de TI. Tal experiência possibilita que os conceitos apresentados em sala de aula sejam colocados em prática para no desenvolvimento de soluções reais.
      </p>
        <p class="info">
        Durante os 11 anos de existência da Fábrica de Software já foram realizados vários projetos, muitos deles em parceria com o IFC, mas também com empresas públicas e privadas.
</p>
        <p class="info">
        Participam, atualmente, da Fábrica de Software, pouco mais de 30 alunos, sob a orientação de 5 professores. Os projetos estão sendo desenvolvidos em parceria com os demais cursos do campus, com empresas da região e também com demais campus do IFC. Temos parceria com o campus de Videira, que está desenvolvendo uma aplicação para fomentar o turismo na região da cidade que habita o campus.
      </p>
        <p class="info">
        A efetividade da Fábrica é demonstrada em números. Praticamente 100% dos alunos que passaram pela Fábrica de Software atuam como desenvolvedores, gerentes, analistas, cientistas e, inclusive, professores da área de Informática.
        </p>
        <p class="info">
        Durante os mais de 10 anos da Fábrica de Software, já passaram mais de 100 alunos, que deixaram sua marca e levaram consigo um pouco da cultura da Fábrica de Software.
      </p>
    </div>
  </section>
</template>

<style scoped>
#hero-section {
  margin: 0;
  border-radius: 0;
  background: url(../assets/images/fabricaAmbiente.jpeg) no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: bottom;
  height: 60vh;
}

h1,
span,
p {
  color: var(--white);
}

#hero-section div {
  width: 100%;
  background: linear-gradient(268deg, rgb(0 0 0 / 31%) 0%, #000000d9 99.54%);
  background-blend-mode: multiply;
  height: 60vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 10%;
}

section:hover .effect::before {
  width: 100%;
}

.info {
  color: black;
  text-align: justify;
}

.us {
  position: relative;
}

.us:after {
  content: '';
  position: absolute;
  bottom: -7px;
  left: 0;
  width: 75%;
  height: 4px;
  background-color: var(--hero-section);
}

.content {
  background-color: white;
  border-radius: 0;
  max-width: 1000px;
  margin: 0 auto;
}

.content div {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  padding-bottom: 40px;
}

h2 {
  font-size: 2em;
  margin-bottom: 2.3vh;
}

p.info {
  margin-bottom: 1em;
}
</style>
