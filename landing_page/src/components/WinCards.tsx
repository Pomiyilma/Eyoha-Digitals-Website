import React from "react";
import Image from "next/image";

interface WinCardProps {
    metric: string;
    metricColor: string;
    title: string;
    description: string;
    graphicSrc: string; // Placeholder for the unique graphic at the bottom
    iconBgColor: string;
    iconSrc: string;
}

const WinCard: React.FC<WinCardProps> = ({
    metric,
    metricColor,
    title,
    description,
    graphicSrc,
    iconBgColor,
    iconSrc,
}) => {
    // Custom style for the subtle purple/white background and shadow
    const cardStyle =
        "bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center ";

    return (
        <div className={cardStyle}>
            {/* Top Icon and Gradient Circle */}
            <div
                className="w-[64px] h-[64px] relative flex items-center justify-center rounded-full mb-6"
                style={{
                    // This creates the gradient circle border effect seen in the Figma
                    background: iconBgColor,
                }}
            >
                {/* Inner Icon Placeholder */}
                <div className="w-[20px] h-[28px] relative rounded-sm">
                    <Image
                        src={iconSrc} // Path to the small icon inside the circle
                        alt={`${title} icon`}
                        fill
                        style={{ objectFit: "contain" }}
                    />
                </div>
            </div>

            {/* Metric and Title */}
            <h3 className={`text-4xl font-extrabold ${metricColor} mb-2`}>
                {metric}
            </h3>
            <p
                className={`text-lg font-bold ${metricColor} mb-4`}
                style={{ color: metricColor }}
            >
                {title}
            </p>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-6 h-16">{description}</p>

            {/* Unique Graphic (Placeholder) */}
            <div className="w-full h-32 relative mb-4 flex items-center justify-center">
                {/* This section holds the unique visual for each card (e.g., chart, social icons) */}
                <Image
                    src={graphicSrc}
                    alt={`${title} graphic`}
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>

            {/* Bottom Accent Icon (Small orange launch icon) */}

            <div
                className="w-[64px] h-[64px] relative flex items-center justify-center rounded-full mb-6"
                style={{
                    background: iconBgColor,
                }}
            >
                {/* Inner Icon Placeholder */}
                <div className="w-[15px] h-[18px] relative rounded-sm">
                    <Image
                        src={iconSrc}
                        alt={`${title} icon`}
                        fill
                        style={{ objectFit: "contain" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default WinCard;
