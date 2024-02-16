<template>
  <div class="post">
    <div class="post__wrapper">
      <div class="post__text">
        <div class="post__title">{{ title }}</div>
        <div class="post__description">{{ description }}</div>
        <div class="post__info">
          <div class="post__date">{{ date }}</div>
          <div class="post__tags">
            <div v-for="tag in tags" class="post__tag" :class="`post__tag-${tag}`">
              {{ tag }}
            </div>
          </div>
        </div>
        <div :id="`code-${number}`" class="post__code" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted } from 'vue'
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  tags: {
    type: Array
  },
  number: {
    type: Number
  },
  code: {
    type: Function,
    default: () => {}
  }
})

onMounted(()=> {
  const output = document.getElementById(`code-${props.number}`)
  const input = document.getElementById(`code-${props.number}`)
  console.log(output)
  console.log(input)
  props.code(input, output)
})
</script>

<style lang="scss" scoped>
.post {
  background: url('./../../images/noise.svg');
  a {
    color: #ff0000e6;
  }
  &:nth-child(2n) {
    color: #fff;
    background: url('./../../images/noiseBlack.svg');
    fill: #fff;
  }
  &__wrapper {
    display: flex;
    justify-content: space-between;
    gap: 4rem;
    max-width: 80vw;
    margin: 0 auto;
    padding: 7rem 0;
  }
  &__title {
    font-weight: 700;
    font-size: 3.5rem;
    text-transform: uppercase;
    padding: 0 0 1.2rem;
  }
  &__description {
    width: 50%;
    font-size: 1.5rem;
  }
  &__date {
    margin: 1.5rem 0 0;
    font-weight: 700;
    font-size: 1.5rem;
  }
}
</style>
