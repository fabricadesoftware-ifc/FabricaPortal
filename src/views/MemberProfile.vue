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
    <aside>
      <img class="image" :src="member.image" alt="" />
      <div class="midias">
        <a v-for="socialLink in member.socialLinks" :key="socialLink.icon" target="_blank" :href="socialLink.href">
          <box-icon size="2em" color="var(--text-color)" :type="socialLink.type" :name="socialLink.icon"></box-icon>
        </a>
      </div>
    </aside>
    <section class="col-2">
      <DetailsProfile :name="member.name" :key="member.id" :occupation="member.occupation"
        :description="member.description" />
      <ProjectsComp />
      <PublicationsComp />
    </section>
  </main>
</template>

<style scoped>
main {
  display: flex;
  padding: var(--pn-main);

}

p {
  text-align: justify;
}

.projects,
.publications {
  padding: 0;
  display: flex;
  flex-direction: column;
}

main {
  display: flex;
  flex-direction: row;
  width: 100%;
}

main .col-2 {
  width: 100%;
}

aside {
  margin-right: 45px;
    border-radius: 10px;
    height: fit-content;
    box-shadow: var(--box-shadow);
}

main .image {
  width: 235px;
  height: auto;
}

main .midias {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;
}
</style>
