<template>
    <div class="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2
          class="text-4xl font-display font-medium tracking-tight text-gray-900 sm:text-6xl"
        >
          {{ $t(title) }}
        </h2>
        <p class="mt-6 text-lg font-sans font-normal leading-8 text-gray-600">
          {{ $t(body) }}
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    body: String,
  });
  </script>
  