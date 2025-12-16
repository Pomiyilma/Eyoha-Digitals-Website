// components/ServicesSection.tsx
import ServiceCard from "@/components/ServiceCard";
import React from "react";
// Thumbnail Images
import socialmedia from "../assets/images/socialmedia.png";
import contentcreation from "../assets/images/contentcreation.png";
import branding from "../assets/images/branding.png";
import seo from "../assets/images/seo.png";
import webdesign from "../assets/images/webdesign.png";
import paidAd from "../assets/images/paidAd.png";
// Icon Images
import hashIcon from "../assets/images/hashIcon.png";
import cameraIcon from "../assets/images/cameraIcon.png"; // Example for Creative Content
import seoIcon from "../assets/images/seoIcon.png"; // Example for SEO
import tagIcon from "../assets/images/tagIcon.png"; // Example for Paid Ads
import paletteIcon from "../assets/images/paletteIcon.png"; // Example for Branding
import codeIcon from "../assets/images/codeIcon.png"; // Example for Web Design

// Define the data for the service cards
const serviceData = [
    {
        // Using an imported image file for the icon
        icon: hashIcon,
        title: "Social Media Management",
        description:
            "Build a powerful online presence with strategic content planning, community management, and data-driven growth tactics across all major platforms.",
        linkText: "Learn More →",
        linkUrl: "#",
        iconBgClass: "bg-purple-600", // Matches the design's purple
        thumbnailImage: socialmedia,
    },
    {
        icon: cameraIcon, // Using an imported image file
        title: "Creative Content Production",
        description:
            "Captivate your audience with stunning visuals, compelling videos, and engaging graphics that tell your brand story authentically.",
        linkText: "Learn More →",
        linkUrl: "#",
        iconBgClass: "bg-orange-500", // Matches the design's orange
        thumbnailImage: contentcreation,
    },
    {
        icon: seoIcon, // Using an imported image file
        title: "SEO & Content Optimization",
        description:
            "Dominate search rankings with expert keyword research, technical optimization, and content strategies that drive organic traffic and conversions.",
        linkText: "Learn More →",
        linkUrl: "#",
        iconBgClass: "bg-indigo-600", // Matches the design's indigo/purple
        thumbnailImage: seo,
    },
    {
        icon: tagIcon, // Using an imported image file
        title: "Paid Advertising Campaigns",
        description:
            "Maximize ROI with precision-targeted ads across Meta, Google, and TikTok. Data-driven campaigns that convert browsers into loyal customers.",
        linkText: "Learn More →",
        linkUrl: "#",
        iconBgClass: "bg-red-500", // Matches the design's red/pink
        thumbnailImage: paidAd,
    },
    {
        icon: paletteIcon, // Using an imported image file
        title: "Branding & Visual Identity",
        description:
            "Create a memorable brand identity with custom logos, color systems, and visual guidelines that resonate with your target audience and stand out.",
        linkText: "Learn More →",
        linkUrl: "#",
        iconBgClass: "bg-purple-700", // Slightly darker purple
        thumbnailImage: branding,
    },
    {
        icon: codeIcon, // Using an imported image file
        title: "Website Design & Development",
        description:
            "Transform your online presence with stunning, responsive websites that combine beautiful design with seamless functionality and user experience.",
        linkText: "Learn More →",
        linkUrl: "#",
        iconBgClass: "bg-orange-400", // Matches the design's lighter orange
        thumbnailImage: webdesign,
    },
];

const ServicesSection: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-sm font-medium text-purple-600 uppercase tracking-widest mb-1">
                        What We Offer
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Our <span className="text-purple-600">Services</span>
                    </h2>
                    <p className="mt-2 text-xl text-gray-500 max-w-3xl mx-auto">
                        Elevate your brand with our comprehensive suite of
                        digital solutions designed to drive growth and
                        engagement
                    </p>
                </div>

                {/* Services Grid (2x3 Layout) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            linkText={service.linkText}
                            linkUrl={service.linkUrl}
                            iconBgClass={service.iconBgClass}
                            thumbnailImage={service.thumbnailImage}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
