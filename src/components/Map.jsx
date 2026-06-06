import { MapContainer, TileLayer, Marker } from "react-leaflet";
import historicalData from "../data/historicalData";

function Map({ year }) {
    const visibleLocations = historicalData.filter(
        (data) =>
            year >= data.startYear &&
            year <= data.endYear
    );

    return (
        <div className="h-5/6 border bg-gray-800">
            <MapContainer
                center={[22.5937, 78.9629]}
                zoom={2}
                className="h-full w-full"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {visibleLocations.map((location) => (
                    <Marker
                        key={location.title}
                        position={[location.lat, location.lng]}
                    />
                ))}
            </MapContainer>
        </div>
    );
}

export default Map;