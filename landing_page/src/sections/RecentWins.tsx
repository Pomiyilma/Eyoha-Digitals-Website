import WinCard from "@/components/WinCards";

// --- Data for the four win cards based on image_638320.png ---
const winsData = [
    {
        metric: "+300%",
        metricColor: "text-purple-700", // Custom purple color for metric/title
        title: "Reach in 3 Months",
        description:
            "From zero to viral. We helped XYZ build a fast growing digital presence.",
        graphicSrc: "/assets/graphics/reach-graphic.png", // Placeholder for the bottom chart/visual
        iconBgColor: "linear-gradient(135deg, #6A0DAD, #FF8C00)", // Gradient for the top circle
        iconSrc: "/assets/icons/trend-up.svg", // Placeholder for the small icon inside the circle
    },
    {
        metric: "5x",
        metricColor: "text-gray-900", // Dark text color for metric/title
        title: "Organic Traffic Growth",
        description: "A full SEO upgrade pushed ABC to the top search results.",
        graphicSrc: "/assets/graphics/traffic-graphic.png",
        iconBgColor: "linear-gradient(135deg, #FF8C00, #F06A35)",
        iconSrc: "/assets/icons/search-ranking.svg",
    },
    {
        metric: "400%",
        metricColor: "text-gray-900",
        title: "Conversion Boost",
        description:
            "Smart ad targeting helped DEF turn clicks into paying customers.",
        graphicSrc: "/assets/graphics/conversion-graphic.png",
        iconBgColor: "linear-gradient(135deg, #FF8C00, #6A0DAD)",
        iconSrc: "/assets/icons/conversion-rate.svg",
    },
    {
        metric: "+1M",
        metricColor: "text-purple-700",
        title: "Lifetime Impressions",
        description:
            "A blended SMM strategy expanded brand awareness dramatically.",
        graphicSrc: "/assets/graphics/impressions-graphic.png",
        iconBgColor: "linear-gradient(135deg, #6A0DAD, #9C33D2)",
        iconSrc: "/assets/icons/social-impressions.svg",
    },
];

export default function RecentWins() {
    // Inferred colors from the Figma screenshot
    const orangeAccent = "text-[#FF8C00]";

    // The main content area width to match the overall design flow
    const contentMaxWidth = "max-w-[1233px]";

    return (
        <section className="py-24 md:py-32 bg-gray-50/50">
            <div className={`mx-auto w-[92%] lg:w-[96%] ${contentMaxWidth}`}>
                {/* Heading and Sub-text Container */}
                <div className="mx-auto max-w-3xl text-center mb-16">
                    {/* Orange Accent Label and Underline */}
                    <div className="flex flex-col items-center mb-4">
                        <span
                            className={`text-sm font-bold ${orangeAccent} uppercase tracking-widest`}
                        >
                            Recent Wins
                        </span>
                        {/* Horizontal line style inferred from image */}
                        <div
                            className={`w-16 h-0.5 ${orangeAccent} mt-1`}
                            style={{ backgroundColor: "#FF8C00" }}
                        ></div>
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        A quick look at how we help brands reach new levels.
                    </h2>

                    {/* Accent line/divider (inferred from image) */}
                    <div
                        className="w-10 h-1 mx-auto"
                        style={{ backgroundColor: "#F38181" }}
                    ></div>
                </div>

                {/* 4-Card Win Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {winsData.map((win, index) => (
                        <WinCard
                            key={index}
                            metric={win.metric}
                            metricColor={
                                index === 0 || index === 3
                                    ? "text-[#6A0DAD]"
                                    : "text-gray-900"
                            }
                            title={win.title}
                            description={win.description}
                            graphicSrc={win.graphicSrc}
                            iconBgColor={win.iconBgColor}
                            iconSrc={win.iconSrc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
