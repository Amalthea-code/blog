<template>
  <div class="pathologic-menu">
    <div class="pathologic-menu__navigations">
      <router-link class="pathologic-menu__navigations-link" to="/pathologic/play">Start</router-link>
      <router-link class="pathologic-menu__navigations-link" to="/pathologic/download">Download</router-link>
      <router-link class="pathologic-menu__navigations-link" to="/">exit</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .pathologic-menu {
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    padding: 4rem 20vw;
    background: url("./images/menu.jpeg") center;
    background-size: cover;
    &__navigations {
      gap: 20px;
      &-link {
        display: block;
        font-weight: 700;
        font-size: 3.5rem;
        text-transform: uppercase;
        padding: 0 0 1.2rem;
      }
    }
  }
</style>