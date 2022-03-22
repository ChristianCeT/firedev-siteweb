import React from "react";
import { equipoData } from "../../helpers/EquipoData";
import Profile from "./profile";

const TeamUs = () => {
  return (
    <div className="w-full text-center font-bold font-body py-10 mt-14">
      <div className="flex-col items-center justify-center">
        <h1 className="text-rosePrimary text-4xl">Nuestro Equipo</h1>
        <p className="text-indigoPrimary text-2xl max-w-xl mx-auto mt-6">
          Somos un equipo muy unido de diseñadores y desarrolladores
          apasionados, nos encanta lo que hacemos.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {equipoData.map((item) => (
          <Profile key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TeamUs;
