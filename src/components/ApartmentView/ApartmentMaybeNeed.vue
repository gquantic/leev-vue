<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  services: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="may-be-needed">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div data-aos="fade-up" data-aos-duration="1500" class="box-title d-flex flex-column align-items-center aos-init aos-animate">
            <h2 class="title">Leev your best</h2>
            <p class="m-0 descr-section">It’s possible to move in within hours from the time you find us online to the time you check in.</p>
          </div>
          <div data-aos="fade-right" data-aos-duration="1000" class="services d-flex align-items-center justify-content-between flex-wrap aos-init aos-animate">
            <RouterLink class="services__item mb-20" :to="'/services#' + item.id" v-for="item in services">
              <div class="item-bg"><img :src="item.icon" class="item-bg" alt="" /></div>
              <p class="text-hover">{{ item.name.En }}</p>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>