<script setup>
import { ref, onMounted, reactive } from 'vue'
import ButtonAll from '../common/ButtonAll.vue'
import { useMembersStore } from '@/stores'

const props = defineProps(['members', 'occupations'])
const membersStore = useMembersStore()

const toSearch = reactive({
  filterName: '',
  selectedOccupation: ''
})

const search = () => {
  console.log(toSearch)
  membersStore.searchMembers(toSearch.selectedOccupation, toSearch.filterName)
}

</script>

<template>

  <section>
    <h2>Membros</h2>
    <form @submit.prevent>
      <div class="filter-container">
        <div class="search-container" id="search">
          <input type="text" name="member" list="members" id="input-search" placeholder="Nome do(a) membro"
            autocomplete="off" v-model="toSearch.filterName" @keyup.enter="search" />
        </div>
        <select class="select-occup" name="" id="" v-model="toSearch.selectedOccupation">
          <option value="Todos">Todos</option>
          <option v-for="occupation in props.occupations" :key="occupation.id" :value="occupation">
            {{ occupation }}
          </option>
        </select>
        <div class="filter-toggle">
          <button class="filter-btn" @click="search">
            <box-icon name="search-alt" size="1.5em" color="var(--white)"></box-icon>
            <span>BUSCAR</span>
            <box-icon name="filter-alt" size="1.5em" class="icon-filter" color="var(--white)"></box-icon>
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<style scoped>
section {
  background-color: var(--bg-white);
  padding: 0px 25px 50px;
  display: flex;
  margin: 0px 145px;
  flex-direction: column;
  border-radius: 0;
  justify-content: center;
}

section form {
  width: 100%;
  display: flex;
  flex-direction: column;
}

button {
  margin: 1em auto;
}

form .search-container {
  display: flex;
  align-items: center;
  border-radius: var(--border-rd);
  background-color: var(--bg-gray);
  box-shadow: var(--light-shadow);
}

.icon-filter {
  display: none;
}

.expanded {
  max-height: 500px;
  transform: max-height 1s;
}

form #search {
  width: 100%;
}

.filter-toggle button {
  border: none;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
}

.filter-toggle {
  display: flex;
  background-color: var(--primary-color);
  align-items: center;
  padding: 10px 20px;
  float: right;
  border-radius: var(--border-rd);
  gap: 10px;
  justify-content: center;
}

.filter-btn {
  display: flex;
  align-items: center;
  border-left: 1px solid var(--white);
}

.filter-toggle span {
  font-size: 0.9em;
  font-weight: 600;
  color: var(--white);
}

.filter-container {
  display: flex;
  width: 100%;
  transition: max-height var(--effect) ease-in-out;
}

.filter-container .container {
  padding: 10px;
  border-top: 0;
  width: 100%;
  background-color: var(--light-gray);
  margin-top: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: var(--border-rd);
  border-bottom-left-radius: var(--border-rd);
  flex-direction: column;
  display: flex;
}

.filter-options {
  display: flex;
  justify-content: center;
}

.filter-options div {
  width: 24%;
  display: flex;
  flex-direction: column;
  text-align: center;
}

select {
  margin-left: 2%;
  margin-right: 2%;
  padding: 10px;
  height: 50px;
  border-radius: var(--border-rd);
  border: none;
  background-color: rgb(0 0 0 / 6%);
}

.select-occup:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 1px var(--primary-color), 0 0 0 4px #ea6c1890;
}

.select-bols:focus {
  outline: none;
  border-color: var(--tertiary-color);
  box-shadow: 0 0 0 1px var(--tertiary-color), 0 0 0 4px #d94e4eae;
}

.select-atv:focus {
  outline: none;
  border-color: var(--secondary-color);
  box-shadow: 0 0 0 1px var(--secondary-color), 0 0 0 4px #267a7a8f;
}

.select-order:focus {
  outline: none;
  border-color: var(--quaternary-color);
  box-shadow: 0 0 0 1px var(--quaternary-color), 0 0 0 4px #4b4beba1;
}

.expanded {
  max-height: 500px;
}

.search-container input {
  width: 100%;
  padding: 14px;
  height: 100%;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-color);
  border: 0px solid var(--dark-gray);
  background-color: transparent;
}

.search-container input:focus {
  outline: 0;
}

@media only screen and (max-width: 768px) {
  section {
    margin: 0px;
  }
}

@media only screen and (max-width: 600px) {
  .filter-options {
    flex-direction: column;
  }

  .filter-btn span {
    display: none;
  }

  .icon-filter {
    display: flex;
  }

  .filter-options div {
    width: 100%;
    margin-bottom: 10px;
  }

  .filter-btn .icon {
    display: none;
  }
}
</style>
