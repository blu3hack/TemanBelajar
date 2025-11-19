import React from "react";
import StatsCard from "../Stats/StatsCard";

function MainStats({
    streak,
    rank,
    points,
    label1,
    label2,
    label3,
    icon1,
    icon2,
    icon3,
}) {
    return (
        <div className="glass-effect rounded-3xl p-6 sm:p-8 border-2 border-cyan-200 shadow-2xl mb-8 animate-pulse-glow">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <StatsCard
                    label={label1}
                    icon={icon1}
                    color="orange"
                    streak={streak}
                />

                <StatsCard
                    label={label2}
                    icon={icon2}
                    color="yellow"
                    streak={rank}
                />

                <StatsCard
                    label={label3}
                    icon={icon3}
                    color="cyan"
                    streak={points}
                />
            </div>
        </div>
    );
}

export default MainStats;
