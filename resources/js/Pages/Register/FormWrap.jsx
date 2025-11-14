import React, { Children } from "react";

function FormWrap({ title, subtitle, children, icon: Icon }) {
    return (
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border-4 border-purple-200 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 shadow-lg">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-purple-600 font-bold text-2xl mr-4 shadow-md">
                    {Icon && <Icon className="w-8 h-8" />}
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white">{title}</h2>
                    <p className="text-purple-100 text-sm">{subtitle}</p>
                </div>
            </div>
            {children}
        </div>
    );
}
export default FormWrap;
