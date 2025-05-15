<script setup>
import ProjectsComp from '@/components/MemberProfile/ProjectsComp.vue'
import PublicationsComp from '@/components/MemberProfile/PublicationsComp.vue'
import DetailsProfile from '@/components/MemberProfile/DetailsProfile.vue'
import MembersApi from '@/api/members'
import { ref, onMounted } from 'vue'
import { useMembersStore, useProjectsStore } from '@/stores'
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
  await membersStore.getMemberById(router.currentRoute.value.params.id)
  await projectsStore.filterProjectsByMemberId(router.currentRoute.value.params.id)
})
</script>

<template>
  <main>
    <header>
      <img class="image" :src="membersStore.state.selectedMember?.image.file" alt="" />
      <div class="midias">
        <a
          v-if="membersStore.state.selectedMember?.linkedin"
          :href="membersStore.state.selectedMember?.linkedin"
          target="_blank"
          aria-label="LinkedIn"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="6" fill="#0077B5"/>
            <path d="M10.666 13.333h2.667v8h-2.667v-8zm1.333-4a1.333 1.333 0 110 2.667 1.333 1.333 0 010-2.667zm3.334 4h2.56v1.093h.037c.356-.675 1.226-1.387 2.523-1.387 2.7 0 3.207 1.776 3.207 4.084v4.21h-2.667v-3.733c0-.89-.016-2.037-1.242-2.037-1.243 0-1.433.97-1.433 1.97v3.8h-2.667v-8z" fill="#fff"/>
          </svg>
        </a>
        <a
          v-if="membersStore.state.selectedMember?.github"
          :href="membersStore.state.selectedMember?.github"
          target="_blank"
          aria-label="GitHub"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="6" fill="#181717"/>
            <path d="M16 6C10.477 6 6 10.477 6 16c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.646.35-1.088.636-1.339-2.221-.253-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0116 10.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.566 4.936.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C23.138 24.162 26 20.418 26 16c0-5.523-4.477-10-10-10z" fill="#fff"/>
          </svg>
        </a>
      </div>
    </header>
    <section class="col-2">
      <DetailsProfile
        :name="membersStore.state.selectedMember?.name"
        :key="member?.id"
        :occupation="`${membersStore.state.selectedMember?.status} - ${membersStore.state.selectedMember?.type}`"
        :description="membersStore.state.selectedMember?.biography"
      />
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
  display: block;
  margin: 0 auto;
}

main .midias {
  display: flex;
  gap: 16px;
  width: 100%;
  justify-content: center;
  padding: 8px 0 0 0;
}

.midias a {
  transition: transform 0.2s;
  display: flex;
  align-items: center;
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
