<template>
    <div class="relative bg-theme-surface-light">
      <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div
          class="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6"
        >
          <div class="mx-auto max-w-2xl lg:mx-0">
            <!-- <img class="h-11" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" alt="Your Company" /> -->
            <h1
              class="text-6xl font-display font-medium tracking-tight text-theme-grey-dark mt-8 sm:mt-2 sm:text-8xl"
            >
            {{ $t("name") }}
            </h1>
            <!-- <p class="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p> -->
            <div class="mt-12 flex items-center gap-x-6">
              <a href="mailto:christian@advokat.bergen.no">
                <ButtonTrailing text="links.prospectus" />
              </a>
              <button @click="$emit('scrollToFeatures')" class="text-sm font-semibold leading-6 text-gray-900"
                >{{ $t("links.more") }} <span aria-hidden="true">→</span></button
              >
            </div>
          </div>
        </div>
        <div
          class="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0"
        >
        <PhotoSlide class="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import heroImage from "@/assets/images/hero.jpg";
  </script>
  