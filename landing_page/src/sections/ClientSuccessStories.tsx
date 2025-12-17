import FlintStoneImage from "../assets/images/flintstone.png";
import EthioteleImage from "../assets/images/ethiotele.png";
import RealStateImage from "../assets/images/realstate.png";
import FinanceImage from "../assets/images/finance.png";
import tweeterImage from "../assets/images/tweeter.png";
import Link from "next/link";
import Image from "next/image";


const clientLogos = [
    // Outer Ring (Radius approx 225px)
    {
        src: FlintStoneImage,
        alt: "Flintstone",
        radius: 225,
        angle: -140,
    },
    {
        src: RealStateImage,
        alt: "Real Estate",
        radius: 225,
        angle: -90,
    },
    {
        src: EthioteleImage,
        alt: "Ethio Telecom",
        radius: 225,
        angle: -40,
    },
    { src: tweeterImage, alt: "Meta", radius: 225, angle: 90 },
    {
        src: FlintStoneImage,
        alt: "Spotify",
        radius: 225,
        angle: 180,
    },

    // Middle Ring (Radius approx 150px)
    {
        src: tweeterImage,
        alt: "Twitter",
        radius: 150,
        angle: -150,
    },
    { src: FlintStoneImage, alt: "Airbnb", radius: 150, angle: -30 },
    {
        src: RealStateImage,
        alt: "Education",
        radius: 150,
        angle: 45,
    },
    { src: FinanceImage, alt: "Help", radius: 150, angle: 150 },

    // Inner Ring (Radius approx 90px)
    {
        src: EthioteleImage,
        alt: "Shopify",
        radius: 90,
        angle: 120,
    },
    {
        src: FinanceImage,
        alt: "Finance",
        radius: 150,
        angle: 10,
    },
];

export default function ClientSuccessStories() {
    const purpleAccent = "text-[#6A0DAD]";
    const contentMaxWidth = "max-w-[1233px]";

    const getLogoPosition = (radius: number, angle: number) => {
        const radians = (angle * Math.PI) / 180;
        const x = Math.cos(radians) * radius;
        const y = Math.sin(radians) * radius;

        return {
            left: "50%",
            top: "50%",
            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
        };
    };

    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden">
            <div className={`mx-auto w-[92%] lg:w-[96%] ${contentMaxWidth}`}>
                <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                    {/* Left Column (Remains the same as your working code) */}
                    <div className="mb-12 md:mb-0">
                        <div
                            className="inline-block px-4 py-1.5 rounded-full mb-6"
                            style={{ backgroundColor: "#F9F4FF" }}
                        >
                            <span
                                className={`text-xs font-semibold ${purpleAccent} uppercase tracking-widest`}
                            >
                                Trusted Worldwide
                            </span>
                        </div>
                        <h2
                            className={`text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight`}
                        >
                            Client success{" "}
                            <span className={purpleAccent}>stories</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-10 max-w-[550px]">
                            Join over 500+ companies that trust us to deliver
                            exceptional results.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-16">
                            <button
                                className="text-white px-8 h-12 rounded-lg font-semibold shadow-xl"
                                style={{
                                    background:
                                        "linear-gradient(to right, #FF8C00, #F06A35)",
                                }}
                            >
                                View All Clients
                            </button>
                            <button className="text-gray-900 px-8 h-12 rounded-lg font-semibold border border-gray-300 bg-white">
                                Case Studies
                            </button>
                        </div>
                        <div className="flex space-x-12 pt-4">
                            <div className="flex flex-col">
                                <span
                                    className={`text-4xl font-extrabold ${purpleAccent}`}
                                >
                                    500+
                                </span>
                                <span className="text-sm text-gray-500">
                                    Happy Clients
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <span
                                    className={`text-4xl font-extrabold ${purpleAccent}`}
                                >
                                    98%
                                </span>
                                <span className="text-sm text-gray-500">
                                    Satisfaction Rate
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Updated Orbit Logic */}
                    <div className="relative h-[500px] w-full flex items-center justify-center">
                        <div className="relative w-[450px] h-[450px]">
                            {/* Orbit Rings - Solid lines as per second image */}
                            <div className="absolute inset-0 border border-purple-200 rounded-full" />
                            <div className="absolute inset-[75px] border border-purple-200 rounded-full" />
                            <div className="absolute inset-[150px] border border-purple-200 rounded-full" />

                            {/* Central Hub */}
                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center shadow-2xl z-20"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #6A0DAD, #9370DB)",
                                }}
                            >
                                <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center">
                                    <svg
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m2 4 3 12h14l3-12-6 2-4-8-4 8-6-2z" />
                                        <path d="M7 21h10" />
                                    </svg>
                                </div>
                            </div>

                            {/* Manually Positioned Logos */}
                            {clientLogos.map((logo, index) => (
                                <div
                                    key={index}
                                    className="absolute w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center p-2 z-10 hover:scale-110 transition-transform duration-300"
                                    style={getLogoPosition(
                                        logo.radius,
                                        logo.angle
                                    )}
                                >
                                    <div className="relative w-full h-full">
                                        {/* Replace with your actual <Image /> tag */}
                                        <div className="w-full h-full bg-gray-50 rounded-full flex items-center justify-center overflow-hidden">
                                            <span className="text-[10px] font-bold text-gray-400">
                                                <Image
                                                    src={logo.src}
                                                    width={80}
                                                    height={80}
                                                    alt={logo.alt}
                                                    className="object-contain rounded-full"
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
