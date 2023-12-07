/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import BotonesCapas from "./scroll/BotonesCapas";
import BotonesAyudas from "./scroll/BotonesAyudas";
import ToolBars from "./scroll/ToolBars";

export const HeadersComponents = ({
  extra,
  setEvent,
  info,
  setLimpiar,
  setShow,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [idButtonCap, setIdButtonCap] = useState(1);
  const [extraEvent, setExtraEvent] = useState(false);
  const [stateLimpiar, setStateLimpiar] = useState(false);
  const [options, setOptions] = useState(false);
  const [valor, setValor] = useState("");
  const [formattedArea, setFormattedArea] = useState("");

  const extraerIdCapa = (id) => {
    setIdButtonCap(id);
    extra(id);
  };

  useEffect(() => {
    if (info.length > 0) {
      // Obtener la localidad del navegador (puedes ajustar esto según tus necesidades)
      const userLocale = navigator.language || "es-PE";

      // Formatear el área según la localidad
      const formattedAreaValue = new Intl.NumberFormat(userLocale, {
        maximumFractionDigits: 2,
      }).format(info[info.length - 1].area);

      setFormattedArea(formattedAreaValue);
    }

    setEvent(extraEvent);
    setLimpiar(stateLimpiar);
    setShow(options);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [extraEvent, info, setEvent, stateLimpiar, options]);

  return (
    <div className="logoStyle w-[100vw]">
      <div className="2xl:flex items-center gap-24">
        <img
          src="http://13.59.46.236/img/logo.png"
          alt=""
          className="w-52 shadow-2xl"
        />
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
          <h3 className="text-base">Estado del Contrato: {valor}</h3>
        </div>
        {info.length > 0 && (
          <div>
            {info.length > 0 && (
              <div>
                {info.length > 0 && (
                  <div>
                    {extraEvent && info[info.length - 1].area && (
                      <p>
                        Área: {formattedArea} m²
                      </p>
                    )}
                    {extraEvent && info[info.length - 1].length && (
                      <p>
                        Longitud: {info[info.length - 1].length.toFixed(2)}{" "}
                        metros
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        <BotonesCapas extraerIdCapa={extraerIdCapa} />
        <BotonesAyudas setExtraEvent={setExtraEvent} setValor={setValor} />
      </div>
      <div className="flex justify-end mx-10">
        <ToolBars setStateLimpiar={setStateLimpiar} setOptions={setOptions} />
      </div>
    </div>
  );
};
