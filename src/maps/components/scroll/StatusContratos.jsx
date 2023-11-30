import { useState } from "react";

const vencimientos = [
  "Vencimientos en 2 meses",
  "Vencimientos en 4 meses",
  "Vencimientos en 6 meses",
  "Ventas mayores a S/200,000",
  "Ventas mayores a S/400,000",
  "Total de ventas S/",
  "Ninguno",
];

function StatusContratos() {
  const [pisos, setPisos] = useState([false, false, false]);

  const togglePiso = (index) => {
    const newPisos = [...pisos];
    newPisos[index] = !newPisos[index];
    setPisos(newPisos);
  };

  return (
    <div className="absolute right-44 bottom-0 2xl:top-11 2xl:right-3 ">
      <ul>
        {[1, 2, 3].map((piso, index) => (
          <li key={index} onClick={() => togglePiso(index)}>
            <button
              className={`border border-sky-400 bg-sky-400 text-white px-3 py-1 rounded-md mt-${
                index === 0 ? "0" : "3"
              }`}
            >
              Piso {piso} Clientes con:
            </button>
            {pisos[index] && (
              <ul className="ml-7 my-3">
                {vencimientos.map((ven, vIndex) => (
                  <li
                    key={vIndex}
                    className="border border-red-400 bg-red-400 my-1 rounded-md"
                  >
                    {ven}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StatusContratos;
