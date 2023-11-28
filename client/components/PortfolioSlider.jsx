"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

const PortfolioSlider = () => {
    return (
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            breakpoints={{
                250: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },

                1128: {
                    slidesPerView: 3,
                    spaceBetween: -60,
                },
                1366: {
                    slidesPerView: 4,
                    spaceBetween: -60,
                },
            }}
            // spaceBetween={-60}
            coverflowEffect={{
                rotate: 35,
                stretch: 5,
                depth: 80,
                modifier: 1,
                slideShadows: true,
            }}
            navigation={true}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            speed={1500}
            loop={true}
        >
            <SwiperSlide>
                <div className="w-full">
                    <img
                        src="/images/web-portfolio-1.png"
                        alt="web portfolio 1"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full">
                    <img
                        src="/images/web-portfolio-1.png"
                        alt="web portfolio 1"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full">
                    <img
                        src="/images/web-portfolio-1.png"
                        alt="web portfolio 1"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full">
                    <img
                        src="/images/web-portfolio-1.png"
                        alt="web portfolio 1"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full">
                    <img
                        src="/images/web-portfolio-1.png"
                        alt="web portfolio 1"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full">
                    <img
                        src="/images/web-portfolio-1.png"
                        alt="web portfolio 1"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full">
                    <img
                        src="/images/web-portfolio-1.png"
                        alt="web portfolio 1"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full">
                    <img
                        src="/images/web-portfolio-1.png"
                        alt="web portfolio 1"
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default PortfolioSlider;
