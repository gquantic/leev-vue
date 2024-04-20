<script setup lang="ts">
import HomeSection from '@/views/HomeBlocks/HomeSection.vue'
import OutApartments from '@/views/HomeBlocks/OurApartments.vue'
import MapSection from '@/views/HomeBlocks/MapSection.vue'
import MaybeNeed from '@/views/HomeBlocks/MaybeNeed.vue'
import MoreThan from '@/views/HomeBlocks/MoreThan.vue'
</script>

<template>
  <HomeSection />
  <OutApartments />
  <MapSection />
  <MaybeNeed />
  <MoreThan />
</template>

<style lang="scss">
header,
.btn.btn-outline-white {
  transition: 0.2s ease;
}

.header--scroll {
  background-color: #fff !important;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  * {
    color: #000 !important;
  }

  .btn.btn-outline-white {
    border-color: rgb(253, 111, 31) !important;
    color: rgb(22, 22, 22);
  }
}
</style>

<script lang="ts">
import jQuery from 'jquery'

const $ = jQuery

window.onscroll = function () {
  myFunction()
}

function myFunction() {
  let header = $('header')
  let scroll = window.scrollY
  if (scroll > 100) {
    header.addClass('header--scroll')
  } else {
    header.removeClass('header--scroll')
  }
}
</script>
