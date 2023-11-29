import Link from "next/link";

const Footer = () => {
    return (
        <footer className="container">
            <div className="w-full flex flex-col lg:flex-row items-start lg:justify-between gap-10 pb-5">
                <div className="flex flex-col gap-5">
                    <Link
                        href="/"
                        className="text-light-primary text-[1.75rem] lg:text-[2.25rem] font-semibold"
                        title="Zyratech"
                    >
                        Zyratech
                    </Link>
                    <p className="text-light-text font-semibold text-[0.9rem] lg:text-[1.25rem]">
                        Unlock the power of <br /> Your Brand
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <h4>Site Menu</h4>
                    <ul>
                        {[
                            "Home",
                            "Services",
                            "Portfolio",
                            "Testimonial",
                            "Contact",
                        ].map((item, index) => (
                            <li key={index}>
                                <Link href={`/${item.toLowerCase()}`}>
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
