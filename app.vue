<template>
  <swiper
    :direction="'vertical'"
    :speed="1000"
    :pagination="{
      clickable: true,
    }"
    :mousewheel="true"
    :modules="[SwiperPagination,SwiperMousewheel]"
    class="mySwiper"
  >
    <swiper-slide id="basic">
      <BasicPage />
    </swiper-slide>
    <swiper-slide id="stack">
      <StackPage />
    </swiper-slide>
    <swiper-slide id="port">
      <PortPage />
    </swiper-slide>
    <swiper-slide id="contact">
      <ContactPage />
    </swiper-slide>
    <template #container-start>
      <NavigationBar />
    </template>
  </swiper>
</template>

<script setup lang="ts">

</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100vh;
}

</style>
