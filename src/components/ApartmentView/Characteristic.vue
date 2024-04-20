<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="characteristics">
    <div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="list-characteristics d-flex align-items-center flex-wrap justify-content-around justify-content-lg-between">
              <div class="list-characteristics__item text-center">
                <div class="meaning">{{ item?.rooms }}</div>
                <div class="name">Rooms</div>
              </div>
              <div class="list-characteristics__item text-center">
                <div class="meaning">{{ item?.area }}m2</div>
                <div class="name">Living area</div>
              </div>
              <div class="list-characteristics__item text-center">
                <div class="meaning">{{ item?.check_in }}</div>
                <div class="name">Check - in time</div>
              </div>
              <div class="list-characteristics__item text-center">
                <div class="meaning">{{ item.check_out }}</div>
                <div class="name">Check - out time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>