import React from "react";
import DataTable from "./DataTable";

const Listado = ({ closeModalList }) => {
  return (
    <div className="absolute bottom-0 right-24 w-[30rem] text-center">
      <div className="bg-white p-5 shadow-2xl">
        <h3>Listado de Propuestas</h3>
        <DataTable />
        <button
          onClick={closeModalList}
          className="bg-gray-400 text-white py-1 px-3 rounded-md mt-5"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Listado;
