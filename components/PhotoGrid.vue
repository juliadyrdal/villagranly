<template>
    <div>
      <Swiper
        :style="{
            '--swiper-navigation-color': '#111827',
            '--swiper-pagination-color': '#fff',
        }"
        :height="300"
        :modules="[SwiperNavigation, SwiperPagination, SwiperA11y, SwiperVirtual]"
        :slides-per-view="1"
        :space-between="10"
        :navigation="true"
        :pagination="{ dynamicBullets: true }"
        grab-cursor
        virtual
      >

        <SwiperSlide v-for="photo in photoFileNames" :key="photo" class="">
          <div class="">
            <img class="mx-auto h-img object-contain" :src="photo" alt="" />
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  </template>
  
  <script setup>
    const swiper = useSwiper()
  
    const photoFileRoot = ref(
      "https://cozy-queijadas-0e6f38.netlify.app/images/gallery/granly"
    );
  
    const photoFileNames = ref([]);
  
    function formatFileNames() {
      for (let i = 1; i < 126; i++) {
        photoFileNames.value.push(photoFileRoot.value + i + ".jpg");
      }
    }
  
    formatFileNames();
  
    function reversePhotoFiles() {
      photoFileNames.value.reverse()
    }
  
    reversePhotoFiles();
  
  //     {src: 'images/gallery/_DSC1407.jpg',thumbnail: 'images/gallery/_DSC1407.jpg',w: 1200, h: 900, title: 'Stue'},
  </script>
  
  <style lang="scss" scoped></style>
  