<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const emit = defineEmits(["handleInviteSubmit"])

const router = useRouter();

const navigation = [
  { name: "navItem.photoGallery", href: "photogallery" },
  { name: "navItem.features", href: "#" },
  { name: "navItem.details", href: "#" },
];

const { locale, locales, messages } = useI18n();
const localePath = useLocalePath();
const localeRoute = useLocaleRoute();

function goToFeatures() {
  if (locale.value === 'no') {
    router.push({ path:"/no", hash: "#features" })
  } else {
    router.push({ path:"/", hash: "#features" })
  }
  
}

function goToDetails() {
  if (locale.value === 'no') {
    router.push({ path:"/no", hash: "#details" })
  } else {
    router.push({ path:"/", hash: "#details" })
  }
}

function goToContact() {
  if (locale.value === 'no') {
    router.push({ path:"/no", hash: "#contact" })
  } else {
    router.push({ path:"/", hash: "#contact" })
  }
}

const mobileMenuOpen = ref(false);
</script>

<template>
    <!-- Code sandbox test -->
    <header class="bg-white">
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <NuxtLink :to="localePath('/')" class="-m-1.5 p-1.5">
            <span class="sr-only">Granly</span>
            <p
              class="text-2xl font-bold font-display leading-6 text-theme-grey-dark"
            >
            {{ $t("name") }}
            </p>
          </NuxtLink>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <NuxtLink @click="goToFeatures" class="text-sm uppercase font-normal leading-6 text-theme-grey-dark cursor-pointer"
            >{{ $t("navItems.features") }}</NuxtLink
          >
          <NuxtLink @click="goToDetails" class="text-sm uppercase font-normal leading-6 text-theme-grey-dark cursor-pointer"
            >{{ $t("navItems.details") }}</NuxtLink
          >
          <NuxtLink
            :to="localePath('photogallery')"
            class="text-sm uppercase font-normal leading-6 text-theme-grey-dark"
            >{{ $t("navItems.photoGallery") }}</NuxtLink
          >
        </div>
        <div class="flex flex-1 items-center justify-end gap-x-6">
          <NuxtLink @click="goToContact">
            <Button text="navItems.contact" />
          </NuxtLink>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Locale />
      </nav>
      <Dialog
        as="div"
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-10" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center gap-x-6">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Granly</span>
              <img class="h-8 w-auto" src="" alt="" />
            </a>
            <Button class="ml-auto" text="navItems.contact" />
  
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
            <Locale />
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <button
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-sans font-normal leading-7 text-theme-grey-dark"
                  @click="mobileMenuOpen = false"
                  ><span @click="goToFeatures">{{ $t("navItems.features") }}</span></button
                >
                <button
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-sans font-normal leading-7 text-theme-grey-dark"
                  @click="mobileMenuOpen = false"
                  ><span @click="goToDetails">{{ $t("navItems.details") }}</span></button
                >
                <NuxtLink
                  :to="localePath('photogallery')"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-sans font-normal leading-7 text-theme-grey-dark"
                  @click="mobileMenuOpen = false"
                  >{{ $t("navItems.photoGallery") }}</NuxtLink
                >
              </div>
              <div class="py-6">
                <!-- can add external link or email address here -->
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </template>
  