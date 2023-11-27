import Counter from "@components/Counter";

const Services = () => {
    return (
        <section id="services" className="container">
            <div className="flex justify-start">
                <h3 className="text-light-primary bg-light-secondary font-semibold text-[1.25rem] px-[1em] py-[0.4em] rounded-lg">
                    Services
                </h3>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start gap-10 my-20">
                <div>
                    <h2 className="text-light-text text-[1.5rem] lg:text-[3rem] font-semibold">
                        Take your business to new{" "}
                        <br className="hidden md:block" /> heights for success
                        with US
                    </h2>
                </div>

                <div className="flex justify-between items-start gap-10 lg:gap-20 ">
                    <div className="flex flex-col items-center">
                        <span className="text-light-primary font-semibold text-[2.5rem] lg:text-[4rem]">
                            <Counter end={3} />+
                        </span>
                        <p className="text-center">Years Experience</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-light-primary font-semibold text-[2.5rem] lg:text-[4rem]">
                            <Counter end={200} />+
                        </span>
                        <p className="text-center">Projects Done</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-light-primary font-semibold text-[2.5rem] lg:text-[4rem]">
                            <Counter end={400} />+
                        </span>
                        <p className="text-center">Happy Clients</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="col-span-1 relative rounded-lg ">
                    <div className="flex flex-col justify-start gap-5">
                        <img
                            src="/icons/design.svg"
                            alt="design"
                            className="w-[5rem] "
                        />

                        <h2 className=" text-[1rem] md:text-[2rem] text-light-primary font-semibold">
                            Graphics Design
                        </h2>
                        <p className="text-[0.8rem] md:text-[1.25rem] text-light-text">
                            Elevate your brand's visual impact with our graphic
                            design services. From logos to marketing materials,
                            our talented team brings your vision to life,
                            ensuring it captivates and differentiates. Explore
                            our services today!
                        </p>
                    </div>
                </div>
               
            </div>
        </section>
    );
};

export default Services;
