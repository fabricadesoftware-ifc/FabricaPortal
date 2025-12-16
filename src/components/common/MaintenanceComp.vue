<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Site em Manutenção'
  },
  message: {
    type: String,
    default: 'Estamos trabalhando para melhorar sua experiência. Volte em breve!'
  }
})
</script>

<template>
  <div class="maintenance-container">
    <div class="maintenance-content">
      <div class="logo-wrapper">
        <img
          src="/img/logos/logo_fabrica_black.png"
          alt="Logo Fábrica de Software"
          class="logo"
        />
      </div>

      <h1 class="maintenance-title">{{ title }}</h1>

      <p class="maintenance-message">{{ message }}</p>

      <img src="/img/logos/aaaa.svg" alt="" class="maintenance">
    </div>
  </div>
</template>

<style scoped>
.maintenance-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--bg-color) 0%, var(--bg-dark, #1a1a2e) 100%);
  padding: 2rem;
}

.maintenance-content {
  text-align: center;
  max-width: 600px;
  padding: 3rem;
  background-color: var(--bg-white);
  border-radius: var(--border-rd, 15px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.maintenance-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, var(--btn) 0%, var(--btn-hover, #0056b3) 100%);
}

.logo-wrapper {
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 8vw;
  height: auto;
}

.maintenance-title {
  font-size: 2rem;
  color: var(--text-color, #333);
  margin-bottom: 1rem;
  font-weight: 700;
}

.maintenance-message {
  font-size: 1.1rem;
  color: var(--text-muted, #666);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.maintenance{
    width: 20vw;
    margin-top: 1rem;
}

.gears-animation {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  gap: 0;
}

.gear {
  color: var(--btn);
  opacity: 0.8;
}

.gear-1 {
  width: 60px;
  height: 60px;
  animation: rotate 4s linear infinite;
}

.gear-2 {
  width: 40px;
  height: 40px;
  margin-left: -10px;
  animation: rotate-reverse 3s linear infinite;
}

.gear svg {
  width: 100%;
  height: 100%;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes rotate-reverse {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

@media screen and (max-width: 768px) {
  .maintenance-content {
    padding: 2rem 1.5rem;
    margin: 1rem;
  }

  .maintenance-title {
    font-size: 1.5rem;
  }

  .maintenance-message {
    font-size: 1rem;
  }

  .logo {
    width: 140px;
  }

  .gear-1 {
    width: 50px;
    height: 50px;
  }

  .gear-2 {
    width: 35px;
    height: 35px;
  }
}
</style>
