import {
  Pagination,
  Navigation,
  Lazy,
  Controller,
} from 'swiper/dist/js/swiper.esm';

export const params = {
  modules: [Controller, Pagination, Navigation, Lazy],
  preloadImages: true,
  effect: 'coverflow',
  lazy: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: (index, className) => {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 10,
  breakpoints: {
    1500: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1000: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    960: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    720: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    540: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
};
