import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

const vencimientos = [
  "Vencimientos en 2 meses",
  "Vencimientos en 4 meses",
  "Vencimientos en 6 meses",
  "Ventas mayores a S/200,000",
  "Ventas mayores a S/400,000",
  "Total de ventas S/",
  "Ninguno",
];

function StatusContratos({ setInfo, acordion }) {
  const [pisos, setPisos] = useState([false, false, false]);
  const [activePiso, setActivePiso] = useState(null);
  const [ventas, setVentas] = useState("");

  const togglePiso = (index) => {
    setPisos(pisos.map((_, i) => i === index));
    setActivePiso(index);
  };

  const handleChange = (event) => {
    setVentas(event.target.value);
    // Cerrar el primer li al seleccionar un elemento del Select
    setPisos([false, false, false]);
  };

  useEffect(() => {
    if (acordion && ventas.length > 0) {
      setInfo(ventas);
    }
  }, [acordion, ventas, setInfo]);

  return (
    <div className="absolute right-44 bottom-0 2xl:top-11 2xl:right-3 ">
      <ul className="bg-white">
        {[1, 2, 3].map((piso, index) => (
          <li key={index}>
            <button
              className={`border border-sky-400 bg-sky-400 text-white px-3 py-1 rounded-md mt-2`}
              onClick={() => togglePiso(index)}
            >
              Piso {piso} Clientes con:
            </button>
            {pisos[index] && (
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Opciones
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={ventas}
                    label="Opciones"
                    onChange={handleChange}
                  >
                    {vencimientos.map((venta, vIndex) => (
                      <MenuItem value={venta} key={vIndex}>
                        {venta}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StatusContratos;
