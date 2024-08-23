<script setup>
import { RouterLink } from 'vue-router';
import { defineProps, ref, computed } from 'vue';

const props = defineProps({
  autobot: Object,
});

</script>

<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <h3 class="text-xl font-bold">{{ autobot.name}}</h3>
      </div>

      <div class="mb-5">
        <div>
          {{ autobot.email }}
        </div>
      </div>

      <h3 class="text-green-500 mb-2">{{ autobot.id }}</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <RouterLink
          :to="'/details/' + autobot.id"
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Details
        </RouterLink>
      </div>
    </div>
  </div>
</template>
