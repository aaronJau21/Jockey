import { useEffect, useState } from "react";
import { useLeafletContext } from "@react-leaflet/core";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import * as turf from "@turf/turf";
import { highlightGeomanShape, resetGeomanShapeStyle } from "../colors/geoman";

const Geoman = ({ event, setInfo }) => {
  const context = useLeafletContext();
  const [objects, setObjects] = useState([]);
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    if (event) {
      setInfo(areas);
    }
  }, [event, areas]);

  useEffect(() => {
    const leafletContainer = context.layerContainer || context.map;

    setupGeoman(leafletContainer);
    setupTurfHandlers(leafletContainer);

    return () => cleanupGeoman(leafletContainer);
  }, [context, event]);

  // Función para configurar Geoman
  const setupGeoman = (leafletContainer) => {
    leafletContainer.pm.addControls({
      drawMarker: false,
      cutPolygon: false,
      drawCircle: false,
      drawCircleMarker: false,
    });

    leafletContainer.pm.setGlobalOptions({ pmIgnore: false });
  };

  // Función para limpiar Geoman
  const cleanupGeoman = (leafletContainer) => {
    leafletContainer.pm.removeControls();
    leafletContainer.pm.setGlobalOptions({ pmIgnore: true });
    leafletContainer.pm.setPathOptions({
      color: "black",
      fillColor: "#F0FFB7",
    });
  };

  // Función para configurar manejadores de Turf
  const setupTurfHandlers = (leafletContainer) => {
    leafletContainer.on("pm:create", handleGeomanCreate);
    leafletContainer.on("pm:remove", handleGeomanRemove);
  };

  // Función para manejar la creación de objetos en Geoman
  const handleGeomanCreate = (e) => {
    const shape = e.layer;
    setObjects((prevObjects) => [...prevObjects, shape]);
    console.log(objects);

    shape.pm.enable();
    shape.bindPopup("i am whole").openPopup();

    shape.on("pm:edit", () => {
      const editedLayer = shape.toGeoJSON();
      console.log(editedLayer);
    });

    shape.on("click", (event2) => {
      handleGeomanClick(event2, shape);
    });
  };

  // Función para manejar el clic en un objeto en Geoman
  const handleGeomanClick = (event, shape) => {
    if (event.originalEvent.ctrlKey || event.originalEvent.metaKey) {
      shape.options.highlighted = !shape.options.highlighted;

      if (shape.options.highlighted) {
        highlightGeomanShape(shape);
        calculateAreaAndLength(shape);
      } else {
        resetGeomanShapeStyle(shape);
      }
    }
  };

  // Función para calcular área y longitud con Turf
  const calculateAreaAndLength = (shape) => {
    const editedLayer = shape.toGeoJSON();
    const area = turf.area(editedLayer);
    const length = turf.length(editedLayer);
    setAreas((prevAreas) => [...prevAreas, { area, length }]);
    console.log(`Área: ${area.toFixed(2)} metros cuadrados`);
    console.log(`Longitud: ${length.toFixed(2)} metros`);
  };

  // Función para manejar la eliminación de objetos en Geoman
  const handleGeomanRemove = () => {
    console.log("object removed");
  };

  return null;
};

export default Geoman;
