<template>
  <div class="pb-4">
    <div class="sm:hidden">
      <label for="galleryTabs" class="sr-only">Select a tab</label>
      <select id="galleryTabs" name="galleryTabs" class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
        <option v-for="tab in galleryTabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
      </select>
    </div>
    <div class="hidden sm:block">
      <nav class="flex space-x-4" aria-label="galleryTabs">
        <a 
          v-for="tab in galleryTabs" 
          :key="tab.name" 
          :class="[tab.current ? 'bg-white px-5 py-2 text-sm font-sans font-medium text-theme-gray-dark border-gray-600 border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : 'text-gray-500 hover:text-gray-700', 'px-3 py-2 text-sm font-medium cursor-pointer']" 
          @click="emitTabEvent(tab.href)"
          :aria-current="tab.current ? 'page' : undefined"
        >
          {{ locale === 'no' ? tab.nameNo : tab.nameEn }}
        </a>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const props = defineProps(['galleryTabs']);
const emit = defineEmits(['tab-event']);

const emitTabEvent = (href) => {
  emit('tab-event', href);
};
</script>

<style scoped>
  /* Your CSS styles here */
</style>
