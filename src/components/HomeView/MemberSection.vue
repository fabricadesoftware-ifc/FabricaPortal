<template>
  <section>
    <h2>Membros</h2>
    <div class="container-members">
      <div class="members">
        <MemberCard
          v-for="member of members"
          :key="member.id"
          :image="member.image"
          :name="member.name"
          :description="member.description"
          :type="member.type"
        />
      </div>
      <ButtonAll link="/" text="Ver todos os membros" />
    </div>
  </section>
</template>

<script setup>
import MemberCard from '../common/MemberCard.vue'
import ButtonAll from '../common/ButtonAll.vue'

const members = [
  {
    id: '1',
    image: 'https://avatars.githubusercontent.com/u/849206?v=4',
    name: 'Fábio Longo de Moura',
    description:
      'Possui graduação em Sistemas de Informação pela Universidade da Região de Joinville (2005) e mestrado em Sistemas...',
    type: 'professor'
  },
  {
    id: '2',
    image: 'https://avatars.githubusercontent.com/u/849206?v=4',
    name: 'Fábio Longo de Moura',
    description:
      'Possui graduação em Sistemas de Informação pela Universidade da Região de Joinville (2005) e mestrado em Sistemas...',
    type: 'professor'
  },
  {
    id: '3',
    image: 'https://avatars.githubusercontent.com/u/849206?v=4',
    name: 'Fábio Longo de Moura',
    description:
      'Possui graduação em Sistemas de Informação pela Universidade da Região de Joinville (2005) e mestrado em Sistemas...',
    type: 'professor'
  },
  {
    id: '4',
    image: 'https://avatars.githubusercontent.com/u/849206?v=4',
    name: 'Fábio Longo de Moura',
    description:
      'Possui graduação em Sistemas de Informação pela Universidade da Região de Joinville (2005) e mestrado em Sistemas...',
    type: 'professor'
  },
]
</script>

<style scoped>
.container-members {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.members {
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 39vh;
  align-content: space-between;
}
</style>
