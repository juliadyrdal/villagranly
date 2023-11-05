<template>
    <footer class="divide-y-2 divide-theme-surface-light bg-white pb-24" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32 md:grid grid-cols-3">
            <div class="">
              <div class="mt-10 md:mt-0">
                <img :src="grahlMadsenLogo" alt="Villa Granly" class="" />
                <ul
                  role="list"
                  class="mt-6 space-y-2 text-sm leading-6 text-gray-600"
                >
                  <li class="font-semibold">Grahl-Madsen & Co Advokatfirma AS</li>
                  <li>Kong Oscars gate 25</li>
                  <li>N-5017 Bergen</li>
                  <li>{{ $t("contact.norway") }}</li>
                </ul>
              </div>
             </div>
            <div class="">
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-gray-900">
                  {{ $t("contact.phone") }}
                </h3>
                <ul
                  role="list"
                  class="mt-6 space-y-2 text-sm leading-6 text-gray-600"
                >
                  <li>+47 911 60 880</li>
                </ul>
              </div>
            </div>
            <div class="">
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-gray-900">
                  {{ $t("contact.email") }}
                </h3>
                <ul
                  role="list"
                  class="mt-6 space-y-2 text-sm leading-6 text-gray-600"
                >
                  <li class="hover:underline">
                    <a href="mailto:christian@advokat.bergen.no"
                      >christian@advokat.bergen.no</a
                    >
                  </li>
                </ul>
          </div>
        </div>
       
      </div>
    </footer>
  </template>
  
  <script setup>
  import { defineComponent, h } from "vue";
  import grahlMadsenLogo from "@/assets/images/grahl-madsen-logo.jpeg";
  
  </script>
  