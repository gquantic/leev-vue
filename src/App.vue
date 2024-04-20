<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {onMounted, ref} from 'vue'
import Footer from '@/components/Footer.vue'

let loaded = ref(false);

// Слова для анимации загрузки
const words = ["LEEV", "LOVE", "LIVE"];
let currentIndex = 0;

// Функция для изменения текста загрузки
function changeWord() {
  let element = document.getElementById("loader");

  if (element !== null) {
    element.textContent = words[currentIndex];
    currentIndex = (currentIndex + 1) % words.length;
  }
}

// Изменяем текст загрузки каждую секунду
setInterval(changeWord, 800);

// Убираем после полной загрузки
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    loaded.value = true;
    document.getElementById('loader').remove();
  }, 2000)
}, false);
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
