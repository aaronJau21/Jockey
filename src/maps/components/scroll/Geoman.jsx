import { useEffect, useState } from "react";
import { useLeafletContext } from "@react-leaflet/core";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import * as turf from "@turf/turf";

const Geoman = ({ event, setInfo }) => {
  const context = useLeafletContext();
  const [objects, setObjects] = useState([]);
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    if (event) {
      // console.log(areas);
      setInfo(areas);
    }
  }, [event, areas]);

  useEffect(() => {
    const leafletContainer = context.layerContainer || context.map;

    leafletContainer.pm.addControls({
      drawMarker: false,
      cutPolygon: false,
      drawCircle: false,
      drawCircleMarker: false,
    });

    leafletContainer.pm.setGlobalOptions({ pmIgnore: false });

    leafletContainer.on("pm:create", (e) => {
      const shape = e.layer;
      setObjects((prevObjects) => [...prevObjects, shape]);
      console.log(objects);
      // enable editing of the shape
      shape.pm.enable();

      // bind popups
      shape.bindPopup("i am whole").openPopup();
      shape.on("pm:edit", () => {
        const editedLayer = shape.toGeoJSON();
        console.log(editedLayer);
      });

      let isHighlighted = false; // Variable para rastrear el estado de resaltado

      shape.on("click", (event2) => {
        if (event2.originalEvent.ctrlKey || event2.originalEvent.metaKey) {
          // Alternar el estado de resaltado
          isHighlighted = !isHighlighted;

          // Aplicar o quitar el resaltado según el estado actual
          if (isHighlighted) {
            // Resaltar (seleccionar) el dibujo, aquí puedes aplicar un estilo diferente
            shape.setStyle({
              color: "red",
              fillColor: "yellow",
            });
            const editedLayer = shape.toGeoJSON();
            const area = turf.area(editedLayer); // en metros cuadrados
            const length = turf.length(editedLayer); // en metros
            setAreas((prevAreas) => [...prevAreas, { area, length }]);
            console.log(`Área: ${area.toFixed(2)} metros cuadrados`);
            console.log(`Longitud: ${length.toFixed(2)} metros`);
          } else {
            // Quitar el resaltado (restaurar el estilo original)
            shape.setStyle({
              color: "black", // color de la línea original
              fillColor: "#F0FFB7", // color de relleno original
            });
          }
        }
      });
    });

    leafletContainer.on("pm:remove", (e) => {
      console.log("object removed");
      // console.log(leafletContainer.pm.getGeomanLayers(true).toGeoJSON());
    });

    return () => {
      leafletContainer.pm.removeControls();
      leafletContainer.pm.setGlobalOptions({ pmIgnore: true });
      leafletContainer.pm.setPathOptions({
        color: "black",
        fillColor: "#F0FFB7",
      });
    };
  }, [context, event]);

  return null;
};

export default Geoman;
