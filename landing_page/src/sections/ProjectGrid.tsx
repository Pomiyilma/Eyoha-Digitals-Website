import Image from "next/image";
import Link from "next/link";
import { Briefcase, Heart, GraduationCap, Home } from "lucide-react"; // Optional: Using lucide-react for icons
import portfolio21 from "../assets/images/portfolio21.png";
import portfolio22 from "../assets/images/portfolio22.png";
import portfolio24 from "../assets/images/portfolio24.png";
import portfolio25 from "../assets/images/portfolio25.png";
import portfolio26 from "../assets/images/portfolio26.png";
const projects = [
    {
        title: "Amen Furniture",
        category: "Interior and Furniture",
        subCategory: "Social Media & Branding",
        desc: "Strengthened digital presence and showcased furniture products with consistent brand visuals and engaging content.",
        stats: "Improved brand recognition",
        image: portfolio24,
        icon: <Home size={16} className="text-purple-700" />,
        id: "amenFurniture",
        hasPage: true,
    },
    {
        title: "Safe Furniture",
        category: "Interior and Furniture",
        subCategory: "Full Branding & Social Media",
        desc: "Built from scratch, a distinctive brand identity and engaging social presence for this furniture company.",
        stats: "Strong digital presence",
        image: portfolio24,
        icon: <Home size={16} className="text-purple-700" />,
        id: "safeFurniture",
        hasPage: true,
    },
    {
        title: "Maki Interior Design",
        category: "Interior and Furniture",
        subCategory: "Meta Ad Campaigns",
        desc: "Boosted client and student engagement through targeted paid advertising campaigns on Facebook and Instagram.",
        stats: "271K Impressions",
        image: portfolio25,
        icon: <Home size={16} className="text-purple-700" />,
        id: "makiInterior",
        hasPage: true,
    },
    {
        title: "Amin General Hospital",
        category: "Healthcare",
        subCategory: "Content Development",
        desc: "Developed strategic content to improve patient communication and strengthen digital credibility.",
        stats: "Enhanced patient trust",
        image: portfolio21,
        icon: <Heart size={16} className="text-purple-700" />,
        id: "aminHospital",
        hasPage: true,
    },
    {
        title: "Skillbridge Institute of Technology",
        category: "Education",
        subCategory: "Branding and Educational Content",
        desc: "Crafted a consistent academic brand and educational content to engage prospective technology students.",
        stats: "Attracted motivated students",
        image: portfolio22,
        icon: <GraduationCap size={16} className="text-purple-700" />,
        id: "skillbridge",
        hasPage: true,
    },
    {
        title: "Beltech Solutions",
        category: "B2B Tech",
        subCategory: "LinkedIn & Telegram Branding",
        desc: "Built a professional B2B brand presence with strategic content on LinkedIn and Telegram.",
        stats: "Clear digital identity",
        image: portfolio26,
        icon: <Briefcase size={16} className="text-purple-700" />,
        id: "beltechSolutions",
        hasPage: true,
    },
    {
        title: "Galaxy Furniture",
        category: "Interior and Furniture",
        subCategory: "Brand Positioning",
        desc: "Strategic brand positioning and viral TikTok marketing to drive high-volume furniture sales.",
        stats: "Coming Soon",
        image: portfolio24,
        icon: <Home size={16} className="text-purple-700" />,
        id: "galaxyFurniture",
        hasPage: false,
    },
];

export default function ProjectGrid() {
    return (
        <section className="py-16 px-4 md:px-8 bg-[#FDFDFF]">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    project.hasPage ? (
                        <div key={idx} className="group">
                            <Link href={`/Details/${project.id}`} className="block h-full">
                                <div className="bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                                    {/* Image Container */}
                                    <div className="relative h-64 w-full overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Content Container */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        {/* Category Header */}
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="bg-purple-100 p-2 rounded-lg">
                                                {project.icon}
                                            </div>
                                            <div>
                                                <div className="text-[13px] font-black text-gray-900 leading-none">
                                                    {project.category}
                                                </div>
                                                <div className="text-[11px] text-gray-400 mt-1">
                                                    {project.subCategory}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-[22px] font-bold mb-3 text-[#6A0DAD] leading-tight">
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-500 text-[14px] mb-6 leading-relaxed flex-grow">
                                            {project.desc}
                                        </p>

                                        {/* Stats */}
                                        <div className="text-[#FF6B00] font-extrabold text-[15px] mb-4">
                                            {project.stats}
                                        </div>
                                        
                                        {/* Learn More Button */}
                                        <div className="mt-auto">
                                            <span className="w-full bg-[#6A0DAD] text-white py-3 px-6 rounded-xl font-bold hover:bg-[#520b85] transition-colors flex items-center justify-center gap-2">
                                                Learn More
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ) : (
                        <div key={idx} className="group">
                            <div className="bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-sm flex flex-col h-full opacity-80">
                                {/* Image Container */}
                                <div className="relative h-64 w-full overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Content Container */}
                                <div className="p-8 flex flex-col flex-grow">
                                    {/* Category Header */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-purple-100 p-2 rounded-lg">
                                            {project.icon}
                                        </div>
                                        <div>
                                            <div className="text-[13px] font-black text-gray-900 leading-none">
                                                {project.category}
                                            </div>
                                            <div className="text-[11px] text-gray-400 mt-1">
                                                {project.subCategory}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-[22px] font-bold mb-3 text-[#6A0DAD] leading-tight">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-500 text-[14px] mb-6 leading-relaxed flex-grow">
                                        {project.desc}
                                    </p>

                                    {/* Stats */}
                                    <div className="text-[#FF6B00] font-extrabold text-[15px] mb-4">
                                        {project.stats}
                                    </div>
                                    
                                    {/* Coming Soon Button */}
                                    <div className="mt-auto">
                                        <button className="w-full bg-gray-300 text-gray-500 py-3 px-6 rounded-xl font-bold cursor-not-allowed">
                                            Coming Soon
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </section>
    );
}
