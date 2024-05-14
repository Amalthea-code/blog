<template>
  <div class="profile">
    <img class="profile__image" src="/src/assets/image.jpg" alt="">
    <div class="profile__element">Name: Dmitriy Krasikov</div>
    <a class="profile__element" target="_blank" href="https://t.me/thesilentcomedy">tg: @TheSilentComedy</a>
    <a class="profile__element" target="_blank" href="mailto:fender02297@gmail.com">mail: fender02297@gmail.com</a>
  </div>
</template>

<script setup>
  
</script>

<style lang="scss" scoped>
  .profile {
    width: 240px;
    position: relative;
    z-index: 2;
    box-shadow: 0 0 1px 0 #000;
    border-radius: 4px;
    padding: 10px;
    background-color: #FFFFFFD1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    &__image {
      width: 100%;
      border-radius: 4px;
    }
    &__element {
      display: block;
      text-decoration: none;
      color: #000;
    }
  }
</style>