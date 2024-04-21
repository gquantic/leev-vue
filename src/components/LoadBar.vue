<template>

</template>

<!-- <template>
    <div class="progress-container">
        <svg class="progress-circle" width="120" height="120">
            <circle class="progress-circle-background" cx="60" cy="60" r="50"></circle>
            <circle class="progress-circle-path" cx="60" cy="60" r="50" :stroke-dasharray="circumference"
                :stroke-dashoffset="progressOffset"></circle>
            <text class="progress-circle-text" x="60" y="60" text-anchor="middle" alignment-baseline="middle">{{
                progress }}%</text>
        </svg>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

const progress = ref(0);
const strokeWidth = 10;
const radius = 50;
const circumference = 2 * Math.PI * radius;
const progressOffset = ref(circumference);

const updateProgress = () => {
    const interval = setInterval(() => {
        progress.value += 1;
        progressOffset.value = ((100 - progress.value) / 100) * circumference;
        if (progress.value >= 100) {
            clearInterval(interval);
            // Когда достигнут 100%, вызываем коллбэк
            emit('progressComplete');
        }
    }, 100);
};

const props = defineProps<{
    startLoading: {
        type: Boolean;
        default: false;
    }
}>();

watch(() => props.startLoading, (newValue) => {
    if (newValue) {
        updateProgress();
    }
});
</script>

<style scoped>
.progress-container {
    width: 120px;
    height: 120px;
}

.progress-circle-background {
    fill: none;
    stroke: #e6e6e6;
    stroke-width: 10;
}

.progress-circle-path {
    fill: none;
    stroke: #ff8c00;
    stroke-width: 10;
    stroke-linecap: round;
}

.progress-circle-text {
    font-size: 20px;
    fill: #333;
}
</style> -->