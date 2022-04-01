import React from "react";
import Image from "next/image";
import group_uno from "../../../assets/about_us/Group_uno.svg";

const Mision = () => {
  return (
    <div className="flex w-full justify-center bg-blackPrimary">
      <div className="w-1/2 text-center font-body m-auto">
        <h1 className="text-orangePrimary text-4xl">MISIÓN</h1>
        <p className="text-whitePrimary font-bold text-2xl px-7 mt-5">
          Comercializar los diferentes tipos de proyectos tecnológicos para
          brindar un servicio de automatización de procesos para los diferentes
          tipos de empresas en lima.
        </p>
      </div>
      <div className="hidden lg:flex justify-center w-1/2">
        <Image src={group_uno} alt="vision_image" />
      </div>
    </div>
  );
};

export default Mision;
