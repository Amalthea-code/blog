<template>
  <div>
    <div class="map" id="map1" />
    <div class="map" id="map2" />
  </div>
</template>

<script setup>
  import {onMounted} from "vue";

  async function isMap() {
    await ymaps3.ready;
    const {YMap, YMapDefaultSchemeLayer} = ymaps3;
    const map = new YMap(

        // Передайте ссылку на HTMLElement контейнера
        document.getElementById('map1'),
        // Передайте параметры инициализации карты
        {
          location: {
            zoom: 10,
            center: [25.229762, 55.289311]
          }
        }
    );
  }
  onMounted(()=> {
    isMap()
  })
</script>

<style lang="scss" scoped>
  .map {
    display: flex;
  }
</style>