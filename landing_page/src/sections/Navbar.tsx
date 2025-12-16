"use client";
import { useState, useEffect } from "react"; // 1. Import useEffect
// Assuming you have the correct path to your logo image
import logoImage from "../assets/images/navbarLogo.png";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#Services" },
    { label: "Portfolio", href: "#Portfolio" },
    { label: "About", href: "#About" },
    { label: "Contact", href: "#Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    // 2. State to track if the page has been scrolled
    const [scrolled, setScrolled] = useState(false);

    // Function to check scroll position
    const handleScroll = () => {
        // Set scrolled to true if pageYOffset is greater than 10 (or any threshold)
        const offset = window.scrollY;
        if (offset > 10) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    // 3. Set up and clean up the scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Empty dependency array ensures this runs only once

    const desktopMaxWidth = "max-w-[1233px]";
    const logoBgColor = "bg-[#6A0DAD]";

    // 4. Conditional styling for the blur effect
    const navbarClasses = scrolled
        ? "bg-black/30 backdrop-blur-md shadow-lg" // Classes when scrolled
        : "bg-transparent"; // Classes when at the top (transparent)

    return (
        // Apply the conditional classes along with the fixed positioning
        <section
            className={`fixed top-0 left-0 w-full pt-[34px] pb-2 z-50 transition-all duration-300 ${navbarClasses}`}
        >
            {/* Inner container centers the content and restricts its width */}
            <div className={`mx-auto w-[96%] sm:w-[94%] ${desktopMaxWidth}`}>
                {/* Main Nav Flex Container: LOGO/Title (Left) | Links (Center) | Button (Right) */}
                <div className="flex justify-between items-center h-10 ml-7">
                    {/* 1. Logo and Title (Left Side) */}
                    <div className="flex items-center space-x-2">
                        {/* Logo Icon Container - Set to 40x40px */}
                        <div
                            className={`w-[40px] h-[40px] ${logoBgColor} flex items-center justify-center rounded-sm`}
                        >
                            {/* Logo Image - Set to 15.75x28px as per your current code */}
                            <Image
                                src={logoImage}
                                alt="Eyoha Digitals Logo"
                                width={15.75}
                                height={28}
                                className="object-contain"
                            />
                        </div>
                        <Link
                            href={"/"}
                            className="text-white text-lg font-bold font-poppins tracking-wider whitespace-nowrap"
                        >
                            Eyoha Digitals
                        </Link>
                    </div>

                    {/* 2. Navigation Links (Center) - Hidden on Mobile, visible on MD and up */}
                    <div className="hidden md:flex items-center">
                        <nav className="flex space-x-8 font-medium text-[#FFFFFF] text-sm">
                            {navLinks.map((link) => (
                                <a
                                    href={link.href}
                                    key={link.label}
                                    className="hover:text-purple-300 transition duration-150"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* 3. "Get Started" Button (Right Side) - Hidden on Mobile, visible on MD and up */}
                    <div className="hidden md:block">
                        <Link href="#contact">
                            <button
                                className="bg-[#6A0DAD] text-white text-sm font-medium h-10 px-6 
                                hover:bg-[#6A0DAD] transition duration-200 shadow-lg w-[132.86px] max-w-[132.86px] rounded-md"
                                style={{ maxWidth: "132.86px" }}
                            >
                                Get Started
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button (Hamburger) - Visible only on Mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none p-2"
                            aria-label="Toggle Menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Conditionally rendered when 'isOpen' is true) */}
            {isOpen && (
                <div
                    // Note: Mobile menu is intentionally kept solid for better readability on smaller screens
                    className={`md:hidden bg-purple-900 mx-auto w-[96%] sm:w-[94%] p-4 rounded-b-lg mt-2`}
                >
                    <nav className="flex flex-col space-y-2 text-white">
                        {navLinks.map((link) => (
                            <a
                                href={link.href}
                                key={link.label}
                                className="py-2 px-2 rounded-md hover:bg-purple-800"
                                onClick={() => setIsOpen(false)} // Close menu on click
                            >
                                {link.label}
                            </a>
                        ))}
                        <Link href="#contact" onClick={() => setIsOpen(false)}>
                            <button className="w-full bg-purple-700 text-white py-2 mt-2 rounded-md hover:bg-purple-600">
                                Get Started
                            </button>
                        </Link>
                    </nav>
                </div>
            )}
        </section>
    );
}
