<script setup>
import ButtonMore from '@/components/common/ButtonMore.vue'
defineProps({
  title: String,
  data: String,
  members: String
})
</script>
<template>
  <div>
    <span class="title">{{ title }} ({{ data }})</span>
    <span class="members">{{ members }}</span>
    <ButtonMore link="/" text="ver mais" />
  </div>
</template>
<style>
div .title {
  font-weight: 500;
  display: block;
}
div button {
    margin-top: 10px;
}
</style>
