"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const PortfolioSlider = () => {
    return (
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            breakpoints={{
                250: {
                    slidesPerView: 2,
                    spaceBetween: -60,
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
            pagination={{
                dynamicBullets: true,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            speed={1500}
            loop={true}
            className="portfolio-slider"
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
                        src="/images/web-portfolio-2.png"
                        alt="web portfolio 2"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full">
                    <img
                        src="/images/web-portfolio-3.png"
                        alt="web portfolio 3"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full">
                    <img
                        src="/images/web-portfolio-4.png"
                        alt="web portfolio 4"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full">
                    <img
                        src="/images/web-portfolio-5.png"
                        alt="web portfolio 5"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full">
                    <img
                        src="/images/web-portfolio-6.png"
                        alt="web portfolio 6"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full">
                    <img
                        src="/images/web-portfolio-7.png"
                        alt="web portfolio 7"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full">
                    <img
                        src="/images/web-portfolio-8.png"
                        alt="web portfolio 8"
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default PortfolioSlider;
