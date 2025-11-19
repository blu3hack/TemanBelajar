import React from "react";
import Label from "./Label";
import ClassRecomCard from "./ClassRecomCard";

function CLassRecomList({ recommendedClasses }) {
    return (
        <>
            <section>
                <Label Href="#" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recommendedClasses.map((cls, i) => (
                        <ClassRecomCard cls={cls} key={i} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default CLassRecomList;
