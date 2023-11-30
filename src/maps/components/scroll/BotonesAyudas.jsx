import { useEffect, useState } from "react";

const BotonesAyudas = ({ setExtraEvent }) => {
  const [event, setEvent] = useState(false);
  useEffect(() => {
    setExtraEvent(event);
  }, [event]);

  return (
    <>
      <div className="hidden 2xl:flex items-center gap-x-5">
        <button
          onClick={() => setEvent(!event)}
          className="flex gap-1 text-base bg-[#2BB296] py-1 px-2 rounded-md text-white hover:bg-[#E9DFDF] hover:text-green-600"
        >
          <i className="fa-solid fa-ruler-combined"></i>
          <p>Medir Área</p>
        </button>
        <div className="flex items-center text-base bg-[#2BB296] py-1 px-2 rounded-md text-white hover:bg-[#E9DFDF] hover:text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
            />
          </svg>
          Planos
        </div>
        <div className="flex items-center text-base bg-[#2BB296] py-1 px-2 rounded-md text-white hover:bg-[#E9DFDF] hover:text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
          Estatus Contratos
        </div>
      </div>
      {/* Scroll */}
      <div
        className="w-96 flex flex-col items-end mr-7 gap-y-3 mt-9 2xl:hidden"
        style={{ position: "fixed", right: 0, top: 150 }}
      >
        <button
          onClick={() => setEvent(!event)}
          className="flex gap-1 text-base bg-[#2BB296] py-1 px-2 rounded-md text-white hover:bg-[#E9DFDF] hover:text-green-600"
        >
          <i className="fa-solid fa-ruler-combined"></i>
          <p>Medir Área</p>
        </button>
        <div className="flex items-center text-base bg-[#2BB296] py-1 px-2 rounded-md text-white hover:bg-[#E9DFDF] hover:text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
            />
          </svg>
          Planos
        </div>
        <div className="flex items-center text-base bg-[#2BB296] py-1 px-2 rounded-md text-white hover:bg-[#E9DFDF] hover:text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
          Estatus Contratos
        </div>
      </div>
    </>
  );
};

export default BotonesAyudas;
