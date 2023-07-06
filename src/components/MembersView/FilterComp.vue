<script setup>
import { ref, defineEmits, defineProps, onMounted } from 'vue'

import MembersApi from '@/api/members'
const membersApi = new MembersApi()
const occupations = ref([])
const filterName = ref('')

const props = defineProps(['members'])
defineEmits(['change'])

onMounted(() => {
  occupations.value = membersApi.getOccupations()
})
</script>

<template>
  <section>
    <h2>Membros</h2>
    <div class="filter">
      <div class="container" id="search-container">
        <label for="">pesquise</label>
        <div>
          <input
            occupation="text"
            name="member"
            list="members"
            required
            autocomplete="off"
            v-model="filterName"
            @keyup.enter="$emit('change', filterName)"
          />
          <datalist id="members">
            <option v-for="member of props.members" :key="member.id">
              {{ member.name }}
            </option>
          </datalist>
        </div>
      </div>
      <div class="container" id="occupation-container">
        <label for="occupation">ocupação</label>
        <select
          id="occupation"
          v-model="filterOccopation"
          @select="$emit('change', filterOccupation)"
          required
        >
          <option value="" disabled selected>Selecione uma opção</option>
          <option v-for="occupation of occupations" :key="occupation.id">
            {{ occupation.description }}
          </option>
        </select>
      </div>
      <div class="btn-order">
        <box-icon size="2em" color="#fff" name="sort-up"></box-icon>
        <span>a-z</span>
      </div>
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
  margin-right: 20px;
}
.filter #search-container {
  width: 50%;
}
.filter #occupation-container {
  width: 37%;
}
.filter .btn-order {
  height: 70px;
  width: 70px;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.filter .btn-order span {
  color: var(--white);
  font-weight: bold;
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
