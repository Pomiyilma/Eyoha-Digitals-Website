import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

// app/layout.tsx
export const metadata: Metadata = {
    title: "Lisan Creatives - Elevate Your Brand with Expert Digital Marketing",
    description: "Expert digital marketing services for your brand.",
    icons: {
        icon: "/lisan-logo.png", // Standard favicon
        shortcut: "/lisan-logo.png", // Alternative for older browsers
        apple: "/lisan-logo.png", // For iOS home screen bookmarks
    },
};

// app/layout.tsx
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} font-sans antialiased text-slate-900`}
            >
                {children}
            </body>
        </html>
    );
}
