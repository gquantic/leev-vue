<script setup lang="ts">
import {defineProps, ref} from 'vue'

let showMore = ref(false);
</script>

<template>
  <div :class="'more-text show-more-' + showMore" style="transition: 3s ease;">
    <slot/>
  </div>
  <span class="link btn-show-more" @click="showMore = !showMore">
    <template v-if="!showMore">
      Show more
    </template>
    <template v-else>
      Show less
    </template>
  </span>
</template>

<style lang="scss">
.more-text {
  height: 100px;
  overflow: hidden;
  transition: 3s ease;

  &.show-more-true {
    height: fit-content;
    transition: 3s ease;
  }
}
</style>