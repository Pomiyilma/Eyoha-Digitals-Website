import React from "react";
import Image from "next/image";

interface GuaranteeCardProps {
    iconSrc: string; // Placeholder for the unique main icon image
    title: string;
    description: string;
    gradientStart: string;
    gradientEnd: string;
}

const GuaranteeCard: React.FC<GuaranteeCardProps> = ({
    iconSrc,
    title,
    description,
    gradientStart,
    gradientEnd,
}) => {
    // Base card styling with subtle rounded corners
    const cardBase =
        "bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center h-full";
    // Purple accent color for the title
    const titleColor = "text-[#6A0DAD]";

    return (
        <div className={cardBase}>
            {/* Circular Icon Container with Gradient Border */}
            <div
                className="w-24 h-24 relative flex items-center justify-center rounded-full mb-6 p-1"
                // Creating the gradient ring effect using multiple borders or shadow (using border/ring here)
                style={{
                    // This creates the gradient ring border effect seen in the Figma
                    background: `conic-gradient(from 0deg, ${gradientStart}, ${gradientEnd}, ${gradientStart})`,
                }}
            >
                {/* Inner white circle for the main icon */}
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center p-3">
                    <Image
                        src={iconSrc}
                        alt={`${title} icon`}
                        width={48}
                        height={48}
                        style={{ objectFit: "contain" }}
                    />
                </div>
            </div>

            {/* Title */}
            <h3 className={`text-xl font-bold ${titleColor} mb-2`}>{title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-base flex-grow">{description}</p>

            {/* Accent Line/Underline */}
            <div
                className="w-10 h-0.5 mt-4"
                style={{ backgroundColor: gradientStart }}
            ></div>
        </div>
    );
};

export default GuaranteeCard;
