<script setup>
import { onMounted, ref } from 'vue'
import { SystemService } from '@/services'
import NavBar from './components/NavBar.vue'
import FooterComp from './components/FooterComp.vue'
import LoadingComp from '@/components/common/LoadingComp.vue'
import MaintenanceComp from '@/components/common/MaintenanceComp.vue'

const isMaintenance = ref(false)

onMounted(async () => {
  const response = await SystemService.getSystemStatus()
  if (response) {
    isMaintenance.value = response[0].maintenance_mode
  }
})
</script>

<template>
  <MaintenanceComp v-if="isMaintenance" />
  <div v-else>
    <LoadingComp />
    <NavBar />
    <RouterView />
    <FooterComp />
  </div>
</template>
