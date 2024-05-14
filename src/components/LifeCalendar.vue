<template>
  <div class="life-calendar">
    <canvas class="life-calendar__canvas" id="life-canvas" />
  </div>
</template>

<script setup>
import {onMounted} from "vue";

  function canvasRender() {
    let canvas = document.getElementById("life-canvas");
    const bd = new Date(1997, 12, 22, 0, 0, 0, 0);
    const naw = new Date();
    const seconds = naw.getTime() - bd.getTime();
    const allWeeks = Math.floor((((((seconds / 1000) / 60) / 60 )/ 24)/7))
    const block = {
      width: 8,
      height: 8,
      border: 1,
      create: function (ctx, x, y, isRed) {
        ctx.fillStyle = isRed ? "red" : "grey";
        ctx.fillRect(x - block.border, y - block.border, block.width + (block.border * 2), block.width + (block.border * 2));
        ctx.fillStyle = isRed ? "red" : "grey";
        ctx.fillRect(x, y, block.width, block.height);
      }
    }
    let ctx = canvas.getContext("2d");
    canvas.width = 646;
    canvas.height = 1100;
    for (let i = 0; i < 90; i++) {
      for (let j = 0; j < 52; j++) {
        let isRed = allWeeks > ((i * 52) + j)
        block.create(ctx, 1 + (12 * (j + 1)), 1 + (12 * (i + 1)), isRed)
      }

    }
  }
  onMounted(()=> {
    canvasRender()
  })
</script>

<style lang="scss" scoped>
  .life-calendar {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    opacity: .3;
  }
</style>