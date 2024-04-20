<template>
  <div class="form-floating">
    <input class="form-control" :id="inputId" placeholder="name@example.com" @input="$emit('update:modelValue', inputValue)" required type="text" v-model="inputValue">
    <label :for="inputId">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, watch } from 'vue';

// props
const props = defineProps({
  inputId: {
    type: String,
    required: false,
    default: '',
  },
  label: {
    type: String,
    required: false,
    default: '',
  },
  modelValue: String,
});

// data
const inputValue = ref(props.modelValue);

// emit input value on change
// watch(inputValue, (newValue) => {
//   // отправляем значение в родительский компонент через событие
//   props.emit('update:modelValue', newValue);
// });
</script>
