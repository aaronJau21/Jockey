import { FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

const BotonesPlanos = () => {
  const [piso1, setPiso1] = useState(false);
  const [piso2, setPiso2] = useState(false);
  const [piso3, setPiso3] = useState(false);
  const [sinPlano, setSinPlano] = useState(true);

  const handlePiso1Change = () => {
    setPiso1(!piso1);
    setPiso2(false);
    setPiso3(false);
    setSinPlano(false);
  };

  const handlePiso2Change = () => {
    setPiso1(false);
    setPiso2(!piso2);
    setPiso3(false);
    setSinPlano(false);
  };

  const handlePiso3Change = () => {
    setPiso1(false);
    setPiso2(false);
    setPiso3(!piso3);
    setSinPlano(false);
  };

  const handleSinPlanoChange = () => {
    setPiso1(false);
    setPiso2(false);
    setPiso3(false);
    setSinPlano(!sinPlano);
  };

  return (
    <div className="absolute top-11 left-32">
      <div className="bg-white shadow-lg p-3">
        <p>Plano por Piso</p>
        <ul>
          <li className="mt-1">
            <FormControlLabel
              control={<Switch checked={piso1} onChange={handlePiso1Change} />}
              label="Piso 1"
            />
          </li>
          <li className="mt-1">
            <FormControlLabel
              control={<Switch checked={piso2} onChange={handlePiso2Change} />}
              label="Piso 2"
            />
          </li>
          <li className="my-1">
            <FormControlLabel
              control={<Switch checked={piso3} onChange={handlePiso3Change} />}
              label="Piso 3"
            />
          </li>
          <li>
            <button>
              <FormControlLabel
                control={
                  <Switch checked={sinPlano} onChange={handleSinPlanoChange} />
                }
                label="Sin Plano"
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BotonesPlanos;
