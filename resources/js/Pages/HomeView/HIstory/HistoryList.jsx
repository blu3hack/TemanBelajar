import React from "react";
import Label from "./Label";
import HistoryCard from "./HistoryCard";

function HistoryList({ courseHistory }) {
    return (
        <>
            <section className="mb-10">
                <Label />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {courseHistory.map((item, i) => (
                        <HistoryCard item={item} key={i} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default HistoryList;
