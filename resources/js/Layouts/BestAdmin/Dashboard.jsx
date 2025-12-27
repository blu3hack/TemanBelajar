import React from "react";
import Statscard from "./Statscard";
import { Users, BookOpen, DollarSign, UserCheck } from "lucide-react";
function Dashboard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Statscard
                label="Total Siswa"
                value="2,847"
                color="bg-blue-500"
                icon={Users}
            />
            <Statscard
                label="Revenue"
                value="145.2M"
                color="bg-green-500"
                icon={DollarSign}
            />
            <Statscard
                label="Kelas"
                value="342"
                color="bg-purple-500"
                icon={BookOpen}
            />
            <Statscard
                label="Active Mentor"
                value="156"
                color="bg-orange-500"
                icon={UserCheck}
            />
        </div>
    );
}

export default Dashboard;
