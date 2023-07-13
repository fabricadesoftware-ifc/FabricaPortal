<script setup>
import ProjectsComp from '@/components/MemberProfile/ProjectsComp.vue'
import PublicationsComp from '@/components/MemberProfile/PublicationsComp.vue'
import DetailsProfile from '@/components/MemberProfile/DetailsProfile.vue'
import MembersApi from '@/api/members'
import { ref, onMounted } from 'vue'

defineProps({
  image: String,
  name: String,
  description: String,
  occupation: {
    type: Object
  },
  socialLinks: {
    type: Array
  }
})

const membersApi = new MembersApi()

const memberId = ref(null)
const member = ref(null)

onMounted(fetchMember)

async function fetchMember() {
  const path = window.location.pathname
  const memberIdFromUrl = path.substring(path.lastIndexOf('/') + 1)
  memberId.value = memberIdFromUrl

  return (member.value = membersApi.getMemberById(memberId.value))
}
</script>

<template>
  <section v-if="member">
    <div class="col-1">
      <img class="image" :src="member.image" alt="" />
      <div class="midias">
        <a
          v-for="socialLink in member.socialLinks"
          :key="socialLink.icon"
          target="_blank"
          :href="socialLink.href"
        >
          <box-icon size="2em" :type="socialLink.type" :name="socialLink.icon"></box-icon>
        </a>
      </div>
    </div>
    <div class="col-2">
      <DetailsProfile
        :name="member.name"
        :key="member.id"
        :occupation="member.occupation"
        :description="member.description"
      />
      <ProjectsComp />
      <PublicationsComp />
    </div>
  </section>
</template>

<style scoped>
p {
  text-align: justify;
}
.projects, .publications {
  padding: 0;
  display: flex;
  flex-direction: column;
}
section {
  display: flex;
  flex-direction: row;
  width: 100%;
}
section .col-2 {
  width: 100%;

}
section .col-1 {
  margin-right: 45px;
}
section .image {
  width: 235px;
  height: auto;
  border-bottom: 5px solid var(--color-details-members);
}
section .midias {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;
}
</style>
