<script setup>
import { ref, onMounted } from 'vue'

import MembersApi from '@/api/members'
const membersApi = new MembersApi()
const members = ref([])
const occupations = ref([])

onMounted(() => {
  members.value = membersApi.getMembers()
  occupations.value = membersApi.getoccupations()
})
</script>

<template>
  <section>
    <h2>Membros</h2>
    <div class="filter">
      <div class="container">
        <label for="">pesquise</label>
        <div>
          <!-- olha esse required -->
          <input occupation="text" name="member" list="member" required autocomplete="off" />
          <datalist id="member">
            <option v-for="member of members" :key="member.id">
              {{ member.name }}
            </option>
          </datalist>
        </div>
      </div>
      <div class="container">
        <label for="occupation">ocupação</label>
        <select id="occupation" required>
          <option value="" disabled selected>Selecione uma opção</option>
          <option v-for="occupation of occupations" :key="occupation.id">
            {{ occupation.description }}
          </option>
        </select>
      </div>
/*       <div class="container">
        <label for="order">ordernar por</label>
        <select id="order" required>
          <option value="" disabled selected>Selecione uma opção</option>
          <option>a</option>
          <option>a</option>
          <option>a</option>
          <option>a</option>
        </select>
      </div> */
    </div>
  </section>
</template>

<style scoped>
section {
  height: 20vh;
  background-color: var(--white);
  border-left: 5px solid var(--primary-color);
  padding: 0 25px;
  display: flex;
  margin: 48px 145px;
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
  /* criar variavel para essa cor */
  color: #343434;
  margin-bottom: 5px;
}
.container input,
.container select {
  width: 100%;
  height: auto;
  font-weight: 500;
  color: #484848;
  padding: 11px 8px;
  background-color: var(--background-color);
  border: 0;
  transition: 180ms border-bottom ease-in-out;
}

.container input:focus,
.container input:hover,
.container input:valid,
.container select:focus,
.container select:valid,
.container select:hover {
  outline: 0;
  border-bottom: 5px solid var(--primary-color);
}
</style>
