<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
import Header from "@/components/Header/Header.vue";
import HeaderMobile from "@/components/Header/HeaderMobile.vue";
import { Carousel, Slide } from 'vue3-carousel'
import Characteristic from "@/components/ApartmentView/Characteristic.vue";
import Images3d from "@/components/slider/Images3d.vue";
import ApartmentAdvantages from "@/components/ApartmentView/ApartmentAdvantages.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import ShowMoreText from "@/components/ShowMoreText.vue";
import ApartmentMaybeNeed from "@/components/ApartmentView/ApartmentMaybeNeed.vue";
import AboutApartment from "@/components/AboutApartment.vue";
import Faq from "@/components/Faq.vue";
import OtherApartments from "@/components/ApartmentView/OtherApartments.vue";
import BookNow from "@/components/BookNow.vue";

const API_URL = import.meta.env.VITE_API_URL

const route = useRoute()
const apartment = ref([])

let loaded = false;

console.log()

// get apartment by router id param
onMounted(async () => {
  try {
    const response = await axios.get(API_URL + 'apartments/' + route.params.id)
    apartment.value = response.data.data

    loaded = true;
  } catch (error) {
    console.error('Error fetching apartment:', error)
  }
})
</script>

<template>
  <Header />
  <HeaderMobile />

  <div class="apartment">
    <section class="apartment-big-slider position-relative" style="margin-top: 80px;position: relative;">
      <div id="apartmentBigSlider">
<!--        <Carousel :items-to-show="1.5"-->
<!--                  style="height: 600px;"-->
<!--                  :wrap-around="true"-->
<!--                  :touch-drag="false"-->
<!--                  class="z-3"-->
<!--                  v-if="loaded && apartment && apartment.photos && Object.values(apartment.photos).length > 0"-->
<!--                  id="">-->

<!--          <Slide v-for="slide in apartment.photos"  :key="slide" style="padding: 0 5px;">-->
<!--            <div class="picture" :style="'background: url(\'' + slide  + '\');height:600px;background-position:center center;width:100%;border-radius:8px;'"></div>-->
<!--          </Slide>-->

<!--        </Carousel>-->

        <swiper
            v-if="loaded && apartment && apartment.photos && Object.values(apartment.photos).length > 0"
            :slides-per-view="2.2"
            :centered-slides='true'
            :space-between='20'
            :loop="true"

        >
          <swiper-slide
              :index="index"
              :data-swiper-autoplay='3000'
              v-for="(photo, index) in apartment?.photos"
          >
            <picture>
              <img class="slide-img" :src="photo" alt="" />
            </picture>
          </swiper-slide>
        </swiper>

        <h3 class="name-apartment">{{ apartment?.name?.En }}</h3>
        <p class="price-apartment">from <span class="price">${{ apartment?.price }}</span>/night</p>
      </div>
    </section>

    <Characteristic :item="apartment" />

    <div class="apartment-min-slider">
      <Images3d :images="apartment?.photos" />
    </div>

    <ApartmentAdvantages :advantages="apartment?.advantages" />

    <section class="description description-big" v-if="apartment.description?.length > 0">
      <div class="descr-text">
        <p class="text" style="height: 100px; overflow: hidden;">

        </p>
        <ShowMoreText>
          {{ apartment?.long_description?.En }}
        </ShowMoreText>
      </div>
    </section>

    <ApartmentMaybeNeed :services="apartment.services" />

    <AboutApartment />

    <Faq />

    <OtherApartments />

    <BookNow :apartment="apartment" v-if="Object.values(apartment).length > 0" />
  </div>
</template>

<style lang="scss">
.apartment .apartment-min-slider .swiper-slide {
  width: 400px !important;
  height: 500px !important;
}

.apartment-big-slider#apartmentBigSlider .carousel__slide .slide-img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  border-radius: 8px;
}

.apartment-big-slider#apartmentBigSlider .carousel__slide {
  width: 1230px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
  border-radius: 8px;
}
</style>