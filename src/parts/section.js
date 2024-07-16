import React from 'react';
import {Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img from "../images/header.png";

function Section() {
    return (
        <section>
            <Swiper
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={img} alt="" className="img-fluid"/></SwiperSlide>
                <SwiperSlide><img src={img} alt="" className="img-fluid"/></SwiperSlide>
                <SwiperSlide><img src={img} alt="" className="img-fluid"/></SwiperSlide>
                <SwiperSlide><img src={img} alt="" className="img-fluid"/></SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Section;