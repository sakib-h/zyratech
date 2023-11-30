import Link from "next/link";
import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="relative mb-5">
            <img
                src="/images/contact-bg.svg"
                alt="contact"
                className="w-full h-auto"
            />
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center">
                <h1 className="text-[1rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] font-semibold text-light-text">
                    Have a Project in Mind?
                </h1>
                <Link
                    href="mailto:sakib100.sa@gmail.com"
                    className="text-light-primary underline font-semibold text-[0.8rem] lg:text-[2rem]"
                >
                    Get a Free consultation!
                </Link>
            </div>
        </section>
    );
};

export default Contact;
