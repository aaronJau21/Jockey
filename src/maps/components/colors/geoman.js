export const highlightGeomanShape = (shape) => {
  shape.setStyle({
    color: "red",
    fillColor: "yellow",
  });
};

export const resetGeomanShapeStyle = (shape) => {
  shape.setStyle({
    color: "black",
    fillColor: "#F0FFB7",
  });
};
