"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import backgroundImage from "../assets/images/herobanner.png";
import arrowatangle from "../assets/images/arrowatangle.png";
import Image from "next/image";

export default function Hero() {
    const resultsColor = "text-[#FF6600]";
    const purpleCTA = "bg-[#6A0DAD]";

    return (
        <section
            className="relative w-full min-h-screen pt-24 md:pt-32 pb-16 flex flex-col items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url(${backgroundImage.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div
                className="absolute inset-0 z-0"
                style={{
                    background:
                        "linear-gradient(to right, rgba(106, 13, 173, 0.9) 0%, rgba(106, 13, 173, 0.6) 60%, rgba(0, 0, 0, 0.2) 100%)",
                }}
            ></div>

            <div className="absolute top-0 w-full z-20">
                <Navbar />
            </div>

            <div className="relative z-10 container mx-auto px-6 lg:px-[52px] flex flex-col justify-start w-full">
                <div className="text-white mb-6 max-w-4xl leading-tight">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-poppins">
                        Strategy. Creativity.{" "}
                        <span className={resultsColor}>Results.</span>
                    </h1>
                </div>

                <p className="text-gray-200 text-lg md:text-xl font-normal mb-10 max-w-[600px]">
                    We help brands thrive in the digital age through tailored,
                    data-driven marketing solutions that deliver measurable
                    growth and lasting impact.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-16 items-start sm:items-center">
                    {/* Primary CTA: Darker purple on hover */}
                    <Link href="#contact" className="w-full sm:w-auto">
                        <button
                            className={`flex items-center justify-center space-x-2 text-white text-base font-semibold px-8 py-4 w-full sm:w-[224px] rounded-lg 
                                       ${purpleCTA} hover:bg-[#520a85] transition-all duration-300 shadow-xl active:scale-95`}
                        >
                            <span>Let&apos;s Talk</span>
                            <ArrowRight size={18} />
                        </button>
                    </Link>

                    {/* Updated Secondary CTA: Subtle white-to-transparent hover */}
                    <Link href="#portfolio" className="w-full sm:w-auto">
                        <button
                            className="flex items-center justify-center space-x-2 text-white text-base font-semibold px-8 py-4 w-full sm:w-[224px] rounded-lg 
                                       border-2 border-white/80 hover:border-white hover:bg-white/10 transition-all duration-300 active:scale-95"
                        >
                            <span>View Our Work</span>
                            <Image
                                src={arrowatangle}
                                alt="Arrow icon"
                                width={18}
                                height={18}
                                className="object-contain"
                            />
                        </button>
                    </Link>
                </div>

                <div className="flex flex-wrap gap-8 md:gap-12 lg:gap-16">
                    <StatItem label="Happy Clients" value="10+" />
                    <StatItem label="Success Rate" value="95%" />
                    <StatItem label="Support" value="24/7" />
                </div>
            </div>
        </section>
    );
}

function StatItem({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex flex-col items-start">
            <span className="text-3xl md:text-4xl font-extrabold text-white">
                {value}
            </span>
            <span className="text-sm md:text-base text-gray-300 font-medium whitespace-nowrap">
                {label}
            </span>
        </div>
    );
}