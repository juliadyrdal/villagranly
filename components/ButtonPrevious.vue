<script setup>
    import { ArrowLeftIcon } from "@heroicons/vue/20/solid";
    const swiper = useSwiper()
</script>

<template>
    <button class="inline-flex items-center gap-x-2 bg-white px-5 py-5 text-sm font-sans font-medium text-theme-gray-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-full" @click="swiper.slidePrev()">
    <ArrowLeftIcon
      class="-mr-0.5 h-5 w-5 text-theme-accent"
      aria-hidden="true"
    />
    </button>
</template>