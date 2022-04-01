import React, { useState } from "react";
import Link from "next/link";
import logo from "../../assets/img/logoTemporary.png";
import Image from "next/image";


const Navbar = () => {

  const [mostrar, setMostrar ] = useState(false);
  
  return (
    <nav className="w-screen z-40 flex flex-col sm:flex-row items-center justify-around sm:items-baseline text-center bg-blackPrimary">
      <Link href="/">
        <a className="hover:cursor-pointer">
          <div className="h-20 w-20">
            <Image src={logo} quality={100} alt="logo" layout="responsive" />
          </div>
        </a>
      </Link>
      <div className="hidden sm:flex text-white font-body font-bold items-center">
        <Link href="#">
          <a className="mx-3 transition-colors hover:text-orangePrimary">
            SERVICIOS
          </a>
        </Link>

        <Link href="#">
          <a className="mx-3 transition-colors  hover:text-orangePrimary">
            PROYECTOS
          </a>
        </Link>

        <Link href="/about_us">
          <a className="mx-3 transition-colors  hover:text-orangePrimary">
            NOSOTROS
          </a>
        </Link>

        <Link href="#">
          <a className="mx-3 transition-colors hover:text-orangePrimary">
            CLIENTES
          </a>
        </Link>
      </div>

        <button className="flex sm:hidden items-center h-8 w-10 text-white" onClick={() => setMostrar(!mostrar)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>

    
        {/* Nav responsive */}
        {mostrar && (
        <div className="flex sm:hidden flex-col text-white font-bold">
          <Link href="#">
            <a className="mx-3 my-2 transition-colors hover:text-orangePrimary">
              SERVICIOS
            </a>
          </Link>

          <Link href="#">
            <a className="mx-3 my-2 transition-colors  hover:text-orangePrimary">
              PROYECTOS
            </a>
          </Link>

          <Link href="/about_us">
            <a className="mx-3 my-2 transition-colors  hover:text-orangePrimary">
              NOSOTROS
            </a>
          </Link>

          <Link href="#">
            <a className="mx-3 my-2 transition-colors hover:text-orangePrimary">
              CLIENTES
            </a>
          </Link> 
          </div>
        )}
    </nav>
  );
};

export default Navbar;
