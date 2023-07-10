<script setup>
import ProjectsComp from '@/components/MemberProfile/ProjectsComp.vue'
import PublicationsComp from '@/components/MemberProfile/PublicationsComp.vue'
import MembersApi from '@/api/members'
import { ref, onMounted } from 'vue'

defineProps({
  image: String,
  name: String,
  background: String,
  description: String,
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
    <div class="col">
      <img class="image" :src="image" alt="" />
      <div class="midias">
        <box-icon size="2em" type="logo" name="github"></box-icon>
        <box-icon size="2em" type="logo" name="linkedin"></box-icon>
        <box-icon size="2em" type="logo" name="twitter"></box-icon>
        <box-icon size="2em" name="link"></box-icon>
      </div>
    </div>
    <div>
      <div class="nameOccup">
        <h3>{{ occupation.description }}</h3>
        <div>
          <h2>{{ name }}</h2>
        </div>
      </div>
      <div class="desc">
        <h3>Descrição</h3>

        <p>{{ description }}</p>
      </div>
      <ProjectsComp />
      <PublicationsComp />
    </div>
  </section>
</template>

<style scoped>
p {
  text-align: justify;
}
section {
  display: flex;
  flex-direction: row;
}
section .col {
  margin-right: 45px;
}
section .container {
  background-color: var(--background-color);
  padding: 5px;
  display: flex;
  margin-bottom: 14px;

  justify-content: space-between;
}
section .container div {
  display: flex;
  align-items: center;
}
section .container div span {
  font-weight: 500;
  margin-left: 5px;
}
section .image {
  width: 235px;
  height: auto;
  border-bottom: 5px solid var(--primary-color);
}
section .midias {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;
}
section .nameOccup {
  border-bottom: 5px solid var(--primary-color);
  margin-bottom: 14px;
  width: 100%;
}
section .desc {
  margin-bottom: 14px;
}
section .nameOccup h3 {
  color: var(--primary-color);
  text-transform: uppercase;
  font-weight: 600;

}
</style>