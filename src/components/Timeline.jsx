import { useState } from "react";

function Timeline({ year, setYear }) {

    const handleChange = (e) => {
        setYear(parseInt(e.target.value));
    } 

    return (
        <div className="h-1/6 border bg-gray-800 p-4">
            <h2 className="text-white">
                Timeline: {year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`}
            </h2>

            <input
                type="range"
                min="-300"
                max="1947"
                className="w-full"
                value={year}
                onChange={handleChange}
            />
            <div className="text-white flex justify-between mt-2 text-sm">
                <span>300 BCE</span>
                <span>1947</span>
            </div>
        </div>
    )
}

export default Timeline;