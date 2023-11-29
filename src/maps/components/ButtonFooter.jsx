import { useEffect, useState } from "react";
import Modal from "react-modal";
import Formulario from "./modal/Formulario";

const ButtonFooter = ({ setShowModal }) => {
  const [modal, setModal] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const abrirModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      <div className="footerStyle flex gap-x-4 text-white items-center">
        <button
          className="bg-sky-500 px-3 py-1 rounded-md shadow-2xl"
          onClick={abrirModal}
        >
          Grabar/Editar Propuestas
        </button>
        <button className="bg-sky-500 px-3 py-1 rounded-md shadow-2xl">
          Borrar Seleccion
        </button>
        <button className="bg-sky-500 px-3 py-1 rounded-md shadow-2xl">
          Cancelar
        </button>
        <Modal isOpen={modal} onRequestClose={closeModal} style={customStyles}>
          <Formulario closeModal={closeModal} />
        </Modal>
      </div>
    </>
  );
};

export default ButtonFooter;
