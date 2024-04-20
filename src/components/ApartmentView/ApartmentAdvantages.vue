<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  advantages: {
    type: Object,
    required: true
  },
})
</script>

<template>
  <section class="advantages">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="box-advantages d-flex flex-wrap justify-content-between align-items-center">
            <div data-aos="fade-right"
                 data-aos-duration="700"
                 class="box-advantages__item d-flex flex-column gap-2 align-items-center aos-init aos-animate"
                 v-for="advantage in advantages"
            >
              <img :src="advantage.icon" class="advantage-img" alt="..." />
              <span class="advantage-name">{{ advantage.name.En }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>