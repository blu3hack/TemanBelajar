import React from "react";
import { Video, Users, Star } from "lucide-react";
function ClassRecomCard({ cls }) {
    return (
        <>
            <div className="glass-effect rounded-3xl overflow-hidden border-2 border-purple-200 shadow-xl card-hover">
                <div className="h-40 bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <Video className="w-20 h-20 text-white drop-shadow-2xl relative z-10 animate-float" />
                    <div className="absolute top-2 right-2 bg-white/30 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold">
                        Populer ⭐
                    </div>
                </div>
                <div className="p-6">
                    <h3 className="font-black text-gray-800 text-lg mb-2">
                        {cls.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium">
                        {cls.mentor}
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center gap-1 text-gray-700">
                            <Users className="w-4 h-4 text-purple-500" />
                            <span className="text-sm font-semibold">
                                {cls.students} siswa
                            </span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            <span className="text-sm font-black text-gray-800">
                                {cls.rating}
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-6">
                        <span className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            {cls.price}
                        </span>
                        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                            Lihat
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClassRecomCard;
