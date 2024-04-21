<script setup lang="ts">
import { ref, computed, watchEffect, onMounted } from 'vue';

import type { Ref } from 'vue';

import Header from "@/components/Header/Header.vue";
import HeaderMobile from "@/components/Header/HeaderMobile.vue";
import TextFloatInput from "@/components/form/TextFloatInput.vue";
import axios from "axios";
import CheckoutProgress from "@/components/checkout/CheckoutProgress.vue";
import router from '@/router';
import type { Apartment } from '@/interfaces/Apartment';
import jQuery from 'jquery';
import 'bootstrap';

let apartment: Ref<Apartment> = ref({} as Apartment);
let loaded = ref(false);

interface JQuery {
  modal(action: 'hide' | 'show' | 'toggle'): void;
}

// Получение параметров запроса из текущего URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const api = import.meta.env.VITE_API_URL;

// Parse start and end dates
let startDate = new Date(urlParams.get('start') || ''); // Provide a default value if null

let endDate: Date | null = null;
const endParam = urlParams.get('end');
if (endParam) {
  endDate = new Date(endParam);
}

// Calculate days difference if endDate is not null
let daysDifference: Ref<number> = ref(endDate ? Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)) : 0);

let check = ref('early');

// Residents
let adt = ref(Number(urlParams.get('adt')));
let chd = ref(Number(urlParams.get('chd')));
let bb = ref(Number(urlParams.get('bb')));

let early_check_in: Ref<Boolean> = ref(false);
let late_check_out: Ref<Boolean> = ref(false);

let policy: Ref<Boolean> = ref(false);
let receiveOffers: Ref<Boolean> = ref(false);

let firstName = ref('');
let lastName = ref('');
let phone = ref('');
let email = ref('');

let formLoaded = ref(false);

axios.get(api + 'apartments/' + urlParams.get('apartment'))
  .then(response => {
    apartment.value = response.data.data;
    console.log(apartment.value);
  });

const computedValue = computed(() => {
  let total: number = 0;

  total += Number(apartment.value.price) * daysDifference.value;

  if (early_check_in.value) {
    total += 150;
  }

  if (late_check_out.value) {
    total += 150;
  }

  return total;
});

onMounted(function () {
  loaded.value = true;
});

function toPay() {
  // (jQuery('#payModal') as any).modal('show');
}

function initPay() {
  // (jQuery('#payModal') as any).modal('hide');

  // Router push to pay-success with get params
  router.push({
    name: 'pay-success',
    query: {
      apartment: urlParams.get('apartment'),
      start: urlParams.get('start'),
      end: urlParams.get('end'),
      adt: urlParams.get('adt'),
      chd: urlParams.get('chd'),
      bb: urlParams.get('bb'),
      early_check_in: early_check_in.value.toString(),
      late_check_out: late_check_out.value.toString(),
      policy: policy.value.toString(),
      receiveOffers: receiveOffers.value.toString(),
      firstName: firstName.value,
      lastName: lastName.value,
      phone: phone.value,
      email: email.value
    }
  });
}
</script>

<template>
  <Header />
  <HeaderMobile />
  <div class="page page-book mb-5">
    <div class="apartment">
      <div class="container">
        <div class="row">
          <div class="col-12 mb-5 mt-5">
            <CheckoutProgress />
          </div>
          <div class="col-12 mt-3">
            <form action="" @submit.prevent="toPay">
              <div class="row">
                <div class="col-lg-8">
                  <div class="row">
                    <!-- START FORM -->
                    <div class="col-lg-12">
                      <div class="card border-0">
                        <div class="card-body px-5 py-5">
                          <h2 class="title fs-5">Guest information</h2>
                          <div class="row mt-4">
                            <div class="col-lg-6">
                              <TextFloatInput v-model="firstName" label="First Name" input-id="First Name" />
                            </div>
                            <div class="col-lg-6">
                              <TextFloatInput v-model="lastName" label="Last Name" input-id="Last Name" />
                            </div>
                            <div class="col-lg-6 mt-3">
                              <TextFloatInput v-model="phone" label="Phone" input-id="Phone" />
                            </div>
                            <div class="col-lg-6 mt-3">
                              <TextFloatInput v-model="email" label="E-mail" input-id="E-mail" />
                            </div>
                            <div class="col-lg-12 mt-3">
                              <TextFloatInput v-model="email" label="E-mail" input-id="E-mail" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-12 mt-3">
                      <div class="card border-0">
                        <div class="card-body px-5 py-5">
                          <h2 class="title fs-5">Early check-in and late check-out</h2>
                          <div class="row mt-4 styled-checkboxes">
                            <div class="col-lg-12">
                              <div class="radio-container">
                                <input type="checkbox" id="option1" name="early_check_in" v-model="early_check_in">
                                <label for="option1">
                                  <span>Early check in</span>
                                  <span>(from 6 am) + 150$</span>
                                </label>
                              </div>
                              <div class="radio-container">
                                <input type="checkbox" id="option2" value="true" name="late_check_out"
                                  v-model="late_check_out">
                                <label for="option2">
                                  <span>Late check-out</span>
                                  <span>(until 8 pm) + 150$</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-12 mt-3">
                      <div class="card border-0">
                        <div class="card-body px-5 py-5">
                          <div class="row">
                            <div class="col-lg-12">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="policy"
                                  id="flexCheckDefault" />
                                <label class="form-check-label modal-text" for="flexCheckDefault">
                                  I accept the policy of cancellation/payment, privacy policy and particular conditions
                                  of the reservation.
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="receiveOffers" id="receive" />
                                <label class="form-check-label modal-text" for="receive">
                                  I would like to receive future offers and news about this establishment
                                </label>
                              </div>
                            </div>
                            <div class="col-lg-3 mt-3">
                              <button class="btn btn-primary w-100 fs-6 fw-lighter"
                                onclick="jQuery('#payModal').modal('show')" :disabled="!policy">To pay</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4" v-if="apartment && loaded && Object.keys(apartment).length > 0">
                  <div class="card border-0 overflow-hidden">
                    <div class="card-body p-0 checkout-preview">
                      <div class="checkout-preview__top-hold"
                        :style="'height: 238px;background: url(' + apartment?.cover + ') center center / cover;'">
                        <h2>{{ apartment?.name.En }}</h2>
                        <p>{{ apartment.address }}</p>
                      </div>
                      <div class="row mt-4 p-4 pt-2">
                        <div class="col-lg-12">
                          <div class="d-flex justify-content-between">
                            <p class="fw-lighter">Check-in/out</p>
                            <p>5 June — 10 June</p>
                          </div>
                          <hr>
                          <div class="d-flex justify-content-between">
                            <p class="fw-lighter">{{ adt + chd + bb }} People / {{ daysDifference }} days</p>
                            <p>{{ Number(apartment.price) * daysDifference }}$</p>
                          </div>
                          <div class="d-flex justify-content-between" v-if="early_check_in">
                            <p class="fw-lighter">Early check in from 6 am</p>
                            <p>150$</p>
                          </div>
                          <div class="d-flex justify-content-between" v-if="late_check_out">
                            <p class="fw-lighter">Late check-out until 8 pm</p>
                            <p>150$</p>
                          </div>
                        </div>
                        <div class="col-lg-12 mt-4">
                          <div class="d-flex justify-content-between">
                            <p class="fw-regular fs-5">Total:</p>
                            <p class="fw-regular fs-5">{{ computedValue }}$</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row p-4">
                    <span class="text-muted fw-lighter"><span class="fw-regular">Payment:</span> Prepayment required:
                      100%: Credit card</span>
                    <br><br>
                    <span class="text-muted fw-lighter"><span class="fw-regular">Privacy:</span> We
                      only use your
                      personal data for topics
                      related
                      to your reservation. Read privacy policy. </span>
                  </div>
                </div>
                <div class="col-lg-4" v-else>
                  <div class="card border-0 overflow-hidden loading-effect" style="height: 300px;">
                    <div class="card-body">
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Pay Modal -->
    <div class="pay-modal modal fade show" id="payModal" tabindex="-1" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              <img src="/public/img/logo/logo.png">
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <template v-if="!loaded">
              <div class="progress-container">
              </div>
            </template>
            <template v-else>
              <div class="border rounded-2 p-3">
                <div class="d-flex justify-content-between mb-2">
                  <span>Order number</span>
                  <b>3954259</b>
                </div>
                <div class="d-flex justify-content-between">
                  <span>Total</span>
                  <b>{{ computedValue }}$</b>
                </div>
              </div>

              <button class="pay-with-btn rounded-2 w-100 mt-3">
                Buy with
                <img src="/public/img/pay/google.svg" style="margin-left: 7px;" alt="">
              </button>
              <button class="pay-with-btn rounded-2 w-100 mt-1">
                Buy with
                <img src="/public/img/pay/apple.svg" style="margin-left: 7px;" alt="">
              </button>

              <div class="form-element">
                <span class="line"></span>
                <span class="text">OR BY WITH CARD</span>
                <span class="line"></span>
              </div>

              <div class="row">
                <div class="col-lg-12 mb-2">
                  <TextFloatInput label="Card number" input-id="Card number" />
                </div>
                <div class="col-lg-12 d-flex justify-content-between">
                  <TextFloatInput label="MM/YY" input-id="MM/YY" style="margin-right: 4px;" />
                  <div>
                    <TextFloatInput label="CVV" input-id="CVV" style="margin-left: 4px;" />
                    <p style="font-size: 13px;line-height: 15px;margin: 8px 5px;" class="text-muted">3 digits on the
                      back
                      of the
                      card</p>
                  </div>
                </div>
              </div>

              <button type="button" class="btn btn-primary rounded-1 w-100 mt-4" @click="initPay"
                onclick="jQuery('#payModal').modal('hide')">Pay for
                reservation</button>
              <div class="text-center mt-3">
                <a href="javascript:void(0);" style="color: #f48a5d;border-bottom: 1px dashed;"
                  onclick="$('#payModal').modal('hide');">Back to shop</a>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
body {
  background: #F9F9F9;
}

.page-book {
  .card {
    box-shadow: 0px 0px 32px rgba(#000, 10%);
    border-radius: 8px;
  }
}
</style>