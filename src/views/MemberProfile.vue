<script setup>
import ProjectsComp from '@/components/MemberProfile/ProjectsComp.vue'
import PublicationsComp from '@/components/MemberProfile/PublicationsComp.vue'
import DetailsProfile from '@/components/MemberProfile/DetailsProfile.vue'
import MembersApi from '@/api/members'
import { ref, onMounted } from 'vue'

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
  <main v-if="member">
    <header>
      <img class="image" :src="member.image" alt="" />
      <div class="midias">
        <a
          v-for="socialLink in member.socialLinks"
          :key="socialLink.icon"
          target="_blank"
          :href="socialLink.href"
        >
          <box-icon
            size="2em"
            color="var(--text-color)"
            :type="socialLink.type"
            :name="socialLink.icon"
          ></box-icon>
        </a>
      </div>
    </header>
    <section class="col-2">
      <DetailsProfile
        :name="member.name"
        :key="member.id"
        :occupation="member.occupation"
        :description="member.description"
      />
      <ProjectsComp />
      <PublicationsComp />
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
  height: auto;
}

main .midias {
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: center;
  padding: 4px;
}

@media only screen and (max-width: 1224px) {
  main {
    padding: var(--pn-main) 10em;
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
