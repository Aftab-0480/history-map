import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import historicalData from "../data/historicalData";
import { useEffect } from "react";



function Map({ year }) {
    const visibleLocations = historicalData.filter(
        (data) =>
            year >= data.startYear &&
            year <= data.endYear
    );

    function FlyToLocation({ location }) {
        const map = useMap();

        useEffect(() => {
            if (location) {
                map.flyTo(
                    [location.lat, location.lng],
                    8,
                    {
                        duration: 2
                    }
                );
            }
        }, [location, map]);

        return null;
    }

    const selectedLocation =
        visibleLocations.length === 1
            ? visibleLocations[0]
            : null;

    return (
        <div className="h-5/6 border bg-gray-800">
            <MapContainer
                center={[22.5937, 78.9629]}
                zoom={4}
                className="h-full w-full"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <FlyToLocation location={selectedLocation} />

                {visibleLocations.map((location) => (
                    <Marker
                        key={location.title}
                        position={[location.lat, location.lng]}
                    >
                        <Popup>
                            <div>
                                <h3 className="text-lg font-bold">{location.title}</h3>
                                <p className="text-2xl text-gray-300">{location.location}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

export default Map;