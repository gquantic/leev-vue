<script setup lang="ts">
import { defineProps, ref, watch, computed, onMounted, type Ref } from 'vue'
import Dropdown from "v-dropdown";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import axios from "axios";
import { useRouter } from "vue-router";

import type { Apartment } from '@/interfaces/Apartment';
import type { Reservation } from '@/interfaces/Reservation';

let props = defineProps({
  apartment: {
    type: Object as () => Apartment,
    required: true
  },
});

let adt = ref<number>(1);
let chd = ref<number>(0);
let bb = ref<number>(0);

let bookDate = ref<Date[]>([]);

const datePickerConfig = {
  range: true
};

// single ref
watch(adt, (newVal, oldVal) => {
  if (newVal > props.apartment.guests.Adult || newVal < 0) {
    adt.value = oldVal;
  }
});

watch(chd, (newVal, oldVal) => {
  if (newVal > props.apartment.guests.Children || newVal < 0) {
    chd.value = oldVal;
  }
});

watch(bb, (newVal, oldVal) => {
  if (newVal > props.apartment.guests.baby || newVal < 0) {
    bb.value = oldVal;
  }
});

const tomorrow = computed(() => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow;
});

const api = import.meta.env.VITE_API_URL;

let busyDates = ref<Date[]>([]);

// Функция для получения резерваций для определенного апартамента
const fetchReservations = async () => {
  try {
    const response = await axios.get(`${api}reservations/${props.apartment.id}`);
    const reservations: Reservation[] = response.data;

    console.log(reservations);
    // Обновление массива занятых дат на основе полученных резерваций
    const updatedBusyDates: Date[] = reservations.map(reservation => new Date(reservation.date));
    reservations.forEach((reservation: Reservation) => {
      const fromDate = new Date(reservation.from_date);
      const toDate = new Date(reservation.to_date);
      for (let currentDate = fromDate; currentDate <= toDate; currentDate.setDate(currentDate.getDate() + 1)) {
        updatedBusyDates.push(new Date(currentDate));
      }
    });
    busyDates.value = updatedBusyDates;
  } catch (error) {
    console.error('Ошибка при получении резерваций:', error);
  }
};

onMounted(fetchReservations);

const disabledDates = computed(() => {
  return busyDates.value.map(date => date.toISOString().split('T')[0]);
});

const beforeSelectHandler = (value: Date[]): boolean => {
  const selectedDates = value;
  if (selectedDates && selectedDates.length === 2) {
    const startDate: Date = selectedDates[0];
    const endDate: Date = selectedDates[1];
    const daysBetween = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
    const selectedRange: string[] = [];
    for (let i = 0; i <= daysBetween; i++) {
      const newDate = new Date(startDate);
      newDate.setDate(startDate.getDate() + i);
      selectedRange.push(newDate.toISOString().split('T')[0]);
    }
    for (const date of selectedRange) {
      if (disabledDates.value.includes(date)) {
        alert('There are busy days in the selected period.');
        return false;
      }
    }
  }
  return true;
};

const router = useRouter();

function bookNow() {
  if (!bookDate.value || bookDate.value.length < 2) {
    return alert('Please select a date range.');
  }

  const startDate = new Date(bookDate.value[0]).toISOString().split('T')[0];
  const endDate = bookDate.value.length > 1 ? new Date(bookDate.value[1]).toISOString().split('T')[0] : null;

  if (!endDate) {
    return alert('Please select an end date.');
  }

  router.push(`/book/?start=${startDate}&end=${endDate}&adt=${adt.value}&chd=${chd.value}&bb=${bb.value}&apartment=${props.apartment.id}`);
}
</script>

<template>
  <section class="filter w-100 d-flex justify-content-center">
    <div class="form-filter">
      <div class="filter-line">
        <div class="filter-item">
          <p class="name m-0">Arrival and departure</p>
          <div class="react-datepicker-wrapper">
            <div class="react-datepicker__input-container">
              <VueDatePicker placeholder="Dates" class="w-100" :range="true" :enable-time-picker="false"
                :multi-calendars="{ solo: true }" :min-date="tomorrow" v-model="bookDate"
                :disabled-dates="disabledDates" @internal-model-change="beforeSelectHandler" />
            </div>
          </div>
        </div>
        <div class="border-vertical"></div>
        <div>
          <div class="search-item-persons position-relative filter-line">
            <div class="filter-item search-item-persons">
              <p class="name m-0">Guests</p>
              <Dropdown :align="'left'" id="all-persons">
                <template #trigger="{ visible }">
                  Adt: {{ adt }}, Chd: {{ chd }}, Bb: {{ bb }}
                </template>
                <div class="filter-line" style="width:300px;height: fit-content;">
                  <div class=" selection-persons d-flex flex-column" style="width:100%;height: fit-content;">
                    <div class="p-2 d-flex justify-content-between align-items-center w-100">
                      <div class="d-flex flex-column align-items-start gap-1"><span class="name">Adults</span><span
                          class="sub-name">from 15 years</span></div>
                      <div class="quantity d-flex align-items-center justify-content-between">
                        <button type="button" @click="adt--"
                          class="quantity__action input-number-decrement-cart">-</button>
                        <span class="input-number">{{ adt }}</span>
                        <button type="button" @click="adt++"
                          class="quantity__action input-number-increment-cart">+</button>
                      </div>
                    </div>
                    <div class="p-2 d-flex justify-content-between align-items-center w-100">
                      <div class="d-flex flex-column align-items-start gap-1"><span class="name">Children</span><span
                          class="sub-name">from 2 to 12 years</span></div>
                      <div class="quantity d-flex align-items-center justify-content-between">
                        <button type="button" @click="chd--"
                          class="quantity__action input-number-decrement-cart">-</button>
                        <span class="input-number">{{ chd }}</span>
                        <button type="button" @click="chd++"
                          class="quantity__action input-number-increment-cart">+</button>
                      </div>
                    </div>
                    <div class="p-2 d-flex justify-content-between align-items-center w-100">
                      <div class="d-flex flex-column align-items-start gap-1"><span class="name">Baby</span><span
                          class="sub-name">up to
                          2 years</span></div>
                      <div class="quantity d-flex align-items-center justify-content-between">
                        <div class="quantity d-flex align-items-center justify-content-between">
                          <button type="button" @click="bb--"
                            class="quantity__action input-number-decrement-cart">-</button>
                          <span class="input-number">{{ bb }}</span>
                          <button type="button" @click="bb++"
                            class="quantity__action input-number-increment-cart">+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
        <button class="search-button" @click="bookNow"><span class="text d-none d-lg-block">Book now</span><i
            class="icon icon-search d-block d-lg-none"></i></button>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.filter-line .selection-persons {
  position: inherit;
}

.v-dropdown-container {
  position: fixed !important;
  transform: translateY(-40px) translateX(-24px);
}

.dp__action_button {
  font-size: 16px;
  padding: 10px 15px;
}

.dp__selection_preview {
  display: none;
}

.dp__action_buttons .dp__action_select,
.dp__action_buttons .dp__action_select:hover {
  background: linear-gradient(77deg, rgba(226, 115, 87, 0.7) 0%, rgba(247, 155, 94, 0.7) 100%),
    #fd6f1f;
}

.dp__main,
.dp__main * {
  font-family: 'GT Walsheim Pro', sans-serif !important;
}

.dp__icon {
  display: none;
}

.react-datepicker-wrapper {
  width: 100%;
}

.dp__cell_disabled.dp--future {
  background: #b60000;
  color: #fff;
}

.dp__input,
.dp__input:hover {
  border: none;
  padding-left: 0;
  padding-top: 0;
  padding-right: 0;
  font-size: 14px;
}
</style>
