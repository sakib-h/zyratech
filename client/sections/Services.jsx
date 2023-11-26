import Counter from "@components/Counter";

const Services = () => {
    return (
        <section id="services" className="container">
            <div className="flex justify-start">
                <h3 className="text-light-primary bg-light-secondary font-semibold text-[1.25rem] px-[1em] py-[0.4em] rounded-lg">
                    Services
                </h3>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                <div>
                    <h2 className="text-light-text text-[1.5rem] lg:text=[3rem] font-semibold">
                        Take your business to new heights for success with US
                    </h2>
                </div>
                <div className="flex-auto">
                    <div className="flex justify-between items-start gap-10">
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
            </div>
        </section>
    );
};

export default Services;
