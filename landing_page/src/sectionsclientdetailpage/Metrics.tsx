import React from "react";
import { TrendingUp } from "lucide-react";

interface MetricItem {
    label: string;
    value: string;
}

interface MetricsProps {
    metrics: MetricItem[];
    accentColor?: string;
}

export const Metrics = ({ metrics, accentColor = "#7C3AED" }: MetricsProps) => {
    return (
        <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-transparent">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-center">
                    Results & Outcomes
                </h2>
                <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto text-lg">
                    Measurable impact we delivered for {metrics[0]?.label ? "" : ""}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {metrics.map((m, i) => (
                        <div
                            key={i}
                            className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: accentColor, opacity: 0.15 }}>
                                <TrendingUp className="w-8 h-8" style={{ color: accentColor }} />
                            </div>
                            <span className="block text-4xl md:text-5xl font-black mb-4 tracking-tighter" style={{ color: accentColor }}>
                                {m.value}
                            </span>
                            <p className="text-sm font-black text-gray-500 uppercase tracking-widest">
                                {m.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
