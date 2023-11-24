"use client";
import Link from "next/link";
import ScrollspyNav from "react-scrollspy-nav";
const Navbar = () => {
    return (
        <nav className="container">
            <div className="flex justify-between items-center py-5">
                <div className="logo">
                    <Link
                        href="/"
                        className="text-light-primary text-[1.75rem] font-semibold"
                        title="Zyratech"
                    >
                        Zyratech
                    </Link>
                </div>
                <div className="hidden md:flex">
                    <ScrollspyNav
                        scrollTargetIds={[
                            "services",
                            "portfolio",
                            "about",
                            "contact",
                        ]}
                        offset={100}
                        activeNavClass="is-active"
                        scrollDuration="1000"
                        headerBackground="true"
                    >
                        <ul className="flex flex-1 justify-between gap-5 lg:gap-10">
                            <Link href="#services" className="nav-link">
                                Services
                            </Link>
                            <Link href="#portfolio" className="nav-link">
                                Portfolio
                            </Link>
                            <Link href="#about" className="nav-link">
                                About
                            </Link>
                            <Link href="#contact" className="nav-link">
                                Contact
                            </Link>
                        </ul>
                    </ScrollspyNav>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
