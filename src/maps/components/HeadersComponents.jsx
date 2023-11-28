import { useState } from "react";
import BotonesCapas from "./scroll/BotonesCapas";
import BotonesAyudas from "./scroll/BotonesAyudas";
import ToolBars from "./scroll/ToolBars";

export const HeadersComponents = ({ extra }) => {
  const [idButtonCap, setIdButtonCap] = useState(1);

  const extraerIdCapa = (id) => {
    setIdButtonCap(id);
    extra(id);
  };

  return (
    <div className="logoStyle w-[100vw]">
      <div className="2xl:flex items-center gap-24">
        {/* imagen */}
        <img
          src="http://13.59.46.236/img/logo.png"
          alt=""
          className="w-52 shadow-2xl"
        />
        {/* Buscador */}
        <div className=" w-72 flex bg-rose-200 items-center px-1 rounded-md mt-5 2xl:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            className=" rounded-md py-2 px-2 bg-rose-200"
            placeholder="Buscas..."
          />
        </div>
        {/* Botones de las capas */}

        <BotonesCapas extraerIdCapa={extraerIdCapa} />

        {/* Botones de Ayudas */}
        <BotonesAyudas />
      </div>
      <div className="flex justify-end mx-10">
        <ToolBars />
      </div>
    </div>
  );
};
