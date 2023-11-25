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
                        <div className="w-full flex flex-col md:flex-row justify-center md:justify-start items-center gap-5">
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
                    />
                </div>
            </div>
            <div className="flex flex-row flex-wrap justify-between items-center gap-3 mb-[5em]">
                <img
                    src="/icons/behance.svg"
                    className="w-[42px] md:w-[52px]"
                />
                <img
                    src="/icons/google.svg"
                    className="w-[82px] md:w-[100px]"
                />
                <img src="/icons/apple.svg" className="w-[40px] md:w-[50px]" />
                <img
                    src="/icons/dribble.svg"
                    className="w-[82px] md:w-[100px]"
                />
                <img
                    src="/icons/awwwards.svg"
                    className="w-[42px] md:w-[120px] hidden md:inline-block "
                />
            </div>
        </section>
    );
};

export default Hero;
