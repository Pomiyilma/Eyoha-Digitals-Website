// import GuaranteeCard from "@/components/GuaranteeCard";

// // --- Data for the three guarantee cards based on Desktop - 3.jpg ---
// const guaranteeData = [
//     {
//         iconSrc: "/assets/icons/satisfaction.svg", // Placeholder: Thumbs-up / Checkmark
//         title: "100% Satisfaction",
//         description:
//             "We stand behind our work. If you are not completely satisfied, we'll make it right. Guaranteed.",
//         gradientStart: "#FF8C00", // Orange
//         gradientEnd: "#F06A35", // Red-Orange
//     },
//     {
//         iconSrc: "/assets/icons/results.svg", // Placeholder: Chart / Growth
//         title: "Results-Driven Focus",
//         description:
//             "Our strategies are constantly optimized for measurable KPIs, ensuring real growth, not just vanity metrics.",
//         gradientStart: "#6A0DAD", // Purple
//         gradientEnd: "#9370DB", // Lighter Purple
//     },
//     {
//         iconSrc: "/assets/icons/transparency.svg", // Placeholder: Folder / Open box
//         title: "Full Transparency",
//         description:
//             "You get clear, honest reporting and constant communication. No hidden fees or complex jargon.",
//         gradientStart: "#00BFFF", // Blue
//         gradientEnd: "#00CED1", // Light Blue
//     },
// ];

// export default function EyohaGuarantee() {
//     // Inferred colors
//     const purpleAccent = "text-[#6A0DAD]";
//     const orangeAccent = "text-[#FF8C00]";

//     // The main content area width
//     const contentMaxWidth = "max-w-[1233px]";

//     return (
//         // The section itself sits on a gradient background, as seen below the pricing table
//         <section
//             className="py-24 md:py-32"
//             // The section background is the reverse of the Services CTA banner gradient
//             style={{
//                 background: "linear-gradient(to right, #6A0DAD, #FF8C00)",
//             }}
//         >
//             <div className={`mx-auto w-[92%] lg:w-[96%] ${contentMaxWidth}`}>
//                 {/* Heading Container */}
//                 <div className="mx-auto max-w-4xl text-center mb-16">
//                     <span
//                         className={`text-sm font-bold ${orangeAccent} uppercase tracking-widest text-white`}
//                     >
//                         Why Partner With Us?
//                     </span>
//                     <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
//                         The <span className={orangeAccent}>Eyoha</span>{" "}
//                         Guarantee
//                     </h2>
//                 </div>

//                 {/* 3-Card Guarantee Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//                     {guaranteeData.map((guarantee, index) => (
//                         <GuaranteeCard
//                             key={index}
//                             iconSrc={guarantee.iconSrc}
//                             title={guarantee.title}
//                             description={guarantee.description}
//                             gradientStart={guarantee.gradientStart}
//                             gradientEnd={guarantee.gradientEnd}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }
import React from "react";
import Image from "next/image";

interface ClientCardProps {
    logo: string;
    companyName: string;
    testimonial: string;
    category: string;
    accentColor: string; // Used for the dot and gradient
}

const clientData: ClientCardProps[] = [
    {
        logo: "/logos/techflow.png", // Replace with your actual paths
        companyName: "TechFlow Solutions",
        testimonial:
            '"Exceptional digital transformation that increased our conversion rate by 340%"',
        category: "E-commerce Platform",
        accentColor: "orange",
    },
    {
        logo: "/logos/financecore.png",
        companyName: "FinanceCore Group",
        testimonial:
            '"Outstanding mobile app development that revolutionized our customer experience"',
        category: "Mobile Banking App",
        accentColor: "purple",
    },
    // Add other 4 items here to match the 2x3 grid...
];

const ClientCard = ({
    logo,
    companyName,
    testimonial,
    category,
    accentColor,
}: ClientCardProps) => {
    const dotColor =
        accentColor === "orange" ? "bg-orange-500" : "bg-purple-500";
    const gradient =
        accentColor === "orange"
            ? "from-purple-500 to-orange-400"
            : "from-orange-400 to-purple-500";

    return (
        <div className="relative bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col items-center text-center border border-gray-50 transition-transform hover:scale-[1.02]">
            {/* Accent Dot */}
            <div
                className={`absolute top-6 right-6 w-2 h-2 rounded-full ${dotColor}`}
            />

            {/* Logo Container */}
            <div className="w-20 h-20 mb-6 relative">
                <div className="w-full h-full rounded-full border-2 border-slate-800 overflow-hidden flex items-center justify-center bg-white shadow-inner">
                    {/* Placeholder for actual Image component */}
                    <div className="text-[10px] font-bold">LOGO</div>
                </div>
            </div>

            {/* Typography */}
            <h3 className="text-[#7C3AED] font-bold text-lg mb-1">
                {companyName}
            </h3>
            <p className="text-gray-400 text-sm mb-6 font-medium">
                {companyName}
            </p>

            <p className="text-gray-500 text-sm leading-relaxed italic mb-8 px-4">
                {testimonial}
            </p>

            {/* Progress Bar & Category */}
            <div className="w-full mb-8 flex items-center gap-3">
                <div
                    className={`h-1 flex-grow rounded-full bg-gradient-to-r ${gradient}`}
                />
                <span className="text-[10px] uppercase tracking-wider text-gray-400 whitespace-nowrap font-semibold">
                    {category}
                </span>
            </div>

            {/* Button */}
            <button className="bg-[#A855F7] hover:bg-[#9333EA] text-white px-10 py-2.5 rounded-lg font-semibold text-sm transition-colors">
                See Details
            </button>
        </div>
    );
};

export default function ClientSection() {
    return (
        <section className="bg-[#FDFDFD] py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-6 h-[2px] bg-orange-500" />
                        <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
                            Featured Clients
                        </span>
                        <div className="w-6 h-[2px] bg-orange-500" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-6">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-500 leading-relaxed">
                        We've partnered with innovative companies to deliver
                        exceptional digital experiences that drive growth and
                        success.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {/* Mapping through 6 items for the demo */}
                    {[...clientData, ...clientData].map((client, idx) => (
                        <ClientCard key={idx} {...client} />
                    ))}
                </div>

                {/* Footer Button */}
                <div className="flex justify-center">
                    <button className="bg-[#FF6B00] hover:bg-[#E66000] text-white px-12 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-orange-200">
                        See All
                    </button>
                </div>
            </div>
        </section>
    );
}
