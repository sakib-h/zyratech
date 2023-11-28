import PortfolioSlider from "@components/PortfolioSlider";
import Link from "next/link";
const Portfolio = () => {
    return (
        <section
            id="portfolio"
            className="portfolio container bg-light-secondary rounded-[1.25rem] p-10"
        >
            <div className="flex justify-start">
                <h3 className="text-light-primary border-[1px] border-light-primary font-semibold text-[1.25rem] px-[1em] py-[0.3em] rounded-[50px]">
                    Portfolio
                </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-start gap-10 my-10">
                <h2 className="col-span-1 text-light-text text-[1.5rem] lg:text-[3rem] font-semibold">
                    Crafting Timeless Brands
                    <br className="hidden md:block" /> That Endure the Test of
                    Time
                </h2>

                <p className="col-span-1 text-[0.8rem] md:text-[1rem] lg:text-[1.25rem] text-light-text">
                    At Zyratech, we've journeyed from the ground up to reach
                    top-notch status. We've set records, and our commitment to
                    making the right decisions with care is how we aim to
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
    );
};

export default Portfolio;
