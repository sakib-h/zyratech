import PortfolioSlider from "@components/PortfolioSlider";
import Link from "next/link";
const Portfolio = () => {
    return (
        <>
            <section
                id="portfolio"
                className="portfolio container bg-light-secondary rounded-[1.25rem] p-10 mb-[5rem]"
            >
                <div className="flex justify-start">
                    <h3 className="text-light-primary border-[1px] border-light-primary font-semibold text-[1.25rem] px-[2rem] py-[0.5rem] rounded-[10px]">
                        Portfolio
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-start gap-10 my-10">
                    <h2 className="col-span-1 text-light-text text-[1.5rem] lg:text-[3rem] font-semibold">
                        Crafting Timeless Brands
                        <br className="hidden md:block" /> That Endure the Test
                        of Time
                    </h2>

                    <p className="col-span-1 text-[0.8rem] md:text-[1rem] lg:text-[1.25rem] text-light-text">
                        At Zyratech, we've journeyed from the ground up to reach
                        top-notch status. We've set records, and our commitment
                        to making the right decisions with care is how we aim to
                        surpass them.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-5 mb-[2rem] mb:mb-[5rem]">
                    <button className="text-[1rem] bg-light-primary rounded-[50px] px-[2em] py-[0.5em] text-light-background">
                        All Projects
                    </button>
                    <button className="text-[1rem] border-[1px] border-light-primary rounded-[50px] px-[2em] py-[0.5em] text-light-text">
                        Graphics Design
                    </button>
                    <button className="text-[1rem] border-[1px] border-light-primary rounded-[50px] px-[2em] py-[0.5em] text-light-text">
                        UI/UX Design
                    </button>
                    <button className="text-[1rem] border-[1px] border-light-primary rounded-[50px] px-[2em] py-[0.5em] text-light-text">
                        Web Developments
                    </button>
                    <button className="text-[1rem] border-[1px] border-light-primary rounded-[50px] px-[2em] py-[0.5em] text-light-text">
                        Digital Marketing
                    </button>
                </div>
                <div>
                    <PortfolioSlider />
                </div>
                <div>
                    <Link
                        href="/"
                        className="text-light-primary flex justify-end items-center gap-1 cursor-pointer"
                    >
                        <p> Explore More Projects</p>{" "}
                        <span className="rotate-[-45deg]">➜</span>
                    </Link>
                </div>
            </section>
            <section className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-[5rem]">
                    <div className="col-span-1">
                        <h3 className="text-light-primary font-semibold text-[1.5rem] lg:text-[2.5rem] mb-5">
                            Affordable Pricing, <br /> Easy Scaling.
                        </h3>
                        <div>
                            <ul className="flex flex-col gap-5">
                                <li className="flex flex-row gap-2 items-center">
                                    <img
                                        src="/icons/check-circle.svg"
                                        alt="check"
                                        className="w-[1.5rem] h-[1.5rem]"
                                    />
                                    <p className="text-light-text font-semibold text-[0.9rem] lg:text-[1.2rem]">
                                        Amazing Communication
                                    </p>
                                </li>
                                <li className="flex flex-row gap-2 items-center">
                                    <img
                                        src="/icons/check-circle.svg"
                                        alt="check"
                                        className="w-[1.5rem] h-[1.5rem]"
                                    />
                                    <p className="text-light-text font-semibold text-[0.9rem] lg:text-[1.2rem]">
                                        Best trending designing experience
                                    </p>
                                </li>
                                <li className="flex flex-row gap-2 items-center">
                                    <img
                                        src="/icons/check-circle.svg"
                                        alt="check"
                                        className="w-[1.5rem] h-[1.5rem]"
                                    />
                                    <p className="text-light-text font-semibold text-[0.9rem] lg:text-[1.2rem]">
                                        Amazing Communication
                                    </p>
                                </li>
                                <li className="flex flex-row gap-2 items-center">
                                    <img
                                        src="/icons/check-circle.svg"
                                        alt="check"
                                        className="w-[1.5rem] h-[1.5rem]"
                                    />
                                    <p className="text-light-text font-semibold text-[0.9rem] lg:text-[1.2rem]">
                                        Amazing Communication
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-2">
                        <div className="flex flex-col md:flex-row lg:flex-col gap-10">
                            <div className="w-full bg-light-secondary flex flex-col items-center justify-between lg:flex-row gap-10 rounded-[20px] shadow-xl px-10 py-5 ">
                                <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start">
                                    <h3 className="text-light-primary font-semibold text-[1.5rem] lg:text-[2.5rem] mb-2">
                                        Regular
                                    </h3>
                                    <span>7 days Delivery</span>
                                </div>
                                <div>
                                    <ul className="flex flex-col  gap-5">
                                        <li className="flex flex-row gap-2 items-center">
                                            <img
                                                src="/icons/check-circle.svg"
                                                alt="check"
                                                className="w-[1.5rem] h-[1.5rem]"
                                            />
                                            <p className="text-light-text font-semibold text-[0.9rem] lg:text-[1rem]">
                                                From Design to Final Product
                                            </p>
                                        </li>
                                        <li className="flex flex-row gap-2 items-center">
                                            <img
                                                src="/icons/check-circle.svg"
                                                alt="check"
                                                className="w-[1.5rem] h-[1.5rem]"
                                            />
                                            <p className="text-light-text font-semibold text-[0.9rem] lg:text-[1rem]">
                                                On demand services
                                            </p>
                                        </li>
                                        <li className="flex flex-row gap-2 items-center">
                                            <img
                                                src="/icons/check-circle.svg"
                                                alt="check"
                                                className="w-[1.5rem] h-[1.5rem]"
                                            />
                                            <p className="text-light-text font-semibold text-[0.9rem] lg:text-[1rem]">
                                                2 round of revisions
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col items-center gap-5">
                                    <h1 className="font-semibold text-[1.5rem] lg:text-[2rem]">
                                        $499
                                    </h1>
                                    <button className="text-[1rem] lg:text-[1.25rem] border-[2px] border-light-primary rounded-xl px-10 py-3 text-light-primary font-semibold ">
                                        Sign Up
                                    </button>
                                </div>
                            </div>

                            <div className="w-full bg-light-background flex flex-col items-center justify-between lg:flex-row gap-10 rounded-[20px] shadow-xl px-10 py-5 ">
                                <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start">
                                    <h3 className="text-light-primary font-semibold text-[1.5rem] lg:text-[2.5rem] mb-2">
                                        Enterprise
                                    </h3>
                                    <span>28 days Delivery</span>
                                </div>
                                <div>
                                    <ul className="flex flex-col  gap-5">
                                        <li className="flex flex-row gap-2 items-center">
                                            <img
                                                src="/icons/check-circle.svg"
                                                alt="check"
                                                className="w-[1.5rem] h-[1.5rem]"
                                            />
                                            <p className="text-light-text font-semibold text-[0.9rem] lg:text-[1rem]">
                                                From Design to Final Product
                                            </p>
                                        </li>
                                        <li className="flex flex-row gap-2 items-center">
                                            <img
                                                src="/icons/check-circle.svg"
                                                alt="check"
                                                className="w-[1.5rem] h-[1.5rem]"
                                            />
                                            <p className="text-light-text font-semibold text-[0.9rem] lg:text-[1rem]">
                                                On demand services
                                            </p>
                                        </li>
                                        <li className="flex flex-row gap-2 items-center">
                                            <img
                                                src="/icons/check-circle.svg"
                                                alt="check"
                                                className="w-[1.5rem] h-[1.5rem]"
                                            />
                                            <p className="text-light-text font-semibold text-[0.9rem] lg:text-[1rem]">
                                                4 round of revisions
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col items-center gap-5">
                                    <h1 className="font-semibold text-[1.5rem] lg:text-[2rem]">
                                        $999
                                    </h1>
                                    <button className="text-[1rem] lg:text-[1.25rem] border-[2px] border-light-primary rounded-xl px-10 py-3 text-light-primary font-semibold ">
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
