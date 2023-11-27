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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="col-span-1 relative rounded-[1.25rem] px-5 py-10 hover:bg-light-secondary group duration-300">
                    <div className="flex flex-col justify-start gap-5">
                        <img
                            src="/icons/design.svg"
                            alt="design"
                            className="w-[5rem] "
                        />

                        <h2 className=" text-[1rem] md:text-[2rem] text-light-primary font-semibold">
                            Graphics Design
                        </h2>
                        <p className="text-[0.8rem] md:text-[1rem] lg:text-[1.25rem] text-light-text">
                            Elevate your brand's visual impact with our graphic
                            design services. From logos to marketing materials,
                            our talented team brings your vision to life,
                            ensuring it captivates and differentiates. Explore
                            our services today.
                        </p>
                    </div>
                    <div className="absolute right-0 top-0 bg-light-secondary group-hover:bg-light-primary p-3 group-hover:rounded-tr-[1.25rem] duration-300">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-light-primary group-hover:fill-light-secondary duration-300"
                        >
                            <path d="M23.2132 1.7868C23.2132 1.23451 22.7655 0.786795 22.2132 0.786795L13.2132 0.786796C12.6609 0.786796 12.2132 1.23451 12.2132 1.7868C12.2132 2.33908 12.6609 2.7868 13.2132 2.7868L21.2132 2.7868L21.2132 10.7868C21.2132 11.3391 21.6609 11.7868 22.2132 11.7868C22.7655 11.7868 23.2132 11.3391 23.2132 10.7868L23.2132 1.7868ZM1.70711 23.7071L22.9203 2.4939L21.5061 1.07969L0.292893 22.2929L1.70711 23.7071Z" />
                        </svg>
                    </div>
                </div>

                <div className="col-span-1 relative rounded-[1.25rem] px-5 py-10 hover:bg-light-secondary group duration-300">
                    <div className="flex flex-col justify-start gap-5">
                        <img
                            src="/icons/ui-ux.svg"
                            alt="design"
                            className="w-[5rem] "
                        />

                        <h2 className=" text-[1rem] md:text-[2rem] text-light-primary font-semibold">
                            UI/UX Design
                        </h2>
                        <p className="text-[0.8rem] md:text-[1rem] lg:text-[1.25rem] text-light-text">
                            Enhance user experiences with our UI/UX design. We
                            create intuitive, engaging digital solutions that
                            resonate with your audience.
                        </p>
                    </div>
                    <div className="absolute right-0 top-0 bg-light-secondary group-hover:bg-light-primary p-3 group-hover:rounded-tr-[1.25rem] duration-300">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-light-primary group-hover:fill-light-secondary duration-300"
                        >
                            <path d="M23.2132 1.7868C23.2132 1.23451 22.7655 0.786795 22.2132 0.786795L13.2132 0.786796C12.6609 0.786796 12.2132 1.23451 12.2132 1.7868C12.2132 2.33908 12.6609 2.7868 13.2132 2.7868L21.2132 2.7868L21.2132 10.7868C21.2132 11.3391 21.6609 11.7868 22.2132 11.7868C22.7655 11.7868 23.2132 11.3391 23.2132 10.7868L23.2132 1.7868ZM1.70711 23.7071L22.9203 2.4939L21.5061 1.07969L0.292893 22.2929L1.70711 23.7071Z" />
                        </svg>
                    </div>
                </div>

                <div className="col-span-1 relative rounded-[1.25rem] px-5 py-10 hover:bg-light-secondary group duration-300">
                    <div className="flex flex-col justify-start gap-5">
                        <img
                            src="/icons/development.svg"
                            alt="design"
                            className="w-[5rem] "
                        />

                        <h2 className=" text-[1rem] md:text-[2rem] text-light-primary font-semibold">
                            Web Development
                        </h2>
                        <p className="text-[0.8rem] md:text-[1rem] lg:text-[1.25rem] text-light-text">
                            Elevate your online presence with our web
                            development. We create user-friendly, responsive,
                            and scalable digital solutions. Explore our services
                            to unlock your digital potential.
                        </p>
                    </div>
                    <div className="absolute right-0 top-0 bg-light-secondary group-hover:bg-light-primary p-3 group-hover:rounded-tr-[1.25rem] duration-300">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-light-primary group-hover:fill-light-secondary duration-300"
                        >
                            <path d="M23.2132 1.7868C23.2132 1.23451 22.7655 0.786795 22.2132 0.786795L13.2132 0.786796C12.6609 0.786796 12.2132 1.23451 12.2132 1.7868C12.2132 2.33908 12.6609 2.7868 13.2132 2.7868L21.2132 2.7868L21.2132 10.7868C21.2132 11.3391 21.6609 11.7868 22.2132 11.7868C22.7655 11.7868 23.2132 11.3391 23.2132 10.7868L23.2132 1.7868ZM1.70711 23.7071L22.9203 2.4939L21.5061 1.07969L0.292893 22.2929L1.70711 23.7071Z" />
                        </svg>
                    </div>
                </div>

                <div className="col-span-1 relative rounded-[1.25rem] px-5 py-10 hover:bg-light-secondary group duration-300">
                    <div className="flex flex-col justify-start gap-5">
                        <img
                            src="/icons/digital-marketing.svg"
                            alt="design"
                            className="w-[5rem] "
                        />

                        <h2 className=" text-[1rem] md:text-[2rem] text-light-primary font-semibold">
                            Digital Marketing
                        </h2>
                        <p className="text-[0.8rem] md:text-[1rem] lg:text-[1.25rem] text-light-text">
                            Expand your online presence with our digital
                            marketing. We'll boost your brand's visibility and
                            engage your audience. Explore our services for
                            digital success.
                        </p>
                    </div>
                    <div className="absolute right-0 top-0 bg-light-secondary group-hover:bg-light-primary p-3 group-hover:rounded-tr-[1.25rem] duration-300">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-light-primary group-hover:fill-light-secondary duration-300"
                        >
                            <path d="M23.2132 1.7868C23.2132 1.23451 22.7655 0.786795 22.2132 0.786795L13.2132 0.786796C12.6609 0.786796 12.2132 1.23451 12.2132 1.7868C12.2132 2.33908 12.6609 2.7868 13.2132 2.7868L21.2132 2.7868L21.2132 10.7868C21.2132 11.3391 21.6609 11.7868 22.2132 11.7868C22.7655 11.7868 23.2132 11.3391 23.2132 10.7868L23.2132 1.7868ZM1.70711 23.7071L22.9203 2.4939L21.5061 1.07969L0.292893 22.2929L1.70711 23.7071Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
