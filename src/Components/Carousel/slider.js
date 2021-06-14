import React from "react";
import Swiper from "react-id-swiper";
import SlideItem from "./slideItem";
import
{
  Pagination,
  Navigation,
  Lazy,
  Controller
} from "swiper/dist/js/swiper.esm";

const images = [
  {
    src: "https://picsum.photos/320/240?v1"
  },
  {
    src: "https://picsum.photos/320/240?v2"
  },
  {
    src: "https://picsum.photos/320/240?v3"
  },
  {
    src: "https://picsum.photos/320/240?v4"
  }
];

const ManipulatingSwiper = () =>
{
  let params = {
    // slidesPerView: 4,
    // spaceBetween: 10,
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // }
    modules: [Controller, Pagination, Navigation, Lazy],
    preloadImages: true,
    effect: "fade",
    lazy: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: false,
    slidesPerView: 4,
    spaceBetween: 10,
    breakpoints: {
      1500:
      {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1200:
      {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1000:
      {
        slidesPerView: 3,
        spaceBetween: 30
      },
      960: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      720: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      540: {
        slidesPerView: 1,
        spaceBetween: 50
      },

    }
  };
  return (
    <div>
      <Swiper {...params}>
        {images.map( ( image, idx ) => (
          <SlideItem key={`slide_${ idx }`}>
            <img
              // className={styles.sliderImage}
              key={image.src}
              src={image.src}
            />
          </SlideItem>
        ) )}
        <br />
      </Swiper>
    </div >
  );
};

export default ManipulatingSwiper;
