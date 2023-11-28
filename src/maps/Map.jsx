import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  WMSTileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { HeadersComponents } from "./components/HeadersComponents";
import "./map.css";
import Geoman from "./components/scroll/Geoman";


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
      <ZoomControl position="bottomleft" />
      <HeadersComponents />
      {/* <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={piso1}
      /> */}
      <WMSTileLayer
        layers="jockey:piso1otros"
        url="http://200.121.128.102:8080/geoserver/jockey/wms"
        format="image/png"
        transparent={true}
        maxZoom={19}
      />
      <Marker position={center}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Geoman />
    </MapContainer>
  );
};

export default Map;
