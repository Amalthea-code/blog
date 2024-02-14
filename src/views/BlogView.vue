<template>
  <div>
    <Post v-for="el in blogs"
      :title="el.title"
      :description="el.description"
      :date="el.date"
    />
  </div>
</template>

<script setup lang="ts">
import blogs from '@/../blogs'
import Post from '@/components/blog/Post.vue'
</script>

<style scoped>

</style>