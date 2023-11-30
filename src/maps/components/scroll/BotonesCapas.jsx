import React from "react";

const floors = [
  { id: 1, label: "Piso 1", imageSrc: "http://13.59.46.236/img/1.svg" },
  { id: 2, label: "Piso 2", imageSrc: "http://13.59.46.236/img/2.svg" },
  { id: 3, label: "Piso 3", imageSrc: "http://13.59.46.236/img/3.svg" },
];

const BotonesCapas = ({ extraerIdCapa }) => {
  const handleClick = (id) => {
    extraerIdCapa(id);
  };

  return (
    <>
      {/* Botones para pantallas grandes */}
      <div className="hidden 2xl:flex gap-4 2xl:gap-2 items-center">
        {floors.map((floor) => (
          <button
            key={floor.id}
            className="bg-red-600 px-2 py-1 flex text-white items-center gap-2 2xl:gap-0 rounded-md hover:bg-gray-300 shadow-black shadow-md"
            onClick={() => handleClick(floor.id)}
          >
            <img
              src={floor.imageSrc}
              alt={`Piso ${floor.id} Icon`}
              className="w-7"
            />
            {floor.label}
          </button>
        ))}
      </div>
      {/* Botones para pantallas pequeñas */}
      <div
        className="w-96 flex flex-col items-end mr-7 gap-y-3 mt-9 2xl:hidden"
        style={{ position: "fixed", right: 0, top: 0 }}
      >
        {floors.map((floor) => (
          <button
            key={floor.id}
            className="bg-red-600 px-2 py-1 flex text-white items-center gap-2 rounded-md hover:bg-gray-300 shadow-md shadow-black"
            onClick={() => handleClick(floor.id)}
          >
            <img
              src={floor.imageSrc}
              alt={`Piso ${floor.id} Icon`}
              className="w-7"
            />
            {floor.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default BotonesCapas;
