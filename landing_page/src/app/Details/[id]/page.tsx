"use client"; 

import React from "react";
import { useParams } from "next/navigation"; 
import { PAGE_DATA } from "@/types/caseStudiesData";

import { FinalOutcome } from "@/sectionsclientdetailpage/FinalOutcome";
import { Metrics } from "@/sectionsclientdetailpage/Metrics";
import { Testimonial } from "@/sectionsclientdetailpage/Testimonial";
import Navbar2 from "@/sections/Navbar2";
import Footer from "@/sections/Footer";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Users, Palette, TrendingUp, Database, CodeXml, Globe, Share2, Smartphone, Type, Megaphone, Target } from "lucide-react";

const CaseStudyTemplate = () => {
    const params = useParams();
    const id = params?.id as string; // Get ID from URL

    const project = PAGE_DATA[id || "skillbridge"];

    if (!project)
        return <div className="p-20 text-center">Project not found</div>;

    const themeMap: Record<string, string> = {
        skillbridge: "#7C3AED",
        galaxyFurniture: "#F97316",
        aminHospital: "#10B981",
        beltechSolutions: "#2563EB",
        safeFurniture: "#B45309",
        makiInterior: "#DB2777",
        amenFurniture: "#8B5CF6",
    };

    const accentColor = themeMap[id] || "#7C3AED";

    return (
        <main className="bg-white min-h-screen">
            <Navbar2 />
            
            {/* Hero Section */}
            <section className="relative py-20 px-6 max-w-7xl mx-auto overflow-hidden">
                <div className="mb-1 pt-6">
                    <a href="/Portfolio" className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-tight hover:opacity-80 transition-opacity" style={{ color: accentColor }}>
                        <ArrowRight className="rotate-180 w-4 h-4" strokeWidth={3} /> 
                        Back to Projects
                    </a>
                    <div className="w-16 h-1 rounded-full mt-2" style={{ backgroundColor: accentColor }} />
                </div>
                
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white rounded-3xl shadow-xl flex items-center justify-center overflow-hidden border border-gray-100 shrink-0">
                        <Image src={project.logo} alt={`${project.companyName} logo`} fill className="object-contain p-4" />
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4" style={{ color: accentColor }}>
                            {project.companyName}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                </div>

                {/* Challenges Section - Enhanced */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: accentColor }}>
                            <CheckCircle2 className="w-6 h-6" />
                        </span>
                        Challenges We Solved
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.challenges.map((challenge, i) => (
                            <div key={i} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6" style={{ backgroundColor: accentColor, opacity: 0.15, color: accentColor }}>
                                    <span className="text-2xl font-black">{i + 1}</span>
                                </div>
                                <p className="text-gray-700 text-lg leading-relaxed font-medium">
                                    {challenge}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Services Section - Enhanced */}
                <div className="mb-20 bg-gradient-to-br from-gray-50 to-transparent py-16 px-8 rounded-[4rem]">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center">
                        Services We Provided
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {project.services.map((service, i) => (
                            <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group">
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:shadow-xl transition-shadow" style={{ backgroundColor: accentColor }}>
                                    {React.cloneElement(service.icon as React.ReactElement, { size: 28, strokeWidth: 2.5 })}
                                </div>
                                <h3 className="text-2xl font-black mb-4 text-gray-900">{service.title}</h3>
                                <p className="text-gray-600 text-lg leading-relaxed mb-4">{service.description}</p>
                                {service.date && (
                                    <div className="inline-block px-4 py-2 bg-gray-100 rounded-xl text-sm font-black text-gray-700">
                                        {service.date}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Metrics metrics={project.metrics} accentColor={accentColor} />
            <Testimonial testimonial={project.testimonial} accentColor={accentColor} />
            <FinalOutcome tools={project.tools} finalOutcome={project.finalOutcome} accentColor={accentColor} />
            <Footer />
        </main>
    );
};

export default CaseStudyTemplate;
