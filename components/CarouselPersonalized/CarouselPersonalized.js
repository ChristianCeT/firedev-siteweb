import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { carouselData } from "../../helpers/CarouselData";

const CarouselPersonalized = () => {
  return (
    <div className="">
      <h1 className="text-orangePrimary text-4xl text-center font-semibold mb-9">
        PROYECTOS
      </h1>
      <Carousel showThumbs={false} className="px-5 md:px-32">
        <div className="grid gap-3 xl:grid-cols-3 md:grid-cols-2">
          {carouselData.slice(0, 9).map((item, index) => (
            <div key={index}>
              <Image src={item.image} priority></Image>
            </div>
          ))}
        </div>
        <div className="grid gap-3 xl:grid-cols-3 md:grid-cols-2">
          {carouselData.slice(9, 18).map((item, index) => (
            <div key={index}>
              <Image src={item.image}></Image>
            </div>
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselPersonalized;
