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
-->
<template>
    <div class="pb-4">
      <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select a tab</label>
        <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
        <select id="tabs" name="tabs" class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
          <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
        </select>
      </div>
      <div class="hidden sm:block">
        <nav class="flex space-x-4" aria-label="Tabs">
          <a v-for="tab in tabs" :key="tab.name" :href="tab.href" :class="[tab.current ? 'bg-white px-5 py-2 text-sm font-sans font-medium text-theme-gray-dark border-gray-600 border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : 'text-gray-500 hover:text-gray-700', 'px-3 py-2 text-sm font-medium']" :aria-current="tab.current ? 'page' : undefined">{{ tab.name }}</a>
        </nav>
      </div>
    </div>
  </template>
  
  <script setup>
    const { locale, locales, messages } = useI18n();

const tabsNo = [
  { name: 'Hovedhuset interiør', href: '#', current: true },
  { name: 'Gjesteboligen', href: '#', current: false },
  { name: 'Annekset', href: '#', current: false },
  { name: 'Garasjen', href: '#', current: false },
  { name: 'Hovedhuset og parken', href: '#', current: false },
  { name: 'Sjøhuset', href: '#', current: false },
  { name: 'Nøstet', href: '#', current: false },
]

const tabsEn = [
  { name: 'Main house interior', href: '#', current: true },
  { name: 'Guest house', href: '#', current: false },
  { name: 'Annex', href: '#', current: false },
  { name: 'Garage', href: '#', current: false },
  { name: 'Main house and park', href: '#', current: false },
  { name: 'Sea house', href: '#', current: false },
  { name: 'Boat house', href: '#', current: false },
]

const tabs = computed(() => {

  if (locale.value === 'en') {
  return tabsEn
} else {
  return tabsNo;
}
})
const tabsComp = tabs.value;
  

  

  console.log(tabs.value)
  </script>