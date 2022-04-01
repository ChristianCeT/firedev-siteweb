import React from "react";
import Image from "next/image";
import Fondo from "../../assets/img/fondo.png";

const Team = () => {
  const dataEquipo = [
    {
      nombre: "nombre1",
      especialidad: "Diseño web",
      image: "photo",
    },
    {
      nombre: "nombre2",
      especialidad: "Diseño web",
      image: "photo",
    },
    {
      nombre: "nombre3",
      especialidad: "Diseño web",
      image: "photo",
    },
    {
      nombre: "nombre4",
      especialidad: "Diseño web",
      image: "photo",
    },
    {
      nombre: "nombre5",
      especialidad: "Diseño web",
      image: "photo",
    },
  ];

  return (
    <div className="w-full h-screen bg-blackPrimary">
      <div className=" w-full flex flex-col justify-center items-center">
        <h1 className="text-orangePrimary font-medium text-4xl">Nuestro Equipo</h1>
        <div className="w-[300px] mt-6 md:w-[450px]">
          <p className="text-indigoPrimary font-medium text-base justify-items-center">
            Somos un equipo muy unido de diseñadores y desarrolladores
            apasionados, nos encanta lo que hacemos.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col mt-4 justify-around items-center text-center md:flex-row ">
        {dataEquipo.slice(0, 3).map((dataE, index) => (
          <div key={index} className=" w-[300px] h-[350px] flex flex-col">
            <Image src={Fondo} width={250} height={300} priority></Image>
            <h2 className="text-[#8395D2] font-medium">{dataE.nombre}</h2>
            <p className="text-[#8395D2] font-medium">{dataE.especialidad}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
