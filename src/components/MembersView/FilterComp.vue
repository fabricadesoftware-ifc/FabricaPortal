<script setup></script>

<template>
  <section>
    <h2>Membros</h2>
    <div class="filter">
      <div class="container">
        <label for="">pesquise</label>
        <div>
          <input type="text" name="fruit" list="fruits" autocomplete="off" />
          <datalist id="fruits">
            <option>Fábio Longo de Moura</option>
            <option>Eduardo da Silva</option>
            <option>Marco André Mendes</option>
            <option>Marco Antônio Rojas</option>
            <option>Gabriel Pereira</option>
          </datalist>
        </div>
      </div>
      <div class="container">
        <label for="">ocupação</label>
        <select>
          <option disabled value="">Escolha uma ocupação</option>
          <option>a</option>
          <option>a</option>
          <option>a</option>
          <option>a</option>
        </select>
      </div>
      <div class="container">
        <label for="order">ordernar por</label>
        <select id="order">
          <option disabled value="">Escolha um</option>
          <option>a</option>
          <option>a</option>
          <option>a</option>
          <option>a</option>
          <!--           <option
            v-for="linguagem of linguagens"
            :key="linguagem.iso_639_1"
            :value="linguagem.iso_639_1"
          >
            {{ linguagem.name }}
          </option> -->
        </select>
      </div>
    </div>
  </section>
</template>

<style scoped>

section {
  border-left: 5px solid var(--primary-color);
    padding: 0 25px;
    display: flex;
    height: 20vh;
    margin: 80px 145px;
    flex-direction: column;
    justify-content: center;
}
section .filter {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.filter .container {
  display: flex;
  flex-direction: column;
  width: 32%;
}
.container label {
  text-transform: uppercase;
  font-weight: 600;
  color: #343434;
  margin-bottom: 5px;
}
.container input,
.container select {
  font-weight: 500;
  color: #484848;
  padding: 3px 8px;
  background-color: var(--background-color);
  border: none;
  transition: 180ms border-bottom ease;
  height: 4vh;
  width: 100%;
}

.container input:focus,
.container input:hover,
.container select:focus,
.container select:hover {
  outline: none;
  border-bottom: 5px solid var(--primary-color);
}
</style>
