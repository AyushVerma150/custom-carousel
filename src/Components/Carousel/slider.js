import React from 'react';
import Swiper from 'react-id-swiper';
import SlideItem from '../../UI/SlideItem';
import { params as sliderProps } from './CarouselConfig';
import Card from '../../UI/Card';

import CONSTANTS from '../../Constants/Constants';

// const images = [
//   {
//     src: 'https://picsum.photos/320/240?v1',
//   },
//   {
//     src: 'https://picsum.photos/320/240?v2',
//   },
//   {
//     src: 'https://picsum.photos/320/240?v3',
//   },
//   {
//     src: 'https://picsum.photos/320/240?v4',
//   },
// ];

const ManipulatingSwiper = () => {
  return (
    <div style={{ width: '100%' }}>
      <Swiper {...sliderProps}>
        {CONSTANTS.IMAGE_DATA.URL.map((image, idx) => (
          <SlideItem key={`slide_${idx}`}>
            <Card imageUrl={image.src} />
          </SlideItem>
        ))}
      </Swiper>
    </div>
  );
};

export default ManipulatingSwiper;
