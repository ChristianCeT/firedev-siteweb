import React from "react";
import Image from "next/image";
import group_dos from "../../../assets/about_us/Group_dos.svg";

const Vision = () => {
  return (
    <div className="flex w-full justify-center mt-10 bg-blackPrimary">
      <div className="hidden lg:flex justify-center w-1/2">
        <Image src={group_dos} alt="vision_image" />
      </div>
      <div className="w-1/2 text-center font-body m-auto">
        <h1 className="text-orangePrimary text-4xl">VISIÓN</h1>
        <p className="text-whitePrimary font-bold text-2xl px-7 mt-5">
          Ser una empresa líder en el sector de desarrollo de software a nivel
          nacional e internacional.
        </p>
      </div>
    </div>
  );
};

export default Vision;
