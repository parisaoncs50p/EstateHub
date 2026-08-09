
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function PropertyMap({ property }) {
  // اگر موقعیت ملک ثبت نشده باشد
  if (
    !property ||
    !property.location ||
    property.location.lat === undefined ||
    property.location.lng === undefined
  ) {
    return (
      <div className="rounded-3xl bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-3xl font-black text-slate-900">
          موقعیت ملک
        </h2>

        <div className="flex h-[450px] items-center justify-center rounded-3xl bg-slate-100">
          <p className="text-lg text-slate-500">
            موقعیت این ملک هنوز ثبت نشده است.
          </p>
        </div>
      </div>
    );
  }

  const position = [
    property.location.lat,
    property.location.lng,
  ];

  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-3xl font-black text-slate-900">
        موقعیت ملک
      </h2>

      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        className="h-[450px] w-full rounded-3xl"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>
            <div className="text-center">
              <h3 className="font-bold">
                {property.title}
              </h3>

              <p className="mt-1 text-sm">
                {property.city}
              </p>

              <p className="mt-2 font-bold text-orange-500">
                {property.price}
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default PropertyMap;