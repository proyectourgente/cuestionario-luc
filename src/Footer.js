import React from "react";
import { GiClick } from "react-icons/gi";

function Footer() {
  return (
    <footer className="mt-10 bg-polisBlue text-white font-book">
      <a className="no-underline text-white " href="https://articulos.luc.com.uy">
        <div className="mx-auto p-5 w-100 font-sans text-center flex flex-col md:flex-row justify-center align-middle">
          <h1 className="text-center text-white font-black text-xl md:text-2xl justify-center flex align-middle">
            <span className="mr-2">LUC</span>
            <span>Comparada</span>
            <GiClick className="mx-2 text-2xl mt-1 animate-bounce" />
          </h1>
          <div className="flex flex-col md:flex-row items-center mt-3 md:mt-0 text-sm md:text-lg font-sans font-medium text-center ">
            <span className="mx-auto">
              Informate de los cambios introducidos por la LUC palabra por palabra
            </span>
          </div>
        </div>
      </a>
    </footer>
  );
}

/*Footer.propTypes = {
    siteTitle: PropTypes.string,
}

Footer.defaultProps = {
    siteTitle: ``,
}*/

export default Footer;
