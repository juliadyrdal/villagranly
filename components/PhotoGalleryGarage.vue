<template>
    <!-- <vue-picture-swipe :items="photos">
      aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full
        </vue-picture-swipe> -->
  
    <Swiper
      :modules="[SwiperNavigation, SwiperPagination, SwiperA11y, SwiperVirtual, SwiperAutoplay]"
      :slides-per-view="1"
      :space-between="50"
      :loop="true"
      :autoplay="{
          delay: 3500,
          disableOnInteraction: false,
          }"
      grab-cursor
      virtual
    >
      <SwiperSlide>
        <img class="h-full object-cover" :src="imageOne" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img class="h-full object-cover" :src="imageTwo" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img class="h-full object-cover" :src="imageThree" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img class="h-full object-cover" :src="imageFour" alt="" />
      </SwiperSlide>
      <div class="absolute right-10 bottom-10 z-40">
        <ButtonPrevious class="mr-3" />
        <ButtonNext /> 
      </div>
    </Swiper>
    
  </template>
  
  <script setup>
  import imageOne from "@/assets/images/granly-gallery/_DSC2015.jpg";
  import imageTwo from "@/assets/images/granly-gallery/_DSC2022.jpg";
  import imageThree from "@/assets/images/granly-gallery/_DSC2031.jpg";
  import imageFour from "@/assets/images/granly-gallery/_DSC2044.jpg";  
  
  const swiper = useSwiper()
  
  //     {src: 'images/gallery/_DSC1407.jpg',thumbnail: 'images/gallery/_DSC1407.jpg',w: 1200, h: 900, title: 'Stue'},
  </script>
  
  <style lang="scss" scoped></style>
  