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
});
const removeAccents = (text) => {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};
const updateDataList = () => {
  if (filterName.value.length >= 2) {
    const inputText = filterName.value.toLowerCase();
    const filteredMembers = props.members.filter(member => member.name.toLowerCase().startsWith(inputText));
    dataListMembers.value = filteredMembers;
    showDataList.value = true;
  } else {
    showDataList.value = false;
  }
}

const dataListMembers = ref([]);
const showDataList = ref(false);
</script>

<template>
  <section>
    <h2>Membros</h2>
    <form @submit.prevent="filterName">
      <div class="input-group" id="search">
        <label for="input-search">pesquise</label>
          <input
            type="text"
            name="member"
            list="members"
            id="input-search"
            required
            autocomplete="off"
            v-model="filterName"
            @input="updateDataList"
            @keyup.enter="$emit('change', filterName)"
          />
          <datalist v-if="showDataList" id="members">
            <option v-for="member of dataListMembers" :value="member.name" :key="member.id">
              {{ member.name }}
            </option>
          </datalist>
      </div>
      <div class="input-group" id="occupation">
        <label for="select-occupation">ocupação</label>
        <select id="select-occupation" v-model="filterOccupation" @select="$emit('change', filterOccupation)">
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
  background-color: var(--bg-white);
  border-left: 5px solid var(--members);
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
  background-color: var(--members);
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
  color: var(--text-color);
  margin-bottom: 5px;
}

.input-group input,
.input-group select {
  width: 100%;
  height: auto;
  font-weight: 500;
  color: var(--text-color);
  padding: 11px 8px;
  background-color: var(--bg-gray);
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
  border-bottom: 5px solid var(--members);
}
</style>
