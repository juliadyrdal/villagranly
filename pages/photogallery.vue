<script setup>
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
  
  const galleryTabs = [
  { nameEn: 'Main house interior', nameNo: 'Hovedhuset interiør', href: 'main', current: true },
  { nameEn: 'Guest house', nameNo: 'Gjesteboligen', href: 'guest', current: false },
  { nameEn: 'Annex', nameNo: 'Annekset', href: 'annex', current: false },
  { nameEn: 'Garage', nameNo: 'Garasjen', href: 'garage', current: false },
  { nameEn: 'Main house and park', nameNo: 'Hovedhuset og parken', href: 'park', current: false },
  { nameEn: 'Sea house', nameNo: 'Sjøhuset', href: 'sea', current: false },
  { nameEn: 'Boat house', nameNo: 'Nøstet', href: 'boat', current: false },
]

  const mainTab = ref(true);
  const guestTab = ref(false);
  const annexTab = ref(false);
  const garageTab = ref(false);
  const parkTab = ref(false);
  const seaTab = ref(false);
  const boatTab = ref(false);

  function tabSwitch(n) {
    for (let i = 0; i < galleryTabs.length; i++) {
   console.log('working')
    galleryTabs[i].current = !galleryTabs.current;
  }
 

    console.log("This is n" + n)
    mainTab.value = false;
    guestTab.value = false;
    annexTab.value = false;
    garageTab.value = false;
    parkTab.value = false;
    seaTab.value = false;
    boatTab.value = false;

    if (n === 'main') {
      return mainTab.value = true;
    } else if (n === 'guest') {
      return guestTab.value = true;
    } else if (n === 'annex') {
      return annexTab.value = true;
    } else if (n === 'garage') {
      return garageTab.value = true;
    } else if (n === 'park') {
      return parkTab.value = true;
    } else if (n === 'sea') {
      return seaTab.value = true;
    } else if (n === 'boat') {
      return boatTab.value = true;
    }
  }

</script>

<template>
    <div>
      <!--<TheHeader @scroll-to="goTo()" />-->
      <PageHeader
        title="pages.photoGallery.title"
        body=""
      />
      <PageSection>
        <Tabs @tab-event="tabSwitch" :galleryTabs="galleryTabs" />
      </PageSection>
      <PageSection>
        <PhotoGalleryMain v-if="mainTab===true" />
        <PhotoGalleryGuest v-if="guestTab===true" />
        <PhotoGalleryAnnex v-if="annexTab===true" />
        <PhotoGalleryGarage v-if="garageTab===true" />
        <PhotoGalleryPark v-if="parkTab===true" />
        <PhotoGallerySea v-if="seaTab===true" />
        <PhotoGalleryBoatHouse v-if="boatTab===true" />
      </PageSection>
    </div>
  </template>
  
  <style lang="scss" scoped></style>