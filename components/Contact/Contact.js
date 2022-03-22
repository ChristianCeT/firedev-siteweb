import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import imageContact from "../../assets/svg/imageContact.svg";
import { dataInputLabel } from "../../helpers/ContactData";

const Contact = () => {
  const [mailData, setMailData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const [message, setMessage] = useState(null);

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    await emailjs
      .send(
        "service_5ujocoj",
        "template_px97g4n",
        mailData,
        "R3AsBlh1GHIZWRtkm"
      )
      .then((res) => {
        e.target.reset();
        setMessage("Mensaje enviado con éxito");

        setTimeout(() => {
          setMessage(null);
          setMailData({
            nombre: "",
            correo: "",
            mensaje: "",
          });
        }, 4500);

        return () => clearTimeout(duration);
      })
      .then((err) => {
        return err;
      });
  };

  const handlChange = (e) => {
    setMailData({
      ...mailData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative flex justify-center mb-40">
      <div className="bg-whitePrimary w-[92%] shadow-lg shadow-slate-700 rounded-xl absolute md:w-[58%]">
        <div className="flex justify-center">
          <h1 className="text-rosePrimary py-2 text-4xl font-semibold after:block after:w-[63%] after:h-1 after:bg-rosePrimary">
            CONTACTO
          </h1>
        </div>
        <form onSubmit={onHandleSubmit} className="flex justify-evenly">
          <div className="w-[90%] flex flex-col my-10 xl:w-[38%]">
            {dataInputLabel.map((dataIn, index) => (
              <div key={index} className="flex flex-col">
                <label className="mt-3">{dataIn.nombre}:</label>
                <input
                  name={dataIn.type === "email" ? "correo" : "nombre"}
                  className="h-[30px] bg-color-gris-negro border-b-[2.3px] border-rosePrimary focus:invalid:border-red-500 focus:outline-none valid:border-rosePrimary"
                  type={dataIn.type}
                  required={dataIn.required}
                  placeholder={dataIn.placeholder}
                  onChange={handlChange}
                ></input>
              </div>
            ))}
            <label className="mt-3 mb-1">Mensaje:</label>
            <textarea
              name="mensaje"
              placeholder="Déjanos un mensaje"
              required={true}
              onChange={handlChange}
              className="h-[9rem] pl-1 bg-color-gris-negro resize-none border-[2.3px] border-rosePrimary focus:border-rosePrimary rounded-md focus:invalid:border-red-500 focus:outline-none valid:border-rosePrimary"
            ></textarea>
            <button
              type="submit"
              className="text-rosePrimary w-[50%] mx-auto mt-3 px-5 py-2 rounded-md border-[3px] border-rosePrimary font-semibold"
            >
              ENVIAR
            </button>

            {message ? (
              <div
                className={`mt-3 rounded-lg cursor-pointer bg-indigoPrimary`}
              >
                <p className="text-whitePrimary font-semibold text-center py-3 px-4">
                  {message}
                </p>
              </div>
            ) : (
              <div></div>
            )}
          </div>

          <div className="pb-8 hidden xl:flex-col xl:items-end xl:flex">
            <svg
              width="102"
              height="85"
              viewBox="0 0 102 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 mb-5"
            >
              <path
                d="M99.5602 61.5192C97.6365 68.1547 94.0999 72.8777 89.3403 76.2464C84.5626 79.628 78.5275 81.6624 71.5973 82.8638C60.8342 84.7297 48.0283 84.5723 34.6012 84.4072C30.7077 84.3594 26.7619 84.3109 22.7986 84.3109C14.0669 84.3109 8.47899 82.4144 5.09136 79.3936C1.7168 76.3844 0.439398 72.181 0.502192 67.358C0.565097 62.5265 1.97462 57.1248 3.91848 51.8125C5.86048 46.5053 8.32252 41.3218 10.4674 36.9293C15.4062 26.8149 22.4991 17.715 32.7088 11.1414C42.9174 4.56851 56.2749 0.5 73.7784 0.5C82.4419 0.5 88.4736 3.46001 92.6482 8.07208C96.8385 12.7015 99.1976 19.0401 100.408 25.8539C102.826 39.4663 100.627 54.7723 99.5602 61.5192Z"
                fill="#FFA6EB"
                stroke="#FFA6EB"
              />
            </svg>

            <div className="relative mt-8">
              <Image className="z-20" src={imageContact}></Image>
              <svg
                width="374"
                height="401"
                viewBox="0 0 374 401"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 mt-auto z-10"
              >
                <path
                  d="M366.354 290.654C359.212 322.441 346.035 345.113 328.304 361.26C310.564 377.414 288.23 387.07 262.728 392.759C237.222 398.448 208.572 400.162 178.22 400.453C161.477 400.613 144.248 400.34 126.751 400.062C112.505 399.836 98.0807 399.608 83.595 399.608C51.4502 399.608 30.5965 390.636 17.8251 375.983C5.04284 361.318 0.274179 340.869 0.508168 317.746C0.976294 271.484 21.4596 214.838 37.2004 173.362C55.4047 125.394 81.5733 82.1819 119.259 50.9628C156.936 19.7508 206.156 0.5 270.521 0.5C302.58 0.5 325.06 14.6111 340.66 36.786C356.279 58.9872 365.007 89.2851 369.472 121.626C378.4 186.285 370.26 258.891 366.354 290.654Z"
                  fill="#FFA6EB"
                  stroke="#FFA6EB"
                />
              </svg>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
