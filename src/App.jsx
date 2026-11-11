import { useMemo, useState } from "react";
import MapView from "./components/MapView";
import Timeline from "./components/Timeline";
import ExplorePanel from "./components/ExplorePanel";
import historicalData from "./data/historicalData";

const formatYear = year => year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`;

export default function App() {
  const [year, setYear] = useState(-250);
  const [playing, setPlaying] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [query, setQuery] = useState("");
  const [showTerritories, setShowTerritories] = useState(true);
  const [showPlaces, setShowPlaces] = useState(true);
  const [showEvents, setShowEvents] = useState(true);

  const visibleItems = useMemo(() => historicalData.filter(item => {
    const active = year >= item.startYear && year <= item.endYear;
    const enabled = item.kind === "event" ? showEvents : showPlaces;
    return active && enabled && `${item.title} ${item.location} ${item.description}`.toLowerCase().includes(query.toLowerCase());
  }), [year, query, showPlaces, showEvents]);

  const selected = activeItem ? historicalData.find(item => item.title === activeItem) ?? null : null;
  const selectedIsVisible = selected && visibleItems.some(item => item.title === selected.title);

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="#" aria-label="TimeMap India home">
          <span className="brand-mark">T</span>
          <span><strong>TIME<span>MAP</span></strong><small>INDIA · HISTORICAL ATLAS</small></span>
        </a>
        <div className="topbar-center"><span className="live-dot" /> INTERACTIVE HISTORY EXPLORER</div>
        <div className="topbar-right"><span className="status-pill">BETA</span><span className="avatar">A</span></div>
      </header>

      <section className="intro-row">
        <div><div className="eyebrow">THE SUBCONTINENT THROUGH TIME</div><h1>History, <em>mapped.</em></h1><p>Move through centuries. Discover the people, places and events that shaped India.</p></div>
        <div className="era-card"><span className="era-label">YOU ARE EXPLORING</span><strong>{formatYear(year)}</strong><small>{visibleItems.length} matching records</small></div>
      </section>

      <section className="workspace">
        <div className="map-column">
          <div className="map-toolbar">
            <div className="map-heading"><span className="map-pin-icon">◎</span><div><strong>Historical map</strong><small>Indian subcontinent</small></div></div>
            <div className="layer-controls">
              <button className={showTerritories ? "layer active" : "layer"} onClick={() => setShowTerritories(v => !v)}><i className="swatch territory" /> Territories</button>
              <button className={showPlaces ? "layer active" : "layer"} onClick={() => setShowPlaces(v => !v)}><i className="swatch place" /> Places</button>
              <button className={showEvents ? "layer active" : "layer"} onClick={() => setShowEvents(v => !v)}><i className="swatch event" /> Events</button>
            </div>
          </div>
          <MapView year={year} items={visibleItems} selected={selectedIsVisible ? selected : null} onSelect={item => setActiveItem(item.title)} showTerritories={showTerritories} />
          <div className="map-footer"><span><i className="legend-dot territory-dot" /> Schematic territorial reconstruction · see polygon notes</span><span>Map data © OpenStreetMap · CARTO</span></div>
          <Timeline year={year} setYear={setYear} playing={playing} setPlaying={setPlaying} />
        </div>
        <ExplorePanel year={year} items={visibleItems} selected={selectedIsVisible ? selected : null} onSelect={item => setActiveItem(item?.title ?? null)} query={query} setQuery={setQuery} />
      </section>
      <footer className="app-footer"><span>TIME MAP INDIA</span><span>Historical boundaries are indicative reconstructions, not surveyed borders.</span><span>BUILT TO EXPLORE THE PAST</span></footer>
    </main>
  );
}
