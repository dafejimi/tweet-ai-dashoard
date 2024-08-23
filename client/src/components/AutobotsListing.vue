<script setup>
import { RouterLink } from 'vue-router';
import { reactive, defineProps, onMounted } from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import axios from 'axios';
import AutobotListing from './AutobotListing.vue';
import { ref } from 'vue';

const btnToggle = ref(false)

const state = reactive({
    limit: 40,
    autobots: [],
    isLoading: true,
});

const btnClick = () => {
    if (btnToggle.value) {
        // Show fewer Autobots (adjust limit as needed)
        state.limit = 40;
    } else {
        // Show all Autobots
        state.limit = state.autobots.length;
    }
    btnToggle.value = !btnToggle.value;
};

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8080/autobots');
    state.autobots = response.data[0];
  } catch (error) {
    console.error('Error fetching jobs', error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        {{ `Autobots Count: ${state.autobots.length}` }}
      </h2>
      <!-- Show loading spinner while loading is true -->
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>

      <!-- Shoe job listing when done loading -->
      <div v-else class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <AutobotListing
          v-for="autobot in state.autobots.slice(0, state.limit)"
          :key="autobot.id"
          :autobot="autobot"
        />
      </div>
    </div>
  </section>

  <section class="m-auto max-w-lg my-10 px-6">
    <button
      v-on:click="btnClick"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >{{ btnToggle ? 'View Less Autobots' : 'View More Autobots' }}</button
    >
  </section>
</template>
