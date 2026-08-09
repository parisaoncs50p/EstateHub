
import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";

function ChangeView({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, 15);
    }
  }, [position, map]);

  return null;
}

function LocationMarker({
  onSelect,
  initialLocation,
}) {
  const [position, setPosition] = useState(
    initialLocation?.lat && initialLocation?.lng
      ? [initialLocation.lat, initialLocation.lng]
      : null
  );

  useEffect(() => {
    if (
      initialLocation?.lat &&
      initialLocation?.lng
    ) {
      setPosition([
        initialLocation.lat,
        initialLocation.lng,
      ]);
    }
  }, [initialLocation]);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);

      onSelect({
        lat: e.latlng.lat,
        lng: e.latlng.lng,
      });
    },
  });

  return (
    <>
      <ChangeView position={position} />

      {position && <Marker position={position} />}
    </>
  );
}

function PropertyLocationPicker({
  onLocationChange,
  initialLocation,
}) {
  return (
    <div className="overflow-hidden rounded-2xl border">

      <MapContainer
        center={
          initialLocation?.lat
            ? [initialLocation.lat, initialLocation.lng]
            : [35.6892, 51.389]
        }
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
          initialLocation={initialLocation}
        />

      </MapContainer>

    </div>
  );
}

export default PropertyLocationPicker;