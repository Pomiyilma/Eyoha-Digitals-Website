import { PricingCard } from "@/components/PricingCard";

const packages = [
    {
        title: "Basic",
        buttonText: "Get Started",
        features: [
            "Video quantity: 3 Videos per week",
            "Platforms: TikTok, Fb, and IG",
            "Graphic Posts: 2 per week",
            "Social Media Management + Audience Engagement",
            "Professional Video Production two days a month",
            "Professional Video Editing",
            "Monthly Analytics and Report",
            "Video Host",
        ],
    },
    {
        title: "Standard",
        buttonText: "Choose Standard",
        // isFeatured: true, // Default active state from Figma
        features: [
            "Video quantity: 5 Videos per week",
            "Platforms: TikTok, Fb, and IG",
            "Graphic Posts: 5 per week",
            "Social Media Management + Audience Engagement",
            "Professional Video Production two days a month",
            "Professional Video Editing",
            "Monthly Analytics and Report",
            "Video Host",
            "Paid Ad Management",
        ],
    },
    {
        title: "Premium",
        buttonText: "Go Premium",
        features: [
            "Video quantity: 6 Videos per week",
            "Platforms: TikTok, Fb, and IG",
            "Graphic Posts: 5 per week",
            "Management",
            "Professional Video Production two days a month",
            "Professional Video Editing",
            "Monthly Analytics and Report",
            "Video Host",
            "Paid Ad Management",
        ],
    },
];

export default function PricingSection() {
    return (
        <section className="bg-white py-20 px-6 font-sans">
            <div className="max-w-7xl mx-auto text-center">
             
                <h2 className="text-black text-4xl font-black mb-2 tracking-tight uppercase">
                    Eyoha Digitals
                </h2>
                <h3 className="text-[#8B5CF6] text-5xl font-black mb-20 uppercase">
                    Packages
                </h3>

             
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {packages.map((pkg, idx) => (
                        <PricingCard
                            key={idx}
                            title={pkg.title}
                            features={pkg.features}
                            buttonText={pkg.buttonText}
                            isFeatured={pkg.isFeatured}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
