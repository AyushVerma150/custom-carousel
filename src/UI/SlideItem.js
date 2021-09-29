import React from 'react';

const SlideItem = ({ children, ...params }) => {
  return (
    <div className="swiper-slide" {...params}>
      <span>{children}</span>
    </div>
  );
};

export default SlideItem;
