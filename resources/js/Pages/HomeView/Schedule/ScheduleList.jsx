import { Calendar } from "lucide-react";
import Label from "./Label";
import ScheduleCard from "./ScheduleCard";

export default function ScheduleList({ todaySchedule }) {
    return (
        <section className="mb-10">
            <Label label="Jadwal Kamu" icon={Calendar} />

            <div className="space-y-5">
                {todaySchedule.map((cls, i) => (
                    <ScheduleCard cls={cls} key={i} />
                ))}
            </div>
        </section>
    );
}
