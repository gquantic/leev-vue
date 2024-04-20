<script setup lang="ts">
import Header from '@/components/Header/Header.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Import getApartments method from api
import { getApartments } from '@/api/getApartments'
import HeaderMobile from "@/components/Header/HeaderMobile.vue";

let apartments = ref([])
let loading = ref(true)

const API_URL = import.meta.env.VITE_API_URL

onMounted(async () => {
  try {
    const response = await getApartments()
    apartments.value = response.data
  } catch (error) {
    console.error('Error fetching apartments:', error)
  }

  loading = false
})
</script>

<template>
  <Header />
  <HeaderMobile />

  <div class="page apartments">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <section class="title-sec">
            <div class="d-flex align-items-center justify-content-between">
              <h2 class="title">Our apartments</h2>
              <span
                class="show-map text-400 d-none d-md-block"
                data-bs-toggle="modal"
                data-bs-target="#modal-map"
                ><i class="icon icon-mapPin"></i>Show on map</span
              >
              <span
                class="show-map-mobile d-flex align-items-center justify-content-center d-md-none"
                data-bs-toggle="modal"
                data-bs-target="#modal-map"
                ><i class="icon icon-mapPin"></i
              ></span>
            </div>
          </section>
          <section
            class="line-sort d-flex flex-column flex-column-reverse gap-4 flex-lg-row align-items-lg-center justify-content-between"
          >
            <div class="sort d-flex align-items-center gap-4">
              <div class="sort-item sort__rooms d-flex align-items-center gap-2">
                <div class="btn-sort btn-sort-rooms d-flex align-items-center gap-1">
                  Number of rooms<i class="icon icon-chevronDownSmall"></i>
                </div>
                <div class="show-rooms">Studio</div>
                <div class="sort__rooms_item">
                  <div class="box-rooms d-flex flex-column gap-3">
                    <div class="box-item one-rooms"><span data-value="0">Studio</span></div>
                    <div class="box-item two-rooms"><span data-value="1">1 Room</span></div>
                    <div class="box-item two-rooms"><span data-value="2">2 Rooms</span></div>
                    <div class="box-item two-rooms"><span data-value="3">3 Rooms</span></div>
                  </div>
                </div>
              </div>
              <div class="sort-item sort__price d-flex align-items-center">
                <div class="btn-sort btn-sort-price d-flex align-items-center gap-1">
                  Price<i class="icon icon-chevronDownSmall" style="transform: rotate(0deg)"></i
                  ><br />
                </div>
                <div class="sort__price_item" style="opacity: 0; z-index: 0">
                  <div class="filter">
                    <div class="d-flex">
                      <input
                        id="minPrice"
                        min="50"
                        max="2000"
                        class="thumb thumb--left"
                        type="range"
                        value="50"
                      /><input
                        id="maxPrice"
                        min="50"
                        max="2000"
                        class="thumb thumb--right"
                        type="range"
                        value="2000"
                      />
                      <div class="slider">
                        <div class="slider__track"></div>
                        <div class="slider__range" style="left: 0%; width: 100%"></div>
                        <div class="d-flex align-items-center gap-2">
                          <div class="sliderValue slider__left-value">
                            <input class="valueRangeSlider" min="50" max="2000" value="50" />
                          </div>
                          <div class="sliderValue slider__right-value">
                            <input class="valueRangeSlider" min="49" max="2000" value="2000" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="myBtnContainer"
              class="btns-sort-cards d-flex align-items-center flex-nowrap gap-2"
            >
              <button class="btn btn-outline-gray active">Show all</button
              ><button class="btn btn-outline-gray">Studio</button
              ><button class="btn btn-outline-gray">Lux</button>
              <button class="btn btn-outline-gray">Junior suite</button>
            </div>
          </section>
          <div
            class="position-relative w-auto m-auto z-3 fs-5"
            v-if="!loading && apartments && Object.keys(apartments).length < 1"
          >
            There are no suitable apartments according to the definition criteria
          </div>
          <div class="list-apartments" v-if="Object.keys(apartments).length > 1">
            <div class="row">
              <div :class="item.objectTypes[0]?.name.En + ' show column'" v-for="item in apartments">
                <RouterLink class="list-apartments__item d-block position-relative" :to="'/apartments/' + item.id">
                  <picture>
                    <source
                      :srcset="item.cover"
                      type="image/webp"
                    />
                    <img
                      :src="item.cover"
                      class="apartment-img position-absolute"
                      alt="logo Leev"
                    />
                  </picture>
                  <div class="badges d-flex justify-content-start gap-2">
                    <div class="badges__item"><span>{{ item.objectTypes[0]?.name.En }}</span></div>
                  </div>
                  <div class="content-card">
                    <div class="content__card-descr content-card__rooms gap-2">
                      <span>{{ item.rooms }} rooms</span>
                    </div>
                    <h4 class="title-card">{{ item.name.En }}</h4>
                    <div class="content__card-descr content-card__adress"><span>{{ item.address }}</span></div>
                    <div class="price price-mobile">
                      <p class="text-price">from <span class="text-price-bold">${{ item.price }}</span>/night</p>
                    </div>
                  </div>
                  <div class="price price-desktop">
                    <p class="text-price">from <span class="text-price-bold">${{ item.price }}</span>/night</p>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
