import React from "react";
import SEO from "./SEO";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ site }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full">
      <SEO site={site} />
      <nav className="bg-white text-polisBlue py-3 md:py-3  shadow-sm shadow-polisBlue">
        <div className="container px-4 mx-auto md:flex md:items-center text-sm md:text-md">
          <div className="flex justify-between items-center">
            <Link to="/" className="font-black md:mr-5" onClick={() => setIsOpen(false)}>
              <span className="font-bold text-lg">luc.com.uy</span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="border border-solid border-white px-3 py-1 rounded  opacity-50 hover:opacity-75 md:hidden"
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
              onClick={() => setIsOpen(false)}
              className="p-2 lg:px-4 md:mx-2  rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Artículos la LUC
            </Link>
            <Link
              to="/como"
              onClick={() => setIsOpen(false)}
              className="p-2 lg:px-4 md:mx-2  rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              ¿Cómo Funciona?
            </Link>
            <Link
              to="/quienes"
              onClick={() => setIsOpen(false)}
              className="p-2 lg:px-4 md:mx-2  rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              ¿Quiénes Somos?
            </Link>
            <Link
              to="/privacidad"
              onClick={() => setIsOpen(false)}
              className="p-2 lg:px-4 md:mx-2 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Privacidad y Datos
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
