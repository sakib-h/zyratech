import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@sections/Hero"));
const Services = dynamic(() => import("@sections/Services"));
const Portfolio = dynamic(() => import("@sections/Portfolio"));
const Testimonial = dynamic(() => import("@sections/Testimonial"));
const Contact = dynamic(() => import("@sections/Contact"));
const Footer = dynamic(() => import("@sections/Footer"));

export default function Home() {
    return (
        <main className="">
            <Hero />
            <Services />
            <Portfolio />
            <Testimonial />
            <Contact />
            <Footer />
        </main>
    );
}
