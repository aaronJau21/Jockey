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
import { useEffect, useState } from "react";
import piso2 from "./data/piso1.jpg";

const Map = () => {
  const center = [-12.086336855867012, -76.97589942856389];
  const [url, setUrl] = useState(
    "http://200.121.128.102:8080/geoserver/jockey/wms"
  );

  const [idCapa, setIdCapa] = useState(1);
  const [event, setEvent] = useState(false);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    info;
  }, [info]);
  const extra = (id) => {
    setIdCapa(id);
  };

  useEffect(() => {
    if (idCapa === 1) {
      setUrl("http://200.121.128.102:8080/geoserver/jockey/wms");
      console.log();
    } else if (idCapa === 2) {
      setUrl(piso2);
    } else if (idCapa === 3) {
      setUrl("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
    }
  }, [idCapa]);

  return (
    <MapContainer
      center={center}
      zoom={20}
      scrollWheelZoom={true}
      className="w-[100vw] h-[100vh]"
      zoomControl={false}
    >
      <ZoomControl position="bottomleft" />

      <HeadersComponents extra={extra} setEvent={setEvent} info={info} />

      {url === "http://200.121.128.102:8080/geoserver/jockey/wms" ? (
        <WMSTileLayer
          layers={idCapa === 1 ? "jockey:piso1,jockey:piso1otros" : ""}
          url={url}
          format="image/png"
          transparent={false}
          maxZoom={19}
        />
      ) : (
        <TileLayer url={url} tileSize={1200} noWrap={true} />
      )}
      <Marker position={center}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Geoman event={event} setInfo={setInfo} />
    </MapContainer>
  );
};

export default Map;
