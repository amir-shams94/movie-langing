<template>
    <div class="columns">
      <div class="column is-full">
        <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :autoplay="{
    delay: 2500,
    disableOnInteraction: false,
  }" :pagination="{
    clickable: true,
  }" :navigation="true" :modules="modules" class="mySwiper">
  
          <swiper-slide><img
              src="https://digimovie.vip/wp-content/uploads/2022/12/bMxUWm0C5qYK6vMyOgcuRpKnnow.jpg" /></swiper-slide>
          <swiper-slide><img
              src="https://digimovie.vip/wp-content/uploads/2020/08/qBx97wytqlyPqXATHqRgIVFxJRU.jpg" /></swiper-slide>
          <swiper-slide><img
              src="https://digimovie.vip/wp-content/uploads/2022/09/pUbtZzMm1G2j1pfWn1V6StdTCmU.jpg" /></swiper-slide>
  
        </swiper>
  
      </div>
  
    </div>
  </template>
    
  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
  import "swiper/css";
  
  import "swiper/css/pagination";
  import "swiper/css/navigation";
  
  
  
  // import required modules
  import {Autoplay, Navigation, Pagination } from "swiper";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay,Navigation, Pagination],
      };
    },
  };
  </script>
  
  
    
  <style scoped>
  body {
    position: relative;
    height: 100%;
  }
  
  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
  }
  
  .swiper {
    width: 100%;
  
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 150px;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  </style>
    
    