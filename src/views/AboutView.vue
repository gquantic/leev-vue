<script setup lang="ts">
import Header from "@/components/Header/Header.vue";
import HeaderMobile from "@/components/Header/HeaderMobile.vue";

import home_img from "/public/img/home-img.webp";
</script>

<template>
  <Header />
  <HeaderMobile />
  <div class="page about">
    <div data-aos="fade-up" class="box-title d-flex flex-column align-items-center aos-init aos-animate">
      <h2 class="title">Find spaces at Leev.<span class="title title-label">Come stay with us and feel at home.</span></h2>
    </div>
    <section class="introduction d-flex flex-column-reverse flex-md-row-reverse flex-wrap align-items-center justify-content-between">
      <div class="introduction__item">
        <p class="descr-text descr-text-head">
          She was thinking of Prince Charming, and, that she might think of himall the more, she did not talk of him, but prattled on about the ship inwhich Jim was going to sail, about the gold he was certain to find,about the
          wonderful heiress whose life he was to save from the wicked,red-shirted bushrangers. For he was not to remain a sailor, or asupercargo, or whatever he was going to be. I went to the dining-roomand waked him.
        </p>
      </div>
      <div class="introduction__item">
        <img
            alt="aaa"
            loading="lazy"
            width="400"
            height="500"
            decoding="async"
            data-nimg="1"
            class="introduction__item-image large"
            :srcset="home_img"
            :src="home_img"
            style="color: transparent;"
        />
      </div>
    </section>
    <section class="introduction introduction-bottom flex-column-reverse flex-md-row d-flex flex-wrap align-items-center justify-content-between">
      <div class="introduction__item">
        <p class="descr-text">
          I went to the dining-room and waked him. He was dazed for a moment, but when he saw the sunlight streaming in through the edges of the shutters he thought he was late, and expressed his fear. I assured him that Lucy was
          still asleep, but told him as gently as I could that.
        </p>
      </div>
      <div class="introduction__item">
        <img
            alt="..."
            loading="lazy"
            width="400"
            height="500"
            decoding="async"
            data-nimg="1"
            class="introduction__item-image small"
            srcset="/public/img/home-img.webp"
            src="/public/img/home-img.webp"
            style="color: transparent;"
        />
      </div>
    </section>
    <section class="advantages bg-dark-green" style="width:100%;">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="box-advantages d-flex flex-wrap justify-content-between align-items-center">
              <div data-aos="" data-aos-duration="700" class="box-advantages__item d-flex flex-column gap-2 align-items-center aos-init">
                <img src="https://crm.leev.com/storage/75/consierge.svg" class="advantage-img" alt="..." /><span class="advantage-name">Consierge</span>
              </div>
              <div data-aos="" data-aos-duration="700" class="box-advantages__item d-flex flex-column gap-2 align-items-center aos-init">
                <img src="https://crm.leev.com/storage/76/king-bed.svg" class="advantage-img" alt="..." /><span class="advantage-name">King-size bed</span>
              </div>
              <div data-aos="" data-aos-duration="700" class="box-advantages__item d-flex flex-column gap-2 align-items-center aos-init">
                <img src="https://crm.leev.com/storage/78/panorama.svg" class="advantage-img" alt="..." /><span class="advantage-name">Panorama</span>
              </div>
              <div data-aos="" data-aos-duration="700" class="box-advantages__item d-flex flex-column gap-2 align-items-center aos-init">
                <img src="https://crm.leev.com/storage/79/tv.svg" class="advantage-img" alt="..." /><span class="advantage-name">LCD TV</span>
              </div>
              <div data-aos="" data-aos-duration="700" class="box-advantages__item d-flex flex-column gap-2 align-items-center aos-init">
                <img src="https://crm.leev.com/storage/80/bathroom.svg" class="advantage-img" alt="..." /><span class="advantage-name">Bathroom</span>
              </div>
              <div data-aos="" data-aos-duration="700" class="box-advantages__item d-flex flex-column gap-2 align-items-center aos-init">
                <img src="https://crm.leev.com/storage/82/kitchen.svg" class="advantage-img" alt="..." /><span class="advantage-name">Kitchen</span>
              </div>
              <div data-aos="" data-aos-duration="700" class="box-advantages__item d-flex flex-column gap-2 align-items-center aos-init">
                <img src="https://crm.leev.com/storage/83/storage.svg" class="advantage-img" alt="..." /><span class="advantage-name">Storage</span>
              </div>
              <div data-aos="" data-aos-duration="700" class="box-advantages__item d-flex flex-column gap-2 align-items-center aos-init">
                <img src="https://crm.leev.com/storage/84/wifi.svg" class="advantage-img" alt="..." /><span class="advantage-name">WIFI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="testimonials" style="width:100%;">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div data-aos="fade-up" class="box-title d-flex flex-column align-items-center aos-init aos-animate">
              <p class="m-0 descr-section">
                Beautiful apartment at the center of Kiev. Brand new. Ideal for a couple or person who want to spend unforgatable time in our beautiful city. Kitchen is full equipped with lots of storage, make this apartment
                comfortable for long term staying.
              </p>
            </div>
            <div class="swiper swiper-testimonials">
              <div class="swiper-wrapper d-flex justify-content-between">
                <div data-aos="zoom-in" data-aos-duration="1000" class="swiper-slide aos-init aos-animate">
                  <img
                      alt="..."
                      loading="lazy"
                      width="400"
                      height="500"
                      decoding="async"
                      data-nimg="1"
                      class="slide-img"
                      srcset="/public/img/reviews/1.webp"
                      src="/public/img/reviews/1.webp"
                      style="color: transparent;"
                  />
                  <p class="text-reviews">Beautiful furniture, designer touches, comfy beds and spacious rooms.</p>
                  <span class="name-user">Emmanuel Jean-Michel Frédéric Macron</span>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1300" class="swiper-slide mt-100 aos-init aos-animate">
                  <img
                      alt="..."
                      loading="lazy"
                      width="400"
                      height="500"
                      decoding="async"
                      data-nimg="1"
                      class="slide-img"
                      srcset="/public/img/reviews/2.webp"
                      src="/public/img/reviews/2.webp"
                      style="color: transparent;"
                  />
                  <p class="text-reviews">Beautiful furniture, designer touches, comfy beds and spacious rooms.</p>
                  <span class="name-user">Emmanuel Jean-Michel Frédéric Macron</span>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1600" class="swiper-slide mt-40 aos-init aos-animate">
                  <img
                      alt="..."
                      loading="lazy"
                      width="400"
                      height="500"
                      decoding="async"
                      data-nimg="1"
                      class="slide-img"
                      srcset="/public/img/reviews/3.webp"
                      src="/public/img/reviews/3.webp"
                      style="color: transparent;"
                  />
                  <p class="text-reviews">Beautiful furniture, designer touches, comfy beds and spacious rooms.</p>
                  <span class="name-user">Emmanuel Jean-Michel Frédéric Macron</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="description-sec">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="description__head">
              <p class="who-say">Lionel Ponsardo, Founder</p>
              <p class="text">
                “Every time I discover a new city or visit a favorite place again, I create a unique memory. Although I cannot control the weather that will accompany your trip, I can nevertheless guarantee you exceptional
                service and a warm welcome”.
              </p>
            </div>
            <div class="description__body d-flex flex-column flex-lg-row justify-content-between align-items-center">
              <div class="description__body_item">
                <img
                    alt="..."
                    loading="lazy"
                    width="400"
                    height="500"
                    decoding="async"
                    data-nimg="1"
                    class="image"
                    srcset="/public/img/reviews/1.webp"
                    src="/public/img/reviews/1.webp"
                    style="color: transparent;"
                />
              </div>
              <div class="description__body_item">
                <p class="text">We are pleased to welcome you in our high-class apartments for short term rentals. Our flats meet the best standards of hosting, aesthetics of interiors, and amenities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mobile-app bg-dark-green" style="width:100%;">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="d-flex justify-content-between flex-wrap">
              <div class="box d-flex gap-2">
                <div class="box__img d-flex">
                  <img
                      alt="..."
                      loading="lazy"
                      width="400"
                      height="500"
                      decoding="async"
                      data-nimg="1"
                      class="image"
                      srcset="/public/img/app/1.webp"
                      src="/public/img/app/1.webp"
                      style="color: transparent;"
                  />
                </div>
                <div class="box__img mt-50">
                  <img
                      alt="..."
                      loading="lazy"
                      width="400"
                      height="500"
                      decoding="async"
                      data-nimg="1"
                      class="image"
                      srcset="/public/img/app/2.webp"
                      src="/public/img/app/2.webp"
                      style="color: transparent;"
                  />
                </div>
              </div>
              <div class="box">
                <div class="box__descr d-flex justify-content-center flex-column">
                  <div class="d-flex align-items-center gap-2">
                    <h4 class="title">Mobile</h4>
                    <p class="title sub-title">application</p>
                  </div>
                  <p class="descr-app mb-50">
                    She was thinking of Prince Charming, and, that she might think of him all the more, she did not talk of him, but prattled on about the ship in which Jim was going to sail, about the gold he was certain to
                    find, about the wonderful heiress whose life he was to save from the wicked, red-shirted bushrangers.
                  </p>
                  <a class="d-block btn btn-secondary" href="#">Read more about app</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>