<template>
  <RouterView />
  <LifeCalendar />
</template>

<script setup>
import { RouterView } from 'vue-router'
import LifeCalendar from "@/components/LifeCalendar.vue";
</script>

<style lang="css">
* {
  font-family: Arial, sans-serif;
  margin: 0;
  box-sizing: border-box;
}
</style>