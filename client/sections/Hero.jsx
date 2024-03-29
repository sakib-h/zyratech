import { MotionDiv } from "@lib/FramerMotion";
import dynamic from "next/dynamic";
const BrandsSlider = dynamic(() => import("@components/BrandsSlider"));
import Image from "next/image";

const Hero = () => {
    return (
        <section id="home" className="container">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10 mb-[5em]">
                <div className="col-span-1 md:col-span-7 xl:col-span-8">
                    <div className="flex flex-col items-start gap-5">
                        <h4 className="text-light-primary font-semibold text-[0.8rem] md:text-[1rem] lg:text-[1.25rem]">
                            Design | Development | Marketing{" "}
                        </h4>
                        <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] font-semibold text-light-text">
                            Unlock the Limitless Potential of Your Brand
                        </h1>
                        <p className="font-[400] text-[1rem] lg:text-[1.2rem] text-light-text">
                            Empowering Brands for a Bold Tomorrow: Where Vision
                            Meets Identity
                        </p>
                        <div className="hidden md:flex flex-col md:flex-row justify-center md:justify-start items-center gap-5">
                            <button className="text-[1rem] bg-light-primary rounded-[50px] px-[2em] py-[1em] text-light-background">
                                Free Consultation
                            </button>
                            <button className="text-[1rem] bg-light-secondary rounded-[50px] px-[2em] py-[1em] text-light-text">
                                Get Connected
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-5 xl:md:col-span-4">
                    <Image
                        src="/images/header-image.png"
                        width={350}
                        height={350}
                        className="w-full h-auto"
                        alt="Header"
                    />
                </div>
                <div className="flex md:hidden flex-col md:flex-row justify-center md:justify-start items-center gap-5">
                    <button className="w-full text-[1rem] bg-light-primary rounded-[50px] px-[2em] py-[1em] text-light-background">
                        Free Consultation
                    </button>
                    <button className="w-full text-[1rem] bg-light-secondary rounded-[50px] px-[2em] py-[1em] text-light-text">
                        Get Connected
                    </button>
                </div>
            </div>
            <MotionDiv
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, type: "spring", bounce: 0.25 }}
                className="mb-[5rem] md:mb-0"
            >
                <BrandsSlider />
            </MotionDiv>
        </section>
    );
};

export default Hero;
