import React from "react";
import { StaticImageData } from "next/image";
import {
    Palette,
    Users,
    Database,
    CodeXml,
    TrendingUp,
    LucideIcon,
    Figma,
    Globe,
    Component,
    Layers,
    Layout,
    Share2,
    Smartphone,
    Type,
    Megaphone,
    Target,
} from "lucide-react";
// images import //
import skillbridgeLogo from "../assets/images/skillbridgenewlogo.png";
import aminlogo from "../assets/images/aminlogonew.png";
import galaxylogo from "../assets/images/galaxyfurniture.png";
import makilogo from "../assets/images/maki.png";
import safelogo from "../assets/images/sofiFerniture.png";
import beltechlogo from "../assets/images/beltechlogo.png";
import websitehomepage from "../assets/images/websitehomepage.png";
import telegramaccount from "../assets/images/telegramaccount.png";
import linkedinaccount from "../assets/images/linkedinaccount.png";

import homepageskill from "../assets/images/homepageskill.png";
import telegramskill from "../assets/images/telegramskill.png";
import paidaddskill from "../assets/images/paidaddskill.png";
import amin2 from "../assets/images/amintiktok2.png";
import amin1 from "../assets/images/amintiktok1.png";
import galaxyhome from "../assets/images/galaxyhome.png";
import galaxybrochure from "../assets/images/galaxybrochure.png";
import galaxymobile from "../assets/images/galaxymobile.png";
import beforegalaxy from "../assets/images/beforegalaxy.png";
import aftergalaxy from "../assets/images/aftergalaxy.png";
import sofibefore from "../assets/images/sofibefore.png";
import sofiafter from "../assets/images/sofiafter.png";
import makibefore from "../assets/images/makibefore.png";
import makiafter from "../assets/images/makiafter.png";
import aminbefore from "../assets/images/aminbefore.png";
import aminafter from "../assets/images/aminafter.png";
import skillbefore from "../assets/images/skillbefore.png";
import skillafter from "../assets/images/skillafter.png";
import testimonial from "../assets/images/testimonial.png";
///////////////////
export interface CaseStudyProps {
    companyName: string;
    tools: LucideIcon[];
    logo: string | StaticImageData;
    description: string;
    challenges: string[];
    services: {
        title: string;
        description: string;
        icon: React.ReactNode;
        date?: string;
    }[];
    metrics: { label: string; value: string }[];
    testimonial: {
        quote: string;
        author: string;
        role: string;
        avatar: string | StaticImageData;
    };
    finalOutcome: string;
    beforeImage: string | StaticImageData;
    afterImage: string | StaticImageData;
    transformationPoints: {
        before: string[];
        after: string[];
    };
    contentSamples: {
        title: string;
        desc: string;
        img: string | StaticImageData;
    }[];
}

export const PAGE_DATA: Record<string, CaseStudyProps> = {
    amenFurniture: {
        companyName: "Amen Furniture",
        logo: safelogo,
        description: `Amen Furniture is a modern furniture brand dedicated to showcasing stylish and high-quality products. Eyoha Digitals partnered with Amen Furniture to strengthen its digital presence and showcase products effectively.`,
        challenges: [
            "Limited digital presence, making it difficult to reach modern furniture buyers online.",
            "Inconsistent brand visuals that weakened recognition and perceived professionalism.",
            "Low audience engagement across social platforms despite strong product quality.",
            "Lack of structured content strategy to showcase products effectively.",
            "Difficulty communicating brand value in a competitive furniture market.",
        ],
        services: [
            {
                title: "Social Media Management",
                description: "Established a consistent posting system to improve visibility and maintain an active brand presence.",
                icon: <Share2 />,
                date: "Ongoing",
            },
            {
                title: "Content Strategy Development",
                description: "Designed a strategic content plan focused on product storytelling and lifestyle appeal.",
                icon: <Layers />,
                date: "Ongoing",
            },
            {
                title: "Brand Visual Alignment",
                description: "Standardized colors, typography, and creative direction to strengthen brand identity.",
                icon: <Palette />,
                date: "Ongoing",
            },
            {
                title: "Creative Content Production",
                description: "Produced high-quality visuals and videos to highlight craftsmanship and functionality.",
                icon: <Figma />,
                date: "Ongoing",
            },
            {
                title: "Audience Engagement Optimization",
                description: "Implemented engagement-driven formats to encourage interaction and build community.",
                icon: <Users />,
                date: "Ongoing",
            },
        ],
        metrics: [
            { label: "Brand Recognition", value: "Up" },
            { label: "Digital Presence", value: "Stronger" },
            { label: "Audience Engagement", value: "Increased" },
            { label: "Product Visibility", value: "Enhanced" },
        ],
        testimonial: {
            quote: "Eyoha Digitals transformed our online presence — our brand now truly reflects the quality and style of our furniture.",
            author: "Amen Furniture",
            role: "CEO",
            avatar: testimonial,
        },
        finalOutcome: "Amen Furniture now has a strong, consistent digital presence that effectively showcases their furniture and connects with modern buyers.",
        beforeImage: sofibefore,
        afterImage: sofiafter,
        transformationPoints: {
            before: [
                "Limited digital footprint",
                "Inconsistent brand visuals",
                "Low audience engagement",
            ],
            after: [
                "Strong, active digital presence",
                "Consistent brand identity and visuals",
                "Higher audience interaction",
                "Effective product storytelling",
            ],
        },
        contentSamples: [
            {
                title: "Social Media Post",
                desc: "Showcasing furniture products with consistent brand visuals.",
                img: sofiafter,
            },
            {
                title: "Product Highlight",
                desc: "Highlighting craftsmanship and functionality through creative content.",
                img: sofibefore,
            },
        ],
        tools: [
            Figma,
            Share2,
            Smartphone,
            Type,
            Palette,
        ],
    },

    skillbridge: {
        companyName: "Skillbridge Institute of Technology",
        logo: skillbridgeLogo,
        description: `Skillbridge Institute of Technology is a practical, skill-focused education center preparing students for technology-driven careers. Eyoha Digitals partnered with the institute to build a consistent academic brand and create strategic educational content that engages students and strengthens credibility in the tech education space.`,
        challenges: [
            "Limited visibility and brand recognition in a competitive tech education market.",
            "Difficulty communicating the real-world value of courses to prospective students.",
            "Inconsistent messaging across platforms affecting student trust.",
            "Lack of structured content to highlight skills-based learning outcomes.",
            "Need for strategic content to attract motivated, career-focused learners.",
        ],
        services: [
            {
                title: "Full Brand Identity Development",
                description: "Designed a complete visual and strategic identity to position the brand confidently in the market.",
                icon: <Palette />,
                date: "Ongoing",
            },
            {
                title: "Brand Strategy Development",
                description: "Defined a clear academic positioning to enhance credibility and attract students.",
                icon: <Layers />,
                date: "Ongoing",
            },
            {
                title: "Content Strategy Development",
                description: "Created a structured content framework emphasizing industry-relevant skills and outcomes.",
                icon: <TrendingUp />,
                date: "Ongoing",
            },
            {
                title: "Educational Content Planning",
                description: "Selected high-impact topics to showcase programs and student success stories.",
                icon: <Database />,
                date: "Ongoing",
            },
            {
                title: "Creative Content Writing",
                description: "Produced engaging, informative, and persuasive content to drive student interest.",
                icon: <Type />,
                date: "Ongoing",
            },
            {
                title: "Social Media Account Setup",
                description: "Launched fully optimized professional profiles to support visibility and trust from day one.",
                icon: <Globe />,
                date: "Ongoing",
            },
            {
                title: "Social Media Management",
                description: "Managed day-to-day platform activities to ensure consistency, responsiveness, and steady growth.",
                icon: <Share2 />,
                date: "Ongoing",
            },
        ],
        metrics: [
            { label: "Student Interest", value: "Up" },
            { label: "Brand Credibility", value: "Stronger" },
            { label: "Program Visibility", value: "Enhanced" },
            { label: "Consistent Messaging", value: "Yes" },
        ],
        testimonial: {
            quote: "Eyoha Digitals helped us showcase our programs professionally, attracting motivated students consistently.",
            author: "Skillbridge Institute of Technology",
            role: "CEO",
            avatar: testimonial,
        },
        finalOutcome: "Skillbridge Institute of Technology now has a strong, consistent academic brand that attracts motivated students and showcases its programs professionally.",
        beforeImage: skillbefore,
        afterImage: skillafter,
        transformationPoints: {
            before: [
                "Limited brand visibility",
                "Inconsistent messaging",
                "Low student trust",
            ],
            after: [
                "Strong brand recognition",
                "Consistent academic messaging",
                "Increased student interest",
                "Enhanced credibility",
            ],
        },
        contentSamples: [
            {
                title: "Website Homepage",
                desc: "Creating a cohesive visual language through unified layouts and colors.",
                img: homepageskill,
            },
            {
                title: "Telegram Account",
                desc: "Streamlining our content design for a cleaner, more enjoyable reading experience.",
                img: telegramskill,
            },
            {
                title: "Paid Ad",
                desc: "Optimizing ad visuals and copy for a seamless transition from click to community.",
                img: paidaddskill,
            },
        ],
        tools: [
            Figma,
            Globe,
            Component,
            Layers,
            Layout,
            Share2,
            Smartphone,
            Type,
        ],
    },

    safeFurniture: {
        companyName: "Safe Furniture",
        logo: safelogo,
        description: `Safe Furniture is a contemporary furniture brand committed to delivering stylish, durable, and functional pieces for modern living spaces. Eyoha Digitals partnered with Safe Furniture to build the brand from the ground up and manage its ongoing digital growth — establishing a strong identity while driving visibility, engagement, and brand recognition.`,
        challenges: [
            "No existing brand identity, resulting in unclear market positioning.",
            "Zero digital presence at launch, limiting early customer reach.",
            "Difficulty building credibility as a new entrant in a competitive market.",
            "Lack of strategic direction for consistent content and communication.",
            "Need for professional creative assets to showcase products effectively.",
            "Low initial audience awareness and engagement potential.",
        ],
        services: [
            {
                title: "Full Brand Identity Development",
                description: "Designed a complete visual and strategic identity to position the brand confidently in the market.",
                icon: <Palette />,
                date: "Ongoing",
            },
            {
                title: "Social Media Account Setup",
                description: "Launched fully optimized professional profiles to support visibility and trust from day one.",
                icon: <Globe />,
                date: "Ongoing",
            },
            {
                title: "Social Media Management",
                description: "Managed day-to-day platform activities to ensure consistency, responsiveness, and steady growth.",
                icon: <Share2 />,
                date: "Ongoing",
            },
            {
                title: "Content Strategy Development",
                description: "Built a structured content roadmap aligned with brand goals and audience interests.",
                icon: <Layers />,
                date: "Ongoing",
            },
            {
                title: "Creative Content Production",
                description: "Produced high-quality visuals and videos that highlight product quality and lifestyle appeal.",
                icon: <Figma />,
                date: "Ongoing",
            },
            {
                title: "Audience Engagement Optimization",
                description: "Implemented engagement-focused approaches to foster interaction and build a loyal community.",
                icon: <Users />,
                date: "Ongoing",
            },
            {
                title: "Digital Foundation Setup",
                description: "Built a scalable brand infrastructure ready to support future marketing initiatives.",
                icon: <Layout />,
                date: "Ongoing",
            },
        ],
        metrics: [
            { label: "Brand Identity", value: "Complete" },
            { label: "Digital Presence", value: "Strong" },
            { label: "Brand Recognition", value: "Growing" },
            { label: "Community Engagement", value: "Up" },
        ],
        testimonial: {
            quote: "We love our new logo, colors, and overall branding — it exceeded our expectations, boosted our confidence, and built a strong digital presence for our brand.",
            author: "Safe Furniture",
            role: "CEO",
            avatar: testimonial,
        },
        finalOutcome: "Safe Furniture built a premium digital presence that matches their physical product quality.",
        beforeImage: sofibefore,
        afterImage: sofiafter,
        transformationPoints: {
            before: [
                "No brand identity",
                "No digital presence",
                "Low credibility",
            ],
            after: [
                "Complete brand identity",
                "Strong digital presence",
                "High brand recognition",
                "Loyal community",
            ],
        },
        contentSamples: [
            {
                title: "Brand Identity",
                desc: "Complete visual and strategic identity for Safe Furniture.",
                img: safelogo,
            },
            {
                title: "Social Media Post",
                desc: "High-quality visuals highlighting product quality and lifestyle appeal.",
                img: sofiafter,
            },
        ],
        tools: [
            Figma,
            Globe,
            Component,
            Layers,
            Layout,
            Share2,
            Smartphone,
            Type,
        ],
    },

    makiInterior: {
        companyName: "Maki Interior Design",
        logo: makilogo,
        description: `Maki Interior Design is a professional design firm offering customized interior solutions alongside a dedicated interior design school. Eyoha Digitals partnered with the brand to drive qualified traffic through targeted paid advertising — attracting both high-intent clients and prospective students.`,
        challenges: [
            "Limited inbound inquiries for interior design services.",
            "Low awareness of the interior design school among potential students.",
            "Need for highly targeted campaigns to reach two distinct audiences.",
            "Difficulty converting online attention into measurable leads.",
            "Underutilized digital channels for scalable growth.",
        ],
        services: [
            {
                title: "Paid Advertising Strategy",
                description: "Developed a performance-focused ad strategy tailored to generate qualified leads.",
                icon: <Megaphone />,
                date: "Ongoing",
            },
            {
                title: "Facebook & Instagram Advertising",
                description: "Executed targeted campaigns designed to attract both interior design clients and school applicants.",
                icon: <Share2 />,
                date: "Ongoing",
            },
            {
                title: "Audience Targeting & Segmentation",
                description: "Identified and reached high-intent demographics to maximize ad efficiency.",
                icon: <Target />,
                date: "Ongoing",
            },
            {
                title: "Campaign Optimization",
                description: "Continuously refined creatives and targeting to improve results and reduce acquisition costs.",
                icon: <TrendingUp />,
                date: "Ongoing",
            },
            {
                title: "Traffic & Lead Generation",
                description: "Successfully increased inquiry volume and student interest through data-driven advertising.",
                icon: <Users />,
                date: "Ongoing",
            },
        ],
        metrics: [
            { label: "Paid Reach", value: "271K" },
            { label: "Lead Quality", value: "High" },
            { label: "Client Inquiries", value: "Up" },
            { label: "Student Applications", value: "Increased" },
        ],
        testimonial: {
            quote: "The paid campaigns were a game-changer — we saw measurable growth in both client inquiries and student applications.",
            author: "Maki Interior Design",
            role: "CEO",
            avatar: testimonial,
        },
        finalOutcome: "Maki Interior reached new levels of brand awareness and high-intent lead generation.",
        beforeImage: makibefore,
        afterImage: makiafter,
        transformationPoints: {
            before: [
                "Limited inbound inquiries",
                "Low school awareness",
                "Underutilized digital channels",
            ],
            after: [
                "Increased client inquiries",
                "Higher student applications",
                "Effective targeted campaigns",
                "Measurable lead growth",
            ],
        },
        contentSamples: [
            {
                title: "Paid Ad",
                desc: "Optimizing ad visuals and copy for a seamless transition from click to community.",
                img: paidaddskill,
            },
        ],
        tools: [
            Figma,
            Globe,
            Component,
            Layers,
            Layout,
            Share2,
            Smartphone,
            Type,
            Megaphone,
            Target,
        ],
    },

    aminHospital: {
        companyName: "Amin General Hospital",
        logo: aminlogo,
        description: `Amin General Hospital is a trusted healthcare provider dedicated to delivering quality medical services through modern facilities and a patient-centered approach. Eyoha Digitals partnered with the hospital to strengthen its communication foundation by developing strategic, educational, and brand-aligned content that enhances credibility and patient awareness.`,
        challenges: [
            "Lack of structured content to clearly communicate medical services.",
            "Difficulty educating patients in a simple, trustworthy, and professional tone.",
            "Inconsistent messaging that affected brand credibility.",
            "Need for strategic direction before executing marketing activities.",
            "Limited content planning to support long-term awareness goals.",
        ],
        services: [
            {
                title: "Content Strategy Development",
                description: "Built a structured content roadmap aligned with the hospital’s communication goals and patient needs.",
                icon: <Layers />,
                date: "Ongoing",
            },
            {
                title: "Healthcare Content Planning",
                description: "Identified key topics and themes to educate the public while reinforcing professional authority.",
                icon: <Database />,
                date: "Ongoing",
            },
            {
                title: "Creative Content Writing",
                description: "Produced clear, compliant, and patient-friendly copy designed to inform and build trust.",
                icon: <Type />,
                date: "Ongoing",
            },
            {
                title: "Brand Messaging Alignment",
                description: "Refined tone and messaging to ensure consistency across all communication materials.",
                icon: <Palette />,
                date: "Ongoing",
            },
            {
                title: "Digital Presence Strengthening",
                description: "Positioned the hospital as a reliable and accessible healthcare provider online.",
                icon: <Globe />,
                date: "Ongoing",
            },
        ],
        metrics: [
            { label: "Patient Communication", value: "Improved" },
            { label: "Brand Credibility", value: "Stronger" },
            { label: "Content Consistency", value: "Yes" },
            { label: "Public Awareness", value: "Up" },
        ],
        testimonial: {
            quote: "Their content strategy helped us connect better with our patients and present our services clearly online.",
            author: "Amin General Hospital",
            role: "CEO",
            avatar: testimonial,
        },
        finalOutcome: "Improved patient trust and communication.",
        beforeImage: aminbefore,
        afterImage: aminafter,
        transformationPoints: {
            before: [
                "Lack of structured content",
                "Inconsistent messaging",
                "Low brand credibility",
            ],
            after: [
                "Clear content strategy",
                "Consistent brand messaging",
                "Stronger patient trust",
                "Enhanced digital presence",
            ],
        },
        contentSamples: [
            {
                title: "TikTok Video",
                desc: "Creating a rhythmic visual flow that captures attention and builds brand recognition.",
                img: amin2,
            },
            {
                title: "TikTok Video",
                desc: "Creating a rhythmic visual flow that captures attention and builds brand recognition.",
                img: amin1,
            },
        ],
        tools: [
            Figma,
            Globe,
            Component,
            Layers,
            Layout,
            Share2,
            Smartphone,
            Type,
        ],
    },

    beltechSolutions: {
        companyName: "Beltech Solutions",
        logo: beltechlogo,
        description: `Beltech Solutions is a professional digital business solutions company specializing in ERP systems, Odoo implementations, website development, and related business technologies. Eyoha Digitals partnered with Beltech Solutions to craft a strong brand identity from scratch and establish a professional presence on LinkedIn and Telegram through strategic content and visual storytelling.`,
        challenges: [
            "No established brand identity, limiting recognition in the B2B tech market.",
            "Lack of professional digital channels to communicate expertise and services.",
            "Difficulty conveying complex ERP and tech solutions in a clear, engaging way.",
            "Inconsistent messaging across platforms affecting credibility.",
            "Need for strategic content to attract business clients and partners.",
        ],
        services: [
            {
                title: "Brand Identity Creation",
                description: "Developed a full visual and messaging system to establish professionalism and trust.",
                icon: <Palette />,
                date: "Ongoing",
            },
            {
                title: "Content Strategy Development",
                description: "Built a structured content plan tailored for B2B audiences on LinkedIn and Telegram.",
                icon: <Layers />,
                date: "Ongoing",
            },
            {
                title: "Professional Social Media Setup",
                description: "Launched and optimized LinkedIn and Telegram accounts to enhance discoverability.",
                icon: <Globe />,
                date: "Ongoing",
            },
            {
                title: "Copywriting & Visual Content Production",
                description: "Created compelling copy and supporting visuals to communicate services effectively.",
                icon: <Type />,
                date: "Ongoing",
            },
            {
                title: "Messaging Alignment",
                description: "Ensured consistent tone and presentation to strengthen authority in the business solutions market.",
                icon: <Share2 />,
                date: "Ongoing",
            },
        ],
        metrics: [
            { label: "Brand Identity", value: "Complete" },
            { label: "LinkedIn Presence", value: "Professional" },
            { label: "B2B Credibility", value: "Stronger" },
            { label: "Messaging Consistency", value: "Yes" },
        ],
        testimonial: {
            quote: "We now have a clear, credible digital identity that effectively communicates our solutions to business clients.",
            author: "Beltech Solutions",
            role: "CEO",
            avatar: testimonial,
        },
        finalOutcome: "Increased enrollment queries and a strong B2B brand presence.",
        beforeImage: beforegalaxy,
        afterImage: linkedinaccount,
        transformationPoints: {
            before: [
                "No brand identity",
                "No professional channels",
                "Inconsistent messaging",
            ],
            after: [
                "Complete brand identity",
                "Professional LinkedIn & Telegram presence",
                "Clear service communication",
                "Strong B2B credibility",
            ],
        },
        contentSamples: [
            {
                title: "Website Homepage",
                desc: "Creating a cohesive visual language through unified layouts and colors.",
                img: websitehomepage,
            },
            {
                title: "Telegram Account",
                desc: "Streamlining our content design for a cleaner, more enjoyable reading experience.",
                img: telegramaccount,
            },
            {
                title: "LinkedIn Account",
                desc: "Professional presence for B2B audience engagement.",
                img: linkedinaccount,
            },
        ],
        tools: [
            Figma,
            Globe,
            Component,
            Layers,
            Layout,
            Share2,
            Smartphone,
            Type,
        ],
    },
};
