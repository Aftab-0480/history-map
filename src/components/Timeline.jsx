import { useEffect } from "react";

const minYear = -500;
const maxYear = 1947;
const formatYear = year => year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`;

export default function Timeline({ year, setYear, playing, setPlaying }) {
  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      setYear(current => {
        if (current >= maxYear) { setPlaying(false); return maxYear; }
        return Math.min(current + 2, maxYear);
      });
    }, 90);
    return () => window.clearInterval(timer);
  }, [playing, setYear, setPlaying]);

  const progress = ((year - minYear) / (maxYear - minYear)) * 100;
  const jump = value => { setYear(value); setPlaying(false); };

  return (
    <div className="timeline-card">
      <div className="timeline-top"><div><span className="eyebrow">TRAVEL THROUGH TIME</span><h3>Timeline navigator</h3></div><div className="year-readout">{formatYear(year)}</div></div>
      <div className="range-wrap">
        <input aria-label="Historical year" type="range" min={minYear} max={maxYear} value={year} onChange={e => jump(Number(e.target.value))} style={{ "--progress": `${progress}%` }} />
        <div className="range-labels"><span>500 BCE</span><span>1 CE</span><span>1000 CE</span><span>1947 CE</span></div>
      </div>
      <div className="timeline-bottom">
        <div className="play-controls"><button className="play-button" onClick={() => setPlaying(v => !v)}>{playing ? "Ⅱ" : "▶"} <span>{playing ? "Pause" : "Play history"}</span></button><button className="step-button" onClick={() => jump(Math.max(minYear, year - 25))}>−25</button><button className="step-button" onClick={() => jump(Math.min(maxYear, year + 25))}>+25</button></div>
        <div className="milestones"><button onClick={() => jump(-322)}>Mauryan rise</button><button onClick={() => jump(320)}>Gupta era</button><button onClick={() => jump(850)}>Chola era</button><button onClick={() => jump(1336)}>Vijayanagara</button><button onClick={() => jump(1526)}>Mughal era</button><button onClick={() => jump(1947)}>Independence</button></div>
      </div>
    </div>
  );
}
