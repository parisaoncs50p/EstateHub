
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";

function LocationMarker({ onSelect }) {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      onSelect(e.latlng);
    },
  });

  return position ? <Marker position={position} /> : null;
}

function PropertyLocationPicker({ onLocationChange }) {
  return (
    <div className="overflow-hidden rounded-2xl border">

      <MapContainer
        center={[35.6892, 51.389]}
        zoom={11}
        style={{
          height: "420px",
          width: "100%",
        }}
      >

        <TileLayer
          attribution="OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarker
          onSelect={onLocationChange}
        />

      </MapContainer>

    </div>
  );
}

export default PropertyLocationPicker;