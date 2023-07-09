<script setup>
import MembersApi from '@/api/members'
import { ref, onMounted } from 'vue'

defineProps({
  image: String,
  name: String,
  background: String,
  occupation: {
    type: Object
  },
  linkMember: {
    type: Object
  }
})

const membersApi = new MembersApi()
const members = ref([])

onMounted(() => {
  members.value = membersApi.getMembers()
})
</script>

<template>
  <section>
    <!--     <div class="active">
      <box-icon color="var(--primary-color)" size="1em" type="solid" name="circle"></box-icon>
      <span>EM ATIVIDADE</span>
    </div> -->
    <div class="image" :style="{ backgroundImage: `url(${background})` }"></div>
    <div class="nameOccup">
      <h3>{{ occupation.description }}</h3>
      <div>
        <h2>{{ name }}</h2>
      </div>
    </div>
    <!-- ! assim ou um em baixo do outro (como no github) -->
    <div class="midias">
      <box-icon size="2em" type='logo' name='github'></box-icon>
      <box-icon size="2em" type='logo' name='linkedin'></box-icon>
      <box-icon size="2em" type='logo' name='discord-alt'></box-icon>
      <box-icon size="2em" type='logo' name='twitter'></box-icon>
      <box-icon size="2em" type='logo' name='behance'></box-icon>
      <box-icon size="2em" name='dribbble' type='logo' ></box-icon>
      <box-icon size="2em" name='link'></box-icon>
    </div>
  </section>
</template>

<style scoped>

section {
  width: 40%;
  padding: 80px 0px 0 145px;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
}
section .image {
  width: 100%;
  height: 412px;
  margin-bottom: 14px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column-reverse;
}
section .midias {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
section .nameOccup {
  border-bottom: 5px solid var(--primary-color);
  margin-bottom: 14px;
  width: 100%;
}
section .active {
  width: fit-content;
  color: var(--primary-color);
  background-color: var(--white);
  font-weight: bold;
  padding: 7px;
  margin: 10px;
  display: flex;
  align-items: center;
}
section .active span {
  margin-left: 5px;
}
section h3 {
  color: var(--primary-color);
  text-transform: uppercase;
}
</style>
