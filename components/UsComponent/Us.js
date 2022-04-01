import React from "react";
import Image from "next/image";
import mujer from "../../assets/about_us/mujer_nosotros.svg";

const Us = () => {
  return (
    <>
      <div className="w-full pt-36 bg-whitePrimary">
        <div className="flex items-center lg:items-start justify-center flex-col lg:flex-row ">
          <div className="text-center w-1/2 text-white font-body">
            <h1 className="mt-10 font-bold text-4xl text-black">¿QUIENES SOMOS?</h1>
            <p className="mt-10 text-2xl mb-6 mx-12 text-black">
              El presente emprendimiento nació del desarrollo de proyectos
              remunerables lo cuales serán realizados con tecnologías escalables
              basadas en el lenguaje de programación JS englobando su frameworks
            </p>
          </div>
          <div className="w-1/2">
            <Image layout="responsive" src={mujer} alt="Mujer" />
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,192L80,202.7C160,213,320,235,480,213.3C640,192,800,128,960,90.7C1120,53,1280,43,1360,37.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Us;
