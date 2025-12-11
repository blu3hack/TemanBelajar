import {
    BookOpen,
    TrendingUp,
    Award, // Dipertahankan
    CheckCircle, // Ganti dari emoji ✅
} from "lucide-react";
const SubjectCard = ({ subject }) => {
    let iconComponent;
    switch (subject.icon) {
        case "Calculations":
            iconComponent = <BookOpen size={30} className="text-white" />;
            break;
        case "Physics":
            iconComponent = <TrendingUp size={30} className="text-white" />;
            break;
        case "Chemistry":
            iconComponent = <Award size={30} className="text-white" />;
            break;
        default:
            iconComponent = <BookOpen size={30} className="text-white" />;
    }

    return (
        <div
            className={`bg-gradient-to-r ${subject.color} rounded-2xl p-5 text-white shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]`}
        >
            <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                    {iconComponent}
                </div>
                <div className="flex-1">
                    <h4 className="text-xl sm:text-2xl font-bold">
                        {subject.name}
                    </h4>
                    <p className="text-white/90 text-sm">
                        Tingkat: {subject.level}
                    </p>
                </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 space-y-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <CheckCircle size={14} className="flex-shrink-0" />
                    <span>Metode belajar terstruktur</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <CheckCircle size={14} className="flex-shrink-0" />
                    <span>Fokus pada pemahaman konsep inti</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <CheckCircle size={14} className="flex-shrink-0" />
                    <span>Penyelesaian masalah tingkat lanjut</span>
                </div>
            </div>
        </div>
    );
};
export default SubjectCard; // ⬅ WAJIB ADA
