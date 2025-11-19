import { UserCheck, Clock, PlayCircle } from "lucide-react";

export default function ScheduleCard({ cls }) {
    return (
        <div className="glass-effect rounded-3xl p-6 border-2 border-cyan-200 shadow-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 card-hover">
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {cls.mentor.split(" ")[1][0]}
                </div>
                <div>
                    <h3 className="text-xl font-black text-gray-800">
                        {cls.subject}
                    </h3>
                    <p className="text-gray-600 flex items-center gap-2 mt-1">
                        <UserCheck className="w-4 h-4 text-cyan-500" />
                        {cls.mentor}
                    </p>
                </div>
            </div>
            <div className="text-right">
                <p className="text-lg font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent flex items-center gap-2 justify-end mb-3">
                    <Clock className="w-5 h-5 text-cyan-500" />
                    {cls.time}
                </p>
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    <PlayCircle className="w-5 h-5" />
                    Detil Kelas
                </button>
            </div>
        </div>
    );
}
