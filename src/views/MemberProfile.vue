<script setup>
import ProjectsComp from '@/components/MemberProfile/ProjectsComp.vue'
import PublicationsComp from '@/components/MemberProfile/PublicationsComp.vue'
import DetailsProfile from '@/components/MemberProfile/DetailsProfile.vue'
import MembersApi from '@/api/members'
import { ref, onMounted } from 'vue'
import {useMembersStore, useProjectsStore} from '@/stores'
import router from '@/router'

const membersApi = new MembersApi()
const membersStore = useMembersStore()
const projectsStore = useProjectsStore()

const memberId = ref(null)
const member = ref(null)


async function fetchMember() {
  const path = window.location.pathname
  const memberIdFromUrl = path.substring(path.lastIndexOf('/') + 1)
  memberId.value = memberIdFromUrl

  return (member.value = membersApi.getMemberById(memberId.value))
}

onMounted(async () => {
  await fetchMember()
  console.log(router.currentRoute.value.params.id)
  await membersStore.getMemberById(router.currentRoute.value.params.id)
  await projectsStore.filterProjectsByMemberId(router.currentRoute.value.params.id)
  console.log(projectsStore.state.filteredProjects)
  console.log(membersStore.state.selectedMember)
})
</script>

<template>
  <main>
    <!-- {{ membersStore.state.selectedMember }} -->
    <header>
      <img class="image" :src="membersStore.state.selectedMember?.image.file" alt="" />
      <!-- <div class="midias">
        <a v-for="socialLink in membersStore.state.selectedMember?.socialLinks" 
           :key="socialLink.icon" 
           target="_blank" 
           :href="socialLink.href">
          <box-icon 
            size="2em" 
            color="var(--text-color)" 
            :type="socialLink.type" 
            :name="socialLink.icon">
          </box-icon>
        </a>
      </div> -->
    </header>
    <section class="col-2"> 
      <DetailsProfile :name="membersStore.state.selectedMember?.name" :key="member?.id" 
      :occupation="`${membersStore.state.selectedMember?.status} - ${membersStore.state.selectedMember?.type}`"
        :description="membersStore.state.selectedMember?.biography" />
      <ProjectsComp />
      <!-- <PublicationsComp /> -->
    </section>
  </main>
</template>

<style scoped>
main {
  display: flex;
  padding: var(--pn-main) 19em;
  flex-direction: column;
  width: 100%;
  align-items: center;
}


.projects,
.publications {
  padding: 0;
  display: flex;
  flex-direction: column;
}

main .col-2 {
  width: 100%;
}

header {
  border-radius: 10px;
  height: fit-content;
  margin-bottom: 1em
}

main .image {
  width: 235px;
  height: 225px;
}

main .midias {
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: center;
  padding: 4px;
}

.midias a {
  transition: transform 0.2s;
}

.midias a:hover {
  transform: scale(1.1);
}

@media only screen and (max-width: 1224px) {
  main {
    padding: var(--pn-main) 10em;
  }

  main .image {
    width: 200px;
    height: 200px;
  }
}

@media only screen and (max-width: 768px) {
  main {
    padding: var(--pn-main) 6em;
  }
}

@media only screen and (max-width: 600px) {
  main {
    padding: var(--pn-main) 2em;
  }

  main .image {
    width: 175px;
  }
}

@media only screen and (max-width: 375px) {
  main {
    padding: var(--pn-main) 1em;
  }
}
</style>
