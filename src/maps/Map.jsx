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
import { useEffect } from "react";
import piso2 from "./data/piso1.jpg";
import ButtonFooter from "./components/ButtonFooter";
import { connect } from "react-redux";
import { setUrl, setIdCapa, setEvent, setInfo, setLimpiar, setShow } from "../redux/actions.js";

// eslint-disable-next-line react-refresh/only-export-components
const Map = (props) => {
  const center = [-12.086336855867012, -76.97589942856389];
  const {
    // eslint-disable-next-line react/prop-types
    idCapa,
    // eslint-disable-next-line react/prop-types
    setUrl,
    // eslint-disable-next-line react/prop-types
    url,
    // eslint-disable-next-line react/prop-types
    setIdCapa,
    // eslint-disable-next-line react/prop-types
    event,
    // eslint-disable-next-line react/prop-types
    setEvent,
    // eslint-disable-next-line react/prop-types
    info,
    // eslint-disable-next-line react/prop-types
    setInfo,
    // eslint-disable-next-line react/prop-types
    limpiar,
    // eslint-disable-next-line react/prop-types
    setLimpiar,
    // eslint-disable-next-line react/prop-types
    show,
    // eslint-disable-next-line react/prop-types
    setShow,
  } = props;

  const extra = (id) => {
    setIdCapa(id);
  };

  useEffect(() => {
    info;
  }, [info]);

  useEffect(() => {
    if (idCapa === 1) {
      setUrl("http://200.121.128.102:8080/geoserver/jockey/wms");
    } else if (idCapa === 2) {
      setUrl(piso2);
    } else if (idCapa === 3) {
      setUrl("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idCapa]);
  return (
    <MapContainer
      center={center}
      zoom={18}
      scrollWheelZoom={true}
      className="w-[100vw] h-[100vh]"
      zoomControl={false}
    >
      <ZoomControl position="bottomleft" />

      <HeadersComponents
        extra={extra}
        setEvent={setEvent}
        info={info}
        setLimpiar={setLimpiar}
        setShow={setShow}
      />

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
      <Geoman event={event} setInfo={setInfo} limpiar={limpiar} />

      {show ? <ButtonFooter /> : null}
    </MapContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    idCapa: state.idCapa,
    url: state.url,
    event: state.event,
    info: state.info,
    limpiar: state.limpiar,
    show: state.show,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIdCapa: (id) => dispatch(setIdCapa(id)),
    setUrl: (url) => dispatch(setUrl(url)),
    setEvent: (event) => dispatch(setEvent(event)),
    setInfo: (info) => dispatch(setInfo(info)),
    setLimpiar: (limpiar) => dispatch(setLimpiar(limpiar)),
    setShow: (show) => dispatch(setShow(show)),
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, mapDispatchToProps)(Map);
