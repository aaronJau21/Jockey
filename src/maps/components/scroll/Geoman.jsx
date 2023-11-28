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
