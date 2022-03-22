import React from "react";
import Image from "next/image";
import Dev from "../../assets/svg/programing.svg";
import { SiReact } from "react-icons/si";
import { SiWordpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const Service = () => {
  return (
    <div className="h-[65vh] flex flex-col justify-start mt-[7rem]">
      <div className="relative">
        <div className=" mx-auto w-[200px] h-[200px] bg-indigoPrimary rounded-full absolute top-[12%] right-[34%] sm:right-[35%] md:right-[44%] md:h-[400px] md:w-[400px] lg:h-[520px] lg:w-[520px]">
          <h1 className=" text-whitePrimary text-[10px]  text-center font-medium mt-7 md:text-[25px] ">
            HERRAMIENTAS
          </h1>
          <div className=" absolute mt-4 left-[8%] z-40 flex ">
            <Image src={Dev} />
            <h1 className="text-whitePrimary text-[25px] text-center mt-7 mr-16 z-50 font-medium hidden lg:block">
              DE
            </h1>
          </div>
        </div>
        <div className="mx-auto w-[200px] h-[200px] bg-rosePrimary rounded-full  absolute top-[15%] right-[8%] sm:right-[20%] md:right-[20%] md:h-[400px] md:w-[400px] lg:h-[520px] lg:w-[520px] 2xl:right-[28%]">
          <h1 className="text-whitePrimary text-[10px]  text-center font-medium mt-7 md:text-[25px]">
            DESARROLLO
          </h1>
          <div className="w-full h-[450px]  relative ">
            <SiReact className="text-[#fff] text-[25px] absolute top-3 right-6 md:text-[50px] md:top-7 md:right-32 lg:text-[100px]" />
            <SiWordpress className="text-[#fff] text-[25px] absolute top-8 right-24  md:text-[50px] md:top-24 md:left-36 lg:text-[100px]  " />
            <SiTailwindcss className="text-[#fff] text-[25px] absolute top-14 right-7 md:text-[50px]  md:top-40 md:right-28 lg:text-[100px] lg:top-52" />
            <SiMongodb className="text-[#fff] text-[25px] absolute top-24 left-24  md:text-[50px] md:top-60 md:left-36 lg:text-[100px]" />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Service;
