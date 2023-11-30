import React from "react";

const Listado = ({ closeModalList }) => {
  return (
    <div className="absolute bottom-0 right-24 w-60 text-center">
      <div className="bg-white p-5 shadow-2xl">
        <h3>Listado de Propuestas</h3>
        <h4>Listado de Propuestas realizadas</h4>

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
