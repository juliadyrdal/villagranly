<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
  {{ tabLocaleNo ? galleryTabs.nameNo : galleryTabs.nameEn }}
-->
<template>
    <div class="pb-4">
      <div class="sm:hidden">
        <label for="galleryTabs" class="sr-only">Select a tab</label>
        <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
        <select id="galleryTabs" name="galleryTabs" class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
          <option v-for="tab in galleryTabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
        </select>
      </div>
      <div class="hidden sm:block">
        <nav class="flex space-x-4" aria-label="galleryTabs">
          <a @click="tabClick(tab)" v-for="tab in galleryTabs" :key="tab.name" :class="[tab.current ? 'bg-white px-5 py-2 text-sm font-sans font-medium text-theme-gray-dark border-gray-600 border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : 'text-gray-500 hover:text-gray-700', 'px-3 py-2 text-sm font-medium cursor-pointer']" :aria-current="tab.current ? 'page' : undefined">{{ locale === 'no' ? tab.nameNo : tab.nameEn }}</a>
        </nav>
      </div>
    </div>
  </template>
  
  <script setup>
import { TabList } from '@headlessui/vue';

const { locale, locales, messages } = useI18n();

const props = defineProps(['galleryTabs'])

const emit = defineEmits([]);

const tabsNo = [
  { name: 'Hovedhuset interiør', href: 'main', current: true },
  { name: 'Gjesteboligen', href: 'guest', current: false },
  { name: 'Annekset', href: 'annex', current: false },
  { name: 'Garasjen', href: 'garage', current: false },
  { name: 'Hovedhuset og parken', href: 'park', current: false },
  { name: 'Sjøhuset', href: 'sea', current: false },
  { name: 'Nøstet', href: 'boat', current: false },
]

const tabsEn = [
  { name: 'Main house interior', href: 'main', current: true },
  { name: 'Guest house', href: 'guest', current: false },
  { name: 'Annex', href: 'annex', current: false },
  { name: 'Garage', href: 'garage', current: false },
  { name: 'Main house and park', href: 'park', current: false },
  { name: 'Sea house', href: 'sea', current: false },
  { name: 'Boat house', href: 'boat', current: false },
]
 

function testTab(n) {
  console.log(n.href)
  console.log(tabs.value[2].href)
 for (let i = 0; i < tabs.value.length; i++) {
  
  if (n.href === tabs.value[i].href) {
    console.log('YES')
  } else {
    console.log('no')
  }
 }
}


  </script>