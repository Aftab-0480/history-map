const formatYear = year => year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`;

export default function ExplorePanel({ year, items, selected, onSelect, query, setQuery }) {
  return (
    <aside className="explore-panel">
      <div className="panel-head"><div><span className="eyebrow">DISCOVER THE PAST</span><h2>Explore</h2></div><span className="count-badge">{items.length}</span></div>
      <label className="search-box"><span>⌕</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search places, events..." /></label>
      {selected ? (
        <div className="selected-detail">
          <button className="back-link" onClick={() => onSelect(null)}>← All discoveries</button>
          <div className="detail-art"><span>✦</span><small>HISTORICAL RECORD</small></div>
          <span className="eyebrow">{selected.kind === "event" ? "EVENT" : "PLACE / POLITY"}</span>
          <h3>{selected.title}</h3><p className="detail-location">⌖ {selected.location}</p>
          <p className="detail-description">{selected.description}</p>
          <div className="detail-dates"><span>ACTIVE PERIOD</span><b>{formatYear(selected.startYear)} — {formatYear(selected.endYear)}</b></div>
          <div className="detail-note">This record is a curated starting point. Consult the cited historical literature and specialist maps for detailed chronology and geography.</div>
        </div>
      ) : (
        <>
          <div className="panel-subtitle"><span>ACTIVE IN {formatYear(year).toUpperCase()}</span><span>SELECT TO FOCUS MAP</span></div>
          <div className="discovery-list">
            {items.length ? items.map(item => (
              <button className="discovery-item" key={item.title} onClick={() => onSelect(item)}>
                <span className={`item-symbol ${item.kind === "event" ? "event-symbol" : ""}`}>{item.kind === "event" ? "✦" : "⌖"}</span>
                <span className="item-copy"><strong>{item.title}</strong><small>{item.location}</small></span>
                <span className="item-arrow">↗</span>
              </button>
            )) : <div className="empty-state"><span>⌕</span><strong>No records found</strong><p>Try another search or move the timeline to a different period.</p></div>}
          </div>
        </>
      )}
      <div className="panel-bottom"><span className="source-mark">i</span><p>Territorial outlines are schematic, period-dependent teaching aids. They are not exact surveyed borders; see each polygon's popup for its basis and limitations.</p></div>
    </aside>
  );
}
