import AboutUs from "@/sections/AboutUs";
import ClientSuccessStories from "@/sections/ClientSuccessStories";
import Hero from "@/sections/Hero";
import RecentWins from "@/sections/RecentWins";
import OurServices from "@/sections/Services";
import WhyUs from "@/sections/WhyUs";

export default function Home() {
    return (
        <div className="pb-[10px]">
            <Hero />
            <AboutUs />
            <WhyUs />
            <OurServices />
            <RecentWins />
            <ClientSuccessStories />
        </div>
    );
}
