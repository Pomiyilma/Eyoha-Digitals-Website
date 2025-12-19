import React from "react";

interface ClientCardProps {
    companyName: string;
    tagline: string;
    logo: string;
    testimonial: string;
    category: string;

    accentTheme: "orange" | "purple";
}

export const ClientCard: React.FC<ClientCardProps> = ({
    companyName,
    tagline,
    logo,
    testimonial,
    category,
    accentTheme,
}) => {
    const isOrange = accentTheme === "orange";

    const dotColor = isOrange ? "bg-orange-500" : "bg-purple-500";
    const gradient = isOrange
        ? "from-purple-600 via-purple-400 to-orange-400"
        : "from-orange-400 via-purple-400 to-purple-600";

    return (
        <div className="relative bg-white rounded-[2.5rem] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col items-center text-center border border-gray-50 hover:shadow-2xl transition-all duration-300 group">
            <div
                className={`absolute top-8 right-8 w-2 h-2 rounded-full ${dotColor}`}
            />

            <div className="relative w-24 h-24 mb-6">
                <div className="w-full h-full rounded-full border-[3px] border-slate-900 overflow-hidden flex items-center justify-center bg-white shadow-sm">
                    <img
                        src={logo}
                        alt={companyName}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-[#8B5CF6] font-extrabold text-xl mb-0.5">
                    {companyName}
                </h3>
                <p className="text-gray-400 text-sm font-medium">{tagline}</p>
            </div>

            <p className="text-gray-500 text-[15px] leading-relaxed mb-8 px-2 font-medium italic">
                {testimonial}
            </p>

            <div className="w-full flex items-center gap-4 mb-10">
                <div
                    className={`h-[3px] flex-grow rounded-full bg-gradient-to-r ${gradient}`}
                />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">
                    {category}
                </span>
            </div>

            <button className="bg-[#A855F7] hover:bg-[#9333EA] text-white px-10 py-3 rounded-xl font-bold text-sm transition-all transform group-hover:scale-105 shadow-lg shadow-purple-100">
                See Details
            </button>
        </div>
    );
};
