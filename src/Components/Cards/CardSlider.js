import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import { Link } from 'react-router-dom';

const CardSlider = ({ img1, img2, img3 }) => {

    return (
        <div className="">
            <Swiper
                // effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={false} // Set loop to false
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className='swiper_container'
            >
                <SwiperSlide>
                    <Link to={`/`}>
                        <img className='h-[200px] w-full rounded-xl' src={img1} alt="slide_image" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={`/`}>
                        <img className='h-[200px] w-full rounded-xl' src={img2} alt="slide_image" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={`/`}>
                        <img className='h-[200px] w-full rounded-xl' src={img3} alt="slide_image" />
                    </Link>
                </SwiperSlide>

                <div className="slider-controler ">
                    <div style={{ position: "relative" }} className="swiper-pagination -mt-5 w-full flex justify-center items-center h-5 cursor-pointer"></div>
                </div>
            </Swiper>
        </div>
    );
};

export default CardSlider;