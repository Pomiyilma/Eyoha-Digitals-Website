
import React from "react";
import { Check, X } from "lucide-react"; // Use check and X icons for feature list

interface PricingCardProps {
    planName: string;
    description: string;
    price: string;
    isFeatured: boolean;
    features: { text: string; included: boolean }[];
    gradientStart: string;
    gradientEnd: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
    planName,
    description,
    price,
    isFeatured,
    features,
    gradientStart,
    gradientEnd,
}) => {
    // Base card styling
    const cardBase =
        "bg-white rounded-[24px] shadow-lg overflow-hidden flex flex-col h-full";
    // Styling for the featured card (the middle, highlighted one)
    const featuredStyle =
        "transform scale-[1.03] shadow-2xl ring-4 ring-purple-200";

    return (
        <div
            className={`${cardBase} ${
                isFeatured ? featuredStyle : "shadow-xl"
            }`}
        >
            {/* Header with Gradient Background */}
            <div
                className="pt-10 pb-6 px-6 text-white"
                style={{
                    background: `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`,
                }}
            >
                <h3 className="text-xl font-bold mb-1">{planName}</h3>
                <p className="text-sm font-light mb-4">{description}</p>
                <div className="flex items-end space-x-2">
                    <span className="text-4xl font-extrabold">{price}</span>
                    <span className="text-base font-medium">/ month</span>
                </div>
                {/* CTA Button in the header, matching the header gradient */}
                <button
                    className="w-full mt-4 py-3 text-sm font-bold rounded-lg transition-colors duration-200"
                    style={{
                        backgroundColor: isFeatured
                            ? "#FFFFFF"
                            : "rgba(255, 255, 255, 0.2)",
                        color: isFeatured ? "#6A0DAD" : "#FFFFFF",
                    }}
                >
                    {isFeatured ? "Get Started Now" : "Choose Plan"}
                </button>
            </div>

            {/* Features List */}
            <div className="p-6 flex-grow">
                <ul className="space-y-4">
                    {features.map((feature, index) => (
                        <li
                            key={index}
                            className="flex items-start text-gray-700 text-sm"
                        >
                            {feature.included ? (
                                <Check
                                    size={18}
                                    className="text-green-500 flex-shrink-0 mr-3 mt-1"
                                />
                            ) : (
                                <X
                                    size={18}
                                    className="text-red-400 flex-shrink-0 mr-3 mt-1"
                                />
                            )}
                            <span
                                className={
                                    feature.included
                                        ? ""
                                        : "line-through opacity-70"
                                }
                            >
                                {feature.text}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Bottom Button (For non-featured cards) - Matches the Figma design placement */}
            {!isFeatured && (
                <div className="p-6 pt-0">
                    <button className="w-full py-3 text-sm font-bold rounded-lg transition-colors duration-200 text-gray-900 border border-gray-300 hover:bg-gray-50">
                        Learn More
                    </button>
                </div>
            )}
        </div>
    );
};

export default PricingCard;
