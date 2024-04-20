<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

import { Swiper, SwiperSlide } from 'swiper/vue';
import { getApartments } from "@/api/getApartments.ts";

let apartments = ref([])
let loaded: boolean = ref(false)

onMounted(async () => {
  try {
    const response = await axios.get(API_URL + 'apartments')
    apartments.value = response.data.data

    loaded.value = true;
  } catch (error) {
    console.error('Error fetching apartment:', error)
  }
})
</script>

<template>
  <section class="other-apartments">
    <div data-aos="fade-up" class="box-title d-flex flex-column align-items-center aos-init aos-animate">
      <h2 class="title">Other apartments</h2>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12" v-if="loaded === true">
          <swiper
              :slides-per-view="3"
              :loop="true"
              :space-between='20'
          >
            <swiper-slide v-for="(item, index) in apartments" :index="index">
              <RouterLink class="list-apartments__item d-block position-relative" :to="'/apartments/' + item.id">
                <picture>
                  <source :srcset="item.cover" type="image/webp" />
                  <img class="apartment-img position-absolute" :src="item.cover" alt="" />
                </picture>
                <div class="badges d-flex justify-content-start gap-2">
                  <div class="badges__item"><span>{{ item.objectTypes[0]?.name.En }}</span></div>
                </div>
                <div class="content-card">
                  <div class="content__card-descr content-card__rooms d-flex align-items-center gap-2"><span>{{ item.rooms }} rooms</span></div>
                  <h4 class="title-card">{{ item.name.En }}</h4>
                  <div class="content__card-descr content-card__adress"><span>{{ item.address }}</span></div>
                  <div class="price price-mobile">
                    <p class="text-price">from <span class="text-price-bold">{{ item.price }}</span>/night</p>
                  </div>
                </div>
                <div class="price price-desktop">
                  <p class="text-price">from <span class="text-price-bold">{{ item.price }}</span>/night</p>
                </div>
              </RouterLink>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>