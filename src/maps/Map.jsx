import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { HeadersComponents } from "./components/HeadersComponents";
import "./map.css";

const Map = () => {
  const center = [-12.086336855867012, -76.97589942856389];

  return (
    <MapContainer
      center={center}
      zoom={20}
      scrollWheelZoom={true}
      className="w-[100vw] h-[100vh]"
      zoomControl={false}
    >
      <HeadersComponents />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
