import Link from "next/link";

export default function ClientSuccessStories() {
    // Inferred colors from the Figma screenshot
    const purpleAccent = "text-[#6A0DAD]"; // The main purple for the accent and stats
    const orangeButtonBg = "bg-[#FF8C00]";
    const buttonTextColor = "text-white";

    // The main content area width to match the overall design flow
    const contentMaxWidth = "max-w-[1233px]";

    return (
        // Section with a subtle light purple background for visual separation (inferred from design)
        <section className="py-24 md:py-32 bg-purple-50/50">
            <div className={`mx-auto w-[92%] lg:w-[96%] ${contentMaxWidth}`}>
                <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                    {/* Left Column: Text Content, Buttons, and Stats */}
                    <div className="mb-12 md:mb-0">
                        {/* Accent Label */}
                        <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 mb-6">
                            <span
                                className={`text-xs font-semibold ${purpleAccent} uppercase tracking-widest`}
                            >
                                Trusted Worldwide
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h2
                            className={`text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight`}
                        >
                            Client success{" "}
                            <span className={purpleAccent}>stories</span>
                        </h2>

                        {/* Body Paragraph */}
                        <p className="text-gray-600 text-lg mb-10 max-w-[550px]">
                            Join over 500+ companies that trust us to deliver
                            exceptional results. From startups to Fortune 500
                            companies, we're proud to partner with the best.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-16">
                            {/* Button 1: Solid Orange ("View All Clients") */}
                            <Link href="#clients">
                                <button
                                    className={`flex items-center space-x-2 ${buttonTextColor} text-base font-semibold px-8 h-12 rounded-lg 
                                               ${orangeButtonBg} hover:opacity-90 transition duration-200 shadow-xl`}
                                >
                                    View All Clients
                                </button>
                            </Link>

                            {/* Button 2: Outline/Text Button ("Case Studies") */}
                            <Link href="#casestudies">
                                <button
                                    className="text-gray-900 text-base font-semibold px-8 h-12 rounded-lg 
                                               border border-gray-300 bg-white hover:bg-gray-50 transition duration-200"
                                >
                                    Case Studies
                                </button>
                            </Link>
                        </div>

                        {/* Statistics (Stats Bar) */}
                        <div className="flex space-x-12 pt-4">
                            {/* Stat 1: Happy Clients */}
                            <div className="flex flex-col items-start">
                                <span
                                    className={`text-4xl font-extrabold ${purpleAccent}`}
                                >
                                    500+
                                </span>
                                <span className="text-sm text-gray-500 font-medium whitespace-nowrap">
                                    Happy Clients
                                </span>
                            </div>

                            {/* Stat 2: Satisfaction Rate */}
                            <div className="flex flex-col items-start">
                                <span
                                    className={`text-4xl font-extrabold ${purpleAccent}`}
                                >
                                    98%
                                </span>
                                <span className="text-sm text-gray-500 font-medium whitespace-nowrap">
                                    Satisfaction Rate
                                </span>
                            </div>

                            {/* Stat 3: Support */}
                            <div className="flex flex-col items-start">
                                <span
                                    className={`text-4xl font-extrabold ${purpleAccent}`}
                                >
                                    24/7
                                </span>
                                <span className="text-sm text-gray-500 font-medium whitespace-nowrap">
                                    Support
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Client Trust Wheel Graphic */}
                    <div className="relative h-[450px] w-full flex items-center justify-center">
                        {/* NOTE: Recreating the complex, layered, circular graphic with precise 
                            client logos and paths in pure Tailwind/CSS is extremely difficult 
                            and often requires using a pre-rendered SVG, a Lottie animation, 
                            or treating the entire graphic as a single static image. 
                            
                            For pixel-perfect similarity, I recommend using the graphic 
                            as a single image, or replacing it with an SVG version.
                        */}
                        <div className="w-full h-full relative max-w-[450px]">
                            {/* Placeholder for the complex graphic */}
                            <div
                                className="absolute inset-0 flex items-center justify-center"
                                // Styling to roughly mimic the wheel's central crown icon
                                style={{
                                    background:
                                        "radial-gradient(circle, #6A0DAD 40%, #8A2BE2 100%)",
                                    borderRadius: "50%",
                                }}
                            >
                                <span className="text-white text-6xl">👑</span>
                            </div>
                            {/* If you have the image of the wheel, replace the above div with an Image component:
                                <Image
                                    src="/assets/images/client-wheel-graphic.png" 
                                    alt="Client Success Wheel"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
