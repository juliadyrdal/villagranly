<script setup>
// Setting up the page title and SEO metadata for the component
useHead({
  title: 'Bilder',
})

useSeoMeta({
  title: 'Bilder',
  ogTitle: 'Bilder',
  description: 'Unik og særpreget villa som gir assosiasjoner til vikingetidens høvdinggårder og tradisjonell stølsarkitektur. Villa Granly er omkranset av en vakker park med strandlinje til Kviturspollen.',
  ogDescription: 'Unik og særpreget villa som gir assosiasjoner til vikingetidens høvdinggårder og tradisjonell stølsarkitektur. Villa Granly er omkranset av en vakker park med strandlinje til Kviturspollen.',
  ogImage: 'https://villa-granly.no/_nuxt/_DSC1694.2ee02c40.jpg',
})

// Reactive state for managing tabs and their active status
const state = reactive({
  galleryTabs: [
  { nameEn: 'Main house interior', nameNo: 'Hovedhuset interiør', href: 'main', current: true },
  { nameEn: 'Guest house', nameNo: 'Gjesteboligen', href: 'guest', current: false },
  { nameEn: 'Annex', nameNo: 'Annekset', href: 'annex', current: false },
  { nameEn: 'Garage', nameNo: 'Garasjen', href: 'garage', current: false },
  { nameEn: 'Main house and park', nameNo: 'Hovedhuset og parken', href: 'park', current: false },
  { nameEn: 'Sea house', nameNo: 'Sjøhuset', href: 'sea', current: false },
  { nameEn: 'Boat house', nameNo: 'Nøstet', href: 'boat', current: false },
  ],
})



// Function to handle the switching of tabs
// This function updates the 'current' property of each tab based on the selected tab's href
function tabSwitch(selectedTabHref) {
  console.log('test tabSwitcher code')
  console.log(selectedTabHref)
  state.galleryTabs.forEach(tab => {
    if (tab.href === selectedTabHref) {
      tab.current = true;
    } else {
      tab.current = false;
    }
  });
}
 

</script>

<template>
    <div>
    <PageHeader
      title="pages.photoGallery.title"
      body=""
    />
    <PageSection>
      <Tabs @tab-event="tabSwitch" :galleryTabs="state.galleryTabs" />
    </PageSection>
    <PageSection>
      <PhotoGalleryMain v-if="state.galleryTabs[0].current" />
      <PhotoGalleryGuest v-if="state.galleryTabs[1].current" />
      <PhotoGalleryAnnex v-if="state.galleryTabs[2].current" />
      <PhotoGalleryGarage v-if="state.galleryTabs[3].current" />
      <PhotoGalleryPark v-if="state.galleryTabs[4].current" />
      <PhotoGallerySea v-if="state.galleryTabs[5].current" />
      <PhotoGalleryBoatHouse v-if="state.galleryTabs[6].current" />
    </PageSection>
  </div>
  </template>
  
  <style lang="scss" scoped></style>