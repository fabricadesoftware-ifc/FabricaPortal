<script setup lang="ts">
const blocks = ['( )', '=>', '{ }', '</>', '[ ]']
const lamps = [471, 486, 500, 515]
const vents = [546, 553, 560, 567]
const legs = [343, 506, 669]
const sparks = [
  { x: -27, y: -6 },
  { x: -30, y: 2 },
  { x: 27, y: -6 },
  { x: 30, y: 2 },
]
</script>

<template>
  <svg viewBox="296 168 424 210" class="scene" aria-hidden="true">
    <g class="smoke-group">
      <circle
        v-for="puff in 4"
        :key="puff"
        class="smoke"
        cx="548"
        cy="208"
        r="4"
        :style="{ '--i': puff - 1 }"
      />
    </g>

    <rect v-for="x in legs" :key="x" class="leg" :x="x" y="361" width="7" height="13" />
    <rect class="metal" x="306" y="348.5" width="408" height="13" rx="6.5" />
    <line class="belt" x1="322" y1="355" x2="700" y2="355" />

    <!-- Each block crosses the belt in as many cycles as there are blocks. -->
    <g v-for="(glyph, index) in blocks" :key="glyph" class="block" :style="{ '--i': index }">
      <g class="squash">
        <rect class="raw" x="-21.5" y="317.5" width="43" height="31" rx="6" />
        <text class="raw-glyph" x="0" y="338">{{ glyph }}</text>
        <g class="pressed">
          <rect class="pressed-box" x="-21.5" y="317.5" width="43" height="31" rx="6" />
          <text class="pressed-glyph" x="0" y="338">{{ glyph }}</text>
        </g>
      </g>
    </g>

    <g class="sparks" transform="translate(509.5 322)">
      <line
        v-for="spark in sparks"
        :key="`${spark.x}${spark.y}`"
        class="spark"
        :x1="spark.x * 0.85"
        :y1="spark.y * 0.85"
        :x2="spark.x * 1.15"
        :y2="spark.y * 1.15"
        :style="{ '--x': `${spark.x * 0.35}px`, '--y': `${spark.y}px` }"
      />
    </g>

    <g class="piston">
      <rect class="leg" x="506" y="268" width="7" height="32" />
      <rect class="piston-head" x="489" y="299" width="41" height="11" rx="3" />
    </g>

    <g class="machine">
      <rect class="metal" x="541" y="216" width="15" height="20" />
      <rect class="metal" x="537" y="212" width="23" height="8" rx="4" />
      <rect class="metal" x="484" y="223" width="52" height="16" rx="5" />
      <rect class="metal" x="445" y="234" width="130" height="57" rx="10" />
      <rect class="metal" x="437" y="288" width="145" height="7" rx="3" />

      <rect class="panel" x="456" y="243" width="78" height="20" rx="10" />
      <circle
        v-for="(x, index) in lamps"
        :key="x"
        class="lamp"
        :cx="x"
        cy="253"
        r="4.2"
        :style="{ '--i': index }"
      />
      <line v-for="x in vents" :key="x" class="vent" :x1="x" y1="244" :x2="x" y2="262" />

      <rect class="panel" x="456" y="269" width="78" height="13" rx="4" />
      <text class="name" x="496" y="278.2">PRENSA</text>
      <circle class="led" cx="549" cy="275.5" r="2" />
    </g>
  </svg>
</template>

<style scoped>
/*
 * Every animation shares the same cycle. In each one the belt advances one
 * station (0-45%), the press strikes (62%) and goes back up (72-84%).
 */
.scene {
  --cycle: 1.5s;
  --orange: var(--color-brand-orange);
  overflow: visible;
}

.metal {
  fill: #141417;
  stroke: #26262b;
}

.panel {
  fill: var(--color-ink);
  stroke: #2a2a30;
}

.leg {
  fill: #202025;
}

.vent {
  stroke: #2e2e34;
  stroke-width: 1.5;
}

.name {
  font: 500 7px var(--font-mono);
  letter-spacing: 3px;
  text-anchor: middle;
  fill: #85858c;
}

/* 89 is the distance between stations: six dash periods. */
.belt {
  stroke: #3a3a41;
  stroke-width: 1.5;
  stroke-dasharray: 7.4167 7.4167;
  animation: belt var(--cycle) infinite;
}

.block {
  animation: travel calc(var(--cycle) * 5) calc(var(--cycle) * var(--i) * -1) infinite both;
}

.squash {
  transform-box: fill-box;
  transform-origin: 50% 100%;
  animation: squash calc(var(--cycle) * 5) calc(var(--cycle) * var(--i) * -1) infinite;
}

.raw {
  fill: var(--color-ink);
  stroke: #3c3c43;
  stroke-dasharray: 3 2.5;
}

.raw-glyph,
.pressed-glyph {
  font: 700 15px var(--font-mono);
  text-anchor: middle;
  fill: #77777e;
}

.pressed {
  animation: pressed calc(var(--cycle) * 5) calc(var(--cycle) * var(--i) * -1) infinite;
}

.pressed-box,
.piston-head {
  fill: var(--orange);
}

.pressed-glyph {
  fill: #3d1800;
}

.piston {
  animation: piston var(--cycle) infinite;
}

.machine {
  animation: shake var(--cycle) infinite;
}

.spark {
  stroke: var(--orange);
  stroke-width: 1.5;
  stroke-linecap: round;
  animation: spark var(--cycle) infinite both;
}

.lamp {
  fill: #2b2b31;
  animation: lamp var(--cycle) calc(var(--cycle) * var(--i) / 4) infinite;
}

.led {
  fill: var(--orange);
  animation: led var(--cycle) infinite;
}

.smoke {
  fill: #2a2a30;
  transform-box: fill-box;
  transform-origin: center;
  animation: smoke calc(var(--cycle) * 2) calc(var(--cycle) * var(--i) * -0.5) infinite linear both;
}

@keyframes belt {
  from {
    stroke-dashoffset: 0;
    animation-timing-function: ease-in-out;
  }
  45%,
  to {
    stroke-dashoffset: -89;
  }
}

/* Enters, waits, is pressed at the second station, and falls off the end. */
@keyframes travel {
  0% {
    transform: translateX(331.5px);
    opacity: 0;
    animation-timing-function: ease-in-out;
  }
  5% {
    opacity: 0;
  }
  9%,
  20% {
    transform: translateX(420.5px);
    opacity: 1;
    animation-timing-function: ease-in-out;
  }
  29%,
  40% {
    transform: translateX(509.5px);
    animation-timing-function: ease-in-out;
  }
  49%,
  60% {
    transform: translateX(598.5px);
    animation-timing-function: ease-in-out;
  }
  69%,
  80% {
    transform: translateX(687.5px);
    opacity: 1;
    animation-timing-function: ease-in;
  }
  84% {
    transform: translateX(722px);
    opacity: 1;
    animation-timing-function: ease-in;
  }
  88%,
  100% {
    transform: translate(744px, 30px);
    opacity: 0;
  }
}

@keyframes pressed {
  0%,
  32.4% {
    opacity: 0;
  }
  32.5%,
  100% {
    opacity: 1;
  }
}

@keyframes squash {
  0%,
  32% {
    transform: none;
  }
  32.6% {
    transform: scale(1.08, 0.86);
  }
  34.4% {
    transform: scale(1.08, 0.86);
  }
  36%,
  100% {
    transform: none;
  }
}

@keyframes piston {
  0%,
  52% {
    transform: none;
    animation-timing-function: cubic-bezier(0.7, 0, 1, 0.6);
  }
  62%,
  72% {
    transform: translateY(12px);
    animation-timing-function: ease-out;
  }
  84%,
  100% {
    transform: none;
  }
}

@keyframes shake {
  0%,
  61% {
    transform: none;
  }
  63% {
    transform: translateY(1.5px);
  }
  66% {
    transform: translateY(-0.8px);
  }
  69%,
  100% {
    transform: none;
  }
}

@keyframes spark {
  0%,
  61% {
    opacity: 0;
    transform: none;
  }
  63% {
    opacity: 1;
    transform: none;
    animation-timing-function: ease-out;
  }
  78%,
  100% {
    opacity: 0;
    transform: translate(var(--x), var(--y));
  }
}

@keyframes lamp {
  0%,
  22% {
    fill: var(--color-brand-orange);
  }
  30%,
  94% {
    fill: #2b2b31;
  }
}

@keyframes led {
  0%,
  58% {
    opacity: 0.3;
  }
  62%,
  80% {
    opacity: 1;
  }
}

@keyframes smoke {
  0% {
    transform: scale(0.6);
    opacity: 0;
  }
  12% {
    opacity: 1;
  }
  100% {
    transform: translate(135px, -28px) scale(1.6);
    opacity: 0;
  }
}

/* Paused, the negative delays keep each block at its own station. */
@media (prefers-reduced-motion: reduce) {
  .scene * {
    animation-play-state: paused;
  }
}
</style>
