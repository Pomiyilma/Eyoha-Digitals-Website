import Link from "next/link";
import Image from "next/image";

// Placeholder icons for the orbiting client logos
const clientLogos = [
    { src: "/assets/logos/client1.svg", alt: "Client Logo 1" }, // Trust Review
    { src: "/assets/logos/client2.svg", alt: "Client Logo 2" }, // Trademark Home
    { src: "/assets/logos/client3.svg", alt: "Client Logo 3" }, // Twitter
    { src: "/assets/logos/client4.svg", alt: "Client Logo 4" }, // Airbnb
    { src: "/assets/logos/client5.svg", alt: "Client Logo 5" }, // Financial
    { src: "/assets/logos/client6.svg", alt: "Client Logo 6" }, // Education
    { src: "/assets/logos/client7.svg", alt: "Client Logo 7" }, // Meta
    { src: "/assets/logos/client8.svg", alt: "Client Logo 8" }, // Question Mark
    { src: "/assets/logos/client9.svg", alt: "Client Logo 9" }, // Dollar Sign
    { src: "/assets/logos/client10.svg", alt: "Client Logo 10" }, // Spotify
];

export default function ClientSuccessStories() {
    // Inferred colors from the Figma screenshot (image_6321c2.png)
    const purpleAccent = "text-[#6A0DAD]";

    // The main content area width to match the overall design flow
    const contentMaxWidth = "max-w-[1233px]";

    // Function to calculate the position of the logos on the orbit
    // We are placing 10 logos across 360 degrees.
    const getLogoPosition = (index: number, radius: number) => {
        const angle = index * (360 / clientLogos.length);
        const radians = angle * (Math.PI / 180);

        // These formulas position the center of the logo div
        const x = Math.cos(radians) * radius;
        const y = Math.sin(radians) * radius;

        return {
            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
        };
    };

    return (
        <section className="py-24 md:py-32 bg-white">
            <div className={`mx-auto w-[92%] lg:w-[96%] ${contentMaxWidth}`}>
                <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                    {/* Left Column: Text Content, Buttons, and Stats */}
                    <div className="mb-12 md:mb-0">
                        {/* Accent Label */}
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
                            {/* Button 1: Solid Orange ("View All Clients") - Match the gradient */}
                            <Link href="#clients">
                                <button
                                    className={`flex items-center space-x-2 text-white text-base font-semibold px-8 h-12 rounded-lg 
                                               hover:opacity-90 transition duration-200 shadow-xl`}
                                    style={{
                                        background:
                                            "linear-gradient(to right, #FF8C00, #F06A35)",
                                    }}
                                >
                                    View All Clients
                                </button>
                            </Link>

                            {/* Button 2: Outline/Text Button ("Case Studies") - Match the white fill/border */}
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

                    {/* Right Column: Client Trust Wheel Graphic Simulation */}
                    <div className="relative h-[450px] w-full flex items-center justify-center">
                        {/* Central Hub and Orbit Rings Container */}
                        <div className="relative w-[450px] h-[450px] mx-auto flex items-center justify-center">
                            {/* 1. Outer Orbit Ring (Largest) */}
                            <div
                                className="absolute w-[450px] h-[450px] rounded-full border border-dashed"
                                style={{ borderColor: "#6A0DAD", opacity: 0.3 }}
                            ></div>

                            {/* 2. Middle Orbit Ring */}
                            <div
                                className="absolute w-[300px] h-[300px] rounded-full border border-dashed"
                                style={{ borderColor: "#6A0DAD", opacity: 0.3 }}
                            ></div>

                            {/* 3. Inner Orbit Ring */}
                            <div
                                className="absolute w-[150px] h-[150px] rounded-full border border-dashed"
                                style={{ borderColor: "#6A0DAD", opacity: 0.3 }}
                            ></div>

                            {/* 4. Central Hub (The Crown Icon) */}
                            <div
                                className="w-24 h-24 rounded-full flex items-center justify-center"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #6A0DAD, #9370DB)",
                                }}
                            >
                                {/* Crown Icon (Lucide-React not used here, using inline SVG for minimal dependencies) */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-white"
                                >
                                    <path d="m2 4 3 12h14l3-12-6 2-4-8-4 8-6-2z" />
                                    <path d="M7 21h10" />
                                </svg>
                            </div>

                            {/* 5. Orbiting Client Logos (Outer Ring Simulation - 10 logos) */}
                            {/* We will place the logos on the largest orbit ring (radius = 450/2 = 225px) */}
                            {clientLogos.map((logo, index) => (
                                <div
                                    key={index}
                                    className="absolute w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center p-1"
                                    style={{
                                        ...getLogoPosition(index, 225), // 225px is the radius of the outer circle
                                        // Adjusting Z-index for layering if needed
                                        zIndex: 10,
                                    }}
                                >
                                    {/* Placeholder for the actual logo image */}
                                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                                        <span className="text-xs font-bold text-gray-700">
                                            L{index + 1}
                                        </span>
                                    </div>
                                    {/* In a real project, use the Image component here:
                                    <Image src={logo.src} alt={logo.alt} width={30} height={30} style={{ objectFit: 'contain' }} />
                                    */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Accent: The subtle light purple bar below the content area */}
            <div
                className="w-full h-4 mt-16"
                style={{ backgroundColor: "#F9F4FF" }}
            ></div>
        </section>
    );
}
