<template>
  <div class="blog">
    <div class="blog__filter">
      <div
        class="blog__filter-element"
        :class="filterSelect === '' ? 'blog__filter-element--active' : null"
        @click="filterSelect = ''"
      >
        All
      </div>
      <div
        class="blog__filter-element"
        :class="filterSelect === 'code' ? 'blog__filter-element--active' : null"
        @click="filterSelect = 'code'"
      >
        Code
      </div>
      <div
        class="blog__filter-element"
        :class="filterSelect === 'music' ? 'blog__filter-element--active' : null"
        @click="filterSelect = 'music'"
      >
        Music
      </div>
    </div>
    <Post
      v-for="(el, index) in filteredBlogs"
      :number="index"
      :title="el.title"
      :description="el.description"
      :date="el.date"
      :tags="el.tags"
      :code="el.code"
    />
  </div>
</template>

<script setup lang="ts">
import blogs from '@/blogs'
import Post from '@/components/blog/Post.vue'
import { computed, ref } from 'vue'
const filterSelect = ref('')
const filteredBlogs = computed(() => {
  if (filterSelect.value) {
    const result = blogs.sort((a: object, b: object) => {
      const aVal = !a.tags.find((element: String) => element.includes(filterSelect.value))
      const bVal = !b.tags.find((element: String) => element.includes(filterSelect.value))
      if (aVal > bVal) {
        return 1
      }
      if (aVal < bVal) {
        return -1
      }
      return 0
    })
    return result
  } else {
    return blogs
  }
})
</script>

<style lang="scss" scoped>
.blog {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: calc(90vh - 120px);
  background: #ecece9;
  &__filter {
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    width: 80vw;
    margin: 0 auto;
    font-weight: 700;
    font-size: 1.5rem;
    &-element {
      cursor: pointer;
      padding: 1rem;
      position: relative;
      &--active {
        &::before {
          content: '.';
          position: absolute;
          left: calc(1rem - 8px);
        }
      }
    }
  }
}
</style>
