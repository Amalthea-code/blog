<template>
  <header class="header">
    <div class="header__logo">.KRASIKOV DMITRIY</div>
    <div>
      <nav>
        <router-link to="/about" class="header__link">.about</router-link>
        <router-link to="/blog" class="header__link">.blog</router-link>
        <router-link to="/contacts" class="header__link">.contacts</router-link>
      </nav>
      <div class="header__language"></div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header {
  background-color: var(--main-color-medium);
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: #000;
  padding: 0 4vh;
  &__logo {
    font-weight: 700;
    padding: 0;
    margin: 0;
    font-size: 3.5rem;
    line-height: 1.1;
  }
  &__link {
    padding: 1vh;
  }
}
</style>
