import FeaturedClients from "@/components/FeaturedClients";
import AboutUs from "@/sections/AboutUs";
import ClientSuccessStories from "@/sections/ClientSuccessStories";
import CtaSection from "@/sections/CtaSection";
import ExcellenceSection from "@/sections/ExcellenceSection";
import EyohaGuarantee from "@/sections/EyohaGuarantee";
import EyohaGuaranteenew from "@/sections/EyohaGuaranteenew";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import PricingSection from "@/sections/Packages";
import PricingPlans from "@/sections/PricingPlans";
import RecentWins from "@/sections/RecentWins";
import OurServices from "@/sections/Services";
import WhyUs from "@/sections/WhyUs";

export default function Home() {
    return (
        <div className="w-full">
            <Hero />
            <AboutUs />
            <WhyUs />
            <OurServices />
            <RecentWins />
            <ClientSuccessStories />
            {/* <PricingPlans /> */}
            <EyohaGuarantee />
            {/* <FeaturedClients /> */}
            <PricingSection />
            <CtaSection />
            <EyohaGuaranteenew />
            <ExcellenceSection />
            <Footer />
        </div>
    );
}
