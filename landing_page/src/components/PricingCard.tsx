
// import React from "react";
// import { Check, X } from "lucide-react"; // Use check and X icons for feature list

// interface PricingCardProps {
//     planName: string;
//     description: string;
//     price: string;
//     isFeatured: boolean;
//     features: { text: string; included: boolean }[];
//     gradientStart: string;
//     gradientEnd: string;
// }

// const PricingCard: React.FC<PricingCardProps> = ({
//     planName,
//     description,
//     price,
//     isFeatured,
//     features,
//     gradientStart,
//     gradientEnd,
// }) => {
//     // Base card styling
//     const cardBase =
//         "bg-white rounded-[24px] shadow-lg overflow-hidden flex flex-col h-full";
//     // Styling for the featured card (the middle, highlighted one)
//     const featuredStyle =
//         "transform scale-[1.03] shadow-2xl ring-4 ring-purple-200";

//     return (
//         <div
//             className={`${cardBase} ${
//                 isFeatured ? featuredStyle : "shadow-xl"
//             }`}
//         >
//             {/* Header with Gradient Background */}
//             <div
//                 className="pt-10 pb-6 px-6 text-white"
//                 style={{
//                     background: `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`,
//                 }}
//             >
//                 <h3 className="text-xl font-bold mb-1">{planName}</h3>
//                 <p className="text-sm font-light mb-4">{description}</p>
//                 <div className="flex items-end space-x-2">
//                     <span className="text-4xl font-extrabold">{price}</span>
//                     <span className="text-base font-medium">/ month</span>
//                 </div>
//                 {/* CTA Button in the header, matching the header gradient */}
//                 <button
//                     className="w-full mt-4 py-3 text-sm font-bold rounded-lg transition-colors duration-200"
//                     style={{
//                         backgroundColor: isFeatured
//                             ? "#FFFFFF"
//                             : "rgba(255, 255, 255, 0.2)",
//                         color: isFeatured ? "#6A0DAD" : "#FFFFFF",
//                     }}
//                 >
//                     {isFeatured ? "Get Started Now" : "Choose Plan"}
//                 </button>
//             </div>

//             {/* Features List */}
//             <div className="p-6 flex-grow">
//                 <ul className="space-y-4">
//                     {features.map((feature, index) => (
//                         <li
//                             key={index}
//                             className="flex items-start text-gray-700 text-sm"
//                         >
//                             {feature.included ? (
//                                 <Check
//                                     size={18}
//                                     className="text-green-500 flex-shrink-0 mr-3 mt-1"
//                                 />
//                             ) : (
//                                 <X
//                                     size={18}
//                                     className="text-red-400 flex-shrink-0 mr-3 mt-1"
//                                 />
//                             )}
//                             <span
//                                 className={
//                                     feature.included
//                                         ? ""
//                                         : "line-through opacity-70"
//                                 }
//                             >
//                                 {feature.text}
//                             </span>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Bottom Button (For non-featured cards) - Matches the Figma design placement */}
//             {!isFeatured && (
//                 <div className="p-6 pt-0">
//                     <button className="w-full py-3 text-sm font-bold rounded-lg transition-colors duration-200 text-gray-900 border border-gray-300 hover:bg-gray-50">
//                         Learn More
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default PricingCard;
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface PricingCardProps {
  title: string;
  features: string[];
  buttonText: string;
  isFeatured?: boolean; // Set this to true for the middle card by default
}

export const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  features, 
  buttonText, 
  isFeatured = false 
}) => {
  return (
    <div className={`
      relative flex flex-col items-center p-8 rounded-[2.5rem] transition-all duration-300 cursor-default
      bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-4
      ${isFeatured 
        ? 'border-[#FF6B00] scale-105 z-10' 
        : 'border-transparent hover:border-[#FF6B00] hover:scale-105 hover:z-10'
      }
      group
    `}>
      {/* Most Popular Badge */}
      <div className={`
        absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full bg-[#FF6B00] 
        transition-opacity duration-300
        ${isFeatured ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
      `}>
        <span className="text-white text-[10px] font-black uppercase tracking-widest">
          Most Popular
        </span>
      </div>

      {/* Header */}
      <h3 className="text-[#8B5CF6] text-3xl font-bold mb-10 mt-4">
        {title}
      </h3>

      {/* Features List */}
      <ul className="flex-grow space-y-4 w-full mb-10">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-left">
            <CheckCircle2 className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
            <span className="text-gray-500 text-sm font-medium leading-tight">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button className={`
        w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300
        ${isFeatured 
          ? 'bg-[#FF6B00] text-white shadow-lg shadow-orange-200' 
          : 'bg-[#7C3AED] text-white group-hover:bg-[#FF6B00] group-hover:shadow-orange-200'
        }
      `}>
        {buttonText}
      </button>
    </div>
  );
};