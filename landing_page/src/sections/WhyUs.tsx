import FeatureCard from "@/components/FeatureCard";

import growth from "../assets/images/growth.png";
import creative from "../assets/images/creative.png";
import reporting from "../assets/images/reporting.png";
import delivery from "../assets/images/delivery.png";
import insight from "../assets/images/insight.png";
import strategy from "../assets/images/strategy.png";
// --- Data for the six feature cards based on image_8f35a4.png ---
const featuresData = [
    {
        iconSrc: strategy,
        title: "Strategic, Data-Driven",
        description:
            "Marketing backed by numbers, not random posting. We analyze data to ensure every campaign hits its target.",
    },
    {
        iconSrc: insight,
        title: "Local & Global Insight",
        description:
            "A deep understanding of the Ethiopian market nuances combined with global digital standards.",
    },
    {
        iconSrc: delivery,
        title: "Reliable Delivery",
        description:
            "Fast execution and consistent monthly content delivery so your brand never goes silent.",
    },
    {
        iconSrc: reporting,
        title: "Transparent Reporting",
        description:
            "Clear, honest reporting with actionable insights. You will always know exactly how your investment is performing.",
    },
    {
        iconSrc: creative,
        title: "Creative Storytelling",
        description:
            "Tailored narratives for each platform that capture attention and resonate with your specific audience.",
    },
    {
        iconSrc: growth,
        title: "Growth-Focused Pricing",
        description:
            "Affordable, flexible packages specifically designed for startups and growing businesses to scale.",
    },
];

export default function WhyUs() {
    // Inferred color for the purple accent
    const purpleAccent = "text-[#6A0DAD]";
    // Inferred color for the sub-heading text
    const textGray = "text-gray-600";
    // The main content area width to match the overall design flow
    const contentMaxWidth = "max-w-[1233px]";

    return (
        // Adjusted padding to match the spacing above and below the content in the full design
        <div className="py-24 md:py-[112px] px-[55px] bg-[#F8FAFC]">
            <div className={`mx-auto w-[92%] lg:w-[96%] ${contentMaxWidth}`}>
                {/* Heading and Sub-text Container */}
                <div className="mx-auto max-w-3xl text-center mb-16">
                    {/* Main Heading: Matching font weight, size, and purple accent */}
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Why{" "}
                        <span className={purpleAccent}>Eyoha Digitals?</span>
                    </h2>

                    {/* Description Text */}
                    <p
                        className={`text-lg ${textGray} mx-auto max-w-[650px] mb-4`}
                    >
                        We don't just post content; we build systems that grow
                        your business. Here is why partners choose us to elevate
                        their digital presence.
                    </p>
                </div>

                {/* 6-Card Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuresData.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            iconSrc={feature.iconSrc}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
