import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <div className="container">
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
                        <h4 className="font-semibold text-light-primary text-[1rem] lg:text-[1.25rem]">
                            Site Menu
                        </h4>
                        <ul className="flex flex-col gap-2">
                            {[
                                "Home",
                                "Services",
                                "Portfolio",
                                "Testimonial",
                                "Contact",
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="text-light-text text-[0.9rem] lg:text-[1rem]"
                                >
                                    <Link href={`/${item.toLowerCase()}`}>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h4 className="font-semibold text-light-primary text-[1rem] lg:text-[1.25rem]">
                            Say Hello
                        </h4>
                        <div className="flex flex-col gap-2 text-light-text text-[0.9rem] lg:text-[1rem]">
                            <span className="flex flex-row gap-2">
                                <span>Email:</span>
                                <a href="mailto:zyratech@design.com">
                                    zyratech@design.com
                                </a>
                            </span>
                            <span className="flex flex-row gap-2 text-light-primary">
                                <span>Phone:</span>
                                <a href="tel:+8801303909469">+8801303909469</a>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h4 className="font-semibold text-light-primary text-[1rem] lg:text-[1.25rem]">
                            Social
                        </h4>
                        <ul className="flex flex-col gap-2">
                            <li className="text-light-text text-[0.9rem] lg:text-[1rem]">
                                <Link href="https://www.facebook.com/">
                                    Facebook
                                </Link>
                            </li>
                            <li className="text-light-text text-[0.9rem] lg:text-[1rem]">
                                <Link href="https://www.twitter.com/">
                                    X (Twitter)
                                </Link>
                            </li>
                            <li className="text-light-text text-[0.9rem] lg:text-[1rem]">
                                <Link href="https://www.linkedin.com/">
                                    Linkedin
                                </Link>
                            </li>
                            <li className="text-light-text text-[0.9rem] lg:text-[1rem]">
                                <Link href="https://www.instagram.com/">
                                    Instagram
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h4 className="font-semibold text-light-primary text-[1rem] lg:text-[1.25rem]">
                            We are Hiring
                        </h4>
                        <a
                            href="zyratech@design.com"
                            className="text-light-primary text-[0.9rem] lg:text-[1rem] underline"
                        >
                            Drop your CV ↗
                        </a>
                    </div>
                </div>
            </div>
            <hr className="w-full border-[2px] border-light-secondary my-5" />
            <div className="text-center my-5">
                <p className="text-light-primary">
                    © 2023 Zyratech All Right Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
