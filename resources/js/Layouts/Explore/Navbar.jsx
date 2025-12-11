import React from "react";

function Navbar() {
    return (
        <nav className="bg-white/80 backdrop-blur-lg shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img
                            src="Assets/Logo/logo.png"
                            alt=""
                            className="w-50 h-10"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
