// components/ServiceCard.tsx
import React from "react";
import Link from "next/link";
import Image, { ImageProps } from "next/image";

// Update the icon prop to accept an imported asset OR a string/emoji.
// We use 'any' here for simplicity to handle both ImageProps["src"] and string.
interface ServiceCardProps {
    icon: any; // Can be ImageProps["src"] (for image files) or string (for 'SEO', '🎥', etc.)
    title: string;
    description: string;
    linkText: string;
    linkUrl: string;
    iconBgClass: string;
    thumbnailImage: ImageProps["src"];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    icon,
    title,
    description,
    linkText,
    linkUrl,
    iconBgClass,
    thumbnailImage,
}) => {
    // Helper function to check if the 'icon' is an imported image object
    const isImageObject =
        typeof icon === "object" && icon !== null && "src" in icon;

    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 overflow-hidden">
            {/* 1. Large Thumbnail Image Container */}
            <div className="h-48 md:h-56 bg-gray-100 overflow-hidden relative">
                <Image
                    src={thumbnailImage}
                    alt={`Thumbnail for ${title} service`}
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            {/* 2. Card Body Content */}
            <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                    {/* Small Icon Circle Container */}
                    <div
                        className={`w-8 h-8 ${iconBgClass} text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 relative`}
                    >
                        {isImageObject ? (
                            // RENDER IMAGE ASSET (e.g., hashIcon, paidAd)
                            <Image
                                src={icon}
                                alt={`${title} icon`}
                                // Set small, fixed sizes for the icon within the circle
                                width={16}
                                height={16}
                                style={{ objectFit: "contain" }}
                            />
                        ) : // RENDER STRING/EMOJI/TEXT (e.g., '🎥', 'SEO')
                        icon.length <= 3 ? (
                            <span className="text-[10px] uppercase font-extrabold">
                                {icon}
                            </span>
                        ) : (
                            icon
                        )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                        {title}
                    </h3>
                </div>

                <p className="text-gray-600 mb-6 text-sm line-clamp-4">
                    {description}
                </p>

                <Link
                    href={linkUrl}
                    className="text-purple-600 hover:text-purple-700 font-medium text-sm transition duration-150 inline-flex items-center"
                >
                    {linkText}
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
