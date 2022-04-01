import React from "react";
import man from "../../assets/svg/man.svg";
import Image from "next/image";

const Main = () => {
  return (
    <>
      <section className="bg-blackPrimary flex justify-around pt-32 items-center text-center flex-col md:flex-row">
        {/* Pagina principal izquierda */}
        <div className="text-whitePrimary text-3xl font-bold">
          <p>SISTEMAS, PÁGINAS & </p>

          <p>SOFTWARE WEB</p>

          <button className="bg-orangePrimary rounded-lg py-3 px-2 font-bold">
            CONTÁCTANOS
          </button>
        </div>
        {/* Pagina principal derecha */}
        <div className="relative flex items-center mt-20">
          <svg
            className="absolute inset-0 m-auto"
            viewBox="0 0 393 404"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M385.483 292.915C355.391 421.396 223.339 403.101 87.8418 403.101C-47.6554 403.101 5.53149 258.019 38.599 174.48C76.8986 77.723 148.767 0 284.264 0C419.761 0 393.691 228.939 385.483 292.915Z"
              fill="#FB9F15"
            />
          </svg>

          <div className="ml-7 w-96">
            <Image src={man} quality={100} layout="responsive" />
          </div>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1A1B1D"
          fillOpacity="1"
          d="M0,320L60,277.3C120,235,240,149,360,112C480,75,600,85,720,112C840,139,960,181,1080,186.7C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Main;
