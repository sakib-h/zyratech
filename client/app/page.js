import Portfolio from "@sections/Portfolio";
import Services from "@sections/Services";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@sections/Hero"));

export default function Home() {
    return (
        <main className="">
            <Hero />
            <Services />
            <Portfolio />
        </main>
    );
}
