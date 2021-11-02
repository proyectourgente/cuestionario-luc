import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = ({ site }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <footer className={"fixed bottom-0 w-full pt-10 shadow-sm"}>
      <nav className="bg-polisBlue py-2 md:py-3">
        <div className="container px-4 mx-auto md:flex md:items-center text-sm md:text-md lg:text-lg">
          <div className="flex justify-around items-center">
            <Link to="/" className="font-black text-white md:mr-5">
              <span className="font-regular">luc.com.uy</span>
            </Link>

            <Link to="/" className="font-black text-white">
              <span> Y VOS, ¿QUÉ PENSAS?</span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="border border-solid border-white px-3 py-1 rounded text-white opacity-50 hover:opacity-75 md:hidden"
              id="navbar-toggle"
            >
              <FaBars />
            </button>
          </div>

          <div
            className={
              "md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 text-center " +
              (isOpen ? " flex" : " hidden")
            }
            id="navbar-collapse"
          >
            <Link
              to="/articulos"
              className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Artículos la LUC
            </Link>
            <Link
              to="/como"
              className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              ¿Cómo Funciona?
            </Link>
            <Link
              to="/quienes"
              className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              ¿Quiénes Somos?
            </Link>
            <Link
              to="/datos"
              className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Privacidad y Datos
            </Link>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
