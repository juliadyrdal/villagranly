<template>
    <button
      type="button"
      class="inline-flex items-center gap-x-2 bg-white px-5 py-2 text-sm font-sans font-medium text-theme-gray-dark border-gray-600 border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {{ $t(text) }}
    </button>
  </template>
  
  <script setup>
  defineProps({
    text: String,
  });
  </script>
  