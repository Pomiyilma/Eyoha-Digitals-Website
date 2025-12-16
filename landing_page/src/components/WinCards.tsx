import React from 'react';
import Image from 'next/image';

interface WinCardProps {
    metric: string;
    metricColor: string;
    title: string;
    description: string;
    graphicSrc: string; // Placeholder for the unique graphic at the bottom
    iconBgColor: string;
    iconSrc: string;
}

const WinCard: React.FC<WinCardProps> = ({ metric, metricColor, title, description, graphicSrc, iconBgColor, iconSrc }) => {
    
    // Custom style for the subtle purple/white background and shadow
    const cardStyle = "bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center";

    return (
        <div className={cardStyle}>
            
            {/* Top Icon and Gradient Circle */}
            <div className="w-24 h-24 relative flex items-center justify-center rounded-full mb-6" 
                 style={{ 
                    // This creates the gradient circle border effect seen in the Figma
                    background: iconBgColor, 
                    boxShadow: '0 0 0 6px white, 0 0 0 8px rgba(106, 13, 173, 0.2)' 
                 }}
            >
                {/* Inner Icon Placeholder */}
                <div className="w-12 h-12 relative">
                    <Image
                        src={iconSrc} // Path to the small icon inside the circle
                        alt={`${title} icon`}
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div>
            </div>

            {/* Metric and Title */}
            <h3 className={`text-4xl font-extrabold ${metricColor} mb-2`}>{metric}</h3>
            <p className={`text-lg font-bold ${metricColor} mb-4`} style={{ color: metricColor }}>{title}</p>
            
            {/* Description */}
            <p className="text-gray-600 text-sm mb-6 h-16">{description}</p>
            
            {/* Unique Graphic (Placeholder) */}
            <div className="w-full h-32 relative mb-4 flex items-center justify-center">
                {/* This section holds the unique visual for each card (e.g., chart, social icons) */}
                <Image
                    src={graphicSrc}
                    alt={`${title} graphic`}
                    fill
                    style={{ objectFit: 'contain' }}
                />
            </div>

            {/* Bottom Accent Icon (Small orange launch icon) */}
            <div className="w-8 h-8 flex items-center justify-center mt-4">
                <span className="text-xl" style={{ color: '#FF8C00' }}>&#x1F680;</span> {/* Rocket emoji as a placeholder */}
            </div>

        </div>
    );
};

export default WinCard;