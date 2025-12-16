import AboutUs from "@/sections/AboutUs";
import Hero from "@/sections/Hero";
import OurServices from "@/sections/Services";
import WhyUs from "@/sections/WhyUs";

export default function Home() {
    return (
        <div className="pb-[10px]">
            <Hero />
            <AboutUs />
            <WhyUs />
            <OurServices />
        </div>
    );
}
