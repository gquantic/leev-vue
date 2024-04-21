<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

import type { Ref } from 'vue'
import type { Apartment } from '@/interfaces/Apartment'

// Define props with correct type for 'items'
const props = defineProps<{
  items: Apartment[];
}>()

// Create a reactive reference for 'items'
const items = ref<Apartment[]>([])

// Inside onMounted, get data from props and assign it to the 'items' variable
onMounted(() => {
  items.value = props.items
  console.log('Items:', items.value)
})
</script>

<template>
  <carousel :items-to-show="3" :wrap-around="true" :touch-drag="false" class="z-3">
    <slide v-for="slide in items" :key="slide.id" style="padding: 0 5px">
      <div class="list-apartments__item d-block position-relative">
        <picture>
          <source :srcset="slide.cover" type="image/webp" />
          <img class="apartment-img position-absolute" :src="slide.cover" alt="" />
        </picture>
        <div class="badges d-flex justify-content-start gap-2">
          <div class="badges__item">
            <span>{{ slide.objectTypes[0]?.name.En }}</span>
          </div>
        </div>
        <RouterLink :to="'/apartments/' + slide.id">
          <div class="content-card">
            <div class="content__card-descr content-card__rooms d-flex align-items-center gap-2">
              <span>{{ slide.rooms }} rooms</span>
            </div>
            <h4 class="title-card">{{ slide.name?.En }}</h4>
            <div class="content__card-descr content-card__adress" style="text-align: left">
              <span>{{ slide.address }}</span>
            </div>
            <div class="price price-mobile">
              <p class="text-price">
                from <span class="text-price-bold">{{ slide.price }}</span>/night
              </p>
            </div>
          </div>
          <div class="price price-desktop">
            <p class="text-price">
              from <span class="text-price-bold">{{ slide.price }}</span>/night
            </p>
          </div>
        </RouterLink>
      </div>
    </slide>
  </carousel>
</template>
