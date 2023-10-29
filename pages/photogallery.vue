<script setup>
  const mainTab = ref(true);
  const guestTab = ref(false);
  const annexTab = ref(false);
  const garageTab = ref(false);
  const parkTab = ref(false);
  const seaTab = ref(false);
  const boatTab = ref(false);

  function tabSwitch(n) {
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
        <Tabs @tab-event="tabSwitch" />
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