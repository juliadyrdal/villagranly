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
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageFive" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageSix" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageSeven" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageEight" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageNine" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageTen" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageEleven" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageTwelve" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageThirteen" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageFourteen" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageFifteen" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageSixteen" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageSeventeen" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageEighteen" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageNineteen" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageTwenty" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageTwentyOne" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageTwentyTwo" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageTwentyThree" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageTwentyFour" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageTwentyFive" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageTwentySix" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageTwentySeven" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageTwentyEight" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageTwentyNine" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageThirty" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageThirtyOne" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageThirtyTwo" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageThirtyThree" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img class="h-full object-cover" :src="imageThirtyFour" alt="" />
    </SwiperSlide>
    <div class="absolute right-10 bottom-10 z-40">
      <ButtonPrevious class="mr-3" />
      <ButtonNext /> 
    </div>
  </Swiper>
  
</template>

<script setup>
import imageOne from "@/assets/images/granly-gallery/_DSC1714.jpg";
import imageTwo from "@/assets/images/granly-gallery/_DSC1725.jpg";
import imageThree from "@/assets/images/granly-gallery/_DSC1734.jpg";
import imageFour from "@/assets/images/granly-gallery/_DSC1743.jpg";
import imageFive from "@/assets/images/granly-gallery/_DSC1752.jpg";
import imageSix from "@/assets/images/granly-gallery/_DSC1761.jpg";
import imageSeven from "@/assets/images/granly-gallery/_DSC1770.jpg";
import imageEight from "@/assets/images/granly-gallery/_DSC1694.jpg";
import imageNine from "@/assets/images/granly-gallery/_DSC1659.jpg";
import imageTen from "@/assets/images/granly-gallery/_DSC1665.jpg";
import imageEleven from "@/assets/images/granly-gallery/_DSC1674.jpg";
import imageTwelve from "@/assets/images/granly-gallery/_DSC1685.jpg";
import imageThirteen from "@/assets/images/granly-gallery/_DSC1694.jpg";
import imageFourteen from "@/assets/images/granly-gallery/_DSC1701.jpg";
import imageFifteen from "@/assets/images/granly-gallery/_DSC1711.jpg";
import imageSixteen from "@/assets/images/granly-gallery/_DSC1452.jpg";
import imageSeventeen from "@/assets/images/granly-gallery/_DSC1461.jpg";
import imageEighteen from "@/assets/images/granly-gallery/_DSC1470.jpg";
import imageNineteen from "@/assets/images/granly-gallery/_DSC1480.jpg";
import imageTwenty from "@/assets/images/granly-gallery/_DSC1489.jpg";
import imageTwentyOne from "@/assets/images/granly-gallery/_DSC1498.jpg";
import imageTwentyTwo from "@/assets/images/granly-gallery/_DSC1502.jpg";
import imageTwentyThree from "@/assets/images/granly-gallery/_DSC1504.jpg";
import imageTwentyFour from "@/assets/images/granly-gallery/_DSC1514.jpg";
import imageTwentyFive from "@/assets/images/granly-gallery/_DSC1522.jpg";
import imageTwentySix from "@/assets/images/granly-gallery/_DSC1532.jpg";
import imageTwentySeven from "@/assets/images/granly-gallery/_DSC1541.jpg";
import imageTwentyEight from "@/assets/images/granly-gallery/_DSC1552.jpg";
import imageTwentyNine from "@/assets/images/granly-gallery/_DSC1555.jpg";
import imageThirty from "@/assets/images/granly-gallery/_DSC1560.jpg";
import imageThirtyOne from "@/assets/images/granly-gallery/_DSC1566.jpg";
import imageThirtyTwo from "@/assets/images/granly-gallery/_DSC1571.jpg";
import imageThirtyThree from "@/assets/images/granly-gallery/_DSC1407.jpg";
import imageThirtyFour from "@/assets/images/granly-gallery/_DSC1418.jpg";


const swiper = useSwiper()

//     {src: 'images/gallery/_DSC1407.jpg',thumbnail: 'images/gallery/_DSC1407.jpg',w: 1200, h: 900, title: 'Stue'},
</script>

<style lang="scss" scoped></style>
