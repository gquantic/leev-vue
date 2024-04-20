<script setup lang="ts">
import { ref, Ref, computed, watchEffect, onMounted } from 'vue';

import Header from "@/components/Header/Header.vue";
import HeaderMobile from "@/components/Header/HeaderMobile.vue";
import TextFloatInput from "@/components/form/TextFloatInput.vue";
import axios from "axios";
import CheckoutProgress from "@/components/checkout/CheckoutProgress.vue";
import LoadBar from '@/components/LoadBar.vue';
import ImportantInformation from '@/components/pay/ImportantInformation.vue';

let apartment = ref({});
let loaded = ref(false);

// Получение параметров запроса из текущего URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const api = import.meta.env.VITE_API_URL;

let startDate = new Date(urlParams.get('start'));
let endDate = new Date(urlParams.get('end'));

let daysDifference: Ref<number> = ref(Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)));

let check: Ref<string> = ref('early');

// Residents
let adt: Ref<Number> = ref(Number(urlParams.get('adt')));
let chd: Ref<Number> = ref(Number(urlParams.get('chd')));
let bb: Ref<Number> = ref(Number(urlParams.get('bb')));

let early_check_in: Ref<Boolean> = ref(false);
let late_check_out: Ref<Boolean> = ref(false);

let policy: Ref<Boolean> = ref(false);
let receiveOffers: Ref<Boolean> = ref(false);

let firstName: Ref<String> = ref('');
let lastName: Ref<String> = ref('');
let phone: Ref<String> = ref('');
let email: Ref<String> = ref('');

let formLoaded = ref(false);

let servicesPrice = ref(0);

servicesPrice.value = (early_check_in.value ? 150 : 0) + (late_check_out.value ? 150 : 0);

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
</script>

<template>
    <Header />
    <HeaderMobile />
    <div class="page page-book mb-5">
        <div class="apartment">
            <div class="container">
                <div class="row mt-5">
                    <div class="col-12 mt-3">
                        <form action="" @submit.prevent="toPay">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="row">
                                        <!-- START FORM -->
                                        <div class="col-lg-12">
                                            <div class="card border-0">
                                                <div class="card-body px-5 py-5">
                                                    <h2 class="title fs-5">Thanks for your booking</h2>
                                                    <p class="mt-4 mb-4">Booking number: #1473648132</p>

                                                    <div class="d-flex">
                                                        <button class="btn btn-primary fw-lighter"
                                                            style="width: 192px;">See</button>
                                                        <button class="btn btn-primary-outline fw-lighter"
                                                            style="margin-left: 16px;width: 192px;border: 1px solid #FD6F1F;">Print</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-12 mt-3">
                                            <div class="card border-0">
                                                <div class="card-body px-5 py-5">
                                                    <h2 class="title fs-5">Booking information</h2>

                                                    <div class="row mt-4">
                                                        <div class="col-lg-3">
                                                            <span class="fw-lighter text-muted">Apartment</span> <br>
                                                            <span class="fw-regular">{{ apartment.name.En }}</span>
                                                        </div>
                                                        <div class="col-lg-3">
                                                            <span class="fw-lighter text-muted">Check-in/out</span> <br>
                                                            <span class="fw-regular">5 June — 10 June</span>
                                                        </div>
                                                        <div class="col-lg-3">
                                                            <span class="fw-lighter text-muted">Number of guests</span>
                                                            <br>
                                                            <span class="fw-regular">{{ adt + chd + bb }}</span>
                                                        </div>
                                                        <div class="col-lg-3">
                                                            <span class="fw-lighter text-muted">Stay time</span> <br>
                                                            <span class="fw-regular">{{ daysDifference }}</span>
                                                        </div>
                                                        <div class="col-lg-3 mt-4">
                                                            <span class="fw-lighter text-muted">Price for room</span>
                                                            <br>
                                                            <span class="fw-regular">{{ daysDifference }}</span>
                                                        </div>
                                                        <div class="col-lg-3 mt-4">
                                                            <span class="fw-lighter text-muted">Price for
                                                                services</span> <br>
                                                            <span class="fw-regular">{{ servicesPrice }}</span>
                                                        </div>
                                                        <div class="col-lg-3 mt-4">
                                                            <span class="fw-lighter text-muted">Total amount</span> <br>
                                                            <span class="fw-regular">{{ computedValue }}</span>
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
                                                            <h2 class="title fs-5 mb-4">Important information</h2>
                                                            <ImportantInformation />
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
                                                <p class="fs-5 mb-2">Have questions?</p>
                                                <div class="d-flex">
                                                    <p class="mb-0 fw-lighter fs-6" style="margin-right: 20px;">+38 044
                                                        359 05 92</p>
                                                    <p class="mb-0 fw-lighter fs-6">leev@levstar.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row p-4">
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