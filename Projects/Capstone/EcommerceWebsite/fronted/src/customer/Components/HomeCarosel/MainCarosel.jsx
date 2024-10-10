/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCaroselData';

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };

const items = mainCarouselData.map((item)=> <img className='cursor-pointer'
 role='presentation' src={item.image} alt={item.path} />)

const MainCarosel = () => (
    <AliceCarousel
        // mouseTracking
        items={items}
        // responsive={responsive}
        // controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
);

export default MainCarosel