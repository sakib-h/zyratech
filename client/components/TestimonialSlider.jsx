"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const TestimonialSlider = () => {
    return (
        <Swiper
            breakpoints={{
                250: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
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
            className="testimonial-slider"
        >
            <div className="flex justify-center items-center">
                <SwiperSlide className="mx-auto">
                    <div>
                        <div className="flex flex-col h-[200px] gap-5 justify-start mb-5">
                            <img
                                src="/icons/quotes.svg"
                                className="w-[48px] md:w-[56px]"
                                alt="quotes icon"
                            />
                            <h3 className="text-light-primary font-semibold text-[1rem] lg:text-[1.25rem]">
                                Website Review
                            </h3>
                            <p className="text-light-text text-[0.8rem] lg:text-[1rem] ">
                                “I love the design and functionality of this
                                website. It's user-friendly and visually
                                appealing. It's a go-to resource for me, and I
                                appreciate the valuable information and content
                                it provides”
                            </p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <img
                                src="/icons/testimonial-1.svg"
                                alt="testimonial"
                            />
                            <div className="flex flex-col items-start">
                                <h3 className="text-light-primary font-semibold text-[1rem] lg:text-[1.25rem]">
                                    Melonman
                                </h3>
                                <p className="text-light-text text-[0.8rem] lg:text-[1rem] ">
                                    Ceo of Melongram
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="mx-auto">
                    <div>
                        <div className="flex flex-col h-[200px] gap-5 justify-start mb-5">
                            <img
                                src="/icons/quotes.svg"
                                className="w-[48px] md:w-[56px]"
                                alt="quotes icon"
                            />
                            <h3 className="text-light-primary font-semibold text-[1rem] lg:text-[1.25rem]">
                                E-Commerce Review
                            </h3>
                            <p className="text-light-text text-[0.8rem] lg:text-[1rem] ">
                                "Shopping on Zyratech is always a pleasure. The
                                product variety is amazing, and the checkout
                                process is quick and hassle-free. Plus, their
                                customer support is top-notch!"
                            </p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <img
                                src="/icons/testimonial-2.svg"
                                alt="testimonial"
                            />
                            <div className="flex flex-col items-start">
                                <h3 className="text-light-primary font-semibold text-[1rem] lg:text-[1.25rem]">
                                    Apple Guru
                                </h3>
                                <p className="text-light-text text-[0.8rem] lg:text-[1rem] ">
                                    Ceo of Apple Guru
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="mx-auto">
                    <div>
                        <div className="flex flex-col h-[200px] gap-5 justify-start mb-5">
                            <img
                                src="/icons/quotes.svg"
                                className="w-[48px] md:w-[56px]"
                                alt="quotes icon"
                            />
                            <h3 className="text-light-primary font-semibold text-[1rem] lg:text-[1.25rem]">
                                Digital Marketing Review
                            </h3>
                            <p className="text-light-text text-[0.8rem] lg:text-[1rem] ">
                                "Zyratech transformed our online presence. With
                                their expertise, we've seen a notable increase
                                in leads and conversions. Their transparent
                                approach and commitment to our goals are truly
                                commendable."
                            </p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <img
                                src="/icons/testimonial-3.svg"
                                alt="testimonial"
                            />
                            <div className="flex flex-col items-start">
                                <h3 className="text-light-primary font-semibold text-[1rem] lg:text-[1.25rem]">
                                    Doom
                                </h3>
                                <p className="text-light-text text-[0.8rem] lg:text-[1rem] ">
                                    Ceo of Doom CO
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </div>
        </Swiper>
    );
};

export default TestimonialSlider;
