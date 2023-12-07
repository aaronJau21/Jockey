import { useState, useEffect } from "react";

const vencimientos = [
  "Vencimientos en 2 meses",
  "Vencimientos en 4 meses",
  "Vencimientos en 6 meses",
  "Ventas mayores a S/200,000",
  "Ventas mayores a S/400,000",
  "Total de ventas S/",
  "Ninguno",
];

// eslint-disable-next-line react/prop-types
function StatusContratos({ setInfo, acordion }) {
  const [pisos, setPisos] = useState([false, false, false]);
  // eslint-disable-next-line no-unused-vars
  const [activePiso, setActivePiso] = useState(null);
  const [ventas, setVentas] = useState("");

  const togglePiso = (index) => {
    setPisos(pisos.map((_, i) => i === index));
    setActivePiso(index);
  };

  const handleChange = (event) => {
    setVentas(event.target.value);
    setPisos([false, false, false]);
  };

  useEffect(() => {
    if (acordion && ventas.length > 0) {
      setInfo(ventas);
    }
  }, [acordion, ventas, setInfo]);

  return (
    <div className="absolute right-44 bottom-0 2xl:top-11 2xl:right-3">
      <ul className="bg-white">
        {[1, 2, 3].map((piso, index) => (
          <li key={index}>
            <button
              className={`border border-blue-400 bg-blue-400 text-white px-3 py-1 rounded-md mt-2`}
              onClick={() => togglePiso(index)}
            >
              Piso {piso} Clientes con:
            </button>
            {pisos[index] && (
              <div className="min-w-120 mt-2">
                <div className="w-full">
                  <select
                    id={`ventas-select-${index}`}
                    value={ventas}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-1"
                  >
                    <option value="">Opciones</option>
                    {vencimientos.map((venta, vIndex) => (
                      <option value={venta} key={vIndex}>
                        {venta}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StatusContratos;
