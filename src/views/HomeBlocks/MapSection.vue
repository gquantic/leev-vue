<template>
  <section class="map">
    <div>
      <div class="upper-layer" style="opacity: 0.9; z-index: 3"></div>
      <iframe
        class="frame-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40411.19654429798!2d2.33939058246282!3d48.86094106677744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2z0J_QsNGA0LjQtiwg0KTRgNCw0L3RhtC40Y8!5e0!3m2!1sru!2sru!4v1708343023922!5m2!1sru!2sru"
        width="100%"
        height="100%"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        style="border: 0px"
      ></iframe>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="title-box" style="opacity: 1">
              <h2 class="title">What's nearby?</h2>
              <span class="description"
                >Visit the best places around your apartment. Your perfect home is waiting for you
                on Leev.</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.map {
  .upper-layer,
  .title-box {
    transition: 0.3s ease;
  }

  &:hover {
    .upper-layer,
    .title-box {
      display: none;
    }
  }
}
</style>
