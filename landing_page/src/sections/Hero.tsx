"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import backgroundImage from "../assets/images/herobanner.png";
import arrowatangle from "../assets/images/arrowatangle.png";

import Image from "next/image";

export default function Hero() {
    const contentMaxWidth = "max-w-[1280px]";

    const resultsColor = "text-[#FF6600]";

    const purpleCTA = "bg-[#6A0DAD]";

    return (
        <div
            className="relative w-full md:h-screen md:max-h-screen pt-40 md:pt-48 pb-16 md:pb-32 flex flex-col items-center justify-start overflow-hidden"
            style={{
                backgroundImage: `url(${backgroundImage.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to right, rgba(106, 13, 173, 0.8) 0%, rgba(106, 13, 173, 0.6) 50%, rgba(0, 0, 0, 0) 100%)",
                }}
            ></div>

            <div className="absolute top-0 w-full">
                <Navbar />
            </div>

            <div
                className={`relative mx-auto w-[92%] lg:w-[96%] ${contentMaxWidth} flex flex-col justify-start `}
            >
                <div className="text-white lg:pt-12 lg:pl-[52px] lg:pb-14 mb-6 w-[1152px] h-[84px] max-w-[1152px] leading-tight">
                    <h1 className="text-3xl md:text-6xl font-bold font-poppins ">
                        Strategy. Creativity.
                        <span className={resultsColor}>Results.</span>
                    </h1>
                </div>

                <p className="text-gray-300 text-lg md:text-lg font-normal mb-10 w-full max-w-[700px] lg:pl-[52px]">
                    We help brands thrive in the digital age through tailored,
                    data-driven marketing solutions that deliver measurable
                    growth and lasting impact.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-12 items-center lg:pl-[55px] h-[64px]">
                    <Link href="#contact">
                        <button
                            className={`flex mx-auto items-center space-x-2 text-white text-base font-semibold px-8 w-[224.09px] max-w-[224.09px] h-[64px]  rounded-lg 
                                       ${purpleCTA} hover:bg-purple-700 transition duration-200 shadow-xl`}
                        >
                            <span
                                className="mx-auto flex flex-row items-center space-x-2
                                "
                            >
                                Let&apos;s Talk <ArrowRight size={18} />
                            </span>
                        </button>
                    </Link>

                    <Link href="#portfolio">
                        <button
                            className="flex items-center space-x-2 text-white text-base font-semibold px-8 w-[224.09px] max-w-[224.09px] h-[64px] rounded-lg 
                                       border-2 border-white hover:bg-white hover:text-purple-700 transition duration-200"
                        >
                            <span>View Our Work</span>

                            <Image
                                src={arrowatangle}
                                alt="Eyoha Digitals Logo"
                                width={18}
                                height={28}
                                className="object-contain"
                            />
                        </button>
                    </Link>
                </div>

                <div className="flex space-x-12  lg:pl-12 pt-0 ">
                    <div className="flex flex-col items-start">
                        <span className="text-2xl font-extrabold text-white">
                            10+
                        </span>
                        <span className="text-sm text-gray-400 font-medium whitespace-nowrap">
                            Happy Clients
                        </span>
                    </div>

                    <div className="flex flex-col items-start">
                        <span className="text-2xl font-extrabold text-white">
                            95%
                        </span>
                        <span className="text-sm text-gray-400 font-medium whitespace-nowrap">
                            Success Rate
                        </span>
                    </div>

                    <div className="flex flex-col items-start">
                        <span className="text-2xl font-extrabold text-white">
                            24/7
                        </span>
                        <span className="text-sm text-gray-400 font-medium whitespace-nowrap">
                            Support
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
