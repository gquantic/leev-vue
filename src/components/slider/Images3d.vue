<script setup lang="ts">
import { defineProps } from 'vue'
// import { Carousel3d, Slide } from 'vue3-carousel-3d'
// import "vue3-carousel-3d/dist/index.css"
// import swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css/bundle';

defineProps({
  images: {
    type: Array,
    required: true
  },
})
</script>

<template>
<!--  <carousel-3d>-->
<!--    <slide v-for="image in images" :key="image" :src="image">-->
<!--      <img :src="image"-->
<!--           alt=""-->
<!--           class="slide-img">-->
<!--    </slide>-->
<!--  </carousel-3d>-->

<!--  <Carousel3d>-->
<!--    <Slide :index="index" v-for="(image, index) in images">-->
<!--      <img :src="image" class="slide-img" alt="">-->
<!--    </Slide>-->
<!--  </Carousel3d>-->

  <swiper
      :modules='[EffectCoverflow]'
      id="apartmentMinSlider"
      className="swiper"
      effect='coverflow'
      :grab-cursor='true'
      :centered-slides='true'
      :space-between='20'
      :loop="true"
      :slides-per-view='6'
      :coverflowEffect='{
      rotate: 40,
      stretch: 0,
      depth: 150,
      modifier: 1,
      slideShadows: true,
      }'
      :initial-slide='5'
      :auto-height='true'
  >
    <swiper-slide :index="index" v-for="(image, index) in images" :data-swiper-autoplay='3000'>
      <picture>
        <img class="slide-img" :src="image" alt="" />
      </picture>
    </swiper-slide>
  </swiper>
</template>