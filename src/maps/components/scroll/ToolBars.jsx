import { useEffect, useState } from "react";

const ToolBars = ({ setStateLimpiar, setOptions }) => {
  const [limpiar, setLimpiar] = useState(false);

  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    setStateLimpiar(limpiar);
    setOptions(showOptions);
  }, [limpiar, showOptions]);

  return (
    <div
      className="mt-5 2xl:mt-0 flex flex-col"
      style={{ position: "fixed", right: 30, top: 300 }}
    >
      <button
        className="bg-yellow-400 p-2 rounded-md"
        onClick={() => setLimpiar(!limpiar)}
      >
        <img
          src="http://13.59.46.236/img/limpiar.svg"
          alt="Limpiar Pantalla"
          className="w-6"
        />
      </button>
      <button
        className="bg-sky-400 p-2 rounded-md mt-3"
        onClick={() => setShowOptions(!showOptions)}
      >
        <img
          src="http://13.59.46.236/img/grupo.svg"
          alt="grupo"
          className="w-6"
        />
      </button>
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
