import React from "react";
import { CheckCircle, GraduationCap } from "lucide-react";

/**
 * Reusable Card Platform Component
 * Props:
 * - label: string
 * - benefits: array of strings
 * - buttonText: string
 * - buttonLink: string
 */

function CardPlatform({ label, benefits, buttonText, buttonLink }) {
    return (
        <div className="space-y-3 sm:space-y-4">
            <p className="text-gray-700 font-semibold text-sm sm:text-base">
                {label}
            </p>

            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                {benefits.map((item, index) => (
                    <li key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                    </li>
                ))}
            </ul>

            {/* <a href={buttonLink}>
                <button className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold hover:shadow-2xl transition transform hover:-translate-y-1 flex items-center justify-center text-sm sm:text-base">
                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    {buttonText}
                </button>
            </a> */}
        </div>
    );
}

export default CardPlatform;
