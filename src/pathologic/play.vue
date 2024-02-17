<template>
  <div class="pathologic" id="pathologic"></div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import main from "@/pathologic/main.js";

onMounted(() => {
  const output = document.getElementById('pathologic')
  main(output)
})

</script>

<style lang="scss" scoped>
 .pathologic {
   width: 700px;
   height: 700px;
   margin: auto;
   border: 4px solid saddlebrown;
 }
</style>