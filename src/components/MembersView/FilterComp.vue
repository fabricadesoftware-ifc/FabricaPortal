<script setup>
import { ref, defineEmits, defineProps, onMounted } from 'vue'

import MembersApi from '@/api/members'
const membersApi = new MembersApi()
const occupations = ref([])
const filterName = ref('')
const filterOccupation = ref('')

const props = defineProps(['members'])
defineEmits(['change'])

onMounted(() => {
  occupations.value = membersApi.getOccupations()
})
</script>

<template>
  <section>
    <h2>Membros</h2>
    <form>
      <div class="input-group" id="search">
        <label for="input-search">pesquise</label>
          <input
            occupation="text"
            name="member"
            list="members"
            id="input-search"
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
      <div class="input-group" id="occupation">
        <label for="select-occupation">ocupação</label>
        <select
          id="select-occupation"
          v-model="filterOccupation"
          @select="$emit('change', filterOccupation)"
          required
        >
          <option value="" disabled selected>Selecione uma opção</option>
          <option v-for="occupation of occupations" :key="occupation.id">
            {{ occupation.description }}
          </option>
        </select>
      </div>
      <button>
        <box-icon size="2em" color="#fff" name="sort-up"></box-icon>
        <span>a-z</span>
      </button>
    </form>
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
section form {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
form .input-group {
  display: flex;
  flex-direction: column;
  margin-right: 20px;
}
form #search {
  width: 50%;
}
form #occupation {
  width: 37%;
}
form button {
  width: 70px;
  height: 70px;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 0;
}
button span {
  color: var(--white);
  font-weight: bold;
}
.input-group label {
  text-transform: uppercase;
  font-weight: 600;
  /* criar variavel para essa cor */
  color: #343434;
  margin-bottom: 5px;
}
.input-group input,
.input-group select {
  width: 100%;
  height: auto;
  font-weight: 500;
  color: #484848;
  padding: 11px 8px;
  background-color: var(--light-gray);
  border: 0;
  transition: 180ms border-bottom ease-in-out;
}

.input-group input:focus,
.input-group input:hover,
.input-group input:valid,
.input-group select:focus,
.input-group select:valid,
.input-group select:hover {
  outline: 0;
  border-bottom: 5px solid var(--primary-color);
}
</style>
