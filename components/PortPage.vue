<template>
  <div class="container port">
    <div class="base pf-wrap">
      <swiper
        :space-between="30"
        :speed="1000"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: true,
        }"
        :pagination="{
          clickable: true,
        }"
        :modules="[SwiperPagination,SwiperAutoplay]"
        class="portSwiper"
      >
        <swiper-slide v-for="slide in link" :key="slide" @click="movePage(slide)" />
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import link from '~/assets/link.json'

const movePage = (slide:string) => {
  window.location.href = 'https://yekata.github.io/' + slide
}
</script>

<style scoped>
.swiper {
    height: 90%;
  }

  @media(min-width: 1024px){
    .swiper-slide:nth-child(1) {
    height: 90%;
    background: url('~/assets/todo.png') no-repeat center ;
    background-size: 600px 1000px ;
  }
  .swiper-slide:nth-child(2) {
    height: 90%;
    background: url('~/assets/v-news.png') no-repeat center ;
    background-size: 600px 1000px ;

  }
  .swiper-slide:nth-child(3) {
    height: 90%;
    background: url('~/assets/v-star.png') no-repeat center ;
    background-size: 600px 1000px ;
  }
  .swiper-slide:nth-child(4) {
    height: 90%;
    background: url('~/assets/nuxt-mongo.png') no-repeat center ;
    background-size: 600px 1000px ;

  }
}

  @media(max-width:1023px) {
    .swiper-slide:nth-child(1) {
    height: 90%;
    background: url('~/assets/todo.png') no-repeat center ;
    background-size: 400px 800px ;
  }
  .swiper-slide:nth-child(2) {
    height: 90%;
    background: url('~/assets/v-news.png') no-repeat center ;
    background-size: 400px 800px ;

  }
  .swiper-slide:nth-child(3) {
    height: 90%;
    background: url('~/assets/v-star.png') no-repeat center ;
    background-size: 400px 800px ;
  }
  .swiper-slide:nth-child(4) {
    height: 90%;
    background: url('~/assets/nuxt-mongo.png') no-repeat center ;
    background-size: 400px 800px ;

  }
  }

  @media(max-width:649px){
    .swiper-slide:nth-child(1) {
    height: 90%;
    background: url('~/assets/todo.png') no-repeat center;
    background-size: 280px 700px ;
  }
  .swiper-slide:nth-child(2) {
    height: 90%;
    background: url('~/assets/v-news.png') no-repeat center;
    background-size: 280px 700px ;

  }
  .swiper-slide:nth-child(3) {
    height: 90%;
    background: url('~/assets/v-star.png') no-repeat center;
    background-size: 280px 700px ;
  }
  .swiper-slide:nth-child(4) {
    height: 90%;
    background: url('~/assets/nuxt-mongo.png') no-repeat center;
    background-size: 280px 700px ;

  }
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
