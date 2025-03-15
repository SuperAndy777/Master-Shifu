import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const HotspotsMap = ({ hotspots }) => (
    <MapContainer center={[12.9716, 77.5946]} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {hotspots.map((hotspot, index) => (
            <Marker
                key={index}
                position={[hotspot.lat, hotspot.lng]}
                icon={hotspot.demand === 'high' ? redIcon : yellowIcon}
            />
        ))}
    </MapContainer>
);

export default HotspotsMap;
