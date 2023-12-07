/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import BotonesCapas from "./scroll/BotonesCapas";
import BotonesAyudas from "./scroll/BotonesAyudas";
import ToolBars from "./scroll/ToolBars";

export const HeadersComponents = ({

  // eslint-disable-next-line react/prop-types
  extra,
  // eslint-disable-next-line react/prop-types
  setEvent,
  // eslint-disable-next-line react/prop-types
  info,
  // eslint-disable-next-line react/prop-types
  setLimpiar,
  // eslint-disable-next-line react/prop-types
  setShow,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [idButtonCap, setIdButtonCap] = useState(1);
  const [extraEvent, setExtraEvent] = useState(false);
  const [stateLimpiar, setStateLimpiar] = useState(false);
  const [options, setOptions] = useState(false);
  const [valor, setValor] = useState("");

  const extraerIdCapa = (id) => {
    setIdButtonCap(id);
    extra(id);
  };

  useEffect(() => {
    if (info.length > 0) info;
    setEvent(extraEvent);
    setLimpiar(stateLimpiar);
    setShow(options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [extraEvent, info, setEvent, stateLimpiar, options]);

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
        <div className=" w-72 flex bg-rose-200 items-center px-1 rounded-md mt-5 2xl:mt-0 shadow-gray-500 shadow-md">
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
        <div className="absolute top-14 left-[43vw]">
          {/* <div className=""> */}
          <h3 className="text-base">Estado del Contrato: {valor}</h3>
          {/* </div> */}
        </div>
        {info.length > 0 && (
          <div>
            {info.length > 0 && (
              <div>
                {info.length > 0 && (
                  <div>
                    {extraEvent && info[info.length - 1].area && (
                      <p>
                        Área: {info[info.length - 1].area.toFixed(2)} metros
                        cuadrados
                      </p>
                    )}
                    {extraEvent && info[info.length - 1].length && (
                      <p>
                        Longitud: {info[info.length - 1].length.toFixed(2)}{" "}
                        metros
                      </p>
                    )}
                    {/* Agrega más lógica según la estructura real de info[0] */}
                  </div>
                )}
                {/* Agrega más lógica según la estructura real de info[0] */}
              </div>
            )}
            {/* Agrega más lógica según la estructura real de info[0] */}
          </div>
        )}
        {/* Botones de las capas */}

        <BotonesCapas extraerIdCapa={extraerIdCapa} />

        {/* Botones de Ayudas */}
        <BotonesAyudas setExtraEvent={setExtraEvent} setValor={setValor} />
      </div>
      <div className="flex justify-end mx-10">
        <ToolBars setStateLimpiar={setStateLimpiar} setOptions={setOptions} />
      </div>
    </div>
  );
};
