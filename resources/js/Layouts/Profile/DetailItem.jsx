import React from "react";

const DetailItem = ({
    icon: Icon,
    label,
    value,
    color,
    bg,
    isLink = false,
    linkUrl = "#",
}) => (
    <a
        href={isLink ? linkUrl : "#"}
        target={isLink ? "_blank" : "_self"}
        rel={isLink ? "noopener noreferrer" : ""}
        className={`flex items-center gap-4 p-3 rounded-xl transition duration-200 ${
            isLink ? "hover:bg-indigo-50 cursor-pointer" : ""
        } border border-gray-100 hover:border-indigo-200`}
    >
        <div
            className={`w-10 h-10 ${bg} rounded-full flex items-center justify-center flex-shrink-0 shadow-sm`}
        >
            <Icon className={color} size={18} />
        </div>
        <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 truncate">{label}</p>
            <p
                className={`font-medium text-sm truncate ${
                    isLink
                        ? "text-indigo-600 group-hover:underline"
                        : "text-gray-900"
                }`}
            >
                {value}
            </p>
        </div>
    </a>
);

export default DetailItem;
