  
  <script setup>
  import {
    ArrowPathIcon,
    HomeModernIcon,
    KeyIcon,
    ClipboardDocumentIcon,
    DocumentTextIcon,
    InformationCircleIcon,
  } from "@heroicons/vue/24/outline";
  
  const features = [
    {
      name: "Vulputate cursus",
      description:
        "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
      icon: HomeModernIcon,
    },
    {
      name: "Tincidunt mattis",
      description:
        "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
      icon: KeyIcon,
    },
    {
      name: "Ultricies libero",
      description:
        "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
      icon: DocumentTextIcon,
    },
    {
      name: "Risus proin",
      description:
        "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
      icon: InformationCircleIcon,
    },
  ];
  </script>

<template>
    <div id="features" class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto mb-12 max-w-2xl">
          <h2
            class="text-base uppercase font-sans font-light text-theme-grey-dark leading-7"
          >
          {{ $t("name") }}
          </h2>
          <p
            class="mt-2 pb-6 text-4xl font-display text-theme-grey-dark font-medium tracking-tight sm:text-5xl"
          >
            {{ $t("features.heading") }}
          </p>
          <p class="mt-6 text-lg font-sans font-light leading-8 text-gray-600">
            {{ $t("features.paragraph.one") }}
          </p>
          <p class="mt-6 text-lg font-sans font-light leading-8 text-gray-600">
            {{ $t("features.paragraph.two") }}
          </p>
          <p class="mt-6 text-lg font-sans font-light leading-8 text-gray-600">
            {{ $t("features.paragraph.three") }}
          </p>
        </div>
      </div>
    </div>
  </template>
  