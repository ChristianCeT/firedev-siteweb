import React from "react";
import Contact from "../../Contact/Contact";
import Image from "next/image";
import logoTemporary from "../../../assets/img/logoTemporary.png";
import imageNetwork from "../../../assets/svg/imageNetwork.svg";

const footer = () => {
  return (
    <div>
      <Contact></Contact>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="md:block hidden"
      >
        <path
          fill="#1A1B1D"
          floodOpacity="1"
          d="M0,64L60,80C120,96,240,128,360,165.3C480,203,600,245,720,224C840,203,960,117,1080,106.7C1200,96,1320,160,1380,192L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-blackPrimary text-whitePrimary h-full pt-[170px] px-10 flex flex-col items-center lg:h-[500px] lg:justify-between lg:flex-row  lg:pt-0">
        <div className="w-full h-full mb-10 flex flex-col items-center justify-center mt-44 md:mt-0 lg:w-[30%] lg:mb-10">
          <Image src={logoTemporary}></Image>
          <p className="text-base lg:text-justify text-center">
            Buscamos ofrecer lo mejor de las distintas tendencias brindando una
            diedoree ofrece en nuestra página web para entrega inmediata.
          </p>
        </div>
        <div className="h-full w-full mb-10 flex flex-col justify-end text-center pb-14 lg:w-[30%] md:pb-0">
          <h1 className="font-semibold text-xl mb-4 text-orangePrimary">Redes sociales</h1>
          <Image src={imageNetwork} width={400} height={310}></Image>
        </div>
        <div className="h-full w-full mb-10 flex flex-col justify-center text-center lg:w-[30%]">
          <h1 className="font-semibold text-xl mb-2 text-orangePrimary">Información adicional</h1>
          <h2>Términos y condiciones</h2>
          <h2>Politicas de Privacidad</h2>
          <h2>Políticas de Seguridad</h2>
        </div>
      </div>
    </div>
  );
};

export default footer;
