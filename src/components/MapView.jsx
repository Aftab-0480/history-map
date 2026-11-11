import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polygon, CircleMarker, useMap } from "react-leaflet";
import L from "leaflet";
import territories from "../data/territories";

const boundsForIndia = [[5, 66], [37, 98]];

function Camera({ selected }) {
  const map = useMap();
  useEffect(() => {
    if (selected) map.flyTo([selected.lat, selected.lng], 6, { duration: 0.8 });
  }, [selected, map]);
  return null;
}

function createDot(color) {
  return L.divIcon({
    className: "history-marker-wrap",
    html: `<span class="history-marker" style="--marker-color:${color}"><i></i></span>`,
    iconSize: [22, 22], iconAnchor: [11, 11]
  });
}

function TerritoryPopup({ territory }) {
  return <div className="map-popup">
    <b>{territory.name}</b>
    <span>{territory.startYear < 0 ? `${Math.abs(territory.startYear)} BCE` : `${territory.startYear} CE`} – {territory.endYear < 0 ? `${Math.abs(territory.endYear)} BCE` : `${territory.endYear} CE`}</span>
    <small><strong>Capital / centre:</strong> {territory.capital}</small>
    <small>{territory.extentNote}</small>
    <small><strong>Boundary confidence:</strong> {territory.confidence}. {territory.sourceNote}</small>
    <small><strong>Important:</strong> Schematic historical reconstruction, not an exact or surveyed boundary.</small>
  </div>;
}

export default function MapView({ year, items, selected, onSelect, showTerritories }) {
  const activeTerritories = useMemo(
    () => territories.filter(t => year >= t.startYear && year <= t.endYear),
    [year]
  );

  return (
    <div className="map-frame">
      <MapContainer center={[22.8, 81.5]} zoom={4} minZoom={3} maxZoom={9}
        maxBounds={boundsForIndia} maxBoundsViscosity={0.6} scrollWheelZoom className="leaflet-map">
        <TileLayer
          url={`https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png?key=${import.meta.env.VITE_CARTO_API_KEY}`}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        <Camera selected={selected} />
        {showTerritories && activeTerritories.map(territory => (
          <Polygon key={territory.id} positions={territory.coordinates}
            pathOptions={{ color: territory.color, weight: 2, opacity: .95, fillColor: territory.color, fillOpacity: .2, dashArray: "7 5" }}>
            <Popup><TerritoryPopup territory={territory} /></Popup>
          </Polygon>
        ))}
        {items.map(item => (
          <Marker key={item.title} position={[item.lat, item.lng]}
            icon={createDot(item.kind === "event" ? "#e9a45d" : "#7dd3c7")}
            eventHandlers={{ click: () => onSelect(item) }}>
            <Popup><div className="map-popup"><b>{item.title}</b><span>{item.location}</span><small>{item.description}</small></div></Popup>
          </Marker>
        ))}
        {selected && <CircleMarker center={[selected.lat, selected.lng]} radius={15}
          pathOptions={{ color: "#fff", weight: 1, fillColor: "#7dd3c7", fillOpacity: .15 }} />}
      </MapContainer>
      <div className="map-coordinates"><span>◉</span> INDIA & SOUTH ASIA <b>{year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`}</b></div>
      <div className="map-compass">N<br/><span>↑</span></div>
    </div>
  );
}
