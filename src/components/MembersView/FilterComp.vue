<script setup>
import { ref, defineEmits, defineProps, onMounted } from 'vue'
import ButtonAll from '../common/ButtonAll.vue'
import MembersApi from '@/api/members'
const membersApi = new MembersApi()
const occupations = ref([])
const filterName = ref('')
const props = defineProps(['members'])
defineEmits(['change'])

const showFilterContainer = ref(false)
const toggleFilterContainer = () => {
  showFilterContainer.value = !showFilterContainer.value
}

onMounted(() => {
  occupations.value = membersApi.getOccupations()
})
const removeAccents = (text) => {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}
const updateDataList = () => {
  if (filterName.value.length >= 2) {
    const inputText = filterName.value.toLowerCase()
    const filteredMembers = props.members.filter((member) =>
      member.name.toLowerCase().startsWith(inputText)
    )
    dataListMembers.value = filteredMembers
    showDataList.value = true
  } else {
    showDataList.value = false
  }
}

const dataListMembers = ref([])
const showDataList = ref(false)
</script>

<template>
  <section>
    <h2>Membros</h2>
    <form @submit.prevent="filterName">
      <div class="search-container" id="search">
        <input
          type="text"
          name="member"
          list="members"
          id="input-search"
          placeholder="Geovana Sophia Horodeski, aluna, Portal da Fábrica..."
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
        <div class="filter-toggle">
          <button>
            <box-icon name="search-alt" size="1.5em" color="var(--white)"></box-icon>
          </button>
          <button class="filter-btn" @click="toggleFilterContainer">
            <span>FILTRAR</span>
            <box-icon name='filter-alt' size="1.5em" class="icon-filter" color="var(--white)"></box-icon>
            <box-icon
              name="chevron-down"
              size="1.2em"
              color="var(--white)"
              type="solid"
              class="icon"
              v-if="showFilterContainer != true"
            ></box-icon>
            <box-icon
              v-if="showFilterContainer"
              name="chevron-up"
              size="1.2em"
              color="var(--white)"
              class="icon"
              type="solid"
            ></box-icon>
          </button>
        </div>
      </div>
      <!--
        filtrar por ocupação(ex: professor, aluno, graduação. obs: Se ficar com poucos campos dá pra separar os bolsistas),
        atividade(inativo ou ativo), ordenação (a-z, z-a, quantos membros por página)                                   
      -->
      <div class="filter-container" :class="{ expanded: showFilterContainer }">
        <div class="container">
          <div class="filter-options">
            <div>
              <label for="">Ocupação</label>
              <select class="select-occup" name="" id="">
                <option value="">a</option>
              </select>
            </div>
            <div>
              <label for="">Atividade</label>
              <select class="select-atv" name="" id="">
                <option value=""></option>
              </select>
            </div>
            <div>
              <label for="">Bolsistas</label>
              <select class="select-bols" name="" id="">
                <option value=""></option>
              </select>
            </div>
            <div>
              <label for="">Ordenação</label>
              <select class="select-order" name="" id="">
                <option value=""></option>
              </select>
            </div>
          </div>
          <ButtonAll text="Buscar" link="" />
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
button{
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
  display: none
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
  padding-left: 0.6em;
  border-left: 1px solid var(--white);
}
.filter-toggle span {
  font-size: 0.9em;
  font-weight: 600;
  color: var(--white);
}

.filter-container {
  max-height: 0;
  overflow: hidden;
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
  display:flex;
  justify-content: space-between;
}
.filter-options div {
  width: 24%;
  display: flex;
  flex-direction: column;
}
.filter-options select {
  padding: 10px;
  border-radius: var(--border-rd);
  border: none;
  background-color: rgb(0 0 0 / 6%);
  margin-top: 1em;
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
    margin: 0px ;
  }
}
@media only screen and (max-width: 600px) {
  .filter-options {
    flex-direction: column;
  }
  .filter-btn span {
  display: none
}
.icon-filter {
  display: flex
}
  .filter-options div {
    width: 100%;
    margin-bottom: 10px;
  }
  .filter-btn .icon{
    display:none
  }
}

</style>
