<template>
  <div class="blog">
    <div class="post" v-for="el in content">
      <div class="post__title">{{el.title}}</div>
      <div class="post__text">{{el.text}}</div>
      <router-link :to="el.link">
        link
      </router-link>
    </div>
  </div>
</template>

<script setup>
  const content = [
    {
      title: "Map calculator",
      text: "Collapses squares if they are nearby",
      link: '/map'
    }
  ]
</script>

<style lang="scss" scoped>
  .blog {
    display: flex;
    gap: 20px;
    flex-direction: column;
    position: relative;
    z-index: 2;
  }
  .post {
    padding: 20px;
    background-color: #FFFFFFD1;
    border-radius: 4px;
    box-shadow: 0 0 1px 0 #000;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    &__title {
      font-size: 1.5rem;
    }
  }
</style>