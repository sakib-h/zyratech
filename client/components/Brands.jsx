"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
const Brands = () => {
    return (
        <Swiper
            breakpoints={{
                250: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
            }}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            speed={1500}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide className="mx-auto">
                <img
                    src="/icons/behance.svg"
                    className="w-[42px] md:w-[52px]"
                />
            </SwiperSlide>
            <SwiperSlide className="w-full flex justify-center">
                <img
                    src="/icons/google.svg"
                    className="w-[82px] md:w-[100px]"
                />
            </SwiperSlide>
            <SwiperSlide className="w-full flex justify-center">
                <img src="/icons/apple.svg" className="w-[40px] md:w-[50px]" />
            </SwiperSlide>
            <SwiperSlide className="w-full flex justify-center">
                <img
                    src="/icons/dribble.svg"
                    className="w-[82px] md:w-[100px]"
                />
            </SwiperSlide>
            <SwiperSlide className="w-full flex justify-center">
                <img
                    src="/icons/awwwards.svg"
                    className="w-[42px] md:w-[120px] "
                />
            </SwiperSlide>
            <SwiperSlide className="w-full flex justify-center">
                <img
                    src="/icons/awwwards.svg"
                    className="w-[42px] md:w-[120px] "
                />
            </SwiperSlide>
            <SwiperSlide className="w-full flex justify-center">
                <img src="/icons/apple.svg" className="w-[40px] md:w-[50px]" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Brands;
