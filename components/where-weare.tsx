"use client";

import { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { type LatLngTuple, type Map as LeafletMap } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPinned } from "lucide-react";

// Fix for default markers in react-leaflet
const defaultIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Your target location (original address you gave)
const targetLocation = {
  name: "22 Signal, Dema Hope Building",
  address:
    "22 signal, Dema hope building 2nd floor Jackros EBM building, 1st floor",
  coords: [9.003745, 38.802061] as LatLngTuple,
};

export default function WereWeAre() {
  const [interactive, setInteractive] = useState(true);
  const mapRef = useRef<LeafletMap | null>(null);

  // Fly to target location
  const handleFlyTo = () => {
    if (mapRef.current) {
      mapRef.current.flyTo(targetLocation.coords, 17, {
        duration: 1.5,
      });
    }
  };

  return (
    <div className="relative w-full h-[400px]">
      <MapContainer
        center={targetLocation.coords}
        zoom={15}
        scrollWheelZoom={interactive}
        dragging={interactive}
        doubleClickZoom={interactive}
        zoomControl={interactive}
        className="w-full h-full"
        ref={(ref) => {
          if (ref) mapRef.current = ref;
        }}
      >
        <TileLayer
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={targetLocation.coords} icon={defaultIcon}>
          <Popup>
            <div className="text-center">
              <h3 className="font-semibold">{targetLocation.name}</h3>
              <p className="text-sm text-gray-600 mt-1">
                {targetLocation.address}
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      {/* FlyTo button */}
      <button
        onClick={handleFlyTo}
        className="absolute bottom-4 right-4  px-3 py-2 rounded-full shadow-md transition z-[9999999999]"
      >
        <MapPinned color="red" />
      </button>
    </div>
  );
}
