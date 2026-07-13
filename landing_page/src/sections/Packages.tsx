import { PricingCard } from "@/components/PricingCard";

const packages = [
    {
        title: "Basic",
        buttonText: "Get Started",
        features: [
            { text: "Platforms: Facebook, Instagram, and TikTok", included: true },
            { text: "Social Media Management", included: true },
            { text: "8 Graphic Posts Per Month", included: true },
            { text: "12 Short-Form Videos Per Month", included: true},
            { text: "2 Professional Content Shoot Per Month", included: true},
            { text: "Content Planning and Scheduling", included: true },
            { text: "Basic Community Management", included: true },
            { text: "Monthly Performance Reports", included: true },
        ],
    },
    
    {
        title: "Premium",
        buttonText: "Go Premium",
        features: [
            { text: "Platforms: Facebook, Instagram, and TikTok", included: true },
            { text: "Everything within the Standard Package", included: true },
            { text: "16 Graphic Posts Per Month", included: true },
            { text: "20 Short-Form Videos Per Month", included: true },
            { text: "3 Professional Content Shoot Per Month", included: true},
            { text: "Paid Advertising Management", included: true },
            { text: "Lead Generation Campaign Support", included: true },
            { text: "Priority Support", included: true },
            { text: "Monthly Growth Strategy Meetings", included: true },
            { text: "Comprehensive Analytics and Performance Reports", included: true }
        ],
    },
    {
        title: "Standard",
        buttonText: "Choose Standard",
        isFeatured: true, 
        features: [
            { text: "Platforms: Facebook, Instagram, and TikTok", included: true },
            { text: "Everything within the Basic Package", included: true },
            { text: "12 Graphic Posts Per Month", included: true },
            { text: "16 Short-Form Videos Per Month", included: true},
            { text: "Enhanced Community Management", included: true},
            { text: "Competitor Analysis", included: true },
            { text: "Monthly Strategy Consultation", included: true },
            { text: "Advanced Performance Report", included: true }
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
                <h3 className="text-[#8B5CF6] text-4xl font-black mb-20 uppercase">
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
