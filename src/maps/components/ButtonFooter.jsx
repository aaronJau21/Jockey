const ButtonFooter = () => {
  return (
    <div className="footerStyle flex gap-x-4 text-white items-center">
      <button className="bg-sky-500 px-3 py-1 rounded-md shadow-2xl">Grabar/Editar Propuestas</button>
      <button className="bg-sky-500 px-3 py-1 rounded-md shadow-2xl">Borrar Seleccion</button>
      <button className="bg-sky-500 px-3 py-1 rounded-md shadow-2xl">Cancelar</button>
    </div>
  );
};

export default ButtonFooter;
