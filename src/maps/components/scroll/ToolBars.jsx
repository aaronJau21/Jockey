import { useEffect, useState } from "react";
import Listado from "../modal/Listado";

// eslint-disable-next-line react/prop-types
const ToolBars = ({ setStateLimpiar, setOptions }) => {
  const [limpiar, setLimpiar] = useState(false);

  const [showOptions, setShowOptions] = useState(false);
  const [showList, setShowList] = useState(false);
  const [infoLocal, setInfoLocal] = useState(false)

  const openModalList = () => {
    setShowList(true);
  };

  const closeModalList = () => {
    setShowList(false);
  };

  useEffect(() => {
    setStateLimpiar(limpiar);
    setOptions(showOptions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limpiar, showOptions]);

  return (
    <div
      className="mt-5 2xl:mt-0 flex flex-col "
      style={{ position: "fixed", right: 30, top: 300 }}
    >
      <div className="tooltip">
        <button
          className="bg-yellow-400 p-2 rounded-md hover:bg-gray-300 shadow-gray-500 shadow-md"
          onClick={() => setLimpiar(!limpiar)}
        >
          <img
            src="http://13.59.46.236/img/limpiar.svg"
            alt="Limpiar Pantalla"
            className="w-6"
          />
          <span className="tooltiptext">Eliminar Polìgonos</span>
        </button>
      </div>
      {limpiar && "Activo"}

      <div className="tooltip">
        <button
          className="bg-sky-400 p-2 rounded-md mt-3 hover:bg-gray-300 shadow-gray-500 shadow-md"
          onClick={() => setShowOptions(!showOptions)}
        >
          <img
            src="http://13.59.46.236/img/grupo.svg"
            alt="grupo"
            className="w-6"
          />
        </button>
        <span className="tooltiptext">Guardar Polígonos</span>
      </div>
      <div className="tooltip">
        <button className="bg-yellow-400 p-2 rounded-md mt-3 shadow-gray-500 shadow-md">
          <img
            src="http://13.59.46.236/img/union.svg"
            alt="Union"
            className="w-6"
          />
          <span className="tooltiptext">Unión de poligonos</span>
        </button>
      </div>

      <div className="tooltip">
        <button
          className="bg-yellow-400 p-2 rounded-md mt-3 shadow-gray-500 shadow-md"
          onClick={openModalList}
        >
          <img
            src="http://13.59.46.236/img/listado1.svg"
            alt="Union"
            className="w-6"
          />
          <span className="tooltiptext">Listado de Propuestas</span>
        </button>
      </div>
      {showList && <Listado closeModalList={closeModalList} />}

      <div className="tooltip">
        <button
          className="bg-yellow-400 p-2 rounded-md mt-3 shadow-gray-500 shadow-md"
          onClick={() => setInfoLocal(!infoLocal)}
        >
          {infoLocal ? 'Haga Click en un local' : <i className="fa-solid fa-circle-info text-2xl"></i>}

          <span className="tooltiptext">Muestra Información</span>
        </button>
      </div>
    </div>
  );
};

export default ToolBars;
