import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import icon1 from "../assets/images/icon1.png";
// --- Data for the six service cards based on image_8eb9a0.png ---
const servicesData = [
    {
        iconBgColor: "#6A0DAD", // Purple
        iconSrc: icon1,
        title: "Social Media Management",
        description:
            "Build a powerful online presence with strategic content planning, community engagement, and cross-platform growth tactics across all major platforms.",
    },
    {
        iconBgColor: "#FF8C00", // Orange
        iconSrc: icon1,
        title: "Creative Content Production",
        description:
            "Captivate your audience with stunning visuals, compelling videos, and engaging graphics that tell your brand story authentically.",
    },
    {
        iconBgColor: "#6A0DAD", // Purple
        iconSrc: icon1,
        title: "SEO & Content Optimization",
        description:
            "Dominate search rankings with expert keyword research, technical optimization, and content strategies that drive organic traffic and conversions.",
    },
    {
        iconBgColor: "#FF8C00", // Orange
        iconSrc: icon1,
        title: "Paid Advertising Campaigns",
        description:
            "Maximize ROI with precision-targeted ads across Meta, Google, and TikTok. Data-driven campaigns that convert browsers into loyal customers.",
    },
    {
        iconBgColor: "#6A0DAD", // Purple
        iconSrc: icon1,
        title: "Branding & Visual Identity",
        description:
            "Create a memorable brand identity with custom logos, color systems, and visual guidelines that resonate with your target audience and stand out.",
    },
    {
        iconBgColor: "#FF8C00", // Orange
        iconSrc: icon1,
        title: "Website Design & Development",
        description:
            "Transform your online presence with stunning, responsive websites that combine beautiful design with seamless functionality and user experience.",
    },
];

export default function OurServices() {
    // Inferred colors from the Figma screenshot
    const purpleAccent = "text-[#6A0DAD]";
    const ctaStartColor = "#6A0DAD"; // Deep Purple
    const ctaEndColor = "#FF8C00"; // Orange

    // The main content area width to match the overall design flow
    const contentMaxWidth = "max-w-[1233px]";

    return (
        <section className="pt-16 md:pt-24 pb-0 bg-gray-50/50">
            <div className={`mx-auto w-[92%] lg:w-[96%] ${contentMaxWidth}`}>
                {/* 1. Heading and Sub-text Container */}
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <span className="text-sm font-bold text-purple-500 uppercase tracking-widest">
                        What We Offer
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Our <span className={purpleAccent}>Services</span>
                    </h2>
                    <p className="text-lg text-gray-600 mx-auto max-w-[650px]">
                        Elevate your brand with our comprehensive suite of
                        digital solutions designed to drive growth and
                        engagement
                    </p>
                </div>

                {/* 2. 6-Card Service Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            iconBgColor={service.iconBgColor}
                            iconSrc={service.iconSrc}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>

            {/* 3. Full-Width CTA Banner */}
            <div
                className="w-full mt-24 py-20 px-4 flex items-center justify-center"
                style={{
                    background: `linear-gradient(to right, ${ctaStartColor}, ${ctaEndColor})`,
                }}
            >
                <div className="text-center">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        Ready to Transform Your Digital Presence?
                    </h3>
                    <p className="text-white text-lg font-medium mb-8 max-w-xl mx-auto">
                        Let's collaborate to bring your vision to life with
                        innovative strategies and create digital excellence
                    </p>

                    {/* CTA Button: White Background, Purple Text */}
                    <Link href="#contact">
                        <button
                            className="flex items-center justify-center mx-auto space-x-2 bg-white text-purple-700 text-base font-semibold px-8 h-12 rounded-full 
                                       hover:bg-gray-100 transition duration-200 shadow-xl"
                        >
                            <span>Get Started Today</span>
                            <ArrowRight size={18} />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
