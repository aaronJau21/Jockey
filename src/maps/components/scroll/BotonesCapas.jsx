import React from "react";

const BotonesCapas = () => {
  return (
    <>
      <div className="hidden 2xl:flex gap-4 2xl:gap-2 items-center">
        <button className="bg-red-600 px-2 py-1 flex text-white items-center gap-2 2xl:gap-0 rounded-md">
          <img
            src="http://13.59.46.236/img/1.svg"
            alt="Piso 1 Icon"
            className="w-7"
          />
          piso 1
        </button>
        <button className="bg-red-600 px-2 py-1 flex text-white items-center gap-2 2xl:gap-0 rounded-md">
          <img
            src="http://13.59.46.236/img/2.svg"
            alt="Piso 2 Icon"
            className="w-7"
          />
          piso 2
        </button>
        <button className="bg-red-600 px-2 py-1 flex text-white items-center gap-2 2xl:gap-0 rounded-md">
          <img
            src="http://13.59.46.236/img/3.svg"
            alt="Piso 3 Icon"
            className="w-7"
          />
          piso 3
        </button>
      </div>
      {/* Scroll */}
      <div className="flex flex-col items-end mr-7 gap-y-3 mt-9 2xl:hidden">
        <button className="bg-red-600 px-2 py-1 flex text-white items-center gap-2 rounded-md">
          <img
            src="http://13.59.46.236/img/1.svg"
            alt="Piso 1 Icon"
            className="w-7"
          />
          piso 1
        </button>
        <button className="bg-red-600 px-2 py-1 flex text-white items-center gap-2 rounded-md">
          <img
            src="http://13.59.46.236/img/2.svg"
            alt="Piso 2 Icon"
            className="w-7"
          />
          piso 2
        </button>
        <button className="bg-red-600 px-2 py-1 flex text-white items-center gap-2 rounded-md">
          <img
            src="http://13.59.46.236/img/3.svg"
            alt="Piso 3 Icon"
            className="w-7"
          />
          piso 3
        </button>
      </div>
    </>
  );
};

export default BotonesCapas;
