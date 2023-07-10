<script setup>
import ProjectsComp from '@/components/MemberProfile/ProjectsComp.vue'
import PublicationsComp from '@/components/MemberProfile/PublicationsComp.vue'
import DetailsProfile from '@/components/MemberProfile/DetailsProfile.vue'
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
  socialLinks: {
    type: Array
  },
})


const membersApi = new MembersApi()

const memberId = ref(null)
const member = ref(null)
const memberProjects = ref([])

onMounted(fetchMember)

async function fetchMember() {
  const path = window.location.pathname
  const memberIdFromUrl = path.substring(path.lastIndexOf('/') + 1)
  memberId.value = memberIdFromUrl

  try {
    member.value = membersApi.getMemberById(memberId.value)
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <section v-if="member">
    <div class="col">
      <img class="image" :src="member.image" alt="" />
      <div class="midias">
        <a v-for="socialLink in member.socialLinks" :key="socialLink.icon" target="_blank" :href="socialLink.href">
          <box-icon size="2em" :type="socialLink.type" :name="socialLink.icon"></box-icon>
        </a>
      </div>
    </div>
    <div>
      <DetailsProfile
        :name="member.name"
        :key="member.id"
        :occupation="member.occupation"
        :description="member.description"
      /> 
      <ProjectsComp/>
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

</style>
