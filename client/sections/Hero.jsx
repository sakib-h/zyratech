import Image from "next/image";

const Hero = () => {
    return (
        <section id="home" className="container">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10">
                <div className="col-span-1 md:col-span-7 xl:col-span-8">
                    <div className="flex flex-col items-start gap-5">
                        <h4 className="text-light-primary font-semibold text-[0.8rem] md:text-[1rem] lg:text-[1.25rem]">
                            Design | Development | Marketing{" "}
                        </h4>
                        <h1 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-semibold text-light-text">
                            Unlock the Limitless Potential of Your Brand
                        </h1>
                        <p className="font-[400] text-[0.8rem] lg:text-[1.2rem] text-light-text">
                            Empowering Brands for a Bold Tomorrow: Where Vision
                            Meets Identity
                        </p>
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
        </section>
    );
};

export default Hero;
