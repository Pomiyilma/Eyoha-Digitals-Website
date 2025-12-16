"use client";
import { useState } from "react";
// Assuming you have the correct path to your logo image
import logoImage from "../assets/images/navbarLogo.png";

import Link from "next/link";
import Image from "next/image";

// Assuming Button component is not used, using native button tag for styling consistency

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#Services" },
    { label: "Portfolio", href: "#Portfolio" },
    { label: "About", href: "#About" },
    { label: "Contact", href: "#Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Set a max-width close to the 1233px Figma width for large screens,
    // but use a standard container for smaller screens.
    const desktopMaxWidth = "max-w-[1233px]";

    // The Tailwind color for the logo background is inferred as a deep purple
    const logoBgColor = "bg-[#6A0DAD]";

    return (
        // The outer section is fixed and full width
        <section className="fixed top-0 left-0 w-full py-[34px]  z-50">
            {/* Inner container centers the content and restricts its width */}
            <div className={`mx-auto w-[96%] sm:w-[94%] ${desktopMaxWidth}`}>
                {/* Main Nav Flex Container: LOGO/Title (Left) | Links (Center) | Button (Right) */}
                {/* Use justify-between to push the logo/links/button to the edges */}
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
                            // Ensuring the text remains readable on mobile
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
            {/* It sits directly below the main header and spans the container width */}
            {isOpen && (
                <div
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
