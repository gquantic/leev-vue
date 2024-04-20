<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ApartmentsCarousel from '@/components/Apartment/ApartmentsCarousel.vue'
import axios from 'axios'

// Import variable from env
const API_URL = import.meta.env.VITE_API_URL

const apartments = ref([])

onMounted(async () => {
  try {
    const response = await axios.get(API_URL + 'apartments')
    apartments.value = response.data.data
    console.log(apartments)
  } catch (error) {
    console.error('Error fetching apartments:', error)
  }
})
</script>

<template>
  <section class="our-apartments">
    <div class="container">
      <div class="row">
        <div class="col-12 position-relative">
          <div
            data-aos="fade-up"
            class="box-title d-flex flex-column align-items-center aos-init aos-animate"
          >
            <h2 class="title">Our apartments</h2>
            <p class="m-0 descr-section">
              Your perfect home is waiting for you on Leev. Beautiful furniture, designer touches,
              comfy beds and spacious rooms and bathrooms make it easy to relax and rest so that you
              feel at home.
            </p>
          </div>
          <ApartmentsCarousel
            v-if="apartments && Object.keys(apartments).length > 0"
            :items="apartments"
          />
        </div>
      </div>
    </div>
  </section>
</template>
