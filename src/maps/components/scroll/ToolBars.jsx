import React from "react";

const ToolBars = () => {
  return (
    <div className="mt-5 2xl:mt-0" style={{ position: "fixed", right: 30, top: 300 }}>
      <div className="bg-yellow-400 p-2 rounded-md">
        <img
          src="http://13.59.46.236/img/limpiar.svg"
          alt="Limpiar Pantalla"
          className="w-6"
        />
      </div>
      <div className="bg-sky-400 p-2 rounded-md mt-3">
        <img
          src="http://13.59.46.236/img/grupo.svg"
          alt="grupo"
          className="w-6"
        />
      </div>
      <div className="bg-yellow-400 p-2 rounded-md mt-3">
        <img
          src="http://13.59.46.236/img/union.svg"
          alt="Union"
          className="w-6"
        />
      </div>
      <div className="bg-yellow-400 p-2 rounded-md mt-3">
        <img
          src="http://13.59.46.236/img/listado1.svg"
          alt="Union"
          className="w-6"
        />
      </div>
    </div>
  );
};

export default ToolBars;
