<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'
import Footer from '@/components/Footer.vue'

let loaded = ref(false);

// Words for loading animation
const words = ["LEEV", "LOVE", "LIVE"];
let currentIndex = 0;

// Function to change loading text
function changeWord() {
  let element = document.getElementById("loader");

  if (element !== null) {
    element.textContent = words[currentIndex];
    currentIndex = (currentIndex + 1) % words.length;
  }
}

// Change loading text every 800 milliseconds
setInterval(changeWord, 800);

// Remove loader after full loading
onMounted(() => {
  setTimeout(() => {
    loaded.value = true;
    const loaderElement = document.getElementById('loader');
    if (loaderElement !== null) {
      loaderElement.remove();
    }
  }, 2000)
});
</script>

<template>
  <div class="page pt-0">
    <RouterView />
  </div>

  <Footer />

  <div class="preloader" id="loader">
    LEEV
  </div>
</template>
