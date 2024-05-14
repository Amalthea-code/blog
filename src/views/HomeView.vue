<template>
  <div class="home-view">
    <Profile style="grid-area: profile" />
    <Blog style="grid-area: blog" />
  </div>
</template>

<script setup>
import Blog from "@/components/Blog.vue";
import Profile from "@/components/Profile.vue";
</script>

<style lang="scss">
  .home-view {
    max-width: 1024px;
    padding: 20px;
    margin: 0 auto;
    display: grid;
    gap: 20px;
    grid-template:
    "profile    blog" 1fr /
     240px      1fr
    ;
  }
</style>
