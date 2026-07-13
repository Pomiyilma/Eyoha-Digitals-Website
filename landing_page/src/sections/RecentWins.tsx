import WinCard from "@/components/WinCards";
import { TrendingUp, Rocket, ChartPie, Flame } from "lucide-react";

import growth from "../assets/images/seoIcon.png";
import searchIcon from "../assets/images/searchIcon.png";
import recentwin1 from "../assets/images/recentwin1.png";
import recentwin2 from "../assets/images/recentwin2.png";
import recentwin3 from "../assets/images/recentwin3.png";
import recentwin4 from "../assets/images/recentwin4.png";
import boostcircles from "../assets/images/boostcircles.png";
import eyeIcon from "../assets/images/eyeIcon.png";
const winsData = [
    {
        metric: "500,000+",
        title: "PEOPLE REACHED",
        description:
            "We helped Maki Interior Design reach over 500,000 people through via paid advertising.",
        graphicSrc: recentwin1,
        iconBgColor: "linear-gradient(135deg, #6A0DAD, #FF8C00)",
        iconSrc: growth,
        bottomIcon: TrendingUp,
    },
    {
        metric: "2x",
        title: "Organic Traffic Growth",
        description: "We helped Galaxy Furniture achieve 2× audience growth through organic content.",
        graphicSrc: recentwin2,
        iconBgColor: "linear-gradient(135deg, #FF8C00, #6A0DAD)",
        iconSrc: searchIcon,
        bottomIcon: Rocket,
    },
    {
        metric: "95%",
        title: "Conversion Rate Growth",
        description:
            "We helped Maki Interior Design achieve a 95% increase in student enrollments through paid Ads.",
        graphicSrc: recentwin3,
        iconBgColor: "linear-gradient(135deg, #FF8C00, #6A0DAD)",
        iconSrc: boostcircles,
        bottomIcon: ChartPie,
    },
    {
        metric: "+1M",
        title: "Lifetime Impressions",
        description:
            "A blended SMM strategy expanded brand awareness dramatically.",
        graphicSrc: recentwin4,
        iconBgColor: "linear-gradient(135deg, #FF8C00, #6A0DAD)",
        iconSrc: eyeIcon,
        bottomIcon: Flame,
    },
];

export default function RecentWins() {
    return (
        <section className="py-24 bg-gray-50/30">
            <div className="mx-auto max-w-[1233px] px-6">
                {/* Heading Section */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-2">
                        <div className="w-8 h-[2px] bg-[#FF8C00]" />
                        <h2 className="text-4xl md:text-5xl font-black text-[#6A0DAD]">
                            Recent Wins
                        </h2>
                        <div className="w-8 h-[2px] bg-[#FF8C00]" />
                    </div>
                    <p className="text-gray-400 font-medium text-sm">
                        A quick look at how we help brands reach new levels.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {winsData.map((win, index) => (
                        <WinCard
                            key={index}
                            metric={win.metric}
                            title={win.title}
                            description={win.description}
                            graphicSrc={win.graphicSrc}
                            iconBgColor={win.iconBgColor}
                            iconSrc={win.iconSrc}
                            BottomIcon={win.bottomIcon}
                            metricColor={
                                index === 0 || index === 3
                                    ? "text-[#6A0DAD]"
                                    : "text-gray-900"
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
