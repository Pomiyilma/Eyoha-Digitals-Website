import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
    iconBgColor: string;
    iconSrc: string;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    iconBgColor,
    iconSrc,
    title,
    description,
}) => {
    // Custom style for the card shadow to match the Figma design (slight depth)
    const cardShadow =
        "shadow-lg hover:shadow-xl transition-shadow duration-300";

    return (
        <div className={`bg-white rounded-2xl p-6 md:p-8 h-full ${cardShadow}`}>
            {/* Image Container */}
            <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                <img
                    src={iconSrc} // Using <img> for simplicity here, but Image component is recommended
                    alt={`${title} visual`}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Icon and Title */}
            <div className="flex items-center space-x-3 mb-3">
                {/* Small Accent Icon (Placeholder styling based on the design) */}
                <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center`}
                    style={{ backgroundColor: iconBgColor }}
                >
                    {/* Placeholder for the tiny icon (e.g., using a lighter version of the accent color) */}
                    <div className="w-3 h-3 rounded-full border border-white"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {description}
            </p>

            {/* Learn More Link */}
            <Link href={`#services-${title.toLowerCase().replace(/\s/g, "-")}`}>
                <span className="flex items-center text-sm font-semibold text-purple-700 hover:text-purple-500 transition duration-150">
                    Learn More
                    <ArrowRight size={16} className="ml-1" />
                </span>
            </Link>
        </div>
    );
};

export default ServiceCard;
