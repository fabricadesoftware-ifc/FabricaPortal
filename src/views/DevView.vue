<script setup></script>

<template>
  <main>
    <section>
      <img src="../assets/images/construction.jpg" alt="" />
      <h2>Ops! Estamos trabalhando nisso</h2>
      <p>Nossa página está passando por melhorias.</p>
    </section>
  </main>
</template>

<style scoped>
main section {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 0;
}
h2,
p {
  text-align: center;
}
img {
  width: 30%;
}
@media only screen and (max-width: 768px) {
  img {
    width: 60%;
  }
}
@media only screen and (max-width: 600px) {
  img {
    width: 70%;
  }
}
</style>
