const Formulario = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-5 rounded shadow-md text-black w-[50vw]">
        <div className="flex justify-between mb-3">
          <h2 className="font-bold text-lg">Ingresar datos de Propuesta</h2>
          <button onClick={closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <hr />
        <form className="mt-3">
          <div className="flex flex-col">
            <label htmlFor="name_client" className="text-base mb-1">
              Nombre de Cliente
            </label>
            <input
              type="text"
              id="name_client"
              placeholder="Ingresa el nombre del cliente"
              className="border border-gray-400 px-3 py-2 rounded-md"
            />
          </div>
          {/* DNI - RUC */}
          <div className="flex gap-4 mt-5">
            <div className="flex flex-col flex-1">
              <label htmlFor="ruc" className="text-base mb-1">
                RUC
              </label>
              <input
                type="text"
                id="ruc"
                placeholder="Ingresa el nombre del cliente"
                className="border border-gray-400 px-3 py-2 rounded-md"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="dni" className="text-base mb-1">
                DNI
              </label>
              <input
                type="text"
                id="dni"
                placeholder="Ingresa el nombre del cliente"
                className="border border-gray-400 px-3 py-2 rounded-md"
              />
            </div>
          </div>
          {/* DNI - RUC */}

          {/* CATEGORIA Y FECHA */}
          <div className="flex gap-4 mt-5">
            <div className="flex flex-col flex-1">
              <label htmlFor="categoria" className="text-base mb-1">
                Categoría
              </label>
              <input
                type="text"
                id="categoria"
                placeholder="Ingresa el nombre del cliente"
                className="border border-gray-400 px-3 py-2 rounded-md"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="fecha" className="text-base mb-1">
                Fecha de Registro
              </label>
              <input
                type="date"
                id="fecha"
                className="border border-gray-400 px-3 py-2 rounded-md text-gray-400"
              />
            </div>
          </div>
          {/* CATEGORIA Y FECHA */}

          <div className="flex flex-col mt-5">
            <label htmlFor="name_contact" className="text-base mb-1">
              Nombre de Contacto
            </label>
            <input
              type="text"
              id="name_contact"
              placeholder="Ingresa el nombre del contacto"
              className="border border-gray-400 px-3 py-2 rounded-md"
            />
          </div>

          {/* TELÉFONO Y ESTADO */}
          <div className="flex gap-4 my-5">
            <div className="flex flex-col flex-1">
              <label htmlFor="telefono" className="text-base mb-1">
                Teléfono
              </label>
              <input
                type="text"
                id="telefono"
                placeholder="Ingresa el teléfono"
                className="border border-gray-400 px-3 py-2 rounded-md"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="estado" className="text-base mb-1">
                Estado
              </label>
              <select
                id="estado"
                className="border border-gray-400 px-3 py-2 rounded-md text-gray-400"
              >
                <option value="">Elige...</option>
                <option value="">Activo</option>
                <option value="">Inactivo</option>
              </select>
            </div>
          </div>
          {/* TELÉFONO Y ESTADO */}
          <hr />

          <div className="flex justify-end mt-3 gap-x-4">
            <button className="bg-blue-600 py-3 px-3 text-white rounded-md hover:bg-blue-700">
              Guardar
            </button>
            <button onClick={closeModal} className="bg-gray-400 py-3 px-3 text-white rounded-md hover:bg-gray-500 ">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Formulario;
