import Image from "next/image";
import galaxyImage from "../assets/images/galaxyfurniture.png";
import amin from "../assets/images/aminhospitallogo.png";
import sofi from "../assets/images/sofiFerniture.png";
import makiLogo from "../assets/images/maki.png";
import skillBridgeLogo from "../assets/images/skillbridgenewlogo.png";
import beltechLogo from "../assets/images/beltechlogo.png";

const projects = [
    {
        title: "Amen Furniture",
        logo: sofi,
        bgClass: "bg-[#6A0DAD]",
        desc: "Modern furniture brand partnered with us to strengthen its digital presence and showcase products effectively.",
        metrics: [
            { label: "ENGAGEMENT", value: "+120%", color: "text-[#FF6B00]" },
            { label: "REACH", value: "85k+", color: "text-[#FF6B00]" },
        ],
    },
    {
        title: "Safe Furniture",
        logo: sofi,
        bgClass: "bg-[#EFE7DA]",
        desc: "Built a distinctive brand identity and engaging social presence for this contemporary furniture company from scratch.",
        metrics: [
            { label: "BRAND AWARENESS", value: "+200%", color: "text-[#FF6B00]" },
            { label: "GROWTH", value: "Steady", color: "text-[#FF6B00]" },
        ],
    },
    {
        title: "Maki Interior Design",
        logo: makiLogo,
        bgClass: "bg-[#0F172A]",
        desc: "Boosted client and student engagement through targeted paid advertising campaigns on Facebook and Instagram.",
        metrics: [
            { label: "INQUIRIES", value: "+180%", color: "text-[#FF6B00]" },
            { label: "STUDENT SIGN-UPS", value: "+95%", color: "text-[#FF6B00]" },
        ],
    },
    {
        title: "Amin General Hospital",
        logo: amin,
        bgClass: "bg-white border-b border-gray-100",
        desc: "Developed strategic content to improve patient communication and strengthen the hospital’s digital credibility.",
        metrics: [
            { label: "TRUST", value: "High", color: "text-[#FF6B00]" },
            { label: "ENGAGEMENT", value: "+120%", color: "text-[#FF6B00]" },
        ],
    },
    {
        title: "Skillbridge Institute of Technology",
        logo: skillBridgeLogo,
        bgClass: "bg-[#6366F1]",
        desc: "Crafted a consistent academic brand and educational content to engage prospective technology students.",
        metrics: [
            { label: "STUDENT INTEREST", value: "+150%", color: "text-[#FF6B00]" },
            { label: "APPLICATIONS", value: "+80%", color: "text-[#FF6B00]" },
        ],
    },
    {
        title: "Beltech Solutions",
        logo: beltechLogo,
        bgClass: "bg-[#1E293B]",
        desc: "Built a professional B2B brand presence with strategic content on LinkedIn and Telegram.",
        metrics: [
            { label: "LEADS", value: "+110%", color: "text-[#FF6B00]" },
            { label: "AUTHORITY", value: "Strong", color: "text-[#FF6B00]" },
        ],
    },
    {
        title: "Galaxy Furniture",
        logo: galaxyImage,
        bgClass: "bg-[#002949]",
        desc: "Strategic brand positioning and viral TikTok marketing to drive high-volume furniture sales.",
        metrics: [
            { label: "CONVERSION", value: "+85%", color: "text-[#FF6B00]" },
            { label: "BOUNCE RATE", value: "-20%", color: "text-[#FF6B00]" },
        ],
    },
];

export default function ProjectGrid() {
    return (
        <section className="py-24 md:py-28 px-6 bg-[#FAF9FF] font-sans">
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-[48px] font-black text-[#0F172A] mb-4">
                    Our Work
                </h2>
                <p className="text-[#64748B] text-lg leading-relaxed">
                    Real stories. Measurable results. Clear outcomes. Explore
                    how we&apos;ve helped brands grow through data-driven
                    digital strategies.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-gray-50 flex flex-col h-full"
                    >
                        {/* Logo Banner */}
                        <div
                            className={`h-[240px] relative flex items-center justify-center ${project.bgClass}`}
                        >
                            {/* Placeholder for the Brand Logo */}
                            <div className="relative w-52 h-52">
                                <Image
                                    src={project.logo}
                                    alt={project.title}
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
                                    <Image
                                        src={project.logo}
                                        alt="mini-logo"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <h4 className="font-black text-[15px] text-[#0F172A]">
                                    {project.title}
                                </h4>
                            </div>

                            <p className="text-[#64748B] text-[14px] leading-relaxed mb-8 flex-grow">
                                {project.desc}
                            </p>

                            {/* Metrics Row */}
                            <div className="flex justify-between items-end border-t border-gray-100 pt-6">
                                {project.metrics.map((metric, mIdx) => (
                                    <div key={mIdx}>
                                        <p className="text-[10px] font-bold text-[#94A3B8] tracking-widest uppercase mb-1">
                                            {metric.label}
                                        </p>
                                        <p
                                            className={`text-[18px] font-black ${metric.color}`}
                                        >
                                            {metric.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Text & Filters */}
            <div className="text-center max-w-2xl mx-auto">
                <p className="text-[#64748B] text-[16px] mb-8">
                    Transforming digital landscapes with data-driven strategies
                    and creative excellence. See our impact-driven results.
                </p>

                {/* Toggle Filter */}
                <div className="inline-flex bg-[#F1F5F9] p-1.5 rounded-full">
                    <button className="px-8 py-2.5 rounded-full bg-[#6A0DAD] text-white text-sm font-bold shadow-md">
                        All
                    </button>
                    <button className="px-8 py-2.5 rounded-full text-[#64748B] text-sm font-bold hover:text-[#0F172A] transition-colors">
                        Industry
                    </button>
                    <button className="px-8 py-2.5 rounded-full text-[#64748B] text-sm font-bold hover:text-[#0F172A] transition-colors">
                        Service Type
                    </button>
                </div>
            </div>
        </section>
    );
}
