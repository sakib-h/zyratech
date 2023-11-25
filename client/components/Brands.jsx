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
                    slidesPerView: 6,
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
            <div className="flex justify-center items-center">
                <SwiperSlide className="mx-auto">
                    <img
                        src="/icons/behance.svg"
                        className="w-[48px] md:w-[56px] "
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full flex justify-center">
                    <img
                        src="/icons/google.svg"
                        className="w-[48px] md:w-[56px]"
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full flex justify-center">
                    <img
                        src="/icons/apple.svg"
                        className="w-[48px] md:w-[56px]"
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full flex justify-center">
                    <img
                        src="/icons/pied-piper.svg"
                        className="w-[48px] md:w-[56px] "
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full flex justify-center">
                    <img
                        src="/icons/ibm.svg"
                        className="w-[48px] md:w-[56px] "
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full flex justify-center">
                    <img
                        src="/icons/stripe.svg"
                        className="w-[48px] md:w-[56px]"
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full flex justify-center">
                    <img
                        src="/icons/steelseries.svg"
                        className="w-[48px] md:w-[56px]"
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full flex justify-center">
                    <img
                        src="/icons/qgenda.svg"
                        className="w-[48px] md:w-[56px]"
                    />
                </SwiperSlide>
            </div>
        </Swiper>
    );
};

export default Brands;
