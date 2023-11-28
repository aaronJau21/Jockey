import { useEffect } from "react";
import { useLeafletContext } from "@react-leaflet/core";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";

const Geoman = () => {
  const context = useLeafletContext();
  const objects = [];

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
      objects.push(shape);
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

      shape.on("click", (event) => {
        // Verificar si la tecla Control está presionada
        if (event.originalEvent.ctrlKey || event.originalEvent.metaKey) {
          // Alternar el estado de resaltado
          isHighlighted = !isHighlighted;

          // Aplicar o quitar el resaltado según el estado actual
          if (isHighlighted) {
            // Resaltar (seleccionar) el dibujo, aquí puedes aplicar un estilo diferente
            shape.setStyle({
              color: "red",
              fillColor: "yellow",
            });
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
  }, [context]);

  return null;
};

export default Geoman;
