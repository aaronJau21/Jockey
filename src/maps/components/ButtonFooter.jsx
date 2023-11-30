import { useState } from "react";
import Formulario from "./modal/Formulario";

const ButtonFooter = ({ setShowModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(isModalOpen);
  const abrirModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="footerStyle flex gap-x-4 text-white items-center">
        <button
          className="bg-sky-500 px-3 py-1 rounded-md shadow-black shadow-md hover:bg-[#E9DFDF] hover:text-green-600 "
          onClick={abrirModal}
        >
          Grabar/Editar Propuestas
        </button>
        <button className="bg-sky-500 px-3 py-1 rounded-md shadow-black shadow-md hover:bg-[#E9DFDF] hover:text-green-600">
          Borrar Seleccion
        </button>
        <button className="bg-sky-500 px-3 py-1 rounded-md shadow-black shadow-md hover:bg-[#E9DFDF] hover:text-green-600">
          Cancelar
        </button>
        {isModalOpen && <Formulario closeModal={closeModal} />}
      </div>
    </>
  );
};

export default ButtonFooter;
