import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import aboutImage from "../assets/images/about.png";

export default function WhoWeAre() {
    const orangeAccent = "text-[#F97316]";
    const purpleHeading = "text-[#6A0DAD]";
    const orangeButtonBg = "bg-[#FF6600]";
    const contentMaxWidth = "max-w-[1233px]";

    return (
        <section className="pt-[128px] pb-[129] px-[55px] md:py-32">
            <div
                className={`mx-auto w-[92%] lg:w-[1280px] h-[404px] ${contentMaxWidth}`}
            >
                <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                    <div className="mb-12 md:mb-0">
                        <div className="flex flex-row mb-4">
                            <div
                                className={`w-10 h-0.5 ${orangeButtonBg} mt-2 `}
                            ></div>
                            <span
                                className={`text-sm font-bold ${orangeAccent}`}
                            >
                                ABOUT US
                            </span>
                        </div>

                        <h2
                            className={`text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight`}
                        >
                            Who<span className={purpleHeading}>We Are</span>
                        </h2>

                        <p className="text-gray-600 text-lg mb-6 max-w-[550px]">
                            Eyoha Digitals is a results-driven digital marketing
                            and creative agency helping businesses build strong
                            online identities, reach the right audience, and
                            convert followers into customers.
                        </p>

                        <p className="text-gray-600 text-lg mb-10 max-w-[550px]">
                            We blend strategy, creativity, and analytics to give
                            brands a modern, fresh, and high-impact digital
                            presence. Our goal is simple: deliver exceptional
                            marketing that works.
                        </p>

                        <Link href="#about">
                            <button
                                className={`flex items-center space-x-2 text-white text-base font-semibold px-8 h-12 rounded-lg 
                                           ${orangeButtonBg} hover:opacity-90 transition duration-200 shadow-lg`}
                            >
                                <span>Learn More About Us</span>
                                <ArrowRight size={18} />
                            </button>
                        </Link>
                    </div>

                    <div className="relative h-[400px] md:h-[328px] w-full md:w-[601px] pr-4">
                        <div
                            className="absolute inset-0 rounded-[32px] overflow-hidden shadow-2xl"
                            style={{ borderRadius: "32px" }}
                        >
                            <Image
                                src={aboutImage}
                                alt="Eyoha Digitals Team Meeting"
                                fill
                                style={{ objectFit: "cover" }}
                                className="transform hover:scale-105 transition duration-500 ease-in-out"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
