<template>
    <div class="overflow-hidden bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div
          class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start"
        >
          <div class="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2
                class="text-base uppercase font-sans font-medium leading-7 text-theme-grey-dark"
              >
              {{ $t("ctaSection.title") }}
              </h2>
              <p
                class="mt-6 text-lg font-sans font-light leading-8 text-gray-600"
              >
              {{ $t("ctaSection.copy") }}
              </p>
              <div class="flex gap-4 mt-12">
                <PhoneIcon
                  class="h-12 w-12 p-2 text-theme-accent bg-theme-surface-light rounded-full"
                />
                <div>
                  <p class="text-sm text-theme-grey-dark font-sans font-medium">
                    +47 911 60 880
                  </p>
                  <p class="text-lg text-theme-grey-dark font-sans font-light">
                    {{ $t("ctaSection.cta") }}
                  </p>
                </div>
              </div>
              <a href="mailto:christian@advokat.bergen.no">
                <ButtonTrailing text="links.prospectus" class="mt-10" />
              </a>
            </div>
          </div>
          <div class="sm:px-6 lg:px-0">
            <div
              class="relative isolate overflow-hidden sm:mx-auto sm:max-w-2xl px-8 sm:rounded-tr-3xl sm:rounded-bl-3xl lg:mx-0 lg:max-w-none"
            >
              <img :src="seaViewImage" alt="Villa Granly" class="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import {
    PhoneIcon,
    KeyIcon,
    ClipboardDocumentIcon,
  } from "@heroicons/vue/20/solid";
  import seaViewImage from "@/assets/images/rounded-sea-view.png";
  
  const features = [
    {
      name: "+47 911 60 880",
      description: "Call us anytime",
      icon: PhoneIcon,
    },
    {
      name: "SSL certificates.",
      description:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
      icon: KeyIcon,
    },
    {
      name: "Database backups.",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: ClipboardDocumentIcon,
    },
  ];
  </script>
  