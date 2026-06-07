function Timeline({ year, setYear }) {

    const handleChange = (e) => {
        setYear(parseInt(e.target.value, 10));
    };

    return (
        <div className="h-1/6 min-h-[120px] flex-shrink-0 glass-card card-shadow p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-slate-200">
                    Timeline
                </h2>
                <span className="px-4 py-1.5 rounded-full bg-indigo-950/40 border border-indigo-500/30">
                    <span className="font-bold text-indigo-400">
                        {year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`}
                    </span>
                </span>
            </div>

            <input
                type="range"
                min="-300"
                max="1947"
                className="w-full mb-2 accent-indigo-600 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                value={year}
                onChange={handleChange}
            />
            <div className="text-slate-400 flex justify-between text-xs font-medium px-0.5">
                <span>300 BCE</span>
                <span>1947 CE</span>
            </div>
        </div>
    );
}

export default Timeline;