import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import historicalData from "../data/historicalData";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

// FIX: Fixes the missing marker icon issue in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function Map({ year }) {
    const visibleLocations = historicalData.filter(
        (data) => year >= data.startYear && year <= data.endYear
    );

    function AutoFitCamera({ locations }) {
        const map = useMap();

        useEffect(() => {
            if (!locations || locations.length === 0) return;

            if (locations.length === 1) {
                map.flyTo([locations[0].lat, locations[0].lng], 5, { duration: 1.2 });
            } else {
                const points = locations.map((loc) => [loc.lat, loc.lng]);
                const bounds = L.latLngBounds(points);

                map.flyToBounds(bounds, {
                    padding: [50, 50],
                    duration: 1.2,
                    maxZoom: 6 
                });
            }
        }, [locations, map]);

        return null;
    }

    const targetLocation = visibleLocations.length > 0 ? visibleLocations[0] : null;

    return (
        <div className="h-5/6 flex-1 glass-card card-shadow overflow-hidden rounded-xl border border-gray-800">
            <MapContainer
                center={[22.5937, 78.9629]} // Centered on India
                zoom={4}
                className="h-full w-full"
            >
                
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                />

                <AutoFitCamera locations={visibleLocations} />

                {visibleLocations.map((location) => (
                    <Marker
                        key={location.title}
                        position={[location.lat, location.lng]}
                    >
                        <Popup>
                            <div className="p-1 max-w-xs text-slate-900">
                                <h3 className="text-base font-bold text-indigo-600 mb-0.5">
                                    {location.title}
                                </h3>
                                <p className="text-sm font-semibold text-slate-700 mb-1">
                                    {location.location}
                                </p>
                                <p className="text-xs text-slate-500">
                                    Active: {location.startYear < 0 ? `${Math.abs(location.startYear)} BCE` : `${location.startYear} CE`} - {location.endYear < 0 ? `${Math.abs(location.endYear)} BCE` : `${location.endYear} CE`}
                                </p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

export default Map;