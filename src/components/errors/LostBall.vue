<script setup lang="ts">
const balls = [
  { x: 464, y: 99, radius: 33, color: '#ea6d18' },
  { x: 557, y: 65, radius: 21, color: '#267a7a' },
  { x: 631, y: 69, radius: 16, color: '#d94e4e' },
]
</script>

<template>
  <!-- The institutional logo, whose last ball has rolled off the hill. -->
  <svg viewBox="408 26 350 268" class="scene" aria-hidden="true">
    <circle
      v-for="(ball, index) in balls"
      :key="ball.color"
      class="ball"
      :cx="ball.x"
      :cy="ball.y"
      :r="ball.radius"
      :fill="ball.color"
      :style="{ '--i': index }"
    />

    <circle class="empty" cx="704" cy="102" r="10" />
    <circle class="lost" r="10" />

    <path
      class="hill"
      d="M414 293V186c4-4 7-6.5 11-6.5 17 0 30 26.5 53 26.5 34 0 50-46 73-46 26 0 47 49 70 49 29 0 37-78 69-78 25 0 37 29 38 59 1 35 1 70 1 103z"
    />
  </svg>
</template>

<style scoped>
.scene {
  overflow: visible;
}

.hill {
  fill: #fff;
}

.ball {
  animation: float 3.2s calc(var(--i) * -0.9s) infinite alternate ease-in-out;
}

.empty {
  fill: none;
  stroke: #4b4beb;
  stroke-dasharray: 3 2.5;
  transform-box: fill-box;
  transform-origin: center;
  animation: spin 12s infinite linear;
}

/* It escapes once, and then keeps peeking from behind the hill. */
.lost {
  fill: #4b4beb;
  animation:
    escape 2.4s 0.7s both,
    peek 3.6s 3.1s infinite ease-in-out;
}

/* Waits for the loading screen to leave. */
[inert] .lost {
  animation-play-state: paused;
}

@keyframes float {
  from {
    transform: translateY(-4px);
  }
  to {
    transform: translateY(5px);
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes escape {
  0% {
    transform: translate(704px, 102px);
    animation-timing-function: ease-in;
  }
  14% {
    transform: translate(708px, 123px);
    animation-timing-function: ease-in;
  }
  32% {
    transform: translate(738px, 178px);
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.6);
  }
  46% {
    transform: translate(744px, 283px);
    animation-timing-function: ease-out;
  }
  58% {
    transform: translate(751px, 258px);
    animation-timing-function: ease-in;
  }
  68% {
    transform: translate(756px, 283px);
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: translate(728px, 283px);
  }
}

@keyframes peek {
  0%,
  15% {
    transform: translate(728px, 283px);
  }
  35%,
  50% {
    transform: translate(714px, 283px);
  }
  68%,
  100% {
    transform: translate(728px, 283px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ball,
  .empty,
  .lost {
    animation: none;
  }

  .lost {
    transform: translate(728px, 283px);
  }
}
</style>
