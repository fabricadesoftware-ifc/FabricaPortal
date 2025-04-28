<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  description: String,
  title: String,
  logo: String,
  type: String,
  linkProject: { type: Object },
  image: { 
    type: String
  },
  members: {
    type: Array,
    default: () => []
  },
  status: {
    type: String,
    default: 'Em Desenvolvimento'
  }
})

const statusColors = {
  'Em Desenvolvimento': '#2196F3',
  'Concluído': '#4CAF50',
  'Cancelado': '#F44336',
  'Em Andamento': '#FF9800'
}

const getStatusColor = (status) => {
  return statusColors[status] || statusColors['Em Desenvolvimento']
}

const UrlProject = (id) => {
  return `/project/${id}`
}
</script>

<template>
  <div class="card" :class="{ 'card-hover': true }">
    <RouterLink :to="UrlProject(linkProject.id)">
      <header>
        <div class="status-badge" :style="{ backgroundColor: getStatusColor(status) }">
          {{ status }}
        </div>
        <img :src="logo || '/img/logos/LogoFabricaVerticalCor.svg'" class="logo" alt="Logo do projeto" />
        <div class="image-container">
          <img 
            class="container-img" 
            :src="image || '/img/Projects/FabricaPortal/PortalFabrica.png'"
            :alt="title"
          />
          <div class="image-overlay"></div>
        </div>
      </header>
      <div class="content">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <footer>
          <div class="col" v-if="members.length > 0">
            <span class="team-label">Equipe do Projeto</span>
            <div class="members">
              <div v-for="member in members.slice(0, 3)" 
                   :key="member.id" 
                   class="member-avatar"
                   :title="member.name"
              >
                <img :src="member.image.file" :alt="member.name" />
              </div>
              <div v-if="members.length > 3" 
                   class="member-count" 
                   :title="`+${members.length - 3} membros`"
              >
                +{{ members.length - 3 }}
              </div>
            </div>
          </div>
          <div class="project-type" v-if="type">
            {{ type }}
          </div>
        </footer>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
.card {
  width: 32%;
  margin-bottom: 2rem;
  background-color: var(--bg-white);
  border-radius: var(--border-rd);
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  min-width: 350px;
  height: 450px;
  position: relative;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.status-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  z-index: 2;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

header {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.logo {
  position: absolute;
  z-index: 2;
  width: 60px;
  height: 60px;
  top: 1rem;
  left: 1rem;
  border-radius: 12px;
  background-color: white;
  padding: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;
}

.card:hover .logo {
  transform: scale(1.1);
}

.image-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.container-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover .container-img {
  transform: scale(1.05);
}

.card:hover .image-overlay {
  opacity: 1;
}

.content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

h3 {
  color: var(--text-color);
  font-size: 1.4rem;
  line-height: 1.4;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

p {
  color: var(--text-color-light);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}

.team-label {
  font-size: 0.9rem;
  color: var(--text-color-light);
  margin-bottom: 0.5rem;
}

.members {
  display: flex;
  align-items: center;
}

.member-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: -8px;
  border: 2px solid white;
  transition: transform 0.3s ease;
}

.member-avatar:hover {
  transform: translateY(-2px);
  z-index: 2;
}

.member-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-count {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--bg-gray);
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 500;
  border: 2px solid white;
}

.project-type {
  padding: 0.5rem 1rem;
  background-color: var(--bg-gray);
  border-radius: 20px;
  font-size: 0.9rem;
  color: var(--text-color);
  font-weight: 500;
}

@media screen and (max-width: 1200px) {
  .card {
    width: 48%;
  }
}

@media screen and (max-width: 768px) {
  .card {
    width: 100%;
    margin-bottom: 1.5rem;
  }
  
  header {
    height: 180px;
  }
  
  .content {
    padding: 1.2rem;
  }
  
  h3 {
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 480px) {
  .card {
    min-width: unset;
    margin-bottom: 1rem;
  }
  
  header {
    height: 160px;
  }
  
  .logo {
    width: 50px;
    height: 50px;
  }
  
  .status-badge {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
  
  .content {
    padding: 1rem;
  }
  
  footer {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .project-type {
    width: 100%;
    text-align: center;
  }
}
a {
  text-decoration: none;
  color: inherit;
}
</style>